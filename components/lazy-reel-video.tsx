"use client";

import { useEffect, useRef, useState } from "react";

interface LazyReelVideoProps {
  src: string;
  poster?: string; // Optional thumbnail/poster image
  className?: string;
  autoPlay?: boolean;
  loop?: boolean;
  muted?: boolean;
  playsInline?: boolean;
}

export function LazyReelVideo({
  src,
  poster,
  className = "",
  autoPlay = true,
  loop = true,
  muted = true,
  playsInline = true,
}: LazyReelVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [shouldLoad, setShouldLoad] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !shouldLoad) {
            // Start loading when near viewport (200px before)
            setShouldLoad(true);
          }
        });
      },
      { 
        rootMargin: "200px" // Start loading 200px before entering viewport
      }
    );

    observer.observe(container);

    return () => {
      observer.disconnect();
    };
  }, [shouldLoad]);

  useEffect(() => {
    if (shouldLoad && videoRef.current && autoPlay) {
      const video = videoRef.current;
      video.load(); // Explicitly load the video
      video.play().catch(() => {
        // Autoplay failed, ignore silently
      });
    }
  }, [shouldLoad, autoPlay]);

  return (
    <div ref={containerRef} className={`relative ${className}`}>
      {!shouldLoad && poster && (
        <img
          src={poster}
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
          loading="lazy"
        />
      )}
      {!shouldLoad && !poster && (
        <div className="h-full w-full bg-muted/30 animate-pulse" />
      )}
      {shouldLoad && (
        <video
          ref={videoRef}
          autoPlay={autoPlay}
          loop={loop}
          muted={muted}
          playsInline={playsInline}
          preload="none"
          className={`h-full w-full object-cover ${!isLoaded && poster ? "opacity-0" : "opacity-100"} transition-opacity duration-300`}
          onLoadedData={() => setIsLoaded(true)}
          poster={poster}
        >
          <source src={src} type="video/mp4" />
        </video>
      )}
    </div>
  );
}
