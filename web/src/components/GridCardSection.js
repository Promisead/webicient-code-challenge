import React, { useState } from "react";
import styles from "./GridCardSection.module.css";

const GridComponent = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div className={styles.gridContainer}>
      <div className={styles.overlay}>
        <div
          className={styles.gridItem}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <img
            src="/plusIcon.svg"
            alt="Plus Icon"
            className={styles.plusIcon}
          />
          {isHovered && (
            <img
              src="/FilledPlusIcon.svg"
              alt="Filled Plus Icon"
              className={styles.filledPlusIcon}
            />
          )}
        </div>
        <div
          className={styles.gridItem}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <img
            src="/plusIcon.svg"
            alt="Plus Icon"
            className={styles.plusIcon}
          />
          {isHovered && (
            <img
              src="/FilledPlusIcon.svg"
              alt="Filled Plus Icon"
              className={styles.filledPlusIcon}
            />
          )}
        </div>
        <div
          className={styles.gridItem}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <img
            src="/plusIcon.svg"
            alt="Plus Icon"
            className={styles.plusIcon}
          />
          {isHovered && (
            <img
              src="/FilledPlusIcon.svg"
              alt="Filled Plus Icon"
              className={styles.filledPlusIcon}
            />
          )}
        </div>
        <div
          className={styles.gridItem}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <img
            src="/plusIcon.svg"
            alt="Plus Icon"
            className={styles.plusIcon}
          />
          {isHovered && (
            <img
              src="/FilledPlusIcon.svg"
              alt="Filled Plus Icon"
              className={styles.filledPlusIcon}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default GridComponent;
