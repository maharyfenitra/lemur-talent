"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname(); // récupère la route actuelle

  const links = [
    { name: "Accueil", href: "/home" },
    { name: "Tarif", href: "/tarif" },
    { name: "Team", href: "/team" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>LemurTalent</div>

      <button 
        className={styles.toggle} 
        onClick={() => setOpen(!open)}
        aria-label="Toggle menu"
      >
        ☰
      </button>

      <ul className={`${styles.menu} ${open ? styles.active : ""}`}>
        {links.map((link) => (
          <li key={link.href}>
            <Link 
              href={link.href} 
              className={pathname === link.href ? styles.activeLink : ""}
              onClick={() => setOpen(false)} // ferme le menu mobile
            >
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
