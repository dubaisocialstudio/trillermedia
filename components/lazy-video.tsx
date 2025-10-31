"use client";

import { useEffect, useRef, useState } from "react";

interface LazyVideoProps {
  src: string;
  className?: string;
  autoPlay?: boolean;
  loop?: boolean;
  muted?: boolean;
  playsInline?: boolean;
  onMouseEnter?: (e: React.MouseEvent<HTMLVideoElement>) => void;
  onMouseLeave?: (e: React.MouseEvent<HTMLVideoElement>) => void;
}

export function LazyVideo({
  src,
  className,
  autoPlay = true,
  loop = true,
  muted = true,
  playsInline = true,
  onMouseEnter,
  onMouseLeave,
}: LazyVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [shouldLoad, setShouldLoad] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setShouldLoad(true);
            if (autoPlay && video) {
              video.play().catch(() => {
                // Autoplay failed, ignore
              });
            }
          }
        });
      },
      { rootMargin: "100px" }
    );

    observer.observe(video);

    return () => {
      observer.disconnect();
    };
  }, [autoPlay]);

  return (
    <video
      ref={videoRef}
      loop={loop}
      muted={muted}
      playsInline={playsInline}
      preload="none"
      className={className}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {shouldLoad && <source src={src} type="video/mp4" />}
    </video>
  );
}

