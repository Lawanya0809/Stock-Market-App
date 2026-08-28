'use client';
import { useEffect, useRef } from 'react';

const useTradingViewWidgets = (
  scriptUrl: string,
  config: Record<string, unknown>,
  height = 600,
) => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container || container.dataset.loaded) return;

    const script = document.createElement('script');
    script.src = scriptUrl;
    script.type = 'text/javascript';
    script.async = true;
    script.innerHTML = JSON.stringify(config);
    container.appendChild(script);
    container.dataset.loaded = 'true';
  }, [scriptUrl, config, height]);

  return containerRef;
};

export default useTradingViewWidgets;
