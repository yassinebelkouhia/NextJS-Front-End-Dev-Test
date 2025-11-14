"use client";

import { motion } from "framer-motion";
import styles from "./Hero.module.scss";

export default function Hero() {
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className={styles.hero}>
      <div className={styles.overlay} />
      <div className={styles.content}>
        <motion.h1
          className={styles.title}
          initial="hidden"
          animate="visible"
          variants={textVariants}
        >
          AREAS OF EXPERTISE
        </motion.h1>
      </div>
    </section>
  );
}
