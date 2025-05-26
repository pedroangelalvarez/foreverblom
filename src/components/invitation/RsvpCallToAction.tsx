"use client";

import type { GuestData } from "@/types";
import { isRsvpExpired } from "@/lib/invitationUtils";
import { Button } from "@/components/ui/button";
import { CheckCircle, XCircle, Info } from "lucide-react";
import { SubTitle } from "@/components/ui/title";

interface RsvpCallToActionProps {
  guestData: GuestData;
}

export function RsvpCallToAction({ guestData }: RsvpCallToActionProps) {
  const expired = isRsvpExpired(guestData.expirationDate);

  const scrollToForm = () => {
    document.getElementById('rsvp-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  if (guestData.confirmation) {
    return (
      <div className="text-center my-10 p-6 bg-secondary/30 rounded-lg shadow-md animate-fadeIn animate-fadeIn-delay-2">
        <CheckCircle className="w-12 h-12 text-green-600 mx-auto mb-3" />
        <SubTitle as="p" className="!text-3xl !text-green-700">Thank You!</SubTitle>
        <p className="text-foreground/80 text-lg mt-1">Your attendance is confirmed. We are thrilled to celebrate with you!</p>
      </div>
    );
  }

  if (expired) {
    return (
      <div className="text-center my-10 p-6 bg-muted/50 rounded-lg shadow-md animate-fadeIn animate-fadeIn-delay-2">
        <XCircle className="w-12 h-12 text-destructive mx-auto mb-3" />
        <SubTitle as="p" className="!text-3xl !text-destructive">RSVP Closed</SubTitle>
        <p className="text-foreground/80 text-lg mt-1">The deadline to RSVP has passed. Please contact the couple directly if you have any questions.</p>
      </div>
    );
  }

  return (
    <div className="text-center my-10 animate-fadeIn animate-fadeIn-delay-2">
      <SubTitle as="p" className="!text-3xl mb-4">Will You Join Us?</SubTitle>
      <p className="text-foreground/70 text-lg mb-6">
        We would be honored to have you celebrate with us. Please respond by {new Date(guestData.expirationDate).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}.
      </p>
      <Button onClick={scrollToForm} size="lg" className="py-3 px-8 text-lg transform hover:scale-105 transition-transform duration-300">
        <Info className="mr-2 h-5 w-5" />
        RSVP Now
      </Button>
    </div>
  );
}
