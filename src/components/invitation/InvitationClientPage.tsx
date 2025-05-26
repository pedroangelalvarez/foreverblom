"use client";

import type { GuestData } from "@/types";
import { decodeAndVerifyJwt } from "@/lib/invitationUtils";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { ErrorDisplay } from "./ErrorDisplay";
import { WelcomeHeader } from "./WelcomeHeader";
import { WeddingInfo } from "./WeddingInfo";
import { RsvpForm } from "./RsvpForm";
import { PageFooter } from "./PageFooter";
import { RsvpCallToAction } from "./RsvpCallToAction";
import { Skeleton } from "@/components/ui/skeleton";
import Image from "next/image";

export function InvitationClientPage() {
  const searchParams = useSearchParams();
  const [guestData, setGuestData] = useState<GuestData | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = searchParams.get("id");
    if (!token) {
      setError("The invitation link is broken or invalid. Please contact the couple.");
      setLoading(false);
      return;
    }

    const data = decodeAndVerifyJwt(token);
    if (!data) {
      setError("The invitation link is broken or invalid. Please contact the couple.");
      setLoading(false);
      return;
    }
    
    setGuestData(data);
    setLoading(false);
  }, [searchParams]);

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen p-4 space-y-6">
        <Skeleton className="h-12 w-3/4 rounded-md" />
        <Skeleton className="h-8 w-1/2 rounded-md" />
        <Skeleton className="h-64 w-full max-w-2xl rounded-lg" />
        <Skeleton className="h-48 w-full max-w-md rounded-lg" />
      </div>
    );
  }

  if (error || !guestData) {
    return <ErrorDisplay message={error || "An unknown error occurred."} />;
  }
  
  // The prompt: "If the JWT is valid, it includes the guest’s first name, last name, confirmation (boolean), and expirationDate (ISO format)."
  // "Show a button to confirm attendance if confirmation is false and the expirationDate has not passed." This is handled by RsvpCallToAction
  // "Include a footer section with a thank-you message and a simple form for the guest to confirm or decline attendance." This is RsvpForm + PageFooter
  
  return (
    <main className="container mx-auto px-4 py-12 flex flex-col items-center text-center font-sans relative">
        <Image 
            src="https://placehold.co/1200x500.png" 
            alt="Floral Wedding Arch" 
            width={1200} 
            height={500} 
            className="absolute top-0 left-1/2 transform -translate-x-1/2 w-full max-w-5xl h-auto object-contain opacity-30 z-0 rounded-b-full"
            data-ai-hint="elegant white floral arch watercolor"
            priority
        />
      <div className="relative z-10 w-full max-w-3xl bg-background/80 backdrop-blur-sm p-6 sm:p-8 md:p-12 rounded-xl shadow-2xl mt-10 md:mt-20">
        <WelcomeHeader firstName={guestData.firstName} lastName={guestData.lastName} />
        <WeddingInfo />
        <RsvpCallToAction guestData={guestData} />
        <RsvpForm guestData={guestData} />
        <PageFooter />
      </div>
    </main>
  );
}
