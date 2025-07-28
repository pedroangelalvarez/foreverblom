import styles from "./invitation2.module.css";
import Head from "next/head";

import type { GuestData } from "@/types";

import { useRef } from "react";
import html2canvas from "html2canvas";
import { Camera, MapPin, Utensils } from "lucide-react";

export default function Invitation({ guestData }: { guestData: GuestData | null }) {
  const captureRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const handleDownload = async () => {
    if (captureRef.current) {
      // Clonar el elemento a capturar
      const elementToCapture = captureRef.current.cloneNode(true) as HTMLElement;

      // Eliminar el botón del clon
      const buttonInClone = elementToCapture.querySelector('button');
      if (buttonInClone) {
        buttonInClone.remove();
      }

      // Añadir el clon al cuerpo del documento para que se renderice
      document.body.appendChild(elementToCapture);

      const canvas = await html2canvas(elementToCapture);
      const image = canvas.toDataURL('image/png');

      // Eliminar el clon del cuerpo del documento
      document.body.removeChild(elementToCapture);

      // Crear un enlace de descarga
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
            <MapPin className="inline-block mr-2 h-5 w-5" />
            JR. COLÓN N°744, ESQUINA CON JR. AYACUCHO, EN EL CENTRO HISTÓRICO DE TRUJILLO
          </p>

          <p className={styles.address}>
            <Utensils className="inline-block mr-2 h-5 w-5" />
            Recepción: AV. LARCO 834
          </p>

          <p className={`${styles.church} ${styles.family}`}>
            <strong>Familia:</strong> {guestData?.family || ''} ({guestData?.quantity || ''} personas)
          </p>
        <button
          ref={buttonRef}
          onClick={handleDownload}
          className="mt-4 flex items-center gap-2 px-4 py-2 text-white rounded-full mx-auto backdrop-blur-3xl border border-white/30 shadow-xl shadow-black/20 [box-shadow:inset_0_1px_1px_rgba(255,255,255,0.5)] [text-shadow:_0_1px_1px_rgba(0,0,0,0.5)]"
        >
          <Camera className="h-5 w-5 drop-shadow-md" />
          Descargar Invitacion
        </button>
          <img src="/flowers-bottom.png" alt="" className={styles.bottomDecoration} />
        </div>
       
      </div>
    </>
  );
}