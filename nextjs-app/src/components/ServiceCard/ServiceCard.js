"use client";

import { motion } from "framer-motion";
import styles from "./ServiceCard.module.scss";
import Image from "next/image";
const MotionImage = motion(Image);

const ServiceCard = ({ title, description, serviceImage, isReversed }) => {
  return (
    <div className={`${styles.content} ${isReversed ? styles.reversed : ""}`}>
      <div className={styles.serviceDataAndCta}>
        <MotionImage
          initial={{
            x: 0,
            rotate: isReversed ? 6 : -6,
          }}
          whileInView={{
            x: isReversed ? 750 : -400,
          }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
          }}
          className={styles.serviceImage}
          src={serviceImage}
          alt="Service Image"
          width={500}
          height={100}
        />
        <MotionImage
          initial={{
            x: 0,
            rotate: isReversed ? -6 : 6,
          }}
          whileInView={{
            x: isReversed ? -550 : 550,
          }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
          }}
          className={styles.servicePlain}
          src={isReversed ? "/plainLeft.png" : "/plainRight.png"}
          alt="Flying Plain"
          width={600}
          height={100}
        />
        <h2 style={isReversed ? { color: "white" } : {}}>{title}</h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
          }}
        >
          {description}
        </motion.p>
        <motion.button
          whileHover={{
            y: 4,
            transition: { duration: 0.2 }, // Make the transition quick
          }}
        >
          Discover More &rarr;
        </motion.button>
        <Image src="/logo.png" alt="Logo" width={100} height={100} />
      </div>
    </div>
  );
};

export default ServiceCard;
