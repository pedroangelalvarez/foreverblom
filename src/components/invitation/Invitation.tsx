import styles from "./invitation2.module.css";
import Head from "next/head";

export default function Invitation() {
  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Dancing+Script&family=Playfair+Display&family=Raleway:wght@400;600&display=swap"
          rel="stylesheet"
        />
      </Head>

      <div className={styles.container}>
        <div className={styles.card}>
          <img src="/flowers-top.png" alt="" className={styles.topDecoration} />
          <h1 className={styles.names}>
            Elizabeth <br /> <span className={styles.and}>y</span> <br /> Pedro
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

          <img src="/flowers-bottom.png" alt="" className={styles.bottomDecoration} />
        </div>
      </div>
    </>
  );
}