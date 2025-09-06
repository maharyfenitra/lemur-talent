"use client";

import styles from "./page.module.css";
import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleSubmit = (e: any) => {
    e.preventDefault();
    alert("Message envoyé ✅ (simulation)");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <>
      
      <header className={styles.hero}>
        <h1>Contactez-nous</h1>
        <p>
          Une idée ? Un projet ? <br />
          Écrivons ensemble l’avenir de la technologie.
        </p>
      </header>

      <section className={styles.contactSection}>
        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.formGroup}>
            <label htmlFor="name">Nom</label>
            <input
              type="text"
              id="name"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              
              value={form.message}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" className={styles.ctaButton}>
            Envoyer
          </button>
        </form>
      </section>
    </>
  );
}
