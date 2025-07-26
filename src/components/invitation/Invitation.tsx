import styles from "./invitation2.module.css";
import Head from "next/head";

import type { GuestData } from "@/types";

import { useRef } from "react";
import html2canvas from "html2canvas";
import { Camera } from "lucide-react";

export default function Invitation({ guestData }: { guestData: GuestData | null }) {
  const captureRef = useRef<HTMLDivElement>(null);

  const handleDownload = async () => {
    if (captureRef.current) {
      const canvas = await html2canvas(captureRef.current);
      const image = canvas.toDataURL('image/png');

      // Crea un enlace de descarga
      const link = document.createElement('a');
      link.href = image;
      link.download = 'captura.png';
      link.click();
    }
  };

  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Dancing+Script&family=Playfair+Display&family=Raleway:wght@400;600&display=swap"
          rel="stylesheet"
        />
      </Head>

      <div className={styles.container}>
        <div className={styles.card} ref={captureRef}>
          <img src="/flowers-top.png" alt="" className={styles.topDecoration} />
          <h1 className={styles.names}>
            Elizabeth <br /> <span className={styles.names}>y</span> <br /> Pedro
          </h1>

          <p className={styles.inviteText}>
            ESTAMOS ENCANTADOS DE INVITARTE A LA CELEBRACIÓN DE NUESTRO MATRIMONIO
          </p>

          <p className={styles.church}>IGLESIA "SAN LORENZO"</p>

          <div className={styles.dateRow}>
            <span className={styles.label}>SÁBADO</span>
            <span className={styles.day}>09</span>
            <span className={styles.time}>A LAS 10:00 AM</span>
          </div>

          <p className={styles.month}>DE AGOSTO DE 2025</p>

          <p className={styles.address}>
            JR. COLÓN N°744, ESQUINA CON JR. AYACUCHO, EN EL CENTRO HISTÓRICO DE TRUJILLO
          </p>

          <p className={`${styles.text} hidden md:block`}>
            <strong>Familia:</strong> {guestData?.family || ''} ({guestData?.quantity || ''} personas)
          </p>
        <button
          onClick={handleDownload}
          className="mt-4 flex items-center gap-2 px-4 py-2 bg-[#444] text-white rounded-md mx-auto"
        >
          <Camera className="h-5 w-5" />
          Descargar Invitacion
        </button>
          <img src="/flowers-bottom.png" alt="" className={styles.bottomDecoration} />
        </div>
       
      </div>
    </>
  );
}