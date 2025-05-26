import { LeafIcon } from "@/components/icons/LeafIcon";

export function PageFooter() {
  return (
    <footer className="text-center mt-16 mb-8 animate-fadeIn animate-fadeIn-delay-4">
      <div className="flex justify-center items-center gap-3 mb-2">
        <LeafIcon className="w-5 h-5 text-primary opacity-60 transform rotate-[-15deg]" />
        <p className="text-lg font-cursive text-accent">Atentamente,</p>
        <LeafIcon className="w-5 h-5 text-primary opacity-60 transform rotate-[15deg] scale-x-[-1]" />
      </div>
      <p className="text-2xl font-cursive text-primary">Elizabeth &amp; Pedro</p>
      <p className="text-xs text-muted-foreground mt-6">
        Forever Bloom Invitations &copy; {new Date().getFullYear()}
      </p>
    </footer>
  );
}
