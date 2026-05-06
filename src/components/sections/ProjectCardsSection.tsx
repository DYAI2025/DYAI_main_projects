import { useState, useRef, useEffect } from "react";
import { projects, Project } from "../../data/projects";
import { ProjectCard } from "./ProjectCard";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function ProjectCardsSection() {
  const containerRef = useRef<HTMLElement>(null);
  const scrollWrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // If not mobile, let's just do a basic fade in for now to not overcomplicate GSAP timeline in sandbox
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".project-card-anim",
        { y: 50, opacity: 0 },
        { 
          y: 0, 
          opacity: 1, 
          stagger: 0.1, 
          duration: 0.8, 
          ease: "power2.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
            end: "bottom 20%",
          }
        }
      );
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} id="projects" className="py-32 px-6 md:px-12 lg:px-24 bg-surface relative z-10 border-t border-border">
      {/* Background Typography */}
      <div className="absolute top-0 left-0 w-full overflow-hidden pointer-events-none select-none opacity-[0.02] z-0 leading-none">
        <span className="text-[30vw] font-display font-black tracking-tighter whitespace-nowrap">SYSTEMS</span>
      </div>

      <div className="max-w-[1400px] mx-auto relative z-10 flex flex-col items-center">
        <div className="text-center mb-24 max-w-3xl border-b border-border pb-16">
          <h2 className="text-4xl md:text-6xl font-display font-black tracking-tighter mb-8 text-foreground uppercase">
            Keine Theorie.<br/>
            <span className="text-muted-light">Systeme, die bereits arbeiten.</span>
          </h2>
          <p className="max-w-md mx-auto text-center text-[10px] md:text-[11px] leading-relaxed uppercase tracking-[0.2em] text-muted mb-8">
            DYAI baut konkrete Artefakte an der Grenze von Mensch und KI:
            Apps, APIs, Dashboards, semantische Speicher, Beziehungswerkzeuge und autonome Agenten-Meshes.
            Jede Karte öffnet ein Projekt, ein Repository oder ein lebendes System.
          </p>
          <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent border border-accent/30 px-6 py-3 inline-block">
            Open the card. Follow the repo. Read the system.
          </span>
        </div>

        <div className="w-full flex flex-col gap-12" ref={scrollWrapperRef}>
          {projects.map((p, index) => (
            <div key={p.id} className="project-card-anim w-full">
              <ProjectCard project={p} index={index} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
