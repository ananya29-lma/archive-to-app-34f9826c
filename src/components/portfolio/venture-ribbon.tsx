import { useEffect, useRef } from "react";

// Original, continuous ribbon paths; decorative only, never above venture content.
export function VentureRibbon() {
  const ref = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const svg = ref.current;
    if (!svg) return;
    const observer = new IntersectionObserver(([entry]) => {
      svg.dataset["active"] = String(entry?.isIntersecting ?? false);
    });
    observer.observe(svg);
    return () => observer.disconnect();
  }, []);

  return (
    <svg
      ref={ref}
      className="venture-ribbon"
      viewBox="0 0 1440 900"
      preserveAspectRatio="none"
      aria-hidden="true"
      focusable="false"
      data-active="false"
    >
      <g className="venture-ribbon-main">
        <path
          className="venture-ribbon-halo"
          pathLength="1000"
          d="M -160 650 C 90 860 320 760 400 525 C 480 290 275 160 480 100 C 700 35 790 320 1030 255 C 1270 190 1160 655 1600 430"
        />
        <path
          className="venture-ribbon-core"
          pathLength="1000"
          d="M -160 650 C 90 860 320 760 400 525 C 480 290 275 160 480 100 C 700 35 790 320 1030 255 C 1270 190 1160 655 1600 430"
        />
      </g>
      <path
        className="venture-ribbon-echo"
        pathLength="1000"
        d="M -120 720 C 200 505 240 855 560 760 C 850 675 695 435 920 395 C 1190 345 1150 95 1580 150"
      />
    </svg>
  );
}