import React, { useState } from "react";
import ReactPlayer from "react-player";
import styles from "./VideoSection.module.css";

const VideoSection = () => {
  const [showVideo, setShowVideo] = useState(false);

  const openVideo = () => {
    setShowVideo(true);
  };

  const closeVideo = () => {
    setShowVideo(false);
  };

  return (
    <div className={styles.videoSection}>
      <button className={styles.playButton} onClick={openVideo}></button>
      {showVideo && (
        <div className={styles.videoOverlay} onClick={closeVideo}>
          <ReactPlayer
            className={styles.video}
            url="https://youtu.be/LXb3EKWsInQ?si=JTmQ8f_QphirT4df"
            playing={showVideo}
            controls
          />
        </div>
      )}
    </div>
  );
};

export default VideoSection;
