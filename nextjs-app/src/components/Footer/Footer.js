"use client";

import { motion } from "framer-motion";
import styles from "./Footer.module.scss";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className={styles.footerContainer}>
      <div className={styles.logo}>
        <Image src="/logo.png" alt="Logo" width={100} height={100} />
        <h3>Jets & Partners</h3>
      </div>
      <div className={styles.copy}>
        <p>
          Experience isn’t claimed — it’s proven. At Jets & Partners, we’ve
          assembled a handpicked team of private aviation top performers who
          consistently rise above the rest. Their experience runs deep, their
          connections branch out, and their commitment to results is relentless.
        </p>
      </div>
      <div className={styles.siteMap}>
        <h3>Sitemap</h3>
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#services">Services</a>
        <a href="#fleet">Fleet</a>
        <a href="#blog">Blog</a>
        <a href="#Contact">Contact</a>
      </div>
      <div className={styles.office}>
        <h3>Office</h3>
        <adress>15442 Ventura Blvd, Sherman Oaks, CA 91403</adress>
        <a href="tel:+19739328950">+1 973 932 8950</a>
        <a href="tel:+14075281226">+1 407 528 1226</a>
        <a href="mailto:hello@jets.partners">hello@jets.partners</a>
      </div>
    </footer>
  );
};

export default Footer;
