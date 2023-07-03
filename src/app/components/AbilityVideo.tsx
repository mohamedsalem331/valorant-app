"use client";

import { useEffect, useRef, useState } from "react";

interface IAbilityVideoProps {
  videoUrl: string;
}

const AbilityVideo: React.FC<IAbilityVideoProps> = ({ videoUrl }) => {
  // const videoRef = useRef(null);
  // const [isPlaying, setIsPlaying] = useState(false);

  // useEffect(() => {
  //   if (videoRef.current) {
  //     videoRef.current.load();
  //     if (isPlaying) {
  //       videoRef.current.play();
  //     }
  //   }
  // }, [videoUrl]);

  return (
    <>
      <div className="">
        <video
          src={videoUrl}
          autoPlay
          preload="true"
          loop
          muted
          width="750"
          height="500"
        />
      </div>
    </>
  );
};

export default AbilityVideo;
