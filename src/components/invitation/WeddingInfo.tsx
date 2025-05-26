import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { SubTitle } from "@/components/ui/title";
import { CalendarDays, MapPin, Users, GlassWater, Info } from "lucide-react";
import Image from "next/image";

const DetailItem = ({ icon, label, value }: { icon: React.ReactNode, label: string, value: string }) => (
  <div className="flex items-start space-x-3 mb-3"> {/* Changed to items-start for better alignment with multi-line text */}
    <span className="text-primary mt-1">{icon}</span> {/* Added mt-1 for better icon alignment */}
    <div>
      <p className="font-semibold text-foreground/90">{label}</p>
      <p className="text-foreground/70">{value}</p>
    </div>
  </div>
);

export function WeddingInfo() {
  return (
    <section className="mb-12 animate-fadeIn animate-fadeIn-delay-1">
      <SubTitle as="h2" className="text-center mb-8 !text-4xl">Detalles del Evento</SubTitle>
      <Card className="bg-card/70 backdrop-blur-sm shadow-lg overflow-hidden">
        <div className="md:flex">
          <div className="md:w-1/2">
            <div className="flex items-center justify-center h-full p-4 md:p-8">
              <Image
                src="/novios.svg"
                alt="Wedding Couple Icon"
                width={300}
                height={300}
                className="w-[200px] md:w-full md:max-w-[300px] h-auto"
                priority
              />
            </div>
          </div>
          <div className="md:w-1/2">
            <CardHeader>
            </CardHeader>
            <CardContent className="space-y-6 p-6 md:p-8">
              <DetailItem icon={<CalendarDays size={28} />} label="Fecha y Hora" value="Sábado, 25 de Octubre de 2025 a las 12:00 PM" />
              <DetailItem icon={<MapPin size={28} />} label="Ubicación" value="Club de Tiro, Casa Grande" />
              <DetailItem icon={<Users size={28} />} label="Invitados Permitidos" value="Dos (2) por invitación" />
              <DetailItem icon={<GlassWater size={28} />} label="Código de Vestimenta" value="Vestimenta Formal" />
              <DetailItem icon={<Info size={28} />} label="Nota Importante" value="Por favor tomar en cuenta que esta será una celebración solo para adultos. Agradecemos su comprensión." />
            </CardContent>
          </div>
        </div>
      </Card>
    </section>
  );
}
