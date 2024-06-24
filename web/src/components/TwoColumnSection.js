import React from "react";
import styles from "./TwoColumnSection.module.css";

const TwoColumnSection = () => (
  <div className={styles.twoColumnSection}>
    <div className={styles.leftColumn}>
      <img src="two-column.png" alt="Left" className={styles.image} />
    </div>
    <div className={styles.rightColumn}>
      <h2 className={styles.heading}>
        Usce arcu turpis, vehicula in elementum tincidunt, faucibus at ligula.
      </h2>
      <p className={styles.paragraph}>
        <b>
          Proin pharetra lectus non felis vulputate, nec commodo quam mattis.
          Donec fermentum diam eget sem placerat vestibulum. Donec consectetur
          ut leo quis feugiat.
        </b>
      </p>
      <p className={styles.paragraph2}>
        Phasellus quis dignissim lectus. Maecenas dolor ex, pulvinar in
        vestibulum eu, condimentum sit amet lacus. Fusce ex augue, facilisis ut
        ligula vitae, fringilla dictum sem. Donec tempus blandit nulla vel
        auctor.
      </p>
      <button className={styles.button}>Read about operations</button>
    </div>
  </div>
);

export default TwoColumnSection;
