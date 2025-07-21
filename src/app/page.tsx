import { InvitationClientPage } from "@/components/invitation/InvitationClientPage";
import { ErrorDisplay } from "@/components/invitation/ErrorDisplay";
import { Suspense } from "react";
import { Skeleton } from "@/components/ui/skeleton";

// Loading component for Suspense fallback
function LoadingInvitation() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 space-y-6">
      <Skeleton className="h-12 w-3/4 rounded-md" />
      <Skeleton className="h-8 w-1/2 rounded-md" />
      <Skeleton className="h-64 w-full max-w-2xl rounded-lg" />
      <Skeleton className="h-48 w-full max-w-md rounded-lg" />
    </div>
  );
}

export default async function Home({ searchParams: searchParamsPromise }: { searchParams: Promise<{ id?: string }> }) {
  const searchParams = await searchParamsPromise;
  const id = searchParams.id;

  if (!id) {
    return <ErrorDisplay message="No se proporcionó un ID válido." />;
  }

  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/guests?id=${id}`, {
      method: 'GET',
      cache: 'no-store',
    });

    if (!response.ok) {
      throw new Error('Error en la respuesta de la API');
    }

    const data = await response.json();

    if (!data) {
      return <ErrorDisplay message="El ID proporcionado no existe en la base de datos." />;
    }

    return (
      <Suspense fallback={<LoadingInvitation />}>
        <InvitationClientPage guestData={data} />
      </Suspense>
    );
  } catch (error) {
    console.error('Error validando ID:', error);
    return <ErrorDisplay message="Ocurrió un error al validar el ID. Por favor, intenta nuevamente." />;
  }
}
