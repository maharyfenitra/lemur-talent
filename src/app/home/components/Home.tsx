
import styles from "./Home.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <header className={styles.hero}>
        <div className={styles.heroContent}>
          <h1>Bienvenue chez LemurTalent</h1>
          <p>
            Nous accompagnons les entreprises dans leur transformation digitale grâce à
            des solutions technologiques sur mesure et des talents IT qualifiés.
          </p>
          <a href="#services" className={styles.ctaButton}>
            Nos Services
          </a>
        </div>
      </header>

      <section id="services" className={styles.services}>
        <h2>Nos Services</h2>
        <div className={styles.cardContainer}>
          <div className={styles.card}>
            <h3>Développement Web</h3>
            <p>Applications web modernes, performantes et sécurisées.</p>
          </div>
          <div className={styles.card}>
            <h3>Intelligence Artificielle</h3>
            <p>Solutions IA pour optimiser vos processus et vos données.</p>
          </div>
          <div className={styles.card}>
            <h3>Consulting IT</h3>
            <p>Expertise technique pour vous guider dans vos projets IT.</p>
          </div>
        </div>
      </section>

      <section className={styles.contact}>
        <h2>Contactez-nous</h2>
        <p>
          Prêt à lancer votre projet avec LemurTalent ? <br />
          Envoyez-nous un message et notre équipe vous répondra rapidement.
        </p>
        <Link href="/contact" className={styles.ctaButton}>
          Nous Contacter
        </Link>
      </section>
    </>
  );
}
