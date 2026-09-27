"use client";
import React, { useEffect, useRef } from "react";
import Hls from "hls.js";

interface VideoPlayerProps {
  src: string;
  poster?: string;
}

export default function VideoPlayer({ src, poster }: VideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (Hls.isSupported()) {
      const hls = new Hls({
        maxBufferLength: 30,
        enableWorker: true,
      });
      hls.loadSource(src);
      hls.attachMedia(video);
      
      return () => {
        hls.destroy();
      };
    } else if (video.canPlayType("application/vnd.apple.mpegurl")) {
      // Inasaidia vifaa vya Apple (iOS/Safari)
      video.src = src;
    }
  }, [src]);

  return (
    <div className="w-full aspect-video bg-black relative rounded-xl overflow-hidden shadow-lg shadow-black/50 border border-zinc-800">
      <video
        ref={videoRef}
        className="w-full h-full object-contain"
        controls
        autoPlay
        poster={poster}
      />
    </div>
  );
}
