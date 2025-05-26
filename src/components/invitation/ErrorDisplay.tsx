import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AlertTriangle } from "lucide-react";
import Image from "next/image";

interface ErrorDisplayProps {
  message: string;
}

export function ErrorDisplay({ message }: ErrorDisplayProps) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 text-center">
      <Image 
        src="https://placehold.co/600x400.png" 
        alt="Decorative Floral Arch" 
        width={600} 
        height={400} 
        className="absolute inset-0 w-full h-full object-cover opacity-20 z-0"
        data-ai-hint="elegant floral arch illustration" 
      />
      <Card className="w-full max-w-md z-10 bg-background/90 backdrop-blur-sm animate-fadeIn shadow-xl">
        <CardHeader className="items-center">
          <AlertTriangle className="w-16 h-16 text-destructive mb-4" />
          <CardTitle className="font-cursive text-destructive text-4xl">Oops!</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-lg text-foreground/80">{message}</p>
        </CardContent>
      </Card>
    </div>
  );
}
