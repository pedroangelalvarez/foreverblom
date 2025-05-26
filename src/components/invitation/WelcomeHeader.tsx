import { Title, SubTitle } from "@/components/ui/title";
import { LeafIcon } from "@/components/icons/LeafIcon";
import { WhiteFlowerIcon } from "@/components/icons/WhiteFlowerIcon";

interface WelcomeHeaderProps {
  firstName: string;
  lastName: string;
}

export function WelcomeHeader({ firstName, lastName }: WelcomeHeaderProps) {
  return (
    <div className="text-center mb-12 animate-fadeIn">
      <div className="flex justify-center items-center gap-4 mb-4">
        <LeafIcon className="w-8 h-8 text-green-600 opacity-70 transform rotate-[-30deg]" />
        <SubTitle as="p" className="text-2xl !text-foreground/80">You're invited to celebrate the wedding of</SubTitle>
        <LeafIcon className="w-8 h-8 text-green-600 opacity-70 transform rotate-[30deg] scale-x-[-1]" />
      </div>
      {/* Couple's names - Placeholder, actual names would be part of the invite content */}
      <Title as="h1" className="!text-5xl md:!text-7xl mb-2">Olivia &amp; Liam</Title>
      
      <div className="my-8 border-t border-b border-primary/30 py-6">
        <SubTitle as="p" className="text-3xl !text-accent mb-2">Dearest</SubTitle>
        <Title as="h2" className="!text-4xl md:!text-5xl">{firstName} {lastName}</Title>
      </div>

      <div className="flex justify-center items-center gap-2 mt-4">
        <WhiteFlowerIcon className="w-6 h-6 opacity-80" />
        <p className="text-foreground/70 text-lg italic">Join us for a day of love, laughter, and happily ever after.</p>
        <WhiteFlowerIcon className="w-6 h-6 opacity-80" />
      </div>
    </div>
  );
}
