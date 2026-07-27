/* ============================================================
   ABOUT + CONTACT CONTENT — from CV (Albert Sumin)
   Each About chapter can carry: text[], timeline[], list[],
   skills[], statuses[], links[], video, and `reserved` image slots
   (image placeholders to be replaced when renders are provided).
   ============================================================ */
window.ABOUT = {
  intro: "Senior architect and computational designer based in Vienna. I work where architecture meets algorithms — research, BIM, parametric geometry and bespoke project pipelines — translating ideas into buildable detail across projects from small façades to entire cities. For all the projects featured on the Projects page, I played a key role, defined all the main design solutions, and developed workflows, 3D models, animations, and renders.",

  chapters: [
    {
      key: "experience", code: "A", title: "Education & Experience", tag: "Career",
      images: [
        { src: "content/about/exp-01.jpg", label: "Science City — master plan & concept design, 2026 · A. Sumin & I. Sorokina" },
      ],
      timeline: [
        { period: "2003—2009", tag: "Education", role: "Specialist Degree, Engineer-Architect (5.5 yrs)", place: "SIBADI — Siberian Automobile & Highway Academy, Building Engineering Institute", loc: "Omsk, RU", link: "https://sibadi.org/en/" },
        { period: "2010", tag: "Internship", role: "Architectural Internship", place: "Paolo Bodega Architettura", loc: "Lecco, IT", link: "http://www.paolobodega.com/en/" },
        { period: "2011", tag: "Experience", role: "Engineer-Designer", place: "Construction Systems", loc: "Omsk, RU" },
        { period: "2012—2015", tag: "Experience", role: "Senior Architect", place: "Architekturium", loc: "Moscow, RU", link: "http://www.arhitekturium.ru/" },
        { period: "2015", tag: "Experience", role: "BIM Manager", place: "Gorproject", loc: "Moscow, RU", link: "https://gorproject.ru/en/" },
        { period: "2015—2021", tag: "Experience", role: "Head of BIM Management Department", place: "BIM Academy (Gorproject group)", loc: "Moscow, RU", link: "http://bimacad.ru/" },
        { period: "2021—2023", tag: "Experience", role: "Architect & Computational Designer", place: "Coop Himmelb(l)au", loc: "Vienna, AT", link: "https://coop-himmelblau.at/" },
        { period: "2023—2025", tag: "Experience", role: "Senior Architect & Computational Designer", place: "Cloud Cooperation", loc: "Vienna, AT", link: "https://www.cloud-cooperation.com/" },
        { period: "2025—now", tag: "Experience", role: "Senior Architect & Computational Designer", place: "Coop Himmelb(l)au", loc: "Vienna, AT", link: "https://coop-himmelblau.at/" },
      ],
    },
    {
      key: "design", code: "B", title: "Design Solutions", tag: "Approach",
      images: [
        { src: "content/about/design-01.jpg", label: "Dadonghai district revitalization, Sanya (China) · Coop Himmelb(l)au" },
      ],
      text: [
        "Perhaps because of my background in algorithm development, I view every project as a sequence of interconnected stages, where every detail depends on research findings, the local context, and one another. In the Dadonghai district revitalization project in Sanya (Hainan, China) at Coop Himmelb(l)au, I began by taking hundreds of photographs on site; back in Vienna I processed and analyzed them, striving to preserve the local way of life, the details, and the character of the neighborhoods and architecture as much as possible — a complex task spanning 13 neighborhoods and 11 streets with dozens of buildings.",
        "Three piers were also scheduled for renovation. I found a reference not far from Sanya — a floating village with a grid-like structure — and used its grid cells as modules to propose a new design for the piers. It wasn't the only source: the shapes of local boats and roofs, lanterns on fishing vessels, traditional textiles, and an 11th-century Chinese modular parametric system were all part of the puzzle.",
      ],
      video: "E7F8vig9bqE",
    },
    {
      key: "large-scale", code: "C", title: "Large-Scale Projects", tag: "Selected",
      images: [
        { src: "content/about/large-scale-01.jpg", label: "Lakhta Center · Technopark Sberbank · Dubai Airport" },
      ],
      text: [
        "Although I personally prefer working with details and at a smaller scale, long-term large projects have given me valuable experience in coordinating teams, processes and tasks — and insight into many unique construction and design solutions.",
      ],
      list: [
        { period: "2015—2019", title: "Lakhta Center", loc: "St. Petersburg, RU", role: "Head of BIM dept. / computational designer — parametric façade & structures · Gorproject (design: RMJM)", link: "https://gorproject.ru/en/projects/lakhta-center/" },
        { period: "2019—2020", title: "Technopark Sberbank", loc: "Skolkovo, RU", role: "Head of BIM dept. / consultant · Gorproject (design: Zaha Hadid)", link: "https://gorproject.ru/en/projects/technopark-sberbank/" },
        { period: "2021", title: "SCA Arena & Park", loc: "St. Petersburg, RU", role: "Computational designer — parametric façade & structures · Coop Himmelb(l)au", link: "https://coop-himmelblau.at/projects/sca-arena-and-park-sports-and-concert-complex/" },
        { period: "2022—2023", title: "NEOM — The Line", loc: "NEOM, SA", role: "Computational designer — parametric structures · Coop Himmelb(l)au", link: "https://www.neom.com/en-us/regions/theline" },
        { period: "2022—2025", title: "Dubai Airport", loc: "Dubai, UAE", role: "Computational designer — parametric structures / Head of BIM group · Coop Himmelb(l)au" },
      ],
    },
    {
      key: "cg3d", code: "D", title: "Computer Graphics & 3D Modelling", tag: "Craft",
      images: [
        { src: "content/about/cg3d-01.jpg", label: "Parametric structure — Grasshopper + Blender, 2025 · DesignMorphine workshop" },
      ],
      text: [
        "My experience lies in creating projects in 3D using algorithms, modelling, rendering, detailing and geometry optimization. While creativity plays an integral role, often my goal is to figure out how to translate an existing design into 3D geometry or algorithm logic.",
      ],
      skills: [
        { group: "Computational Design", items: "Rhinoceros + Grasshopper + plugins, Blender, etc." },
        { group: "BIM", items: "Autodesk Revit, ACC / BIM360, Autodesk Navisworks, etc." },
        { group: "Graphics & Video", items: "Adobe Photoshop, Figma, Adobe Premiere, ComfyUI, etc." },
        { group: "Architectural Photography", items: "Adobe Lightroom, AI correction & denoising, hardware tools, etc." },
      ],
    },
    {
      key: "pipelines", code: "E", title: "Pipelines", tag: "Method",
      images: [
        { src: "content/about/pipelines-01.jpg", label: "3D + AI workflow — references to final Blender renders, 2023" },
      ],
      text: [
        "Another area I'm interested in is the development of unique project pipelines. In my experience, creating an idea for a project often ties closely to creating its pipeline. How to combine different tools, in what order to use them, how to export geometry and images from one tool to another — there is no single right answer, but a huge field of experimentation that is always part of non-standard projects.",
      ],
      skills: [
        { group: "Computational Design", items: "Monoceros, Wasp, GH Python, Nuclei, Telepathy, Weaverbird, Parakeet, Kangaroo, Pufferfish, etc." },
        { group: "Connectors", items: "Rhino.Inside, Speckle, etc." },
        { group: "Workflow", items: "Elefront, Telepathy, Snapping Gecko, MetaHopper, etc." },
      ],
    },
    {
      key: "sustainability", code: "F", title: "Sustainability, Calculations & Analysis", tag: "Analysis",
      images: [
        { src: "content/about/sustainability-01.jpg", label: "Sky exposure, façade math & multi-factor site analysis (sun · wind · noise · water)" },
      ],
      text: [
        "Pipelines can involve complex analysis that ultimately shapes a project's form and concept. At Coop Himmelb(l)au I developed an analytical method for determining optimal function placement in large urban projects like NEOM or IPAI, accounting for function connectivity and climate factors — solar radiation, sky visibility, wind, noise. Another example concerns manufacturing: for the Lakhta Center skyscraper we received a façade-shell model from RMJM created in 3ds Max like a sculpture, without precise positions or sizes; I led a team that produced a mathematical description and completely rebuilt it through algorithms.",
      ],
      skills: [
        { group: "Solar, Climate & Wind", items: "Ladybug, Eddy3D, Butterfly" },
        { group: "Structural", items: "Karamba3D, Kangaroo" },
        { group: "Energy Efficiency", items: "Revit + Insight360, Honeybee, Climate Consultant" },
      ],
    },
    {
      key: "ai", code: "G", title: "AI", tag: "Research",
      images: [
        { src: "content/about/ai-01.jpg", label: "AI-generated architectural studies" },
      ],
      text: [
        "AI — and especially generative neural networks — has been a huge topic in recent years, and of course I'm interested in it. I developed my own library of workflows for ComfyUI that I use both for office projects and with students, and I've built ComfyUI nodes and trained LoRA models using Kohya and AI toolkit. I also experiment with AI tools in vibe coding: so far I've developed three apps used at the Coop Himmelb(l)au office — a translation tool for DWG files, text and images; an acquisition tool for finding and organizing competitions and projects; and an environmental analysis tool assessing wind conditions and walking times within an area.",
      ],
      links: [
        { label: "Models on Civitai", url: "https://civitai.com/user/aliksumin" },
        { label: "Open-source tools on GitHub", url: "https://github.com/aliksumin?tab=repositories" },
      ],
      skills: [
        { group: "Vibe Coding", items: "Google Antigravity, Codex, Cursor IDE, Raven for Grasshopper" },
        { group: "Video Generative UI", items: "Google Flow, ComfyUI" },
        { group: "3D Generative UI", items: "Crow for Grasshopper, ComfyUI" },
        { group: "Model Training", items: "Kohya, AI toolkit, Google Colab" },
        { group: "Image Generative UI", items: "ComfyUI, Adobe Photoshop, etc." },
      ],
    },
    {
      key: "bim", code: "H", title: "BIM", tag: "Specialism",
      images: [
        { src: "content/about/bim-01.jpg", label: "BIM & structural coordination models — SCA Arena · Lakhta Center · MEP" },
      ],
      text: [
        "At one point in my career I specialized in BIM and computational design solutions, working with dozens of design companies as a consultant to implement these technologies into their workflows. During this period I developed my own educational programs, implementation strategies, BIM standards and libraries.",
      ],
      skills: [
        { group: "CDE", items: "Autodesk Forma (BIM360, Autodesk Construction Cloud)" },
        { group: "BIM Modelling", items: "Autodesk Revit, Blender BIM, VisualARQ" },
        { group: "BIM Management", items: "Autodesk Navisworks, Nemetschek Solibri" },
        { group: "Node-Based Programming", items: "Dynamo" },
        { group: "AR", items: "AUGIN, GAMMA AR" },
      ],
      statuses: [
        "Autodesk Certified Professional: Revit Architecture",
        "Autodesk Certified Professional: Revit MEP",
        "Autodesk Revit Beta Program Member",
        "Autodesk BIM360 Beta Program Member",
        "Former Autodesk Certified Instructor",
        "Autodesk Expert Elite Alumnus",
        "Former WorldSkills Coach — Russian National Team (BIM)",
        "Former WorldSkills Consultant — Chinese & Belarusian National Teams (BIM)",
        "Autodesk University Lecturer",
        "Author of corporate BIM standards, templates & libraries",
      ],
    },
    {
      key: "parametric", code: "I", title: "Parametric Design", tag: "Practice",
      images: [
        { src: "content/about/parametric-01.jpg", label: "Grid City, Dubai & Stuttgart façade — 3D models built entirely from Grasshopper scripts" },
      ],
      text: [
        "I am experimenting with an approach whereby an entire project can be developed through a sequence of algorithms without the need for manual modelling. As examples I prepared a conceptual design for 'Grid City' in Dubai (Coop Himmelb(l)au), and a detailed design for the façade of a renovated office building in Stuttgart for W+W. For such tasks I mainly use Grasshopper for early design and Grasshopper + Rhino.Inside + Revit for detailed design.",
      ],
      skills: [
        { group: "Main Tools", items: "Rhino, Grasshopper, Kangaroo, Wasp, Monoceros, Paneling Tools, Weaverbird, Pufferfish, Mesh+, Parakeet, Rhino.Inside, Blender geometry nodes, etc." },
      ],
    },
    {
      key: "teaching", code: "J", title: "University Lecturer & Tutor", tag: "Teaching",
      images: [
        { src: "content/about/lecturer-01.jpg", label: "MARSH 3-week workshop, 2023 — students' 3D scenes & renderings" },
      ],
      list: [
        { period: "2016—2022", title: "Tutor — Digital Culture (MArch)", loc: "MARSH, Universal University", role: "Master's degree program", link: "https://march.ru/en/" },
        { period: "2019—2020", title: "Tutor — Grasshopper course", loc: "Lab. for Experimental Urban Design, HSE University", role: "Shukhov Lab", link: "https://shukhovlab.hse.ru/en/" },
        { period: "2014—now", title: "Offline courses & workshops", loc: "Worldwide", role: "Revit, Navisworks, BIM360, BIM theory, AI, Rhino & Grasshopper — 100+ courses for architecture, engineering & development companies" },
        { period: "2017—now", title: "Building Information Modeling", loc: "Stepik MOOC", role: "39,000+ participants — one of the largest BIM courses worldwide", link: "https://stepik.org/course/738/promo" },
        { period: "2018—now", title: "MEP design in Autodesk Revit", loc: "Stepik MOOC", role: "600+ participants", link: "https://stepik.org/course/51850/promo" },
        { period: "2020—now", title: "Parametric design in Grasshopper", loc: "Stepik MOOC", role: "800+ participants", link: "https://stepik.org/course/51851/promo" },
        { period: "2022—now", title: "BIM episode I: Revit Family Editor", loc: "Stepik MOOC", role: "500+ participants", link: "https://stepik.org/course/74407/promo" },
        { period: "2023", title: "AI workshops", loc: "MARSH School · MAD Architects (Beijing) · SWA Group (US)", role: "Generative AI for architecture" },
        { period: "2024—now", title: "Computational design workshops", loc: "DesignMorphine · PAACADEMY", role: "Computational & generative design" },
        { period: "2026", title: "Grasshopper course", loc: "Pininfarina Architecture & Product Design", role: "Parametric design" },
      ],
    },
  ],
};

window.CONTACT = {
  name: "Albert Sumin",
  born: "23 December 1985",
  role: "Senior Architect & Computational Designer",
  location: "Vienna, Austria",
  email: "whitebirds2009@gmail.com",
  phone: "+43 665 65634979",
  socials: [
    { label: "LinkedIn", handle: "albert-sumin", url: "https://www.linkedin.com/in/albert-sumin/" },
    { label: "Instagram", handle: "@aliksumin_cd", url: "https://www.instagram.com/aliksumin_cd/" },
    { label: "GitHub", handle: "aliksumin", url: "https://github.com/aliksumin?tab=repositories" },
    { label: "Civitai", handle: "aliksumin", url: "https://civitai.com/user/aliksumin" },
  ],
};
