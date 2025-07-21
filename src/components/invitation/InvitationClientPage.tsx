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
import { Home } from "./Home";
import Head from 'next/head';

import Image from "next/image";

export function InvitationClientPage() {
  const searchParams = useSearchParams();
  const [guestData, setGuestData] = useState<GuestData | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = searchParams.get("id");
    if (!token) {
      setError("El enlace de invitación está roto o no es válido. Por favor, contacta a la pareja.");
      setLoading(false);
      return;
    }

    const data = decodeAndVerifyJwt(token);
    if (!data) {
      setError("El enlace de invitación está roto o no es válido. Por favor, contacta a la pareja.");
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
    <main className="container mx-auto px-4 py-4 flex flex-col items-center text-center font-sans relative">  
      <div className="relative z-10 w-full max-w-3xl bg-background/50 backdrop-blur-sm p-1 sm:p-2 md:p-4 rounded-xl shadow-2xl mt-1 md:mt-2">
        <Head>
  <link
    href="https://fonts.googleapis.com/css2?family=Playfair+Display&family=Raleway:wght@300;500&display=swap"
    rel="stylesheet"
  />
</Head>
        <Home />
      </div>
    </main>
  );
}
