import React from "react";
import styles from "./IconSection.module.css";

const IconSection = () => (
  <div className={styles.iconSection}>
    <img src="/diamond.png" alt="Icon" className={styles.icon} />
    <h2 className={styles.heading}>Aenean vulputate quis est et pulvinar.</h2>
    <p className={styles.paragraph}>
      Maecenas dapibus turpis id purus mollis aliquam. Sed facilisis nec ipsum
      nec rutrum. Maecenas dapibus turpis id purus mollis aliquam. Sed facilisis
      nec ipsum nec rutrum. Maecenas dapibus turpis id purus mollis aliquam. Sed
      facilisis nec ipsum nec rutrum.
    </p>
    <button className={styles.button}>About</button>
  </div>
);

export default IconSection;
