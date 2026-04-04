"use client";

import { useEffect, useRef } from "react";

export default function DemoWidget() {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    const iframe = iframeRef.current;
    if (!iframe) return;
    const handleLoad = () => {
      try {
        const win = iframe.contentWindow as Window & { boot?: () => void };
        win?.boot?.();
      } catch {}
    };
    iframe.addEventListener("load", handleLoad);
    return () => iframe.removeEventListener("load", handleLoad);
  }, []);

  return (
    <div
      className="relative w-full overflow-hidden rounded-2xl shadow-2xl border border-slate-200"
      style={{ aspectRatio: "16 / 9" }}
    >
      <iframe
        ref={iframeRef}
        src="/demo.html"
        className="absolute inset-0 w-full h-full"
        style={{ border: "none" }}
        title="Lookover live demo"
        scrolling="no"
        loading="eager"
      />
    </div>
  );
}
