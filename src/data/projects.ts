export type Project = {
  id: string;
  number: string;
  title: string;
  category: string;
  status: string;
  claim: string;
  description: string;
  howItWorks: string[];
  forWhom: string[];
  capabilities: string[];
  aiLayer?: string[];
  links: {
    label: string;
    url: string;
    type: "repo" | "live" | "docs" | "dashboard" | "subrepo";
  }[];
  tags: string[];
  thumbnail: {
    src: string;
    alt: string;
    generationPrompt: string;
  };
};

export const projects: Project[] = [
  {
    id: "bazodiac",
    number: "01",
    title: "Bazodiac",
    category: "Fusion Astrology - Identity System",
    status: "Live / Product System",
    claim: "Ein kosmologisches Identitaetsobjekt aus Western Astrology, BaZi, Wu-Xing und persoenlichen Signalen.",
    description: "Bazodiac kombiniert westliche Astrologie, chinesische BaZi-Four-Pillars, Wu-Xing-Elementlogik und moderne Personality-Signale zu einem persoenlichen Fusion Ring. Die App ist keine klassische Horoscope-App, sondern ein visuelles und semantisches Reflexionssystem. Der Ring wird aus mehreren Datenquellen berechnet, interpretiert und als lebendes Identitaetsobjekt dargestellt.",
    howItWorks: [
      "Nutzer geben Geburtsdatum, Uhrzeit und Ort ein.",
      "Das System berechnet BaZi, Western Chart, Wu-Xing, Fusion und zeitbezogene Signale.",
      "Aus den Ergebnissen entsteht ein 12-Sektor-Fusion-Ring.",
      "KI erzeugt eine persoenliche Interpretation.",
      "Ein Voice-Agent kann den Ring dialogisch erklaeren."
    ],
    forWhom: [
      "Menschen, die Astrologie als Reflexionssystem statt als banales Tageshoroskop nutzen.",
      "Spirituell-technische Zielgruppen im deutschsprachigen Markt.",
      "Creator, Coaches und Nutzer, die persoenliche Muster visuell und semantisch erkunden wollen."
    ],
    capabilities: [
      "Western Astrology",
      "Chinese BaZi / Four Pillars",
      "Wu-Xing Elementlogik",
      "Fusion Ring",
      "Gemini Interpretation",
      "Supabase Persistenz",
      "Stripe Premium Flow",
      "ElevenLabs Voice Agent"
    ],
    aiLayer: [
      "Gemini erzeugt personalisierte Interpretationen.",
      "ElevenLabs Voice Agent ermoeglicht dialogische Deutung.",
      "Quiz- und Profilsignale koennen den Ring semantisch schaerfen."
    ],
    links: [
      { label: "GitHub Repository", url: "https://github.com/DYAI2025/Astro-Noctum.git", type: "repo" },
      { label: "Live Website", url: "https://bazodiac.space", type: "live" }
    ],
    tags: ["Fusion Ring", "BaZi", "Wu-Xing", "Gemini", "Voice Agent"],
    thumbnail: {
      src: "https://picsum.photos/seed/bazodiac/800/450?blur=4",
      alt: "Bazodiac Fusion Ring als dunkles kosmologisches Interface mit zwoelf radialen Sektoren.",
      generationPrompt: "Dark luxury cosmic interface, 12-sector radial Fusion Ring, Western zodiac geometry, Chinese BaZi pillar marks, Wu-Xing elemental traces, luminous cyan, violet and gold accents, cinematic black background, high-end tech mysticism, no people, no copied logos, editorial project thumbnail."
    }
  },
  {
    id: "fufire-api",
    number: "02",
    title: "FuFirE API",
    category: "Deterministic Astrology Engine - API Layer",
    status: "API / Engine",
    claim: "Die Berechnungsmaschine hinter kosmologischen Produkten: deterministisch, testbar, API-first.",
    description: "FuFirE steht fuer Fusion Firmament Engine. Die API berechnet BaZi, Western Astrology, Wu-Xing, True Solar Time, Transits und Fusion-Signale. Sie ist als technische Infrastruktur gedacht: gleiche Eingabe, gleiches Ergebnis, saubere API-Endpunkte, validierbare Contracts und nutzbar als Backend fuer Produkte wie Bazodiac.",
    howItWorks: [
      "Ein Client sendet Datum, Uhrzeit, Zeitzone, Laengen- und Breitengrad.",
      "Die API verarbeitet Zeitlogik, Solargrenzen und Standortdaten.",
      "BaZi-, Western- und Wu-Xing-Schichten werden berechnet.",
      "Fusion-Endpunkte uebersetzen mehrere Systeme in gemeinsame Signale.",
      "Transit-Endpunkte liefern aktuelle oder vorausberechnete Planetendaten.",
      "Validation-Endpunkte pruefen Engine-Konfigurationen gegen definierte Contracts."
    ],
    forWhom: [
      "Astro-Produkte und Reflexionsapps.",
      "Research-Dashboards und Coaching-Systeme.",
      "Kalender-, Transit- oder Elementdaten-basierte Anwendungen.",
      "KI-Systeme, die strukturierte Berechnungsdaten fuer Interpretationen brauchen."
    ],
    capabilities: [
      "BaZi-Berechnung",
      "Western Chart",
      "Wu-Xing-Vektor",
      "Fusion-Analyse",
      "True Solar Time",
      "Live-Transits",
      "Transit Timeline",
      "OpenAPI Dokumentation",
      "Contract Validation"
    ],
    aiLayer: [
      "Die API selbst ist deterministische Infrastruktur.",
      "KI-Systeme koennen die Outputs fuer Interpretationen, Tagesimpulse, Reports, Coaching-Fragen oder Visualisierungen nutzen.",
      "Moegliche weitere Nutzung: Kompatibilitaets-Engines, Kalenderimpulse, generative Reports, personalisierte Dashboards."
    ],
    links: [
      { label: "GitHub Repository", url: "https://github.com/DYAI2025/FuFirE.git", type: "repo" },
      { label: "API Docs", url: "https://bafe-production.up.railway.app/docs#/", type: "docs" }
    ],
    tags: ["API", "BaZi", "Ephemeris", "OpenAPI", "Transits"],
    thumbnail: {
      src: "https://picsum.photos/seed/fufire/800/450?blur=4",
      alt: "FuFirE API als technisches Ephemeris-Interface mit Orbits, JSON-Schema und Four-Pillars-Daten.",
      generationPrompt: "Astronomical API console, orbital curves, JSON schema panels, Four Pillars columns, Wu-Xing vector diagram, precise engineering mood, black and off-white interface with one electric accent, no people, no generic cloud icon, editorial technical thumbnail."
    }
  },
  {
    id: "whats-in-it",
    number: "03",
    title: "What's in it?",
    category: "Repository Understanding - Developer Clarity Tool",
    status: "Product Tool",
    claim: "GitHub-Projekte in Sekunden verstehen: Nutzen, Zielgruppe, Startpunkt.",
    description: "What's in it? macht aus einem GitHub-Link eine klare Entscheidungshilfe. Das Tool liest Repository-Daten und README-Kontext aus und uebersetzt sie in eine verstaendliche Analyse: Was bringt das Projekt, fuer wen ist es sinnvoll und wie startet man damit?",
    howItWorks: [
      "Nutzer fuegen eine GitHub-URL ein.",
      "Das System parsed die URL.",
      "Metadaten und README werden abgerufen.",
      "Ein Cache verhindert doppelte KI-Kosten und beschleunigt Folgeaufrufe.",
      "Ein LLM erzeugt eine strukturierte Einschaetzung.",
      "Die UI zeigt Nutzen, Kategorie, Startpunkte und Empfehlungen."
    ],
    forWhom: [
      "Entwickler, die Open-Source-Repositories schnell einschaetzen wollen.",
      "Founder und Produktteams, die Tools vor einer Integration bewerten.",
      "AI-Agenten, die Repository-Kontext in menschenlesbare Entscheidungen uebersetzen muessen."
    ],
    capabilities: [
      "GitHub-URL-Parsing",
      "README-Analyse",
      "Metadatenanalyse",
      "24h Cache",
      "Gemini-Auswertung",
      "Installationshinweise",
      "Nutzungsempfehlungen"
    ],
    aiLayer: [
      "Gemini analysiert Repository-Daten und strukturiert sie in eine Entscheidungshilfe.",
      "Das Tool kann als Repo-Understanding-Layer fuer Agenten dienen."
    ],
    links: [
      { label: "GitHub Repository", url: "https://github.com/DYAI2025/Whats-init-GitHub-verstehen.git", type: "repo" }
    ],
    tags: ["GitHub", "Repo Analysis", "Gemini", "Cache", "Developer Tool"],
    thumbnail: {
      src: "https://picsum.photos/seed/what-in-it/800/450?blur=4",
      alt: "What's in it? als Repository-Lupe, die GitHub-Code in klare Projektkarten transformiert.",
      generationPrompt: "GitHub repository transformed into an intelligence card, code tree fragments, README blocks, data lens, labels like \"useful\", \"for whom\", \"start here\", minimal black-white with one sharp accent, no copied GitHub logo, no brand logo, editorial developer tool thumbnail."
    }
  },
  {
    id: "media-intelligence-extension",
    number: "04",
    title: "Media Intelligence Extension",
    category: "Browser Extension · Media Intelligence · Source Work",
    status: "Code Phase / Chrome Extension",
    claim: "Eine Chrome Extension, die Videos in strukturierte Arbeitsnotizen, Links und sammelbare Wissensbausteine verwandelt.",
    description: "Die Media Intelligence Extension ist ein Arbeitstool fuer schnelles Online-Arbeiten mit videobasierten Quellen. Sie fasst YouTube-Videos zusammen, extrahiert die wichtigsten Informationen und stellt relevante Links, Tools, Ressourcen und Entscheidungsmarker heraus. Statt Videos passiv zu konsumieren, verwandelt die Extension sie in strukturierte, speicherbare Outputs: Bullet Points, Tool-Listen, Build-Packs, Decision-Packs, Coach Notes oder Knowledge Notes. Alle wichtigen Links sind klickbar, sammelbar und koennen in einer persoenlichen Library in gesonderten Ordnern gespeichert werden. Technisch ist das System als Chrome Extension mit Side Panel gebaut und perspektivisch nicht nur auf YouTube begrenzt, sondern auch fuer TikTok, Instagram und Facebook vorbereitet.",
    howItWorks: [
      "Der Nutzer oeffnet ein Video oder Short-Form-Media im Browser.",
      "Die Chrome Extension erkennt die Plattform und oeffnet ein Side Panel.",
      "Der Nutzer klickt aktiv auf Extract. Es findet keine automatische Extraktion ohne Nutzeraktion statt.",
      "Bei YouTube wird die verfuegbare Transcript- oder Textbasis extrahiert.",
      "Bei TikTok, Instagram und Facebook kann Audio ueber ein Offscreen Document erfasst und verarbeitet werden.",
      "Der Server verarbeitet die Daten mit einem AI-Provider wie Gemini Flash.",
      "Das Ergebnis wird als strukturierter Output zurueckgegeben: Zusammenfassung, wichtige Punkte, Links, Tools, Ressourcen oder Entscheidungslogik.",
      "Der Nutzer kann relevante Links und Informationspakete in einer persoenlichen Library speichern.",
      "Gespeicherte Inhalte koennen in Ordnern bzw. Collections organisiert werden."
    ],
    forWhom: [
      "Menschen, die viel mit YouTube-Videos, Tutorials, Talks, Produktdemos oder Online-Recherche arbeiten.",
      "Entwickler, Founder, Researcher, Creator und Operator, die schnell aus Videoquellen verwertbare Informationen gewinnen wollen.",
      "Nutzer, die Links, Tools und Ressourcen nicht mehr manuell aus Videos heraussuchen moechten.",
      "Teams, die Online-Quellen in strukturierte Wissenssammlungen ueberfuehren wollen.",
      "AI-native Worker, die Videoquellen als Teil ihres Research- und Entscheidungsworkflows nutzen."
    ],
    capabilities: [
      "Chrome Extension auf Manifest V3",
      "Side Panel UI",
      "YouTube-Transcript-Extraction",
      "Button-triggered Extraction",
      "Audio Capture fuer TikTok, Instagram und Facebook",
      "Video Session Management",
      "strukturierte AI-Zusammenfassungen",
      "Outcome Modes wie Knowledge, Build-Pack, Decision-Pack, Coach Notes, Tools und Stack",
      "klickbare Link- und Ressourcenextraktion",
      "persoenliche Library",
      "Ordner bzw. Collections fuer gespeicherte Informationen",
      "Supabase Auth und Persistenz",
      "Node/Express Backend",
      "Gemini Flash Extraction",
      "Plan Gating und Rate Limiting",
      "Stripe Upgrade Flow",
      "Dark/Light Theme Toggle"
    ],
    aiLayer: [
      "Die Extension ist kein generischer Summarizer, sondern ein Precision-Extraction-Tool.",
      "Die AI-Schicht extrahiert nur High-Signal-Inhalte: Tipps, Techniken, Tools, Ressourcen, Links, Entscheidungsregeln und konkrete Handlungspunkte.",
      "Der AI-Output ist modusabhaengig: Knowledge Notes, Build-Packs, Decision-Packs, Coach Notes, Tool-Listen oder Tech-Stack-Extraktion.",
      "Secrets bleiben ausserhalb der Extension. AI- und Transcription-Routen laufen ueber den First-Party-Server.",
      "Serverseitige Prompts erzwingen kurze, bulletbasierte, handlungsnahe Outputs statt langer Fliesstext-Zusammenfassungen."
    ],
    links: [
      { label: "GitHub Repository", url: "https://github.com/VincBerlin/Extension-for-youtube-Instagram-Facebook-and-TikTok.git", type: "repo" }
    ],
    tags: ["Chrome Extension", "YouTube", "Media Intelligence", "Link Extraction", "Research Tool", "Supabase", "Gemini", "Side Panel"],
    thumbnail: {
      src: "https://picsum.photos/seed/media-intelligence-extension/800/450?blur=4",
      alt: "Media Intelligence Extension als Browser-Side-Panel, das ein Video in Notizen, Links und sammelbare Wissensbausteine verwandelt.",
      generationPrompt: "Editorial project thumbnail for a Chrome media intelligence extension: browser window with a video frame on the left, a sharp side panel on the right extracting bullet notes, clickable resource links, folder chips and saved knowledge cards. Visualize YouTube-style video research without copying the YouTube logo. Include abstract link nodes, transcript lines, highlighted tools and collection folders. High-contrast editorial design, dark ink and off-white background with one electric accent, precise technical mood, no people, no stock illustration, no copied platform logos."
    }
  },
  {
    id: "whatsorga",
    number: "05",
    title: "WhatsOrga",
    category: "Semantic WhatsApp Organization - Memory System",
    status: "Dashboard / Analysis System",
    claim: "Aus Chatverlauf wird Organisationsgedaechtnis: Nachrichten, Marker, Termine und Kontext.",
    description: "WhatsOrga analysiert WhatsApp-Nachrichten aus whitelisted Chats und macht daraus strukturierte, erinnerbare Information. Eine Chrome Extension erfasst Nachrichten aus WhatsApp Web. Ein FastAPI-Backend analysiert Sentiment, Marker, Threads und Termine. EverMemOS sorgt fuer semantisches Langzeitgedaechtnis.",
    howItWorks: [
      "Eine Chrome Extension beobachtet WhatsApp Web fuer whitelisted Chats.",
      "Neue Nachrichten und optional Audio werden an das Backend gesendet.",
      "FastAPI speichert Rohdaten in PostgreSQL.",
      "Die Analyse-Pipeline berechnet Sentiment, Marker und semantische Threads.",
      "EverMemOS merkt sich Personen, Fakten, Episoden und Kontext.",
      "Termine werden kontextsensitiv erkannt und via CalDAV in Apple Calendar synchronisiert.",
      "Ein Dashboard zeigt Uebersicht, Drift, Marker, Threads, Termine und Suche."
    ],
    forWhom: [
      "Familien, Paare, Teams und Pflegekontexte.",
      "Projekt- oder Organisationskontexte mit vielen impliziten Absprachen.",
      "Menschen, die WhatsApp-Kommunikation nicht verlieren, sondern strukturieren wollen.",
      "AI-Organisationstools, die echte semantische Erinnerung brauchen."
    ],
    capabilities: [
      "WhatsApp-Web-Erfassung",
      "Whitelist-Schutz",
      "Audio-Transkription",
      "Sentiment-Analyse",
      "Marker-Erkennung",
      "RAG mit ChromaDB",
      "EverMemOS Semantic Memory",
      "Kontextsensitive Terminextraktion",
      "Apple Calendar Sync",
      "Dashboard"
    ],
    aiLayer: [
      "LLM- und Embedding-Systeme analysieren Nachrichten, Audio und Kontext.",
      "EverMemOS ermoeglicht semantisches Langzeitgedaechtnis.",
      "Das System kann implizite Bezuege aufloesen, z. B. Pronomen, wiederkehrende Termine oder geteilte Familieninformationen."
    ],
    links: [
      { label: "GitHub Repository", url: "https://github.com/DYAI2025/Whatsorga.git", type: "repo" },
      { label: "Dashboard", url: "https://whatsorga.dyai.cloud/dashboard", type: "dashboard" }
    ],
    tags: ["WhatsApp", "EverMemOS", "Semantic Memory", "FastAPI", "Calendar Sync"],
    thumbnail: {
      src: "https://picsum.photos/seed/whatsorga/800/450?blur=4",
      alt: "WhatsOrga als semantisches Chat-Gedaechtnis mit Nachrichten, Memory-Graph und Kalenderknoten.",
      generationPrompt: "Abstract chat bubbles without WhatsApp logo, semantic memory graph nodes, calendar blocks, sentiment waves, thread lines, privacy whitelist gate, technical yet human, off-white and dark ink with one neon green memory accent, no people, no phone mockup cliche."
    }
  },
  {
    id: "coupletime",
    number: "06",
    title: "CoupleTime",
    category: "Relationship Ritual Tool - Structured Dialogue",
    status: "Web App / AI Integration WIP",
    claim: "Ein neutraler Timer fuer echte Zwiegespraeche: nicht schneller reden, sondern besser zuhoeren.",
    description: "CoupleTime ist eine Web-App fuer strukturierte Partnergespraeche nach der Moeller-Methode. Die App fuehrt Paare durch vorbereitete Gespraechsphasen, gerechte Redezeiten, Pausen, Abschluss und Cooldown. Sie ist die neutrale dritte Instanz im Raum. Dadurch muessen Paare nicht ueber Timer, Fairness oder Ablauf verhandeln, sondern koennen im Gespraech bleiben.",
    howItWorks: [
      "Paare waehlen einen Modus: Maintain, Commitment, Listening oder Custom.",
      "Die Session startet mit Vorbereitung.",
      "Partner A spricht, Partner B hoert zu.",
      "Partner B spricht, Partner A hoert zu.",
      "Transition-, Closing- und Cooldown-Phasen stabilisieren die Methode.",
      "Klangsignale markieren Phasenwechsel ohne harte Unterbrechung.",
      "Guidance-Tipps helfen je nach Erfahrungslevel."
    ],
    forWhom: [
      "Paare, die regelmaessige Beziehungspflege praktizieren wollen.",
      "Paare in angespannten Phasen, die faire Kommunikationsraeume brauchen.",
      "Coaching-, Therapie- oder Selbsthilfe-Kontexte."
    ],
    capabilities: [
      "Preset-Modi",
      "Custom Mode",
      "Strikte Phasenlogik",
      "Drift-korrigierter Timer",
      "Web-Audio-Klangsignale",
      "Guidance-Level",
      "DE/EN Internationalisierung",
      "Onboarding",
      "Offline-Faehigkeit",
      "LocalStorage",
      "React, TypeScript, Vite, Tailwind, Framer Motion"
    ],
    aiLayer: [
      "Die KI-Integration ist Work in Progress.",
      "KI soll die Methode nicht stoeren, sondern Vorbereitung und Reflexion unterstuetzen.",
      "Moegliche Erweiterung: persoenliche Einstimmungsfragen vor der Session.",
      "Moegliche Erweiterung: freiwillige Session-Reflection nach dem Cooldown.",
      "Moegliche Erweiterung: Muster ueber Zeit, Beziehungshygiene-Hinweise und personalisierte Guidance.",
      "Keine Live-Intervention in die Redezeit ohne ausdrueckliche Nutzerentscheidung."
    ],
    links: [
      { label: "GitHub Repository", url: "https://github.com/DYAI2025/CoupleTime", type: "repo" }
    ],
    tags: ["Zwiegespraech", "Timer", "Relationship UX", "Offline", "AI WIP"],
    thumbnail: {
      src: "https://picsum.photos/seed/coupletime/800/450?blur=4",
      alt: "CoupleTime als ruhiges Zwei-Kreis-Timer-Artefakt fuer strukturierte Partnergespraeche.",
      generationPrompt: "Two balanced timer circles facing each other, structured dialogue phases as quiet timeline marks, soft off-white background, precise dark typographic grid, subtle sound-wave rings, no couple photo, no hearts, calm relationship ritual tool, editorial thumbnail."
    }
  },
  {
    id: "augmented-ops",
    number: "07",
    title: "Augmented_Ops.INC",
    category: "Autonomous Service Agency Mesh - Holding System",
    status: "Agency Ecosystem / Multi-Repo System",
    claim: "Eine Holding fuer AI-Agenten-Agenturen: VSA, CSA, MSA, RSA und gemeinsame Human-Gate-Infrastruktur.",
    description: "Augmented_Ops ist das Organisationsmodell fuer autonome Service-Agenturen. Spezialisierte Agenten-Meshes uebernehmen operative Arbeit, waehrend kritische Entscheidungen und Freigaben durch Human-in-the-loop-Gates laufen. Die Holding buendelt Sub-Agencies fuer Support, Marketing, Investor-Decks und Recruiting.",
    howItWorks: [
      "Jede Sub-Agency hat ein eigenes spezialisiertes Agenten-Mesh.",
      "VSA baut Investor-Decks und Fundraising-Artefakte.",
      "CSA automatisiert Customer Support mit Triage, Resolver, Voice, Knowledge und Escalation.",
      "MSA baut Marketing-Kampagnen mit Strategie, Copywriting, Media Buying und Analyse.",
      "RSA ist fuer Recruiting, Screening, Matching und Interview-Automatisierung vorgesehen.",
      "Human Gates pruefen Strategie, sensible Entscheidungen, Compliance und Veroeffentlichung.",
      "Die Holding koordiniert Infrastruktur, Skills Layer, Memory, Strategie und Cross-Sell."
    ],
    forWhom: [
      "Unternehmen und Operator, die AI-Agenten als echte operative Einheiten einsetzen wollen.",
      "Startups, Support-Teams, Marketing-Teams und Recruiting-Kontexte mit wiederholbaren Workflows.",
      "Organisationen, die menschliche Kontrolle an sensiblen Gates behalten wollen."
    ],
    capabilities: [
      "Agent Mesh",
      "Human Gate",
      "Investor Deck Production",
      "Customer Support Automation",
      "Marketing Campaign Automation",
      "Recruiting Workflows",
      "Shared Infrastructure",
      "Skills Layer",
      "Memory Layer"
    ],
    aiLayer: [
      "Autonome Agenten-Meshes uebernehmen operative Teilschritte.",
      "Human-in-the-loop bleibt verpflichtend an sensiblen Freigabepunkten.",
      "Das System ist als erweiterbares Portfolio von Sub-Agencies gedacht."
    ],
    links: [
      { label: "Augmented_Ops Repository", url: "https://github.com/DYAI2025/Augmented_ops.INC", type: "repo" },
      { label: "CSA Repository", url: "https://github.com/DYAI2025/CSA.git", type: "subrepo" },
      { label: "MSA Repository", url: "https://github.com/DYAI2025/MSA.git", type: "subrepo" },
      { label: "VSA Repository", url: "https://github.com/DYAI2025/VSA.git", type: "subrepo" },
      { label: "RSA Repository", url: "https://github.com/DYAI2025/RSA.git", type: "subrepo" }
    ],
    tags: ["Agent Mesh", "Human Gate", "VSA", "CSA", "MSA", "RSA"],
    thumbnail: {
      src: "https://picsum.photos/seed/augmented-ops/800/450?blur=4",
      alt: "Augmented_Ops als Agenten-Mesh-Holding mit vier Sub-Agency-Knoten und Human-Gate.",
      generationPrompt: "Autonomous AI service agency mesh, four abstract nodes VSA, CSA, MSA, RSA orbiting a central human approval gate, command-center mood, structured operating system, black-neon variant with restrained cyan and green, no robots, no people, no corporate stock imagery, post-consulting operations architecture."
    }
  }
];
