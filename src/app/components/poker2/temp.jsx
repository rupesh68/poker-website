import { useEffect } from "react";

export default function Temp({ mediaSrc, cls }) {
  const isVideo = mediaSrc.includes(".mp4");
  useEffect(() => {
    console.log(isVideo, mediaSrc)
  }, []);
  return (
    <>
      {isVideo && <video src={mediaSrc} className={cls}
        autoPlay
        loop
        muted/>
        
        
        
        
        }
      {!isVideo && (
        <picture>
          <img src={mediaSrc} alt="img" className={cls}/>
        </picture>
      )}
    </>
  );
}
