"use client";

import type { GuestData } from "@/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useToast } from "@/hooks/use-toast";
import { submitRsvp, type RsvpFormData } from "@/app/(rsvp)/actions";
import { useState, useTransition } from "react";
import { SubTitle } from "../ui/title";
import { Loader2 } from "lucide-react";
import { isRsvpExpired } from "@/lib/invitationUtils";

const RsvpFormSchema = z.object({
  attendance: z.enum(["confirm", "decline"], {
    required_error: "Por favor, seleccione si asistirá.",
  }),
});

type RsvpFormValues = z.infer<typeof RsvpFormSchema>;

interface RsvpFormProps {
  guestData: GuestData;
}

export function RsvpForm({ guestData }: RsvpFormProps) {
  const { toast } = useToast();
  const [isPending, startTransition] = useTransition();
  const [submitted, setSubmitted] = useState(guestData.confirmation);
  const [currentRsvpStatus, setCurrentRsvpStatus] = useState<'confirm' | 'decline' | null>(
    guestData.confirmation ? 'confirm' : null // Assuming confirmation implies 'confirm'
  );


  const formExpired = isRsvpExpired(guestData.expirationDate);
  const formDisabled = submitted || (formExpired && !guestData.confirmation);

  const form = useForm<RsvpFormValues>({
    resolver: zodResolver(RsvpFormSchema),
    defaultValues: {
      attendance: guestData.confirmation ? "confirm" : undefined,
    },
    disabled: formDisabled,
  });

  function onSubmit(data: RsvpFormValues) {
    startTransition(async () => {
      const rsvpPayload: RsvpFormData = {
        ...data,
        guestFullName: `${guestData.firstName} ${guestData.lastName}`,
      };
      const result = await submitRsvp(rsvpPayload);
      if (result.success) {
        toast({
          title: "RSVP Enviado",
          description: result.message,
        });
        setSubmitted(true);
        setCurrentRsvpStatus(data.attendance);
        // Potentially update guestData.confirmation if you re-fetch or manage state higher up
      } else {
        toast({
          title: "Error",
          description: result.message,
          variant: "destructive",
        });
      }
    });
  }

  let statusMessage = null;
  if (submitted && currentRsvpStatus === 'confirm') {
    statusMessage = "Su asistencia está confirmada. ¡Estamos emocionados de verle!";
  } else if (submitted && currentRsvpStatus === 'decline') {
    statusMessage = "Hemos recibido sus disculpas. ¡Le extrañaremos!";
  } else if (formExpired && !guestData.confirmation) {
    statusMessage = "La fecha límite para confirmar ha pasado. Por favor, contacte directamente con la pareja.";
  }


  return (
    <section id="rsvp-form" className="my-12 animate-fadeIn animate-fadeIn-delay-3 py-10 bg-card/50 backdrop-blur-sm rounded-lg shadow-lg px-4 md:px-8">
      <SubTitle as="h2" className="text-center mb-8 !text-4xl">Por Favor Responda</SubTitle>
      
      {statusMessage && (
        <p className="text-center text-lg text-foreground/80 mb-6 p-4 bg-secondary/50 rounded-md">{statusMessage}</p>
      )}

      {!submitted && !(formExpired && !guestData.confirmation) && (
         <p className="text-center text-foreground/70 mb-6">
           Por favor, háganoslo saber si puede asistir antes del {new Date(guestData.expirationDate).toLocaleDateString('es-ES', { year: 'numeric', month: 'long', day: 'numeric' })}.
         </p>
      )}


      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 max-w-md mx-auto">
          <FormField
            control={form.control}
            name="attendance"
            render={({ field }) => (
              <FormItem className="space-y-3">
                <FormLabel className="text-lg text-foreground/80">¿Asistirá al evento?</FormLabel>
                <FormControl>
                  <RadioGroup
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                    className="flex flex-col sm:flex-row sm:space-x-6 space-y-2 sm:space-y-0 justify-center"
                    disabled={formDisabled || isPending}
                  >
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="confirm" id="confirm" />
                      </FormControl>
                      <FormLabel htmlFor="confirm" className="font-normal text-base text-foreground/90 cursor-pointer">
                        Acepta con Alegría
                      </FormLabel>
                    </FormItem>
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="decline" id="decline" />
                      </FormControl>
                      <FormLabel htmlFor="decline" className="font-normal text-base text-foreground/90 cursor-pointer">
                        Declina con Pesar
                      </FormLabel>
                    </FormItem>
                  </RadioGroup>
                </FormControl>
                <FormMessage className="text-center"/>
              </FormItem>
            )}
          />
          <Button type="submit" className="w-full sm:w-auto mx-auto block py-3 px-8 text-lg" size="lg" disabled={formDisabled || isPending}>
            {isPending ? <Loader2 className="mr-2 h-5 w-5 animate-spin" /> : "Enviar Respuesta"}
          </Button>
        </form>
      </Form>
    </section>
  );
}
