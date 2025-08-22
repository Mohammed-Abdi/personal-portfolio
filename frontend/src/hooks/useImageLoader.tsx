import { useState, useEffect } from "react";

export const useImageLoader = (src: string) => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = src;

    if (img.complete) {
      setLoaded(true);
    } else {
      img.onload = () => setLoaded(true);
    }

    // Cleanup in case component unmounts before load
    return () => {
      img.onload = null;
    };
  }, [src]);

  return loaded;
};
