import { useState } from "react";
import { Project } from "../../data/projects";

export function ProjectCard({ project, index }: { project: Project; index: number }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className={`w-full border-2 border-border-dark bg-background transition-all duration-500 ease-in-out hover:border-border group ${isExpanded ? 'p-8 md:p-12' : 'p-6 md:p-8 cursor-pointer'}`}
         onClick={() => !isExpanded && setIsExpanded(true)}
    >
      {!isExpanded ? (
        // Compact View
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-1 border-r border-border-dark h-full flex items-center shrink-0">
            <span className="font-mono text-2xl font-bold text-muted">{project.number}</span>
          </div>
          <div className="md:col-span-3 aspect-[4/3] w-full overflow-hidden shrink-0 border border-border-dark relative">
             <div className="absolute inset-0 bg-background/20 group-hover:bg-transparent transition-colors z-10" />
             <img src={project.thumbnail.src} alt={project.thumbnail.alt} className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-700" />
          </div>
          <div className="md:col-span-6 flex flex-col justify-center">
            <h3 className="text-3xl md:text-5xl font-display font-black uppercase tracking-tight text-foreground mb-2 group-hover:text-accent transition-colors">{project.title}</h3>
            <span className="font-mono text-[10px] uppercase tracking-widest text-muted mb-4 block">{project.category}</span>
            <p className="text-sm font-sans text-muted-light line-clamp-2 md:line-clamp-none max-w-lg mb-6">{project.claim}</p>
            <div className="flex flex-wrap gap-2">
              {project.tags.map(t => (
                <span key={t} className="font-mono text-[9px] uppercase tracking-wider text-muted border border-border px-2 py-1">{t}</span>
              ))}
            </div>
          </div>
          <div className="md:col-span-2 flex justify-end md:justify-center">
             <button className="h-12 w-12 border border-border flex items-center justify-center text-muted hover:text-foreground hover:border-accent transition-colors focus-ring">
               <span className="sr-only">Open Project</span>
               <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path></svg>
             </button>
          </div>
        </div>
      ) : (
        // Expanded View
        <div className="flex flex-col animate-in fade-in zoom-in-95 duration-500">
           <div className="flex justify-between items-start mb-12 border-b border-border-dark pb-8">
             <div className="flex flex-col">
               <span className="font-mono text-xs uppercase tracking-widest text-accent mb-4">Project {project.number}</span>
               <h3 className="text-5xl md:text-7xl font-display font-black uppercase tracking-tight text-foreground">{project.title}</h3>
               <span className="font-mono text-sm uppercase tracking-widest text-muted mt-2">{project.category} &mdash; <span className="text-white">{project.status}</span></span>
             </div>
             <button onClick={() => setIsExpanded(false)} className="font-mono text-xs uppercase tracking-widest text-muted hover:text-white transition-colors focus-ring p-2 border border-border-dark hover:border-border">
               Close [X]
             </button>
           </div>
           
           <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
              <div className="lg:col-span-5 flex flex-col gap-8">
                 <div className="aspect-[4/3] w-full border border-border-dark overflow-hidden">
                   <img src={project.thumbnail.src} alt={project.thumbnail.alt} className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-700" />
                 </div>
                 
                 <div>
                   <h4 className="font-mono text-xs uppercase tracking-widest text-muted mb-4 border-b border-border-dark pb-2">Claim</h4>
                   <p className="text-lg font-serif italic text-foreground leading-relaxed">{project.claim}</p>
                 </div>
                 
                 <div>
                   <h4 className="font-mono text-xs uppercase tracking-widest text-muted mb-4 border-b border-border-dark pb-2">Description</h4>
                   <p className="text-sm font-sans text-muted-light leading-relaxed">{project.description}</p>
                 </div>
              </div>
              
              <div className="lg:col-span-7 flex flex-col gap-12">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                  <div>
                    <h4 className="font-mono text-xs uppercase tracking-widest text-accent mb-6 flex items-center gap-2">
                       <div className="w-1.5 h-1.5 bg-accent"></div>
                       How it works
                    </h4>
                    <ul className="flex flex-col gap-3">
                      {project.howItWorks.map((item, i) => (
                        <li key={i} className="text-sm font-sans text-muted-light flex gap-3">
                          <span className="font-mono text-muted text-xs mt-0.5">[{i+1}]</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-mono text-xs uppercase tracking-widest text-accent mb-6 flex items-center gap-2">
                       <div className="w-1.5 h-1.5 bg-accent"></div>
                       For whom
                    </h4>
                    <ul className="flex flex-col gap-3">
                      {project.forWhom.map((item, i) => (
                        <li key={i} className="text-sm font-sans text-muted-light flex gap-3 border-l border-border-dark px-3 mt-1">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 border-t border-border-dark pt-12">
                   <div>
                     <h4 className="font-mono text-xs uppercase tracking-widest text-muted mb-6">Capabilities</h4>
                     <div className="flex flex-wrap gap-2">
                        {project.capabilities.map(cap => (
                           <span key={cap} className="font-mono text-[10px] uppercase tracking-wider text-muted-light border border-border-dark px-3 py-1.5">{cap}</span>
                        ))}
                     </div>
                   </div>
                   {project.aiLayer && (
                     <div>
                       <h4 className="font-mono text-xs uppercase tracking-widest text-accent mb-6">AI Layer</h4>
                       <ul className="flex flex-col gap-3">
                        {project.aiLayer.map((item, i) => (
                          <li key={i} className="text-sm font-sans text-muted-light flex gap-3">
                            <span className="text-accent text-xs">//</span>
                            {item}
                          </li>
                        ))}
                      </ul>
                     </div>
                   )}
                </div>

                <div className="mt-8 pt-8 border-t border-border-dark">
                  <h4 className="font-mono text-xs uppercase tracking-widest text-muted mb-6">Access / Links</h4>
                  <div className="flex flex-wrap gap-4">
                    {project.links.map((link, i) => (
                       <a key={i} href={link.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-background bg-foreground hover:bg-accent hover:text-background px-4 py-3 transition-colors focus-ring">
                         {link.label}
                         {link.type === 'repo' && <span className="w-1.5 h-1.5 rounded-full bg-border-dark inline-block ml-2"></span>}
                         {link.type === 'live' && <span className="w-1.5 h-1.5 rounded-full bg-accent inline-block ml-2 animate-pulse"></span>}
                       </a>
                    ))}
                  </div>
                </div>
              </div>
           </div>
        </div>
      )}
    </div>
  );
}
