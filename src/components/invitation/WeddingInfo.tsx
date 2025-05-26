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
      <SubTitle as="h2" className="text-center mb-8 !text-4xl">Event Details</SubTitle>
      <Card className="bg-card/70 backdrop-blur-sm shadow-lg overflow-hidden">
        <div className="md:flex">
          <div className="md:w-1/2">
            <Image 
              src="https://placehold.co/600x400.png" 
              alt="Club Gema" 
              width={600} 
              height={400} 
              className="object-cover w-full h-full"
              data-ai-hint="romantic wedding venue" 
            />
          </div>
          <div className="md:w-1/2">
            <CardHeader>
              {/* Optional title inside card */}
            </CardHeader>
            <CardContent className="space-y-6 p-6 md:p-8">
              <DetailItem icon={<CalendarDays size={28} />} label="Date & Time" value="Saturday, October 25, 2025 at 4:00 PM" />
              <DetailItem icon={<MapPin size={28} />} label="Location" value="Club Gema, Willow Creek" />
              <DetailItem icon={<Users size={28} />} label="Guests Allowed" value="Two (2) per invitation" />
              <DetailItem icon={<GlassWater size={28} />} label="Dress Code" value="Formal Attire, Garden Party Chic" />
              <DetailItem icon={<Info size={28} />} label="Important Note" value="Kindly note, this will be an adults-only celebration. We appreciate your understanding." />
            </CardContent>
          </div>
        </div>
      </Card>
    </section>
  );
}
