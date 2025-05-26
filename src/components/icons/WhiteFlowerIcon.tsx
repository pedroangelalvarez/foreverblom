import type { SVGProps } from 'react';

export function WhiteFlowerIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width="24" 
      height="24" 
      viewBox="0 0 24 24" 
      fill="white" // Predominantly white flowers
      stroke="hsl(var(--primary))" // Soft rose outline
      strokeWidth="1" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      {...props}
    >
      <path d="M12 17.697c-2.161 0-4.136-1.033-5.443-2.884a5.704 5.704 0 01-.497-6.016C7.146 6.94 9.438 6 12 6s4.854.94 5.94 2.797a5.704 5.704 0 01-.497 6.016c-1.307 1.851-3.282 2.884-5.443 2.884z"/>
      <path d="M12 6V2"/>
      <path d="M12 22v-4.303"/>
      <path d="M17.697 12H22"/>
      <path d="M6 12H2"/>
      <path d="M15.536 8.464l2.828-2.828"/>
      <path d="M5.636 18.364l2.828-2.828"/>
      <path d="M15.536 15.536l2.828 2.828"/>
      <path d="M5.636 5.636l2.828 2.828"/>
    </svg>
  );
}
