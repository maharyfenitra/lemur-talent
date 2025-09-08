
import styles from "./page.module.css";

export default function Service() {
  const services = [
  {
    title: "Profils Entreprise",
    description: "Accompagnement complet en gestion, contrôle de gestion et support administratif pour vos projets.",
    price: "50 à 100 € / jour",
    features: [
      "Assistant de gestion",
      "Contrôle de gestion",
      "Support administratif",
      "Expert-comptable",
    ],
  },
  {
    title: "Profils IT",
    description: "Experts IT qualifiés pour vos projets d'externalisation et votre transformation digitale.",
    price: "100 à 200 € / jour selon expérience",
    features: [
      "Développement web et mobile",
      "Maintenance IT",
      "Data et Intelligence Artificielle",
      "Product Owner",
    ],
  },
];
  return (
    <>
      <header className={styles.hero}>
        <h1>Nos Tarifs</h1>
        <p>
          Chez LemurTalent, nous mettons à votre disposition les meilleurs profils IT de Madagascar
          pour vos projets d’externalisation et de développement.
        </p>
      </header>

      <section className={styles.servicesSection}>
        <div className={styles.servicesContainer}>
          {services.map((service, index) => (
            <div key={index} className={styles.card}>
              <h3>{service.title}</h3>
              <p className={styles.description}>{service.description}</p>
              <p className={styles.price}>Tarif : {service.price}</p>
              <ul>
                {service.features.map((feature, idx) => (
                  <li key={idx}>{feature}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
