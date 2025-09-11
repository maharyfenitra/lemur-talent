
import Image from "next/image";
import styles from "./page.module.css";

export default function Team() {
  const members = [

  {
    name: "Mahary Rafanomezana",
    role: "Business Developer & Co-fondateur",
    photo: "/img/mahary.png",
  },
  {
    name: "Jean Rakotoariso",
    role: "CTO & Co-fondateur",
    photo: "/img/jean.jpg",
  },
  {
    name: "Fredo Andrianarivo",
    role: "Lead Developer & Co-fondateur",
    photo: "/img/fredo.jpg",
  }

    /*
    {
      name: "Lina Andrianarivo",
      role: "CTO",
      photo: "https://placehold.co/400x400",
    },
    {
      name: "Rivo Rakoto",
      role: "Lead Developer",
      photo: "https://placehold.co/400x400",
    },
    {
      name: "Miora Randri",
      role: "Designer UI/UX",
      photo: "https://placehold.co/400x400",
    },
    {
      name: "Tiana Rasolo",
      role: "Data Scientist",
      photo: "https://placehold.co/400x400",
    },*/
  ];

  return (
    <>
    

      <header className={styles.hero}>
        <h1>Rencontrez notre équipe</h1>
        <p>
          Derrière LemurTalent, des experts passionnés qui transforment vos idées en solutions technologiques innovantes.
        </p>
      </header>

      <section className={styles.teamSection}>
        <div className={styles.teamContainer}>
          {members.map((member, index) => (
            <div key={index} className={styles.card}>
              <Image src={member.photo} alt={member.name}  
  width={200} 
  height={200}  />
              <h3>{member.name}</h3>
              <p>{member.role}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
