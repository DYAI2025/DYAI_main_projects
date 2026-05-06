import { useEffect, useRef } from "react";
import gsap from "gsap";

export function HeroPoster() {
  const containerRef = useRef<HTMLElement>(null);
  const dyaiRef = useRef<HTMLHeadingElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        dyaiRef.current,
        { y: 100, opacity: 0, skewY: 5 },
        { y: 0, opacity: 1, skewY: 0, duration: 1.2, ease: "power4.out" }
      );
      gsap.fromTo(
        textRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 1, ease: "power2.out", delay: 0.5 }
      );
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={containerRef}
      className="relative min-h-[90vh] flex flex-col justify-center items-center px-6 md:px-10 z-10"
    >
      {/* Central Typography from Design HTML */}
      <div className="z-10 flex flex-col items-center">
        <h1 ref={dyaiRef} className="text-[120px] md:text-[200px] lg:text-[280px] leading-[0.75] font-black tracking-[-0.05em] uppercase text-white text-center">
          DYAI
        </h1>
        <div ref={textRef} className="mt-8 flex flex-col items-center">
          <h2 className="text-xl md:text-2xl font-serif italic text-muted-light tracking-wide mb-4 text-center">
            Design Your Augmented Intelligence
          </h2>
          <p className="max-w-md text-center text-[10px] md:text-[11px] leading-relaxed uppercase tracking-[0.2em] text-muted">
            Nicht künstlich. Augmentiert. 
            Systeme für Menschen, die mit KI nicht nur arbeiten, sondern neue Denkräume bauen.
            Entwicklung von AI-nativen Artefakten an der Grenze von Sprache, Entscheidung und Kosmologie.
          </p>
        </div>
      </div>

      {/* Scroll Hint (Static) */}
      <div className="absolute right-10 bottom-10 hidden md:flex items-center gap-4">
        <span className="text-[10px] uppercase tracking-[0.2em] text-muted-dark">Scroll to Discover Systems</span>
        <div className="w-px h-16 bg-gradient-to-b from-border to-accent"></div>
      </div>
    </section>
  );
}
