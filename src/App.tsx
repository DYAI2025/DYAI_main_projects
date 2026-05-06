import { HeroPoster } from "./components/sections/HeroPoster";
import { ManifestSection } from "./components/sections/ManifestSection";
import { ProjectCardsSection } from "./components/sections/ProjectCardsSection";

export default function App() {
  return (
    <div className="bg-background text-foreground min-h-screen flex flex-col font-sans overflow-x-hidden border-8 border-border-dark relative">
      
      {/* Decorative Grid Overlay from Design HTML */}
      <div className="fixed inset-0 pointer-events-none grid grid-cols-6 grid-rows-6 opacity-[0.03] z-0">
        {Array.from({ length: 36 }).map((_, i) => (
          <div key={i} className="border border-white"></div>
        ))}
      </div>

      {/* Editorial Header */}
      <header className="w-full flex justify-between items-start p-10 border-b border-border relative z-20 bg-background/80 backdrop-blur-sm">
        <div className="flex flex-col">
          <span className="text-[10px] tracking-[0.3em] uppercase font-bold text-muted">Volume 01 / Edition 2024</span>
          <span className="text-[10px] tracking-[0.3em] uppercase font-bold text-muted">Creative Development & AI Architecture</span>
        </div>
        <div className="text-right">
          <span className="text-[10px] tracking-[0.3em] uppercase font-bold text-muted">Index — [001]</span>
        </div>
      </header>

      <main className="flex-1 flex flex-col relative z-10">
         {/* Vertical Rail Text from Design HTML applied globally to the left */}
         <div className="fixed left-6 top-1/2 -translate-y-1/2 rotate-180 z-20 hidden lg:block" style={{ writingMode: 'vertical-rl' }}>
            <span className="text-[10px] tracking-[0.5em] uppercase text-muted-dark whitespace-nowrap">ESTABLISHED IN THE AGE OF SYNTHETIC REASON</span>
         </div>
         
         <HeroPoster />
         <ManifestSection />
         <ProjectCardsSection />
      </main>

      {/* Footer Navigation / Projects */}
      <footer className="w-full grid grid-cols-1 md:grid-cols-3 border-t border-border mt-32 relative z-20 bg-background">
        <div className="p-8 border-b md:border-b-0 md:border-r border-border group">
          <span className="text-[10px] uppercase tracking-widest text-muted-dark block mb-4">Focus</span>
          <h3 className="text-lg uppercase tracking-tighter font-bold">Neural Symbiosis</h3>
          <p className="text-[10px] text-muted mt-2 uppercase">Dynamic Brand Identity & Generative Art</p>
        </div>
        <div className="p-8 border-b md:border-b-0 md:border-r border-border">
          <span className="text-[10px] uppercase tracking-widest text-muted-dark block mb-4">Architecture</span>
          <h3 className="text-lg uppercase tracking-tighter font-bold">Ethereal Grids</h3>
          <p className="text-[10px] text-muted mt-2 uppercase">Scroll-Driven Interactive Experiences</p>
        </div>
        <div className="p-8 flex flex-col justify-between">
          <div className="flex justify-between items-start mb-12 md:mb-0">
            <span className="text-[10px] uppercase tracking-widest text-muted-dark">Contact</span>
            <div className="w-2 h-2 rounded-full bg-accent animate-pulse"></div>
          </div>
          <span className="text-lg uppercase tracking-tighter font-bold text-foreground">studio@dyai.design</span>
        </div>
      </footer>
    </div>
  );
}
