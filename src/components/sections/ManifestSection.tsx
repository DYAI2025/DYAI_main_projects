import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function ManifestSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Very simple scroll trigger for the text
      gsap.fromTo(
        textRef.current,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
            end: "bottom 25%",
            toggleActions: "play none none reverse"
          }
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={sectionRef} 
      className="py-32 md:py-48 px-6 md:px-12 lg:px-24 bg-surface relative z-10"
    >
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">
        <div className="md:col-span-4 lg:col-span-3">
          <span className="font-mono text-xs uppercase tracking-widest text-muted block mb-4 border-t border-border pt-4">
            02 // The Manifesto
          </span>
        </div>
        
        <div ref={textRef} className="md:col-span-8 lg:col-span-7 lg:col-start-5">
          <h2 className="text-3xl md:text-5xl lg:text-7xl font-display font-black tracking-tighter mb-8 text-foreground leading-[0.9] uppercase">
            Die Revolution ist <br className="hidden md:block" />
            <span className="italic font-serif font-light text-muted-light tracking-normal lowercase">psychologisch</span>,<br className="hidden md:block" />
            nicht technologisch.
          </h2>
          
          <div className="space-y-6 text-base md:text-lg text-muted max-w-2xl font-sans">
            <p>
              KI ver&auml;ndert nicht nur Tools. Sie ver&auml;ndert Selbstbilder, Entscheidungsr&auml;ume, 
              Beziehungen, Organisationen und die Art, wie Menschen Bedeutung herstellen.
            </p>
            <p>
              DYAI baut Systeme, die diese Ver&auml;nderung nicht verdecken, sondern sichtbar, 
              gestaltbar und nutzbar machen.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
