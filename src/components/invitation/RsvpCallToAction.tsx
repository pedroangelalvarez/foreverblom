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
        <SubTitle as="h3" className="!text-3xl !text-green-700">¡Gracias!</SubTitle>
        <p className="text-foreground/80 text-lg mt-1">Tu asistencia está confirmada. ¡Estamos emocionados de celebrar contigo!</p>
      </div>
    );
  }

  if (expired) {
    return (
      <div className="text-center my-10 p-6 bg-muted/50 rounded-lg shadow-md animate-fadeIn animate-fadeIn-delay-2">
        <XCircle className="w-12 h-12 text-destructive mx-auto mb-3" />
        <SubTitle as="h3" className="!text-3xl !text-destructive">RSVP Cerrado</SubTitle>
        <p className="text-foreground/80 text-lg mt-1">El plazo para confirmar la asistencia ha terminado. Por favor, contacta directamente con la pareja si tienes alguna pregunta.</p>
      </div>
    );
  }

  return (
    <div className="text-center my-10 animate-fadeIn animate-fadeIn-delay-2">
      <SubTitle as="p" className="!text-3xl mb-4">¿Nos Acompañarás?</SubTitle>
      <p className="text-foreground/70 text-lg mb-6">
        Nos sentiríamos honrados de que celebres con nosotros. Por favor responde antes del {new Date(guestData.expirationDate).toLocaleDateString('es-ES', { year: 'numeric', month: 'long', day: 'numeric' })}.
      </p>
      <Button onClick={scrollToForm} size="lg" className="py-3 px-8 text-lg transform hover:scale-105 transition-transform duration-300">
        <Info className="mr-2 h-5 w-5" />
        Confirmar Asistencia
      </Button>
    </div>
  );
}
