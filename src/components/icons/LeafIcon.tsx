import type { SVGProps } from 'react';

export function LeafIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M11 20A7 7 0 0 1 4 13V8a5 5 0 0 1 5-5h2" />
      <path d="M4 13a4 4 0 0 0 4 4h4" />
      <path d="M15 4a4 4 0 0 0-4 4v5" />
      <path d="M11 20a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2" />
    </svg>
  );
}
