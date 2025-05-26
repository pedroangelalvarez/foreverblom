import { InvitationClientPage } from "@/components/invitation/InvitationClientPage";
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

export default function Home() {
  return (
    <Suspense fallback={<LoadingInvitation />}>
      <InvitationClientPage />
    </Suspense>
  );
}
