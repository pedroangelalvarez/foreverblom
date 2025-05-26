import { Title, SubTitle } from "@/components/ui/title";
import { LeafIcon } from "@/components/icons/LeafIcon";
import { WhiteFlowerIcon } from "@/components/icons/WhiteFlowerIcon";

interface WelcomeHeaderProps {
  firstName: string;
  lastName: string;
  genre: string;
}

export function WelcomeHeader({ firstName, lastName, genre }: WelcomeHeaderProps) {
  return (
    <div className="text-center mb-12 animate-fadeIn font-cormorant">
      <div className="flex justify-center items-center gap-4 mb-4">
        <LeafIcon className="w-8 h-8 text-blue-400 opacity-70 transform rotate-[-30deg]" />
        <SubTitle as="p" className="text-2xl !text-blue-900/80 font-light">Estás invitado a celebrar la boda de</SubTitle>
        <LeafIcon className="w-8 h-8 text-blue-400 opacity-70 transform rotate-[30deg] scale-x-[-1]" />
      </div>
      <Title as="h1" className="!text-5xl md:!text-7xl mb-2 text-blue-800 font-cursive italic">Elizabeth & Pedro</Title>
      
      <div className="my-8 border-t border-b border-blue-300/30 py-6">
        <SubTitle as="p" className="text-3xl !text-blue-700 mb-2">{genre === "Femenino" ? "Estimada" : "Estimado"}</SubTitle>
        <Title as="h2" className="!text-4xl md:!text-5xl text-blue-800">{firstName} {lastName}</Title>
      </div>

      <div className="flex justify-center items-center gap-2 mt-4">
        <WhiteFlowerIcon className="w-6 h-6 text-blue-400 opacity-80" />
        <p className="text-blue-700/70 text-lg italic font-light">Acompáñanos en un día de amor, risas y felicidad para siempre.</p>
        <WhiteFlowerIcon className="w-6 h-6 text-blue-400 opacity-80" />
      </div>
    </div>
  );
}
