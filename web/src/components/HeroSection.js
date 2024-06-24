import React from "react";
import styles from "./HeroSection.module.css";

const HeroSection = () => (
  <div className={styles.heroSection}>
    <div className={styles.heroContent}>
      <h1 className={styles.title}>Lorem ipsum dolor sit amet, consec</h1>
      <p className={styles.paragraph}>
        Aliquam eu malesuada turpis, eu interdum nibh. Etiam tristique erat in
        ligula consequat malesuada. Praesent posuere vestibulum neque ac
        posuere.
      </p>
    </div>
  </div>
);

export default HeroSection;
