"use client";

import { useEffect, useRef, useState } from "react";

// Global state to track loading order
let videoLoadQueue: Set<number> = new Set();
let currentLoadingVideo: number | null = null;
const videoLoadedCallbacks: Map<number, () => void> = new Map();

interface LazyReelVideoProps {
  src: string;
  className?: string;
  autoPlay?: boolean;
  loop?: boolean;
  muted?: boolean;
  playsInline?: boolean;
  loadOrder?: number; // Order in which to load (1, 2, 3, etc.)
}

export function LazyReelVideo({
  src,
  className = "",
  autoPlay = true,
  loop = true,
  muted = true,
  playsInline = true,
  loadOrder = 0,
}: LazyReelVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [shouldLoad, setShouldLoad] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Load videos sequentially immediately after page load
    const checkIfCanLoad = () => {
      // First video can load immediately
      if (loadOrder === 1) {
        if (!videoLoadQueue.has(1)) {
          setShouldLoad(true);
          currentLoadingVideo = 1;
          videoLoadQueue.add(1);
        }
      } else {
        // Check if previous video is loaded
        const prevLoaded = !videoLoadQueue.has(loadOrder - 1) && currentLoadingVideo !== (loadOrder - 1);
        if (prevLoaded && currentLoadingVideo === null) {
          setShouldLoad(true);
          currentLoadingVideo = loadOrder;
          videoLoadQueue.add(loadOrder);
        } else {
          // Register callback for when previous video loads
          videoLoadedCallbacks.set(loadOrder - 1, () => {
            if (currentLoadingVideo === null) {
              setShouldLoad(true);
              currentLoadingVideo = loadOrder;
              videoLoadQueue.add(loadOrder);
            }
          });
        }
      }
    };

    // Small delay to ensure component is mounted, then check
    const timer = setTimeout(() => {
      checkIfCanLoad();
    }, 100);

    return () => clearTimeout(timer);
  }, [loadOrder]);

  useEffect(() => {
    if (shouldLoad && videoRef.current) {
      const video = videoRef.current;
      video.load();
      if (autoPlay) {
        video.play().catch(() => {
          // Autoplay failed, ignore silently
        });
      }
    }
  }, [shouldLoad, autoPlay]);

  const handleLoadedData = () => {
    setIsLoaded(true);
    // Mark this video as loaded and trigger next video
    videoLoadQueue.delete(loadOrder);
    currentLoadingVideo = null;
    
    // Trigger next video if it's waiting
    const nextCallback = videoLoadedCallbacks.get(loadOrder);
    if (nextCallback) {
      nextCallback();
      videoLoadedCallbacks.delete(loadOrder);
    }
  };

  return (
    <div ref={containerRef} className={`relative w-full h-full ${className}`}>
      {!isLoaded && (
        <div className="absolute inset-0 h-full w-full bg-muted/10" />
      )}
      <video
        ref={videoRef}
        autoPlay={shouldLoad && autoPlay ? autoPlay : false}
        loop={loop}
        muted={muted}
        playsInline={playsInline}
        preload={shouldLoad ? "auto" : "none"}
        className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${isLoaded ? "opacity-100" : "opacity-0"}`}
        onLoadedData={handleLoadedData}
      >
        {shouldLoad && <source src={src} type="video/mp4" />}
      </video>
    </div>
  );
}
