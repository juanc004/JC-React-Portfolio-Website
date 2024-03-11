import React, { useState } from 'react';
import styles from './Contact.module.css';

export default function Contact () {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Implement your form submission logic here
    console.log('Submitted:', { email, message });
  };

  return (
    <section id="contact" className={styles.contactSection}>
    <div className={styles.contactHeader}>
        <hr className={styles.divider} />
        <h1 className={styles.sectionTitle}>CONTACT ME</h1>
        <hr className={styles.divider} />
      <form onSubmit={handleSubmit} className={styles.contactForm}>
        <h2 className={styles.formTitle}>Say Hello</h2>
        <div className={styles.inputGroup}>
          <input
            type="email"
            placeholder="Your email"
            className={styles.formInput}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className={styles.inputGroup}>
          <textarea
            placeholder="Message"
            className={styles.formInput}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
        </div>
        <button type="submit" className={styles.submitButton}>
          Send message
        </button>
      </form>
      </div>
    </section>
  );
}
