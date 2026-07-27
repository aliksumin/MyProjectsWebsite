/* ============================================================
   PORTFOLIO CONTENT
   --------------------------------------------------------
   Two kinds of project:
   • SECTIONED (project 01 — Science City): a masterplan split
     into named chapters. Each chapter has text + an images[]
     array. To add real renders later, just push image objects
     into the chapter's images[] (and drop the `reserved` count).
   • FLAT (projects 02–06): single gallery, still placeholders.

   IMAGE OBJECT: { src, label, span }  where span = 1 | 2
     span:2 → full-bleed wide plate, span:1 → half-width plate.
     Omit src to render a striped placeholder with `label`.

   VIDEO: set a chapter/project `video` to a file path to play it.
   ============================================================ */
window.PORTFOLIO = {
  name: "Albert Sumin",
  initials: "AS",
  role: "Senior Architect & Computational Designer",
  location: "Based in Vienna, Austria",
  tagline: "Architecture as a sequence of algorithms — from research to built detail.",
  bio: "This page is about the projects where I either played a key role to define design and other important aspects or made the complete project alone.",
  email: "whitebirds2009@gmail.com",

  projects: [
    /* ============ 01 — SCIENCE CITY (sectioned, real content) ============ */
    {
      n: "01", slug: "science-city", title: "Science City",
      type: "Research Settlement Masterplan", year: "2026", loc: "Siberia",
      status: "Concept Design", hue: 90,
      hasVideo: true, video: null,                 // local file fallback
      youtube: "9Ak-AYeRRuo",                      // ← project film (YouTube)
      cover: "content/projects/01-science-city/campus-01-summer.png",   // index hover preview
      circles: [
        "content/projects/01-science-city/campus-01-summer.png",
        "content/projects/01-science-city/smart-interior-01.png",
        "content/projects/01-science-city/campus-03-courtyard.png",
      ],
      lead: "A research-oriented settlement where architecture, technology, production, housing and landscape operate as one integrated system.",
      credits: [
        { role: "Project Team",      names: ["Albert Sumin", "Irina Sorokina"] },
        { role: "Project Manager",   names: ["Andrey Baluyev"] },
        { role: "Local Consultants", names: ["Pavel Kovalchuk", "Andrey Torgayev", "Oleg Pechenkin"] },
      ],
      facts: [
        { k: "Program", v: "Research Settlement" },
        { k: "Location", v: "Siberia" },
        { k: "Year", v: "2026" },
        { k: "Status", v: "Concept Design" },
      ],
      // whole-project framing
      overview: [
        "Science City is conceived as a new research-oriented settlement where architecture, technology, production, housing, and landscape operate as one integrated system. The masterplan is generated through algorithmic and parametric design patterns, allowing the spatial structure to adapt to site constraints, flood-prone areas, programmatic requirements, and future changes during the design process. This approach makes the project flexible, scalable, and suitable for phased implementation.",
        "At the core of the project is a research campus and a microchip manufacturing plant, connected by underground tunnels and an elevated pedestrian bridge. Around these main clusters are housing for researchers, a hotel for visitors and invited experts, and supporting public functions. The project therefore works not simply as a group of buildings, but as a complete scientific ecosystem where research, production, living, communication, and recreation are located within walking distance of one another.",
      ],
      closing: "Overall, Science City is not only a place for work or housing, but a spatial model of academic life. It combines quiet conditions for individual research, shared spaces for knowledge exchange, and a natural environment for reflection and recovery — architecture as a tool for focus, well-being, and interdisciplinary collaboration.",

      sections: [
        {
          key: "campus", code: "A", title: "Science Campus", tag: "Research & Public",
          text: [
            "The architectural concept is based on the careful integration of the scientific community into the existing forest landscape. The campus is formed by compact truncated-cone modules placed among mature pine trees. This morphology reduces the visual impact of the development, provides panoramic views and good daylight access, lowers wind loads in the Siberian climate, and creates intimate public spaces between the buildings.",
            "The campus is organized as a layered system. The underground level contains production, prototyping, clean rooms, technical corridors, logistics, and energy-intensive processes, isolated from the natural environment. The middle levels form the scientific and public layer — laboratories, classrooms, lecture halls, conference and exhibition spaces, cafeterias, and informal interaction zones. The upper level is dedicated to offices, administration, and quiet workspaces with views toward the forest.",
            "Modularity is a key principle: each cone functions as a self-contained module, allowing the campus to expand over time without interrupting existing buildings. The main materials are CLT, glulam, highly insulated glass, local steel, and vertical wooden slats. The façades act as translucent filters that combine sun protection with a visual connection to the forest; over time the wood naturally ages and blends with the colour of the surrounding pine bark.",
          ],
          images: [
            { src: "content/projects/01-science-city/campus-00-siteplan.png",   label: "Site plan — Science City located along the river within the existing settlement",  span: 2, fit: "contain", white: true },
            { src: "content/projects/01-science-city/campus-01-summer.png",    label: "Campus modules among the pines — summer",  span: 2 },
            { src: "content/projects/01-science-city/campus-03-courtyard.png", label: "Courtyard between cones",                   span: 1 },
            { src: "content/projects/01-science-city/campus-02-winter.png",    label: "Seasonal façade — winter",                  span: 1 },
            { src: "content/projects/01-science-city/campus-05-section.png",   label: "Sectional axonometric — layered system",    span: 2 },
            { src: "content/projects/01-science-city/campus-04-atrium.png",    label: "Central atrium & spiral stair",             span: 2 },
            { src: "content/projects/01-science-city/campus-06-walkway.png",   label: "Public walkway & café level",               span: 1 },
            { src: "content/projects/01-science-city/campus-07-aerial.png",    label: "Aerial — the cluster in the forest",        span: 1 },
          ],
        },
        {
          key: "plant", code: "B", title: "Microchip Manufacturing Plant", tag: "Production",
          text: [
            "The microchip manufacturing plant anchors the productive core of Science City. It is linked to the research campus by underground tunnels and an elevated pedestrian bridge, so that prototyping and fabrication sit moments away from the laboratories that drive them.",
            "The cleanrooms, lithography lines and automated production halls are placed at the underground level, isolated from the natural environment and served by dedicated logistics, while the cone modules above carry the research, office and public floors. The same morphology that shapes the campus is repeated here, allowing the plant to read as part of the forest settlement rather than a separate industrial zone.",
          ],
          images: [
            { src: "content/projects/01-science-city/plant-01-cleanroom.png",     label: "Cleanroom production hall",                  span: 2 },
            { src: "content/projects/01-science-city/plant-02-section.png",       label: "Section — production below, labs above",     span: 2 },
            { src: "content/projects/01-science-city/plant-03-aerial-summer.png", label: "Plant cluster in the forest — summer",        span: 1 },
            { src: "content/projects/01-science-city/plant-04-aerial-winter.png", label: "Plant cluster — winter",                      span: 1 },
            { src: "content/projects/01-science-city/plant-05-atrium.png",        label: "Central atrium & research floors",           span: 2 },
            { src: "content/projects/01-science-city/plant-06-bridge.png",        label: "Elevated bridge linking campus & plant",     span: 2 },
          ],
        },
        {
          key: "housing", code: "C", title: "Researcher Housing — Type 1", tag: "Residential · Type 1",
          text: [
            "The residential part of Science City is designed as a forest settlement for researchers rather than a conventional residential complex. The layout of the housing clusters is generated through a Voronoi-based algorithm that responds to constraints such as flood-prone zones and existing site conditions. Type 1 buildings are 3–4 stories high, gradually tapering toward the top to visually merge with the tree trunks, create terraces and balconies, improve daylight penetration, and preserve a human-scaled environment.",
            "The housing uses natural, locally appropriate materials — heat-treated pine or larch, CLT or hybrid structural systems, triple-glazed panoramic windows, recessed climatic window niches, and usable or partially landscaped roofs suitable for solar panels. Public life is organized through pedestrian walkways, elevated wooden bridges, communal terraces, semi-open pavilions, outdoor workspaces, gardens, and workshops; vehicle traffic is excluded from the settlement.",
          ],
          images: [
            { src: "content/projects/01-science-city/housing-00-voronoi-algorithm.png", label: "Residential cluster layout generated from a Voronoi diagram & site constraints — flexible to new constraints during design", span: 2, fit: "contain", white: true },
            { src: "content/projects/01-science-city/housing-01-exterior.png", label: "Type 1 houses among the pines",        span: 2 },
            { src: "content/projects/01-science-city/housing-02-plan.png",     label: "Typical floor plan — Type 1",          span: 1, fit: "contain" },
            { src: "content/projects/01-science-city/housing-03-fire.png",     label: "Gathering around the fire pit",        span: 1 },
            { src: "content/projects/01-science-city/housing-04-gardens.png",  label: "Shared gardens & workshops",           span: 2 },
          ],
        },
        {
          key: "housing2", code: "D", title: "Researcher Housing — Type 2", tag: "Residential · Type 2",
          text: [
            "Type 2 develops the housing into a taller forest tower — a stacked, multi-storey variant of the same tapering language. A generous open-plan kitchen and living room occupies the ground floor; bedrooms and a double-height void sit on the level above; and an open roof terrace crowns the building among the pine canopy.",
            "Like Type 1, it is built from heat-treated timber and CLT, wrapped in vertical wooden slats and triple-glazed niches, with private balconies threaded into the façade and shared gardens at its base.",
          ],
          images: [
            { src: "content/projects/01-science-city/housing2-exterior.png", label: "Type 2 towers in the pine forest", span: 2 },
            { type: "floors", label: "Floor-by-floor plans — Type 2", span: 2,
              floors: [
                { n: "1", name: "Ground floor", src: "content/projects/01-science-city/housing2-floor1.png" },
                { n: "2", name: "Upper floor",  src: "content/projects/01-science-city/housing2-floor2.png" },
                { n: "3", name: "Roof terrace", src: "content/projects/01-science-city/housing2-floor3.png" },
              ],
            },
          ],
        },
        {
          key: "hotel", code: "E", title: "Hotel", tag: "Hospitality",
          text: [
            "A hotel for visitors and invited experts completes the public layer of the settlement, offering short-stay accommodation within the same forest morphology that shapes the campus and housing. Its cone modules gather around a constructed wetland — a quiet pond threaded by elevated boardwalks, where water, reeds and wildlife are drawn right up to the thresholds of the building.",
          ],
          images: [
            { src: "content/projects/01-science-city/hotel-01-exterior.png", label: "Hotel cones around the wetland pond", span: 2 },
          ],
        },
        {
          key: "pavilion", code: "F", title: "Info Pavilion", tag: "Public",
          text: [
            "The information pavilion stands not on the site but in the regional capital — a compact public outpost on a city plaza that introduces Science City (Наукоград) to the public. Built from the same cone modules, it houses an exhibition about the masterplan and its research mission, alongside a small shop of project identity and merchandise that carries the algorithmic, parametric language of the project into everyday objects.",
          ],
          images: [
            { src: "content/projects/01-science-city/pavilion-01-exterior.png", label: "Naukograd info pavilion on the city plaza", span: 2 },
            { src: "content/projects/01-science-city/pavilion-02-merch.png",    label: "Project identity & merchandise",           span: 2, ar: "100/32", fit: "contain" },
          ],
        },
        {
          key: "education", code: "G", title: "Education Cluster", tag: "Schools & Sports",
          text: [
            "The educational cluster steps down the forested slope as a single terraced landscape, its planted roofs and running tracks folding over three interconnected institutions. All of them share the same sports facilities, performance halls and outdoor spaces, so the cluster works as one continuous campus rather than three separate schools.",
          ],
          list: [
            "Kindergarten.",
            "A secondary school offering specialized tracks in mathematics, chemistry and biology.",
            "School of Performing Arts.",
          ],
          images: [
            { src: "content/projects/01-science-city/edu-00-siteplan.png",        label: "Site plan — the Education Cluster located within the masterplan, by the river", span: 2, fit: "contain", white: true },
            { src: "content/projects/01-science-city/edu-01-axon.png",            label: "Three interconnected parts — kindergarten, secondary school & School of Performing Arts around shared sports and outdoor space", span: 2, fit: "contain", white: true },
            { src: "content/projects/01-science-city/edu-02-aerial.png",          label: "The terraced cluster folded into the pine forest", span: 2 },
            { src: "content/projects/01-science-city/edu-03-amphitheatre.png",    label: "Central amphitheatre — shared performance & gathering space", span: 1 },
            { src: "content/projects/01-science-city/edu-04-courtyard.png",       label: "Entrance deck & library at the lower courtyard", span: 1 },
            { src: "content/projects/01-science-city/edu-05-aerial-terraces.png", label: "Planted roof terraces, running tracks & sports field above the classrooms", span: 2 },
          ],
          endBlocks: [
            {
              heading: "Amphitheatre",
              text: [
                "This space is a multi-level school atrium that serves as a public hall, an amphitheatre, a recreational area, a space for informal learning, and a communication hub.",
              ],
              subhead: "Why is it important to create such spaces in schools?",
              points: [
                { title: "Support for modern educational models",
                  body: "Modern education goes beyond the traditional classroom setting. The atrium becomes:",
                  sub: ["the scope of the project,", "a presentation area,", "a place for interaction between classes."],
                  after: "This directly supports PBL (project-based learning), teamwork, and the development of soft skills." },
                { title: "Social development and communication",
                  body: "Children learn to interact, negotiate, observe others, and be part of a community. The atrium serves as a social catalyst — it shapes the school's culture." },
                { title: "Psychological well-being and reduced anxiety",
                  body: "Light, wood, an open layout, the ability to see other people, and the absence of narrow hallways all help reduce stress, especially among younger students. The school no longer feels like a closed, hierarchical system." },
                { title: "Building a sense of belonging",
                  body: "Such a space becomes the “heart of the school.” Children identify with it, and a sense of belonging emerges: this is our place. This is critical for motivation and engagement." },
                { title: "Development of spatial thinking and independence",
                  body: "The multi-level design, visible connections between floors, and varied circulation routes foster spatial awareness, independence, and an understanding of space as a system." },
              ],
              images: [
                { src: "content/projects/01-science-city/edu-amphitheatre-render.png", label: "The school atrium amphitheatre — public hall, performance space & informal learning hub" },
                { src: "content/projects/01-science-city/edu-amphitheatre-diagram.png", label: "Circulation & use diagram — multi-level connections, learning zones and movement through the atrium", diagram: true },
              ],
            },
            {
              heading: "Classrooms",
              text: [
                "Spatial structure moves away from rigid “classes” in favour of learning environments. Instead of isolated classrooms, the design uses a single open-concept space — a Learning Landscape / Learning Commons — divided into functional areas:",
              ],
              groups: [
                { title: "Front-line area", sub: ["interactive panels", "whiteboards", "space for explaining the material"] },
                { title: "Group-work areas (4–6 people)", sub: ["shared tables", "movable furniture", "eye contact between groups"] },
                { title: "Personal spaces & quiet spots", sub: ["seats by the windows", "stepped platforms", "upholstered chairs", "reading, tablets & independent assignments"] },
                { title: "Amphitheatre-style seating / bleachers", sub: ["short lectures", "student presentations", "discussions", "reading"] },
              ],
              note: "This aligns with the modern principle of Activity-Based Learning (ABL) — the space is organized around types of activities rather than subjects.",
              images: [
                { src: "content/projects/01-science-city/edu-classroom-render-01.png", label: "Learning commons — group tables, soft seating & a stepped reading edge open to the forest" },
                { src: "content/projects/01-science-city/edu-classroom-render-02.png", label: "Project work & front-line teaching wall within the same open landscape" },
                { src: "content/projects/01-science-city/edu-classroom-plan.png", label: "Plan — functional zoning of the learning commons", diagram: true },
              ],
            },
            {
              heading: "Modularity & adaptability",
              subhead: "The key principle is flexibility:",
              bullets: [
                "The tables are easy to move around.",
                "There are no fixed rows.",
                "The furniture works like a “building set.”",
                "Areas can easily be reconfigured for discussions, workshops, presentations or individual work.",
              ],
              note: "This reflects the Agile Learning Environment approach — the environment adapts to the scenario, not the other way around.",
              images: [
                { src: "content/projects/01-science-city/edu-classroom-modularity.png", label: "Reconfiguration diagram & section — furniture recombines for circle, group, project and quiet-reading scenarios", diagram: true },
              ],
            },
            {
              heading: "Integration of digital technologies",
              subhead: "1:1 learning environment — every student has a device:",
              bullets: [
                "tablets",
                "interactive whiteboards",
                "digital presentations",
                "working with digital platforms",
                "personalized learning",
                "self-paced learning",
              ],
              note: "At the same time, digital tools are seamlessly integrated into the space, without the impression of a “computer lab.”",
            },
            {
              heading: "Shared sports facilities",
              text: [
                "The swimming pool and sports hall are shared by all three institutions of the cluster — a daylit, timber-framed pool with a children's zone and lap lanes, and a full sports hall with retractable bleacher seating, a climbing wall and a basketball court, both opening directly onto the surrounding forest.",
              ],
              images: [
                { src: "content/projects/01-science-city/edu-swimming-pool.png", label: "Shared swimming pool — children's play zone, lap lanes & mosaic murals opening to the forest" },
                { src: "content/projects/01-science-city/edu-sports-hall.png", label: "Sports hall — basketball court, climbing wall & stepped bleacher seating" },
              ],
            },
            {
              heading: "Kindergarten",
              pointsWide: true,
              points: [
                { title: "Integration of local Siberian patterns & cultural codes",
                  groups: [
                    { label: "What has been implemented:", items: [
                      "Wall murals featuring folk motifs, floral patterns and scenes from folk tales.",
                      "Textiles (rugs, pillows, flag garlands) with a distinctive colour palette and geometric patterns reminiscent of Siberian and Northern designs.",
                      "Decorative elements inspired by traditional crafts — embroidery, weaving and wood painting.",
                    ] },
                    { label: "Why this is important for children's development:", items: [
                      "Development of cultural identity. From an early age children absorb the visual language of their region, which strengthens their sense of belonging to that place.",
                      "Enhanced visual perception. Ornaments with repetitive rhythms, symmetry and colour schemes help develop a sense of composition, pattern and rhythm.",
                      "Emotional security. Familiar, “homey” motifs reduce stress and create a sense of safety and comfort.",
                    ] },
                  ] },
                { title: "Nature as an active element of interior design",
                  groups: [
                    { label: "What has been implemented:", items: [
                      "Large panoramic windows overlooking the forest, offering a direct view of nature.",
                      "Indoor “green islands” — living trees, conifers and undergrowth integrated into the space.",
                      "Use of natural materials — solid wood in structural elements, floors, bleachers and staircases.",
                    ] },
                    { label: "Why this is important:", items: [
                      "The biophilic effect. Contact with nature has been shown to reduce anxiety and improve concentration and emotional regulation.",
                      "An ecological mindset. Rather than learning about nature in the abstract, children live within it, fostering empathy for the environment.",
                      "Sensory development. The texture of wood, its scent, light, shadows and shades of green provide rich sensory stimulation.",
                    ] },
                  ] },
                { title: "The absence of a rigid spatial hierarchy",
                  groups: [
                    { label: "What has been implemented:", items: [
                      "There is no “main class” or “secondary zones.”",
                      "Children can choose where to sit — on the steps, on cushions, at the table or on the floor.",
                      "The space doesn't dictate behaviour; it offers options.",
                    ] },
                    { label: "Why this matters:", items: [
                      "Developing independence. The child learns to decide for themselves where and how they feel most comfortable working.",
                      "Support for individual learning styles. Some need to move around, some need privacy, and some need to observe.",
                      "A sense of responsibility. Freedom in space is always linked to an awareness of boundaries and other people.",
                    ] },
                  ] },
                { title: "Connection to the local context (Siberia) as a value",
                  body: "This isn't some abstract “Scandinavian preschool,” but a space rooted in a specific location:",
                  groups: [
                    { items: [
                      "The forest outside the window isn't just a backdrop — it's the real setting.",
                      "Ornaments are not mere stylization, but a cultural code.",
                      "Wood isn't just a trend — it's a natural choice for this region.",
                    ] },
                    { label: "Why this matters:", items: [
                      "A local identity is formed, rather than an impersonal “global” environment.",
                      "The child feels: “The world around me matters.”",
                      "This is the foundation for respect for one's homeland, nature and culture.",
                    ] },
                  ] },
              ],
              images: [
                { src: "content/projects/01-science-city/edu-kindergarten-02.png", label: "Kindergarten hall — folk-motif murals, a stage among the bleachers & forest views" },
                { src: "content/projects/01-science-city/edu-kindergarten-01.png", label: "Stepped reading & play landscape with indoor trees and children's artwork" },
                { src: "content/projects/01-science-city/edu-kindergarten-diagram.png", label: "Section studies — the bare timber stair-landscape and its ornamented, planted version", diagram: true },
              ],
            },
            {
              heading: "School of Performing Arts",
              text: [
                "The School of Performing Arts brings dance, music and theatre into the same timber landscape — daylit rehearsal studios, an intimate stepped performance hall and a concert auditorium, all opening onto the forest.",
              ],
              images: [
                { src: "content/projects/01-science-city/edu-dance-class.png", label: "Dance class — mirrored studio with live musicians and a forest backdrop" },
                { src: "content/projects/01-science-city/edu-performing-arts-scene.png", label: "A scene at the performing arts school — folk dance in the round, carved timber columns" },
                { src: "content/projects/01-science-city/edu-auditorium.png", label: "Auditorium — student orchestra & choir on the concert stage" },
              ],
            },
          ],
        },
        {
          key: "spa", code: "H", title: "SPA Center", tag: "Wellness · Riverfront",
          text: [
            "The SPA Center sits right on the river bend — a horseshoe of shingled timber wrapped around a steaming central pool, with a hotel and treatment wing gathered under one continuous roof and a string of private cottages threaded along the water down to the pier.",
          ],
          images: [
            { src: "content/projects/01-science-city/spa-01-aerial.jpg", label: "Aerial — the horseshoe spa around its thermal pool, cottages threaded to the pier", span: 2, fit: "contain", white: true },
            { src: "content/projects/01-science-city/spa-00-siteplan.png", label: "Site plan — the SPA Center located on the river bend within the masterplan", span: 2 },
            { src: "content/projects/01-science-city/spa-02-sunset.png", label: "Outdoor thermal pool & deck at sunset", span: 1 },
            { src: "content/projects/01-science-city/spa-03-pool.png", label: "Riverfront pool opening to the water", span: 1 },
          ],
          endBlocks: [
            {
              heading: "Programme",
              groups: [
                { title: "Main building (spa + hotel)", sub: [
                  "Entrance area, reception & lobby lounge",
                  "Hotel — rooms of various categories, suites & apartments",
                  "Spa — thermal pools, saunas, hammams, steam rooms, salt room",
                  "Massage & treatment rooms, mud therapy, cosmetology",
                  "Fitness centre, yoga / meditation & relaxation areas",
                  "Restaurant, bar & tea lounge",
                  "Service & engineering rooms",
                ] },
                { title: "Outdoor pool", sub: [
                  "Central outdoor thermal pool in the courtyard",
                ] },
                { title: "Beachfront cottages", sub: [
                  "Separate guest houses for private accommodation",
                  "Waterfront terraces, private plunge pools / hot tubs",
                  "Direct access to the river and the pier",
                ] },
              ],
            },
          ],
        },
        {
          key: "smart", code: "I", title: "“Smart District” Residential Development", tag: "Residential · Generative",
          text: [
            "The neighbourhood pattern is generated from a specified street grid and a set of parameters, so the whole district can be re-rolled and tuned rather than drawn block by block.",
          ],
          list: [
            "The percentage breakdown of residential building types (high-rise buildings, townhouses, single-family homes) and their mixing ratio.",
            "Distances between buildings.",
            "Prefabricated modules for townhouses and high-rise residential buildings, assembled using the wave function collapse algorithm.",
            "Number of local centres (public spaces).",
          ],
          images: [
            { src: "content/projects/01-science-city/smart-00-siteplan.png", label: "The resulting district — mixed timber housing, green streets & an autonomous shuttle", span: 2 },
            { src: "content/projects/01-science-city/smart-01-aerial.jpg", label: "Site plan — the “Smart District” located within the masterplan, by the river", span: 2, fit: "contain", white: true },
            { src: "content/projects/01-science-city/smart-02-wfc.gif", label: "Wave function collapse — the residential pattern resolving from open grid to assembled modules", span: 2 },
            { src: "content/projects/01-science-city/smart-03-grasshopper.png", label: "The generative definition — street grid, type ratios, spacing & local centres as parameters", span: 2, fit: "contain", white: true },
          ],
          endBlocks: [
            {
              heading: "Low-rise & mid-rise neighbourhood development",
              subhead: "The district consists of 2- to 7-storey buildings on a human scale, which:",
              bullets: [
                "Reduce wind load and the “draft” effect in harsh climates.",
                "Promote visual cohesion and psychological comfort.",
                "Create density sufficient for a sustainable infrastructure without feeling overcrowded.",
              ],
              images: [
                { src: "content/projects/01-science-city/smart-types-diagram.png", label: "Type mix — townhouses 35%, high-rise 20%, single-family 45%; all parameters operate simultaneously in combination", diagram: true },
              ],
            },
            {
              heading: "A hybrid of a neighbourhood & a campus",
              subhead: "The organizational structure combines:",
              bullets: [
                "Clearly marked streets and driveways.",
                "Semi-open courtyards.",
                "Central public spaces — squares, amphitheatres and green spaces.",
              ],
              note: "This creates a hierarchy of spaces — from public to semi-public to private.",
              images: [
                { src: "content/projects/01-science-city/smart-massing-axon.jpg", label: "Massing axonometric — streets, semi-open courtyards and central green commons", diagram: true },
              ],
            },
            {
              heading: "The “car-free courtyard” principle",
              text: [
                "All roads within the district have a speed limit of no more than 30 km/h, with pedestrians given the right of way on every section. Roads run through the residential blocks and under the arches of buildings.",
              ],
              subhead: "Interior spaces are:",
              bullets: [
                "Pedestrian-first.",
                "Focused on micromobility — bicycles and scooters.",
                "Safe for children and people with limited mobility.",
              ],
              groups: [
                { title: "Short routes & connectivity", sub: [
                  "A mesh-like, non-hierarchical street network.",
                  "A variety of alternative routes — no dead ends.",
                  "High permeability of the urban fabric.",
                  "Less traffic on any single street, and walking made more convenient.",
                ] },
                { title: "Priority for public transport", sub: [
                  "Buses.",
                  "Autonomous vehicles.",
                ] },
              ],
              images: [
                { src: "content/projects/01-science-city/smart-mobility-street.png", label: "A 30 km/h shared street — cyclists, an autonomous shuttle and a sheltered stop, pedestrians given priority" },
                { src: "content/projects/01-science-city/smart-street-section.png", label: "Street section — pedestrian promenade, micromobility lane, a single slow traffic lane and transit stop", diagram: true },
              ],
            },
            {
              heading: "Architecture & materials",
              groups: [
                { title: "Wood as a key material", sub: [
                  "Façades of wood and wood-based composites — local in origin.",
                  "Low carbon footprint.",
                  "Façade structures and components manufactured on the premises.",
                ] },
                { title: "Modularity & versatility", sub: [
                  "Volumes similar in type, but differing in proportion.",
                  "Rhythm of the façades.",
                  "Texture and colour of the wood.",
                  "Patterns of 3D-printed ceramic tiles.",
                ] },
                { title: "Low-carbon model", sub: [
                  "Wooden components.",
                  "Local materials.",
                  "Minimization of concrete.",
                  "Compact sizes.",
                ] },
                { title: "Readiness for “smart” systems", sub: [
                  "Smart lighting.",
                  "Energy management.",
                  "Climate monitoring.",
                  "Autonomous vehicles.",
                ] },
              ],
              images: [
                { src: "content/projects/01-science-city/smart-materials-card.png", label: "Façade materials — heat-treated pine/larch, 3D ceramic tile, composite & fibre cement, with their properties" },
                { src: "content/projects/01-science-city/smart-facades.jpg", label: "Façade variety — the same volumes in timber, ceramic tile and composite finishes" },
              ],
            },
            {
              heading: "Inside the apartments",
              text: [
                "Generous glazing, an exposed timber structure and warm oak floors carry the district's material language indoors — every living space opens onto a balcony and a view across the green streets.",
              ],
              images: [
                { src: "content/projects/01-science-city/smart-interior-01.png", label: "Living-dining space with full-height glazing onto the balcony and the street beyond" },
                { src: "content/projects/01-science-city/smart-interior-02.png", label: "Corner apartment — exposed timber ceiling, kitchen island and forest views" },
                { src: "content/projects/01-science-city/smart-interior-03.png", label: "Compact apartment opening to the green street and the autonomous shuttle line" },
              ],
            },
            {
              heading: "Three sectors, three palettes",
              text: [
                "The district is divided into three sectors, with buildings in each distinguished by their colour scheme. This approach allows the design to:",
              ],
              bullets: [
                "Create intuitive navigation and spatial cues.",
                "Add variety to the urban environment.",
                "Foster a sense of community identity among residents.",
              ],
              note: "The colour palettes are drawn from the paintings of artist Sergei Sochivko.",
              images: [
                { src: "content/projects/01-science-city/smart-community-center.jpg", label: "Three colour sectors mapped across the generated pattern", diagram: true },
                { src: "content/projects/01-science-city/smart-sectors-diagram.png", label: "The sectors read in the rooftops — an aerial across the district" },
                { src: "content/projects/01-science-city/smart-palette-sochivko.jpg", label: "Palettes sampled from Sochivko's paintings — here, the warm-palette neighbourhood", diagram: true },
                { src: "content/projects/01-science-city/smart-sector-warm.jpg", label: "Warm-palette sector — terracotta tile roofs threaded with green courtyards" },
                { src: "content/projects/01-science-city/smart-central-square.jpg", label: "Central square & amphitheatre between the sectors" },
                { src: "content/projects/01-science-city/smart-palette-neutral.jpg", label: "Neutral palette sampled from a Sochivko winter scene", diagram: true },
                { src: "content/projects/01-science-city/smart-sector-neutral-community.jpg", label: "Neutral-palette sector — slate-and-timber community building with green roofs & garden plots" },
                { src: "content/projects/01-science-city/smart-sector-neutral-square.jpg", label: "Neutral-palette sector — stepped square with cool grey, blue & timber façades" },
                { src: "content/projects/01-science-city/smart-palette-cool.jpg", label: "Cool palette sampled from a Sochivko winter cityscape", diagram: true },
                { src: "content/projects/01-science-city/smart-sector-cool-community.jpg", label: "Cool-palette sector — blue-clad community building & kindergarten in the pines" },
                { src: "content/projects/01-science-city/smart-sector-cool-cottages.jpg", label: "Cool-palette cottages — blue ceramic-shingle gables among birch & moss courtyards" },
              ],
            },
            {
              heading: "Sculptures inspired by Sochivko's paintings",
              text: [
                "Public sculptures, drawn from scenes in Sergei Sochivko's paintings, anchor the squares of each sector — a watermelon-market cairn, a timber sturgeon in a reflecting pool. They help create a sense of local identity and a connection to the place.",
              ],
              images: [
                { src: "content/projects/01-science-city/smart-sculpture-watermelon.jpg", label: "Watermelon-market sculpture paired with its source painting", diagram: true },
                { src: "content/projects/01-science-city/smart-sculpture-fish.jpg", label: "Timber sturgeon in a reflecting pool, paired with its source painting", diagram: true },
              ],
            },
            {
              heading: "Ponds & canals",
              text: [
                "A system of three ponds, linked by canals and threaded with boardwalks and bridges, runs through the heart of the district — generated as part of the same pattern and doubling as the neighbourhood's stormwater landscape and social waterfront.",
              ],
              images: [
                { src: "content/projects/01-science-city/smart-ponds-diagram.png", label: "The three ponds and their connecting canals, set into the generated pattern", diagram: true, dark: true },
                { src: "content/projects/01-science-city/smart-pond-01.jpg", label: "The central pond — beaches, boardwalks & bridges between the sectors" },
                { src: "content/projects/01-science-city/smart-pond-02.jpg", label: "Planted pond with a wooded island, edged by reed beds & paths" },
                { src: "content/projects/01-science-city/smart-pond-03.jpg", label: "On the water — pedal boats along the canal between the houses" },
              ],
            },
          ],
        },
        {
          key: "logistics", code: "J", title: "Manufacturing & Logistics Areas", tag: "Industrial · Generative",
          text: [
            "The layout of the industrial and logistics zone is generated from a specified modular grid and a set of parameters, so production halls, yards and courtyards resolve into a single continuous landscape rather than a field of isolated boxes.",
          ],
          list: [
            "The overall dimensions of the production buildings.",
            "The number of sections in each building.",
            "The number of internal courtyards.",
          ],
          images: [
            { src: "content/projects/01-science-city/logistics-00-locator.jpg", label: "Site plan — the manufacturing & logistics areas within the masterplan, south of the river", span: 2, fit: "contain", white: true },
            { src: "content/projects/01-science-city/logistics-03-aerial.png", label: "The resulting zone — folded timber halls woven around planted courtyards, ringed by truck docks & rail", span: 2 },
            { src: "content/projects/01-science-city/logistics-01-definition.jpg", label: "The generative definition — building dimensions, section counts & internal courtyards as parameters", span: 2, fit: "contain", white: true },
            { src: "content/projects/01-science-city/logistics-02-program.jpg", label: "Programme — logistics centre, greenhouses, 3D-printed ceramic tile & CLT panel manufacturing, with floor areas", span: 2, fit: "contain", white: true },
          ],
          endBlocks: [
            {
              heading: "Halls woven with green courtyards",
              text: [
                "The continuous folded roof steps down between the halls to carve out planted courtyards and rail-served yards, bringing daylight, greenery and the surrounding fields deep into the heart of the zone.",
              ],
              images: [
                { src: "content/projects/01-science-city/logistics-04-greenhouses.png", label: "Greenhouses set into the courtyards, with rail running through the planted spines" },
                { src: "content/projects/01-science-city/logistics-05-courtyard.png", label: "Close-up — sawtooth glazing, internal forest courtyards and rail-served loading" },
                { src: "content/projects/01-science-city/logistics-06-interior.png", label: "Inside a hall — exposed timber structure, skylit roof, conveyor lines and a rail platform" },
              ],
            },
          ],
        },
        {
          key: "playgrounds", code: "K", title: "Playgrounds", tag: "Public · Landscape pedagogy",
          text: [
            "The general idea — “the forest is a playground; the playground is the forest.”",
            "The playgrounds work as a unified “landscape pedagogy”: not individual attractions but a system of gently guided conditions where nature becomes the primary interface for play. Architecture does not compete with the forest but adapts it to human life — making it safe, understandable and accessible while preserving a sense of wildness, that very Siberian freedom in which play arises naturally.",
          ],
          endBlocks: [
            {
              heading: "A game without borders",
              text: [
                "The play areas don't confine activity within an enclosure but create “nodes” and “loops” in the routes: trails, boardwalks, footbridges, natural changes in level and small clearings. A child can start playing on the site and continue into the forest — on a snag, by the moss, in the sand or at the water's edge. The playground doesn't limit the scenario; it sets it in motion.",
              ],
            },
            {
              heading: "Maximum freedom of invention",
              text: [
                "Each zone is designed like a laboratory: a minimum of predefined “correct” actions and a maximum of opportunities to assemble, rearrange, experiment, make mistakes and improve. This is the principle of “not entertaining, but providing tools” — just like a real research environment, only expressed in a language children understand.",
              ],
            },
            {
              heading: "Environmental friendliness & safety",
              note: "Safety is achieved not through restrictions, but through a well-designed environment.",
              groups: [
                { title: "Sustainability as a design philosophy", sub: [
                  "Natural materials — wood, stone, sand, gravel — that age gracefully and can be repaired locally.",
                  "Minimal soil “sealing”: permeable pavements, decking on supports and localized reinforcement instead of solid concrete.",
                  "Careful treatment of trees — playgrounds avoid root zones, are supported at specific points and use existing clearings.",
                  "Seasonal elements embraced, not suppressed: water and sand in summer, snow and ice in winter — all full-fledged play materials.",
                ] },
                { title: "Safety without sterility", sub: [
                  "Gentle slopes, clearly defined depth contours, “shallow” areas and small islands.",
                  "Soft, natural shock-absorbing materials — sand, wood chips, gravel, snow — instead of rubber “carpet” tiles.",
                  "Real tools and equipment, with clear guidelines for use and a well-considered storage and monitoring system.",
                ] },
              ],
            },
            {
              heading: "Water play area",
              text: [
                "The concept: neither a pool nor a fountain, but “forest water” that can be controlled — where children become flow engineers and directors of water-based events.",
                "A small man-made backwater with banks of wood and stone divides the water into distinct zones: shallow water for toddlers, a “play zone” for active kids, and areas to stand, splash and manoeuvre. Floating raft platforms sit like little pontoons in a forest cove.",
              ],
              groups: [
                { title: "Game mechanics", sub: [
                  "Rafts and water “duels” — two platforms with fixed hand-pumped water cannons; the point is interacting with the force of the stream, balance, coordination and team rules, not the “battle”.",
                  "Water as a building block — hand pumps, wooden gutters, sluices and simple water features to redirect jets, cut mini-channels and launch boats.",
                  "Landscape education — children grasp flow, pressure, resistance and balance through their own bodies.",
                ] },
                { title: "Materials & environmental sustainability", sub: [
                  "Thermowood / larch decking (water-resistant), hidden fasteners, non-slip texture.",
                  "Shoreline of sand, pebbles and scattered boulders.",
                  "A closed-loop purification system (mechanical filtration + UV) with water-quality monitoring — preserving the “natural” feel without health risks.",
                ] },
              ],
              images: [
                { src: "content/projects/01-science-city/playground-water-diagram.png", label: "Water play area — raft platforms with hand pumps, depth zones, gutters & the closed-loop UV filtration system", diagram: true },
                { src: "content/projects/01-science-city/playground-water-render.png", label: "Forest water in use — children at the raft pumps, shallow banks and boardwalks among the pines" },
              ],
            },
            {
              heading: "Winter playground",
              text: [
                "The concept: in winter the forest becomes a source of building materials, and the site turns into a workshop where architecture takes shape — mazes, towers, fortresses and entire neighbourhoods.",
                "An open clearing with a clear layout of “construction lines”: where to dig and shape the snow, where to pile it, and where to raise the walls. Tools, moulds and sleds sit around the perimeter; at the centre is space for the “castle”, which turns out differently every season.",
              ],
              groups: [
                { title: "Game mechanics", sub: [
                  "The excavator as a symbol of environmental control — a child's toy excavator for moving snow sets the scale of a “real construction site”.",
                  "Snow-brick moulds — children build a module and construct a structure from it, learning masonry, stability, arches and buttresses first-hand.",
                  "Mazes and scenarios — an “urban” section (streets, dead ends, squares) and a “fortress” section (walls, towers, gates) for exploration, team or role-playing games.",
                ] },
                { title: "Environmental sustainability & seasonal logic", sub: [
                  "No permanent artificial surfaces — snow covers it in winter; it thaws and dries in spring; and the same ground serves as an “event field” or a place for quiet games in summer.",
                ] },
              ],
              images: [
                { src: "content/projects/01-science-city/playground-winter-diagram.png", label: "Winter playground — snow store, brick moulds, the toy excavator, maze “construction lines” & the snow fortress", diagram: true },
                { src: "content/projects/01-science-city/playground-winter-render.png", label: "In use — children moulding snow bricks, hauling sleds and raising the fortress among the pines" },
              ],
            },
            {
              heading: "Forest construction site",
              text: [
                "The concept: a place where children try their hand at being creators rather than consumers — building a hideout, a bridge, a shelf or a tent — and learning to take responsibility for the result.",
                "The site reads as an open-air workshop in a clearing: wooden platforms, workbenches, a store of materials (twigs, poles, planks) and assembly zones. Nearby a “forest store” holds natural materials — pine cones, bark, stones and wood scraps — to fold into the structures and games.",
              ],
              groups: [
                { title: "Game mechanics", sub: [
                  "A set of realistic tools, safety-adapted — hammers, saws, clamps, ropes, hand drills — everything that makes construction feel authentic.",
                  "The “build / break” principle — projects aren't set in stone but move through cycles; the value is in the process, iteration and teamwork, not the end product.",
                  "A social aspect — children negotiate, assign roles, defend ideas and experiment with leadership and cooperation.",
                ] },
              ],
              images: [
                { src: "content/projects/01-science-city/playground-build-diagram.png", label: "Forest construction site — material store, workbenches, assembly zone & the “build / break” cycle of huts and bridges", diagram: true },
                { src: "content/projects/01-science-city/playground-build-render-01.png", label: "“Forest build” in use — children with tools, wheelbarrows and a timber climbing tower" },
                { src: "content/projects/01-science-city/playground-build-render-02.png", label: "Pulleys, buckets and a scaffold — real construction mechanics scaled for play" },
              ],
            },
            {
              heading: "Archaeological excavations",
              text: [
                "The concept: the child becomes an explorer who “reads the land” and pieces its history together bit by bit — a game about attention, patience and the joy of discovery.",
                "A system of “excavation sites” with layers of sand and soil, walkways and rope barriers makes the place feel like a real expedition. Large “bones” and skeletal fragments are set into the landscape as artifacts — some to be discovered, cleaned and assembled into a display.",
              ],
              groups: [
                { title: "Game mechanics", sub: [
                  "Excavation as a scenario — an initial search area (small fragments), a “major find” area (skull / ribs) and an “open-air museum” where finds are compared.",
                  "Taxonomy at an elementary level — hint cards, silhouettes and “expedition maps” that guide without explaining everything.",
                  "Textures that feel real — sand, damp earth, wooden planks and stones build a sense of immersion.",
                ] },
              ],
              note: "In a residential complex for researchers, such a space becomes a metaphor for the parents' profession: the world is discovered through observation, hands-on work and a love of the unknown.",
              images: [
                { src: "content/projects/01-science-city/playground-archaeo-diagram.png", label: "Excavation field — search pits, the “major find” skeleton with a slide, walkways, rope barriers & the open-air museum", diagram: true },
                { src: "content/projects/01-science-city/playground-archaeo-render.png", label: "On the dig — children excavating in the sand pits among giant bones and a ribcage climber" },
              ],
            },
          ],
        },
        {
          key: "conference", code: "L", title: "Conference Hall", tag: "Civic · Landmark",
          text: [
            "A flowing, ribboned landmark at the heart of the campus — its stainless-steel shell lifting off the ground to weave plazas, stepped seating and gardens beneath, and opening into a timber-lined auditorium within.",
          ],
          images: [
            { src: "content/projects/01-science-city/conference-01-aerial.png", label: "The hall from above — a ribboned steel shell threading between the timber-and-brick campus blocks", span: 2 },
            { src: "content/projects/01-science-city/conference-02-canopy.png", label: "Beneath the canopy — the building lifts to shelter an amphitheatre of stepped timber seating and gardens", span: 2 },
            { src: "content/projects/01-science-city/conference-03-plaza.png", label: "The roofscape & stepped plaza — public routes flowing over and under the shell", span: 2 },
            { src: "content/projects/01-science-city/conference-04-auditorium.png", label: "Inside the auditorium — a timber-lined hall under the swirling, layered ceiling", span: 2 },
          ],
        },
        {
          key: "expo", code: "M", title: "EXPO", tag: "Civic · Landmark",
          text: [
            "A great timber ring set in the fields at the edge of the masterplan — terraced floors of exhibition space wrapping a circle of preserved forest at its core.",
          ],
          images: [
            { src: "content/projects/01-science-city/expo-00-locator.jpg", label: "Site plan — the EXPO ring at the southern edge of the masterplan", span: 2, fit: "contain", white: true },
            { src: "content/projects/01-science-city/expo-01-field.png", label: "From the fields — the timber ring rising above the wheat, a green roof of pines along its crown", span: 2 },
            { src: "content/projects/01-science-city/expo-02-aerial.png", label: "Aerial — terraced timber floors wrapping a circle of preserved forest at the core", span: 2 },
            { src: "content/projects/01-science-city/expo-03-sunset.png", label: "At sunset — the approach road aligned with the ring, the sun setting through its courtyard", span: 2 },
          ],
        },
      ],

      // whole-project general imagery (not tied to one building)
      general: [
        { src: "content/projects/01-science-city/gen-00-patterns.png",  label: "The site is developed from mathematical patterns generated by algorithms — parametrically adjustable structures that adapt automatically as constraints and new ideas emerge during design, shortening timelines and improving the quality of design solutions.", span: 2, fit: "contain", white: true },
        { src: "content/projects/01-science-city/gen-path-left.png",  label: "Researcher housing among the pines",     span: 1, ar: "1/1" },
        { src: "content/projects/01-science-city/gen-framework.png",   label: "Parametric masterplan framework",        span: 1, ar: "1/1", white: true },
        { src: "content/projects/01-science-city/gen-auditorium.png",  label: "Open-air auditorium among the cones",     span: 2 },
        { src: "content/projects/01-science-city/gen-boardwalk.png",   label: "Riverside boardwalk & riparian villas",   span: 1 },
        { src: "content/projects/01-science-city/gen-winter.png",      label: "The settlement in winter",                span: 1 },
      ],
    },

    /* ============ 02 — DADONGHAI, SANYA (sectioned) ============ */
    {
      n: "02", slug: "dadonghai-sanya", title: "Dadonghai, Sanya",
      type: "Masterplan / Revitalization Concept", year: "2026", loc: "Sanya, Hainan, CN",
      status: "Concept Design", hue: 195,
      hasVideo: true, video: null,
      youtube: "E7F8vig9bqE",                      // ← project film (YouTube)
      cover: null,                                 // index hover preview (placeholder until a render is chosen)
      circles: [
        "content/projects/02-dadonghai-sanya/luming-overview-birdseye.jpg",
        "content/projects/02-dadonghai-sanya/yuhai13-render-rooftop-farm.png",
        "content/projects/02-dadonghai-sanya/haihua-road-festival.png",
      ],
      lead: "Not altering the diversity of Dadonghai, but highlighting and developing it.",
      credits: [
        { role: "Project Team", names: ["Albert Sumin", "Myrto Klimi", "Irina Sorokina", "Viktoriia Dovgoer", "Tringa Hasbahta"] },
        { role: "Project made at", names: ["Coop Himmelb(l)au"], align: "right" },
      ],
      facts: [
        { k: "Program", v: "Masterplan / Revitalization" },
        { k: "Location", v: "Sanya, Hainan" },
        { k: "Year", v: "2026" },
        { k: "Status", v: "Concept Design" },
      ],
      overview: [
        "The Dadonghai area is characterized by a blend of neighborhoods, natural landscapes, and activities. Our goal is not to alter this diversity, but to highlight and further develop it. Our strategy is to thoroughly study each location, identify its unique characteristics, preserve the existing way of life and local features as much as possible, while improving the quality of the environment and the experience of being in the area for both tourists and local residents.",
      ],
      closing: null,

      sections: [
        {
          key: "micro-renewal", code: "A", title: "Micro-Renewal Strategy", tag: "Main Principles · 3 Levels",
          text: [
            "The micro-renewal integration system is organized as a three-level strategy that allows the master plan to work with different degrees of intervention, from light preservation measures to comprehensive spatial transformation. Instead of treating the whole territory with one uniform design approach, the system recognizes that different areas require different scales of action depending on their current condition, urban value, ecological importance, level of degradation, and redevelopment potential. This makes the renewal process more flexible, economically realistic, and sensitive to the existing urban fabric.",
            "Together, the three levels form a coordinated micro-renewal framework. Level 1 protects and strengthens the natural base of the district. Level 2 improves everyday public space and mobility experience. Level 3 restructures complex urban areas through architectural and spatial transformation. The system allows the project to combine quick, achievable improvements with long-term redevelopment goals, prioritizing investments so some areas improve immediately while others are prepared for phased comprehensive renovation.",
          ],
          levels: [
            { n: "1", title: "Green Zones Preservation", tag: "Ecological foundation",
              body: "Protection, activation, and careful improvement of existing green areas. These zones are valuable urban assets to be preserved and enhanced through low-impact interventions — maintaining the ecological structure of the district, protecting existing vegetation, improving biodiversity, and strengthening the continuity of green corridors. Actions may include reorganizing existing landscapes, improving pedestrian access, adding resting areas, upgrading lighting, introducing ecological planting, and connecting green spaces to surrounding functions. Future development integrates with nature rather than replacing it." },
            { n: "2", title: "Streets & Surface Redevelopment", tag: "The public realm",
              body: "Public spaces, streets, sidewalks, squares, courtyards and other urban surfaces that define everyday experience at the pedestrian level — landscape, paving, street furniture, lighting, drainage, shading, planting, and bicycle infrastructure. The goal is to transform ordinary streets and leftover spaces into attractive, accessible, functional environments without necessarily changing the buildings themselves. It creates visible, immediate improvements, supports local commerce, increases walkability, reduces visual disorder, and establishes a more unified urban identity." },
            { n: "3", title: "Spatial Comprehensive Renovation", tag: "Deep transformation",
              body: "The deepest, most transformative level — applied where surface improvements are not enough and the existing spatial structure, building condition, land use or urban form requires substantial change. It may include building renovation, façade upgrades, adaptive reuse, demolition of low-quality structures, new construction, plot redevelopment, reorganization of functions, and new mixed-use blocks. Beyond physical renovation, it changes the role and performance of specific areas — introducing new public programs, commerce, housing, cultural and community facilities, and better connections with surrounding districts, unlocking long-term development potential." },
          ],
          images: [
            { src: "content/projects/02-dadonghai-sanya/micro-renewal-01-levels-map.jpg",            label: "Three intervention levels mapped across Dadonghai — green preservation, surface redevelopment, comprehensive renovation", span: 2, fit: "contain" },
            { src: "content/projects/02-dadonghai-sanya/micro-renewal-02-renovation-buildings.jpg",   label: "Level 3 — buildings & communities slated for comprehensive spatial renovation", span: 2, fit: "contain" },
            { src: "content/projects/02-dadonghai-sanya/micro-renewal-03-social-infrastructure.jpg",  label: "Social infrastructure — school, kindergarten & renovated hospital in the Yuehai Lane district", span: 2, fit: "contain" },
            { src: "content/projects/02-dadonghai-sanya/micro-renewal-04-amenities-map.jpg",          label: "Roofs — solar, urban farms, rooftop gardens, observation & parade-viewing decks", span: 2, fit: "contain" },
          ],
        },
        {
          key: "luming", code: "B", title: "Luming Community", tag: "Cultural Quarter",
          topImages: [
            { src: "content/projects/02-dadonghai-sanya/luming-existing-context.png", label: "Existing context — the Luming neighborhood today" },
            { src: "content/projects/02-dadonghai-sanya/luming-overview-diagram.jpg", label: "Micro-renewal strategy — overall diagram" },
            { src: "content/projects/02-dadonghai-sanya/luming-overview-birdseye.jpg", label: "Bird's-eye view — rooftops, bridges & public spaces" },
          ],
          text: [
            "The overall concept behind the Luming Community project is to transform this neighborhood into the new heart of the district and a hub of urban life. The neighborhood already features a wide range of commercial facilities — hotels, restaurants, and shops; we just need to ensure they function as a cohesive system.",
            "The only thing missing to fully realize this place's potential is a cultural component, so we plan to create a museum quarter, a bookstore, and small public spaces. We also plan to restore the façades and add extra space to the apartments through new balconies — which also provide shade for the interiors — and to introduce a second street layer at rooftop level for commercial and private activities.",
          ],
          beforeAfter: [
            { before: "content/projects/02-dadonghai-sanya/luming-ba1-before.jpg", after: "content/projects/02-dadonghai-sanya/luming-ba1-after.png", label: "The restoration of two old buildings" },
            { before: "content/projects/02-dadonghai-sanya/luming-ba2-before.jpg", after: "content/projects/02-dadonghai-sanya/luming-ba2-after.png", label: "The second street layer at rooftop level to create a hub of urban activity and revitalize businesses" },
            { before: "content/projects/02-dadonghai-sanya/luming-ba3-before.jpg", after: "content/projects/02-dadonghai-sanya/luming-ba3-after.png", label: "The restoration of the old building" },
            { before: "content/projects/02-dadonghai-sanya/luming-ba4-before.jpg", after: "content/projects/02-dadonghai-sanya/luming-ba4-after.png", label: "The restoration of the old building" },
          ],
          endBlocks: [
            {
              heading: "Sanya Coral Reef Museum",
              text: [
                "Sanya Coral Reef Museum consists of two wings, one of which is an existing abandoned building that we decided to renovate. This building has a beautiful terrace that is ideal for the museum's needs. The new museum building adds a cultural dimension to life in the Luming neighborhood.",
              ],
              images: [
                { src: "content/projects/02-dadonghai-sanya/museum-01-exterior.png", label: "The museum's two wings linked by an elevated bridge" },
                { src: "content/projects/02-dadonghai-sanya/museum-02-facade.png",   label: "View from inside Luming community" },
                { src: "content/projects/02-dadonghai-sanya/museum-03-courtyard.png", label: "Reconstructed building" },
                { src: "content/projects/02-dadonghai-sanya/museum-04-diagram.png",  label: "Two-wing concept — new building + reconstructed building", diagram: true },
                { src: "content/projects/02-dadonghai-sanya/museum-05-interior.png", label: "Coral reef gallery under the glazed dome" },
              ],
            },
          ],
          images: [],
          reserved: 0,
        },
        {
          key: "yuhai13", code: "C", title: "No. 13 Yuhai Road", tag: "Courtyard Block · Renewal",
          text: [
            "For the No. 13 Yuhai Road plot we suggest a calibrated set of interventions — preserving what already works at the heart of the block while upgrading its envelope, rooftops and ground floor, and rebalancing the share of space given to cars versus community life.",
          ],
          list: [
            "Preserve the function and space of the courtyard while improving the quality of its elements.",
            "Restore the façades and add extra space to the apartments through adding balconies; this will also provide shade for the interior spaces.",
            "Convert the rooftops into spaces for urban farms.",
            "Redesign the commercial spaces on the street-facing façades.",
            "Reorganize the parking area by reducing the number of parking spots and build the kindergarten and community spaces.",
          ],
          topImages: [
            { src: "content/projects/02-dadonghai-sanya/yuhai13-01-solution-axon.jpg",        label: "Proposed renewal — courtyard, rooftop farms, kindergarten, community & commercial spaces" },
            { src: "content/projects/02-dadonghai-sanya/yuhai13-02-courtyard-analysis.jpg",   label: "Analysis of the existing courtyard — canopies, natural factors & everyday elements" },
          ],
          beforeAfter: [
            { before: "content/projects/02-dadonghai-sanya/yuhai13-ba1-before.jpg", after: "content/projects/02-dadonghai-sanya/yuhai13-ba1-after.png", label: "Courtyard transformation — improvised canopies become a shaded community garden" },
            { before: "content/projects/02-dadonghai-sanya/yuhai13-ba2-before.jpg", after: "content/projects/02-dadonghai-sanya/yuhai13-ba2-after.png", label: "Street frontage — restored façades, new balconies & a greened pergola edge" },
            { before: "content/projects/02-dadonghai-sanya/yuhai13-ba3-before.jpg", after: "content/projects/02-dadonghai-sanya/yuhai13-ba3-after.png", label: "Commercial corner — redesigned street-facing shopfronts & active sidewalk life" },
          ],
          images: [
            { src: "content/projects/02-dadonghai-sanya/yuhai13-render-rooftop-farm.png",         label: "Rooftop converted into an urban farm — shaded growing beds tended by residents", span: 2 },
            { src: "content/projects/02-dadonghai-sanya/yuhai13-render-kindergarten-square.png",   label: "The square in front of the kindergarten — water play, fountains & shaded seating", span: 2 },
          ],
          reserved: 0,
        },
        {
          key: "yuehai-lane", code: "D", title: "Yuehai Lane Dormitory & Hospital", tag: "Dormitory Block · Renewal",
          text: [
            "The Yuehai Lane dormitory block and its adjacent hospital are reworked as a single connected neighbourhood. Clearing the cars from the centre of the site frees a continuous green spine — Yuehai Lane — that threads the dormitory bars, the community spaces and the renovated hospital into one shared, walkable territory.",
          ],
          list: [
            "Relocate the parking lot beyond the site boundaries to create comprehensive neighbourhood space.",
            "Restore the façades and add extra space to the apartments through adding balconies; this will also provide shade for the interior spaces.",
            "Convert the rooftops into spaces for urban farms.",
            "Renovate the hospital and its territory.",
          ],
          topImages: [
            { src: "content/projects/02-dadonghai-sanya/yuehai-lane-01-solution-axon.jpg", label: "Proposed renewal — relocated parking, green community spine, rooftop farms & a renovated hospital" },
          ],
          beforeAfter: [
            { before: "content/projects/02-dadonghai-sanya/yuehai-lane-ba1-before.jpg", after: "content/projects/02-dadonghai-sanya/yuehai-lane-ba1-after.png", label: "Dormitory façade & courtyard — weathered slab and car park become timber balconies over a shaded community pool" },
            { before: "content/projects/02-dadonghai-sanya/yuehai-lane-ba2-before.jpg", after: "content/projects/02-dadonghai-sanya/yuehai-lane-ba2-after.png", label: "Hospital block & lane — derelict frontage and roadside parking become a renovated block with rooftop garden and raised planting beds" },
            { before: "content/projects/02-dadonghai-sanya/yuehai-lane-ba3-before.jpg", after: "content/projects/02-dadonghai-sanya/yuehai-lane-ba3-after.png", label: "Hospital courtyard — overgrown back lot becomes a landscaped garden under tensile canopies and a new faceted façade" },
          ],
          images: [],
          reserved: 0,
        },
        {
          key: "ruihai-park", code: "E", title: "Ruihai Shopping Park", tag: "Waterfront · Public Realm",
          text: [
            "At Ruihai, the renewal works at the scale of the public realm. The existing pedestrian bridge is kept and restored rather than replaced, while the asphalt below is given back to people — a shaded, misted park that stitches the shopping centre directly to the waterfront along Lanhai Alley.",
          ],
          list: [
            "Restoration of the bridge while preserving its original appearance.",
            "Installation of fabric shade canopies and water spray systems to provide protection from the hot climate.",
            "Creation of a park area in place of the parking lot to connect the shopping centre with the waterfront.",
          ],
          topImages: [
            { src: "content/projects/02-dadonghai-sanya/ruihai-park-01-solution-axon.jpg", label: "Proposed renewal — restored bridge, fabric shade canopies & a new waterfront park along Lanhai Alley" },
          ],
          beforeAfter: [
            { before: "content/projects/02-dadonghai-sanya/ruihai-park-ba1-before.jpg", after: "content/projects/02-dadonghai-sanya/ruihai-park-ba1-after.png", label: "The pedestrian bridge — weathered blue portals and a rusted gate become a restored walkway with shade canopies, misting & seating" },
          ],
          images: [],
          reserved: 0,
        },
        {
          key: "haoting-north", code: "F", title: "Commercial Building — Shanghai Haoting North", tag: "Mixed-Use Block · Rooftop Street",
          text: [
            "On the commercial block north of Shanghai Haoting, the renewal adds a whole new ground: a second street lifted to rooftop level. Threaded between Haiyun Road and Haihua Road, this raised layer carries commercial and private activity above the existing fabric, knitting the restored buildings, new public spaces and the wider city skyline into one harmonious landscape.",
          ],
          list: [
            "Introducing a second street layer at rooftop level for commercial and private activities.",
            "Buildings restoration and functional adaptation.",
          ],
          topImages: [
            { src: "content/projects/02-dadonghai-sanya/haoting-north-01-solution-axon.jpg", label: "Proposed renewal — a second rooftop street linking restored blocks, new public spaces & a harmonious skyline between Haiyun and Haihua Roads" },
          ],
          beforeAfter: [
            { before: "content/projects/02-dadonghai-sanya/haoting-north-ba1-before.jpg", after: "content/projects/02-dadonghai-sanya/haoting-north-ba1-after.png", label: "Honghai Xiang market street — cluttered signage becomes unified glass shopfronts under a misted second-street layer with rooftop cafés" },
            { before: "content/projects/02-dadonghai-sanya/haoting-north-ba2-before.jpg", after: "content/projects/02-dadonghai-sanya/haoting-north-ba2-after.png", label: "Haiyun Road corner — traffic and tangled signage give way to restored colonial façades and a calmed, tree-lined market plaza" },
            { before: "content/projects/02-dadonghai-sanya/haoting-north-ba3-before.jpg", after: "content/projects/02-dadonghai-sanya/haoting-north-ba3-after.png", label: "Stripped corner block — a half-demolished shell on a dusty lot is adapted into a lit rooftop bar & restaurant linked by the second-street bridge" },
          ],
          images: [],
          reserved: 0,
        },
        {
          key: "haihua-road", code: "G", title: "Haihua Road", tag: "Shared-Space Street · R03",
          text: [
            "Haihua Road (R03, 15 m) is reconceived as a shared-space street. The section diagrams S01 and S02 illustrate a hierarchy where pedestrians, cyclists, shuttle vehicles, and limited service traffic coexist within a slower and safer mobility environment — a continuous pedestrian zone flanked by shared lanes and recreation edges rather than a car-dominated carriageway.",
            "A sponge-city system runs along all of the city's streets to absorb and slow stormwater and prevent flooding: bioswale rain gardens, planted medians and permeable edges replace bare kerbs and asphalt.",
          ],
          topImages: [
            { src: "content/projects/02-dadonghai-sanya/haihua-road-01-sections.jpg", label: "Shared-space street strategy — mobility hierarchy, programme legend and sections S01 / S02 along the R03 corridor" },
          ],
          beforeAfter: [
            { before: "content/projects/02-dadonghai-sanya/haihua-road-ba1-before.jpg", after: "content/projects/02-dadonghai-sanya/haihua-road-ba1-after.png", label: "Haihua Road — roadside parking and bare medians become sponge-city rain gardens, planted strips, arcaded shopfronts & shade canopies" },
          ],
          images: [
            { src: "content/projects/02-dadonghai-sanya/haihua-road-festival.png", label: "Festivals — the streets of Dadonghai aren't just for cars; the city hosts festivals, parades and other events here, watched from the second-street terraces", span: 2 },
          ],
          reserved: 0,
        },
      ],

      // whole-project general imagery
      general: [
        { src: "content/projects/02-dadonghai-sanya/general-context-grid.png", label: "This is already a nice place — we just need to show it from the proper angle", span: 2 },
      ],
    },

    /* ============ 03 — WAVY SQUARE (bespoke interactive page) ============ */
    {
      n: "03", slug: "wavy-square", title: "Wavy Square",
      type: "Public Space · Interactive", year: "2013", loc: "Paris",
      status: "Concept Design", hue: 200,
      href: "wavy-square.html",                    // ← bespoke page, not the data-driven project.html
      hasVideo: true, video: null,                 // shows the VIDEO/▶ motion tag in the index
      cover: "content/projects/03-wavy-square/ref-04-render.jpg",
      circles: [
        "content/projects/03-wavy-square/ref-04-render.jpg",
        "content/projects/03-wavy-square/ref-03-context.jpg",
        "content/projects/03-wavy-square/ref-02-ripples.jpg",
      ],
      previewImgs: [
        "content/projects/03-wavy-square/ref-04-render.jpg",
        "content/projects/03-wavy-square/ref-01-wide.jpg",
        "content/projects/03-wavy-square/ref-02-ripples.jpg",
        "content/projects/03-wavy-square/ref-03-context.jpg",
      ],
      lead: "Visualizing the effect of a person's presence in an urban square.",
    },

    /* ============ 04 — URBAN 3D ANALYSIS (bespoke interactive page) ============ */
    {
      n: "04", slug: "urban3d", title: "Urban 3D Analysis",
      type: "Web Application · Urban Analytics", year: "2026", loc: "Software",
      status: "Live", hue: 215,
      href: "urban3d.html",                         // ← bespoke page
      hasVideo: true, video: null,                  // shows the VIDEO/▶ motion tag in the index
      cover: "content/projects/04-urban3d/urban3d-02-network-glow.png",
      previewImgs: [
        "content/projects/04-urban3d/urban3d-02-network-glow.png",
        "content/projects/04-urban3d/urban3d-06-isochrone-night.png",
        "content/projects/04-urban3d/urban3d-01-voxel-city.png",
        "content/projects/04-urban3d/urban3d-04-heat-terrain.png",
        "content/projects/04-urban3d/urban3d-05-building-select.png",
      ],
      lead: "An interactive 3D analytics platform that reads any neighbourhood from OpenStreetMap and evaluates how walkable and well-ventilated it really is.",
    },

    /* ============ 05 — THE WOVEN TOWER (sectioned, real content) ============ */
    {
      n: "05", slug: "woven-tower", title: "The Woven Tower",
      type: "Residential Tower", year: "2025", loc: "New York",
      status: "Concept Design", hue: 228,
      hasVideo: true, video: null,
      youtube: "D5JnTa35qcE",                       // ← project film (YouTube short)
      cover: "content/projects/05-woven-tower/woven-03-cafe.png",
      circles: [
        "content/projects/05-woven-tower/woven-02-frontal.png",
        "content/projects/05-woven-tower/woven-04-facade-detail.png",
        "content/projects/05-woven-tower/woven-01-context-aerial.png",
      ],
      previewImgs: [
        "content/projects/05-woven-tower/woven-02-frontal.png",
        "content/projects/05-woven-tower/woven-01-context-aerial.png",
        "content/projects/05-woven-tower/woven-04-facade-detail.png",
        "content/projects/05-woven-tower/woven-05-lookup.png",
        "content/projects/05-woven-tower/woven-03-cafe.png",
      ],
      lead: "A 200-metre residential high-rise wrapped in a woven diagrid skin.",
      credits: [
        { role: "Project Team", names: ["Albert Sumin", "Irina Sorokina"] },
        { role: "Workshop", names: ["PAACADEMY — BIM &amp; Rhino.Inside for Advanced Tower Design"], align: "right" },
      ],
      facts: [
        { k: "Program", v: "Residential Tower" },
        { k: "Location", v: "New York" },
        { k: "Year", v: "2025" },
        { k: "Status", v: "Concept Design" },
      ],
      overview: [
        "The Woven Tower is a 200-metre residential high-rise wrapped, from podium to parapet, in a single woven diagrid skin. The screen pinches inward at the mid-rise and flares again toward the crown, dissolving an otherwise rectangular slab into a soft, continuously curving silhouette that shades every apartment behind it and changes with every viewpoint.",
        "It was developed as a teaching sample, so its real subject is the method: the entire tower — massing, structure, façade, unit mix and floor plans — is generated and held in sync by a single Grasshopper definition running inside Revit through Rhino.Inside. A change to the silhouette or to the apartment ratios re-rolls the whole BIM model rather than being redrawn by hand.",
      ],
      closing: "The tower was developed as a sample project for the workshop <a href=\"https://paacademy.com/course/bim-rhinoinside-for-advanced-tower-design\" target=\"_blank\" rel=\"noopener\" style=\"border-bottom:1px solid currentColor\">BIM &amp; Rhino.Inside for Advanced Tower Design</a> on the PAACADEMY educational platform — a study in keeping geometry, data and documentation in one continuous, re-rollable model.",

      clips: [
        { src: "content/projects/05-woven-tower/woven-film.mp4", label: "Project film — the woven skin read across the full height of the tower" },
      ],

      sections: [
        {
          key: "form", code: "A", title: "Form & Silhouette", tag: "Massing · Residential",
          text: [
            "From the street the tower reads as a single woven mass. The diagrid skin tightens around the building's waist and opens again toward the top, so the flat rectangular floor plate is never seen directly — only its shifting, curving shadow behind the screen.",
            "A landscaped podium lifts the residential lobby above the sidewalk and roots the tower in its dense downtown block, while the woven screen runs unbroken from the planted base to the parapet.",
          ],
          images: [
            { src: "content/projects/05-woven-tower/woven-02-frontal.png",        label: "Street elevation — the diagrid pinching at mid-height and flaring toward the crown", span: 2, fit: "contain", white: true },
            { src: "content/projects/05-woven-tower/woven-01-context-aerial.png", label: "Aerial — the tower among the downtown blocks", span: 1, fit: "contain", white: true },
            { src: "content/projects/05-woven-tower/woven-03-cafe.png",           label: "Seen from a café across the street", span: 1, fit: "contain", white: true },
          ],
        },
        {
          key: "facade", code: "B", title: "The Woven Façade", tag: "Envelope · Diagrid Screen",
          text: [
            "The envelope is a deep diagrid of structural frames, each opening filled with fine cables woven across the diamond like the warp of a loom. The weave thickens where the building turns and thins across the flat faces, so the screen registers the curvature of the form as a change in density rather than in shape.",
            "Behind the screen sit private balconies and full-height glazing. The woven layer works as a brise-soleil and a balustrade at once — cutting solar gain, giving every unit an outdoor room, and veiling the glass line so the tower keeps a continuous, textile-like surface.",
          ],
          images: [
            { src: "content/projects/05-woven-tower/woven-04-facade-detail.png", label: "Close-up — woven cables stretched across the diagrid frames, balconies and glazing behind", span: 2 },
            { src: "content/projects/05-woven-tower/woven-05-lookup.png",        label: "Looking up the façade — the screen tapering toward the sky", span: 2 },
          ],
        },
        {
          key: "structure", code: "C", title: "Components & Structure", tag: "Assembly · Exploded",
          text: [
            "Pulled apart, the tower resolves into four coordinated systems. The woven diagrid screen carries the architectural surface; a structural megaframe braces the perimeter; a stack of identical floor plates spans between core and façade; and a line of perimeter columns and the central core gather the loads to the ground.",
            "Because each layer is a separate parametric system in the model, they can be tuned independently — the weave can be re-spaced, the structure re-sized, the slab edge re-profiled — and the assembly stays coordinated.",
          ],
          images: [
            { src: "content/projects/05-woven-tower/woven-06-exploded-axon.png", label: "Exploded axonometric — woven screen, structural frame, floor plates and perimeter columns", span: 2, fit: "contain", white: true },
          ],
        },
        {
          key: "program", code: "D", title: "Program & Unit Mix", tag: "Stacking · Area by Use",
          text: [
            "The stack is mixed-use: retail and the residential lobby anchor the base, a band of offices sits above, and the bulk of the tower is given to apartments — a calibrated blend of studios, one-, two- and three-bedroom units stepping up through the height.",
            "Every floor in the model carries its programme as data, so the apartment mix and the area devoted to circulation, MEP and cores can be measured directly. The distribution diagram below is read straight out of the live model — change the ratios and the chart, and the tower, re-roll together.",
          ],
          images: [
            { src: "content/projects/05-woven-tower/woven-07-program-diagram.png", label: "Program distribution — floor area by use across the stack, read from the live model", span: 2 },
          ],
        },
        {
          key: "floors", code: "E", title: "Typical Floors", tag: "Residential Plates",
          text: [
            "The residential floors share one rational parti: a deep central core with twin stair and elevator banks, technical and MEP rooms tucked between them, and a ring of apartments wrapped by the woven screen and its balconies. Within that frame the unit mix changes floor to floor.",
            "The two plates below are representative — a studio-dominant level and a level of one- and three-bedroom apartments — both generated from the same parametric layout so partitions, doors and fixtures follow the changing mix automatically.",
          ],
          images: [
            { type: "floors", label: "Typical residential floor plans", span: 2,
              floors: [
                { n: "1", name: "Studio level",      src: "content/projects/05-woven-tower/woven-08-plan-studio.png" },
                { n: "2", name: "1BR / 3BR level",    src: "content/projects/05-woven-tower/woven-09-plan-1br3br.png" },
              ],
            },
          ],
        },
        {
          key: "workflow", code: "F", title: "Computational Workflow", tag: "Rhino.Inside · Grasshopper · Revit",
          text: [
            "The whole project lives in one Grasshopper definition running inside Revit through Rhino.Inside.Revit. Named clusters — Basic Shape, Levels, Floors, Core, Glass Façade, Façade, Slabs and Chart — each own one part of the building, and together they author native Revit elements rather than dumb geometry.",
            "Editing happens at the level of intent: adjust the silhouette curve, the floor-to-floor height or the unit ratios, and the definition rebuilds the levels, slabs, core, glazing, woven screen and the area schedule in step. Geometry, data and documentation stay in a single continuous, re-rollable model.",
          ],
          images: [
            { src: "content/projects/05-woven-tower/woven-10-bim-workflow.png", label: "Rhino.Inside.Revit — the Grasshopper definition authoring the tower as live BIM", span: 2, fit: "contain", white: true },
          ],
        },
      ],
    },

    /* ============ 06 — THE ICE THRESHOLD (renders + film) ============ */
    {
      n: "06", slug: "ice-threshold", title: "The Ice Threshold",
      type: "Surface Interface Sanctuary", year: "2023", loc: "Europa, Jupiter",
      status: "Concept Design", hue: 205,
      hasVideo: true, video: null,
      hideTopFilm: true,                            // film is placed AFTER the renders, not at the top
      cover: "content/projects/06-ice-threshold/ice-05-spires.jpg",
      circles: [
        "content/projects/06-ice-threshold/ice-04-subsurface.jpg",
        "content/projects/06-ice-threshold/ice-01-emergence.jpg",
        "content/projects/06-ice-threshold/ice-07-lattice.png",
      ],
      previewImgs: [
        "content/projects/06-ice-threshold/ice-05-spires.jpg",
        "content/projects/06-ice-threshold/ice-01-emergence.jpg",
        "content/projects/06-ice-threshold/ice-06-dusk.jpg",
        "content/projects/06-ice-threshold/ice-04-subsurface.jpg",
        "content/projects/06-ice-threshold/ice-10-inner-lattice.png",
      ],
      lead: "A monumental interface rising through Europa's ice.",
      credits: [
        { role: "Project Team", names: ["Albert Sumin"] },
        { role: "Workshop", names: ["DesignMorphine"], align: "right" },
      ],
      facts: [
        { k: "Program", v: "Surface Interface Sanctuary" },
        { k: "Location", v: "Europa, moon of Jupiter" },
        { k: "Year", v: "2023" },
        { k: "Status", v: "Concept Design" },
      ],
      overview: [
        "The Ice Threshold is a monumental interface structure created by Europa's native ocean-dwelling civilization. Rising through the frozen crust, it serves as a sacred point of emergence, observation, and exchange between the hidden world beneath the ice and the celestial landscape above.",
        "Conceived as a woven, crystalline arc paired with a partly submerged observation pod, the Threshold frames the encounter between two worlds — the dark ocean held kilometres beneath the ice, and the open sky where Jupiter and the distant Sun turn overhead. Its translucent lattice glows from within: at once a beacon read across the frozen plain and a lens trained on the heavens.",
      ],
      generalTitle: "Renders",
      sections: [
        {
          key: "workflow", code: "A", title: "Modeling Workflow", tag: "Rhino · SubD · Process",
          text: [
            "The Ice Threshold was modelled entirely in Rhino. The form began as a concept image and a hand sketch — its looping spine, splayed legs, observation pod and glass pattern noted directly on paper — which were brought into the viewport as a backdrop and traced into a set of clean guide curves.",
            "From those curves a smooth SubD body was lofted and refined across the Top, Front, Right and Perspective views, then split into its layered systems: a glass envelope, columns and beams, and a deep cellular truss “net” woven through the surface. A final clay render confirms the structure before texturing and lighting.",
          ],
          images: [
            { src: "content/projects/06-ice-threshold/wf-01-reference.png",     label: "Concept reference generated with AI — the target image for the form", span: 2 },
            { src: "content/projects/06-ice-threshold/wf-02-sketch.jpg",        label: "Hand sketch — spine curves, platform, stairs, antenna & glass pattern", span: 1 },
            { src: "content/projects/06-ice-threshold/wf-03-curves.png",        label: "Guide curves traced over the reference in Rhino", span: 1 },
            { src: "content/projects/06-ice-threshold/wf-04-massing.png",       label: "Massing surface lofted from the guide curves", span: 2 },
            { src: "content/projects/06-ice-threshold/wf-05-viewports.png",     label: "The guide curves across Top, Front, Right & Perspective", span: 2, fit: "contain", white: true },
            { src: "content/projects/06-ice-threshold/wf-06-subd-model.png",    label: "The SubD body split into glass, columns, beams & the cellular truss net", span: 2, fit: "contain", white: true },
            { src: "content/projects/06-ice-threshold/wf-07-clay.jpg",          label: "Final clay render — the woven structure resolved", span: 2 },
            { src: "content/projects/06-ice-threshold/wf-08-process-strip.png", label: "From reference to render — the workflow at a glance", span: 2, fit: "contain" },
          ],
          clips: [
            { src: "content/projects/06-ice-threshold/wf-clip-1.mp4", label: "From curves to surface — workflow animation" },
            { src: "content/projects/06-ice-threshold/wf-clip-2.mp4", label: "Displacement material for the landscape — workflow animation" },
          ],
        },
        {
          key: "rendering", code: "B", title: "Detailing & Rendering", tag: "Rhino · Grasshopper · Blender",
          text: [
            "A set of working captures from the live files. In Rhino the woven body is refined into a dense structural mesh over its green generating curves, while a Grasshopper definition grows the cellular “net” as a particle system that is then converted to geometry.",
            "The model is taken into Blender for materials, lighting and the final scene — glass and metal shaders authored as node graphs, the snow, rock and water environment assembled around the structure, and the cloaked inhabitants of the ice placed into frame.",
          ],
          images: [
            { src: "content/projects/06-ice-threshold/soft-01-mesh-overview.png",        label: "Rhino — the woven body refined as a dense structural mesh over its generating curves", span: 1 },
            { src: "content/projects/06-ice-threshold/soft-02-mesh-detail.png",          label: "Close-up — the cellular truss net across the loops and the observation pod", span: 1 },
            { src: "content/projects/06-ice-threshold/soft-03-grasshopper-particles.png", label: "Grasshopper — the cellular “net” grown as a particle system, then converted to geometry", span: 2 },
            { src: "content/projects/06-ice-threshold/soft-04-blender-pod.png",          label: "Blender — shading the glass observation pod from the inside", span: 2 },
            { src: "content/projects/06-ice-threshold/soft-05-blender-scene.png",        label: "Blender — materials and the snow-and-rock environment around the structure", span: 2 },
            { src: "content/projects/06-ice-threshold/soft-06-blender-figure.png",       label: "Blender — placing the cloaked inhabitants of the ice into the scene", span: 2, fit: "contain" },
            { src: "content/projects/06-ice-threshold/ice-05-spires.jpg",        label: "The Threshold among the ice spires, a moon over the frozen sea", span: 2 },
            { src: "content/projects/06-ice-threshold/ice-01-emergence.jpg",     label: "Emergence — the structure rising through Europa's crust beneath Jupiter", span: 1 },
            { src: "content/projects/06-ice-threshold/ice-02-seacliff.jpg",      label: "Breaking from the ice cliff above the frozen ocean", span: 1 },
            { src: "content/projects/06-ice-threshold/ice-06-dusk.jpg",          label: "Dusk over the emergence pod and the rising arc", span: 2 },
            { src: "content/projects/06-ice-threshold/ice-09-print.png",         label: "Material study — the cellular printed structure", span: 1 },
            { src: "content/projects/06-ice-threshold/ice-08-diagrid.png",       label: "Structural lattice — diagrid in section", span: 1, fit: "contain" },
          ],
        },
      ],
      general: [
        { src: "content/projects/06-ice-threshold/ice-04-subsurface.jpg",    label: "The native ocean-dwelling civilization gathering at the threshold", span: 2 },
        { src: "content/projects/06-ice-threshold/ice-03-aerial.jpg",        label: "Aerial — the interface and its submerged observation pod", span: 1 },
        { src: "content/projects/06-ice-threshold/ice-07-lattice.png",       label: "The crystalline woven skin in detail", span: 1 },
        { src: "content/projects/06-ice-threshold/ice-10-inner-lattice.png", label: "The luminous inner lattice", span: 2 },
      ],
      filmsAfter: [
        { youtube: "iYP8XRVwrsQ", label: "The Ice Threshold — project film", code: "FILM" },
        { youtube: "4-_g8n74M4A", label: "DesignMorphine — workshop", code: "WORKSHOP" },
      ],
      closing: "The Ice Threshold was developed as a sample project for a <a href=\"https://youtu.be/4-_g8n74M4A\" target=\"_blank\" rel=\"noopener\" style=\"border-bottom:1px solid currentColor\">DesignMorphine workshop</a> — an exploration of crystalline, ocean-born structure rising into an alien sky.",
    },
    /* ============ 07 — LORA MODELS (trained SDXL & Flux LoRAs) ============ */
    {
      n: "07", slug: "lora-models", title: "LoRA Models",
      type: "SDXL & Flux · LoRA Training", year: "2024", loc: "Civitai",
      status: "Published", hue: 28,
      hasVideo: false, video: null,
      hideTopFilm: true,
      cover: "content/projects/07-lora-models/archlandscape/arch-06.png",
      circles: [
        "content/projects/07-lora-models/archlandscape/arch-02.png",
        "content/projects/07-lora-models/archlandscape/arch-06.png",
        "content/projects/07-lora-models/archlandscape/arch-10.png",
      ],
      previewImgs: [
        "content/projects/07-lora-models/archlandscape/arch-06.png",
        "content/projects/07-lora-models/archlandscape/arch-10.png",
        "content/projects/07-lora-models/archlandscape/arch-02.png",
        "content/projects/07-lora-models/archlandscape/arch-05.png",
        "content/projects/07-lora-models/archlandscape/arch-11.png",
      ],
      lead: "A growing library of LoRA models I trained for SDXL and Flux using Kohya SS and AI Toolkit.",
      credits: [
        { role: "Author", names: ["Albert Sumin"] },
        { role: "Civitai", names: ["@aliksumin"], align: "right" },
      ],
      facts: [
        { k: "Type", v: "Image LoRAs" },
        { k: "Base Models", v: "SDXL & Flux" },
        { k: "Trained with", v: "Kohya SS · AI Toolkit" },
        { k: "Platform", v: "Civitai" },
      ],
      overview: [
        "This is an ongoing collection of LoRA models I train for SDXL and Flux to generate architecture and spatial design. Each model is built and tuned with Kohya SS or AI Toolkit on a curated image set, then published on Civitai for others to use and remix.",
        "Every section below is devoted to one model — its concept, the look it produces, and a gallery of sample generations.",
      ],
      sections: [
        {
          key: "archlandscape", code: "A", title: "ArchLandscape", tag: "SDXL 1.0 · LoRA",
          text: [
            "ArchLandscape is an SDXL LoRA trained to generate architecture and landscape as one continuous system — buildings that don't sit on the terrain but seem to grow from it, erode with it, or crystallize out of it.",
            "Its language runs from carved landforms, terraced mountains and desert dunes to cliffs, valleys and misty ridgelines, fused with large-scale structures that read at once as building, landform, ruin and speculative habitat. Trained with Kohya SS; it works best mixed with other LoRAs at a weight of roughly 0.6–0.7.",
            "Model, weights and the full set: <a href=\"https://civitai.com/models/2742566/archlandscape\" target=\"_blank\" rel=\"noopener\" style=\"border-bottom:1px solid currentColor\">civitai.com/models/2742566</a> — base model SDXL 1.0, BF16 SafeTensor (≈218 MB).",
          ],
          images: [
            { src: "content/projects/07-lora-models/archlandscape/arch-05.png", label: "Black monolith threading the coastal dunes", span: 2 },
            { src: "content/projects/07-lora-models/archlandscape/arch-01.png", label: "Terraced fields reading as flowing architecture", span: 1 },
            { src: "content/projects/07-lora-models/archlandscape/arch-08.png", label: "Stacked white volumes stepping down the hillside", span: 1 },
            { src: "content/projects/07-lora-models/archlandscape/arch-10.png", label: "Cellular white structures along a misty pink ridge", span: 2 },
            { src: "content/projects/07-lora-models/archlandscape/arch-03.png", label: "Ribboned white terraces folding into the slope", span: 1 },
            { src: "content/projects/07-lora-models/archlandscape/arch-06.png", label: "A carved white complex sunk into the desert", span: 1 },
            { src: "content/projects/07-lora-models/archlandscape/arch-11.png", label: "Layered habitat eroding from the painted cliffs", span: 2 },
            { src: "content/projects/07-lora-models/archlandscape/arch-02.png", label: "Curved paddies as a continuous built landscape", span: 1 },
            { src: "content/projects/07-lora-models/archlandscape/arch-07.png", label: "Blob roofs emerging from the dune field — aerial", span: 1 },
            { src: "content/projects/07-lora-models/archlandscape/arch-09.png", label: "Stepped white masses cascading down the mountain", span: 2 },
            { src: "content/projects/07-lora-models/archlandscape/arch-04.png", label: "White massing crystallizing above the fog", span: 2 },
            { src: "content/projects/07-lora-models/archlandscape/arch-12.png", label: "Spiral green-roofed pavilions threading the forest valley", span: 2 },
            { src: "content/projects/07-lora-models/archlandscape/arch-13.png", label: "Building folded into the green hills at dawn", span: 1 },
            { src: "content/projects/07-lora-models/archlandscape/arch-14.png", label: "Cantilevered lounge over a turquoise cove", span: 1 },
            { src: "content/projects/07-lora-models/archlandscape/arch-15.png", label: "Aerial — white ring courtyards carved into the dunes", span: 2 },
            { src: "content/projects/07-lora-models/archlandscape/arch-16.png", label: "Terraced white bathing pools along the rocky shore", span: 2 },
          ],
        },
        {
          key: "voxeltower", code: "B", title: "VoxelTower", tag: "Flux.1 D · LoRA",
          text: [
            "FLUX_VoxelTower is a Flux.1 [dev] LoRA built for towers — modern skyscrapers, residential high-rises and apartment buildings stacked from chunky, voxel-like masses that shift and cantilever as they climb.",
            "It carries that blocky stacking language across very different materials and settings. Render it at guidance 2.0 for more realistic results; it also mixes well with other LoRAs.",
            "Model & weights: <a href=\"https://civitai.com/models/1427110/fluxvoxeltower\" target=\"_blank\" rel=\"noopener\" style=\"border-bottom:1px solid currentColor\">civitai.com/models/1427110</a> — base model Flux.1 [dev], SafeTensor (≈146 MB).",
          ],
          images: [
            { src: "content/projects/07-lora-models/voxeltower/voxel-01.png", label: "Twin towers of stacked angular balconies over a park pond", span: 1 },
            { src: "content/projects/07-lora-models/voxeltower/voxel-02.png", label: "Rounded stacked terraces — a twin-tower variant by the water", span: 1 },
            { src: "content/projects/07-lora-models/voxeltower/voxel-03.png", label: "Planted stone terraces linked by a sky bridge above the lake", span: 2 },
            { src: "content/projects/07-lora-models/voxeltower/voxel-07.png", label: "Aggregate voxel blocks stacked over a frozen waterfront", span: 2 },
            { src: "content/projects/07-lora-models/voxeltower/voxel-04.png", label: "Faceted, perforated shell tower on the beachfront", span: 1 },
            { src: "content/projects/07-lora-models/voxeltower/voxel-05.png", label: "Glass-and-timber stacked tower on the marina", span: 1 },
            { src: "content/projects/07-lora-models/voxeltower/voxel-08.png", label: "Weathered concrete monoliths over the winter causeway", span: 2 },
            { src: "content/projects/07-lora-models/voxeltower/voxel-06.png", label: "Mud-brick massing stepping up from the desert", span: 1 },
            { src: "content/projects/07-lora-models/voxeltower/voxel-09.png", label: "Timber-grid tower on a mountain ledge", span: 1 },
          ],
        },
        {
          key: "geometric", code: "C", title: "Geometric Minimalism (Flux)", tag: "Flux.1 D · LoRA",
          text: [
            "FLUX_Geometric Minimalism is a Flux.1 [dev] LoRA aimed at complex but geometrically clean building shapes — crisp volumes, taut curves and clear silhouettes that read equally well as realistic renders or physical-model studies.",
            "It moves easily between moods and materials: a black faceted hall in the park, white looped and pod-like masses across misty rivers, a translucent mesh pavilion holding a boulder on the coast, a Voronoi-perforated street wall, rippling roofscapes over a plaza and a sculpted timber pavilion in a meadow.",
            "Model & weights: <a href=\"https://civitai.com/models/693566/fluxgeometric-minimalism\" target=\"_blank\" rel=\"noopener\" style=\"border-bottom:1px solid currentColor\">civitai.com/models/693566</a> — base model Flux.1 [dev], SafeTensor (≈164 MB).",
          ],
          images: [
            { src: "content/projects/07-lora-models/geometric/geom-01.png", label: "Black faceted volume settling into the parkland", span: 2 },
            { src: "content/projects/07-lora-models/geometric/geom-02.png", label: "White looped masses behind a truss bridge in the fog", span: 1 },
            { src: "content/projects/07-lora-models/geometric/geom-03.png", label: "Pod forms and a walkway bridging the misty river", span: 1 },
            { src: "content/projects/07-lora-models/geometric/geom-06.png", label: "Translucent mesh pavilion holding a boulder by the sea", span: 2 },
            { src: "content/projects/07-lora-models/geometric/geom-04.png", label: "Angular white blocks reached by a long footbridge", span: 1 },
            { src: "content/projects/07-lora-models/geometric/geom-05.png", label: "Bulbous tube volumes spanning the water", span: 1 },
            { src: "content/projects/07-lora-models/geometric/geom-09.png", label: "Rippling white roofs along the waterfront", span: 2 },
            { src: "content/projects/07-lora-models/geometric/geom-07.png", label: "Voronoi-perforated wall on the city street", span: 1 },
            { src: "content/projects/07-lora-models/geometric/geom-10.png", label: "Sculpted timber pavilion in the meadow", span: 1 },
            { src: "content/projects/07-lora-models/geometric/geom-08.png", label: "Draped wave-roof building over the plaza", span: 2 },
          ],
        },
        {
          key: "geometric-sdxl", code: "D", title: "Geometric Minimalism (SDXL)", tag: "SDXL 1.0 · LoRA",
          text: [
            "Geometric Minimalism for SDXL is the SDXL 1.0 counterpart to the Flux model — the same pursuit of complex-but-clean building shapes, tuned for SDXL's rendering of crisp volumes, taut curves and bold silhouettes.",
            "Across the set it ranges widely: glass dwellings packed into a slot canyon, inflated cloud-like volumes in the city and the field, cantilevered stone and timber blocks over water, tensile sail and mesh pavilions, faceted towers in the desert, and whole habitats carved down into rock and dune.",
            "Model & weights: <a href=\"https://civitai.com/models/627685/sdxlgeometric-minimalism\" target=\"_blank\" rel=\"noopener\" style=\"border-bottom:1px solid currentColor\">civitai.com/models/627685</a> — base model SDXL 1.0.",
          ],
          images: [
            { src: "content/projects/07-lora-models/geom-sdxl/geo-01.png", label: "Glass dwellings stacked through a slot canyon", span: 2 },
            { src: "content/projects/07-lora-models/geom-sdxl/geo-02.png", label: "Bubbled circular skin over a beachfront hall", span: 1 },
            { src: "content/projects/07-lora-models/geom-sdxl/geo-03.png", label: "Faceted folded tower in the desert at dusk", span: 1 },
            { src: "content/projects/07-lora-models/geom-sdxl/geo-04.png", label: "Swooping concrete roof over the public plaza", span: 2 },
            { src: "content/projects/07-lora-models/geom-sdxl/geo-05.png", label: "Planted stacked tower rising through the forest", span: 1 },
            { src: "content/projects/07-lora-models/geom-sdxl/geo-06.png", label: "Carved stone blocks lodged in the mountain peak", span: 1 },
            { src: "content/projects/07-lora-models/geom-sdxl/geo-07.png", label: "Inflated lobed volume on the city corner", span: 2 },
            { src: "content/projects/07-lora-models/geom-sdxl/geo-08.png", label: "Petal-like tensile sails over the water", span: 1 },
            { src: "content/projects/07-lora-models/geom-sdxl/geo-09.png", label: "Faceted skylight over the auditorium interior", span: 1 },
            { src: "content/projects/07-lora-models/geom-sdxl/geo-10.png", label: "Wireframe glass complex half-buried in the dunes", span: 2 },
            { src: "content/projects/07-lora-models/geom-sdxl/geo-11.png", label: "Stilted timber volumes over the pebble shore", span: 2 },
            { src: "content/projects/07-lora-models/geom-sdxl/geo-12.png", label: "Draped mesh canopy on the sunset pier", span: 1 },
            { src: "content/projects/07-lora-models/geom-sdxl/geo-13.png", label: "Folded white monolith on the city street", span: 1 },
            { src: "content/projects/07-lora-models/geom-sdxl/geo-14.png", label: "Quarried spire honeycombed with dwellings", span: 1 },
            { src: "content/projects/07-lora-models/geom-sdxl/geo-15.png", label: "Cloud-shaped glass opening in a concrete wall", span: 1 },
            { src: "content/projects/07-lora-models/geom-sdxl/geo-16.png", label: "Inflated dome resting in the open field", span: 2 },
            { src: "content/projects/07-lora-models/geom-sdxl/geo-17.png", label: "Rippling concrete-mesh facade in the fog", span: 1 },
            { src: "content/projects/07-lora-models/geom-sdxl/geo-18.png", label: "Habitat excavated into the desert — aerial", span: 2 },
          ],
        },
      ],
    },
  ],
};

/* ============ 08 — GRID CITY (sectioned, real content) ============ */
window.PORTFOLIO.projects.push({
  n: "08", slug: "grid-city", title: "Grid City",
  type: "Masterplan", year: "2025", loc: "Dubai, UAE",
  status: "Concept Design", hue: 35,
  hasVideo: true, video: null,
  youtube: "BE6gVhusbHY",
  cover: "content/projects/08-grid-city/grid-01-hero.png",
  circles: [
    "content/projects/08-grid-city/grid-01-hero.png",
    "content/projects/08-grid-city/grid-04-massing.png",
    "content/projects/08-grid-city/grid-03-courtyard.png",
  ],
  lead: "An experimental Dubai masterplan modeled and analysed entirely by Grasshopper algorithms.",
  credits: [
    { role: "Project made at", names: ["Coop Himmelb(l)au"] },
    { role: "Project Team", names: ["Albert Sumin", "Irina Sorokina"], align: "right" },
  ],
  facts: [
    { k: "Program", v: "Masterplan" },
    { k: "Location", v: "Dubai, UAE" },
    { k: "Year", v: "2025" },
    { k: "Status", v: "Concept Design" },
  ],
  overview: [
    "Grid City is an experimental project where all the parts are modeled and analysed by algorithms in Grasshopper without any manual editing. This method allows the creation of flexible, extendable planning solutions where every detail follows the logic and a set of rules, with all the main economical parameters calculated automatically.",
    "Importantly, this analytical and data-driven approach is not limited to planning alone — it becomes a creative force that shapes the visual identity of the neighborhood. The result is a design that reflects both thoughtful urban strategy and the precision of algorithmic modeling, offering a balanced and forward-thinking vision for modern residential environments.",
  ],
  sections: [
    {
      key: "system", code: "A", title: "The System", tag: "Grasshopper · Data-driven",
      text: [
        "The neighborhood is built from two algorithmic layers: a grid-based organization that lays out the low-rise urban fabric — streets, plots, courtyards and public ground — and a family of faceted residential towers that drop onto the grid at calculated points.",
        "Because the geometry is generated the project is not fixed until all decisions and parameters will be agreed. Images and diagrams are representing just a possibility from the cloud of thousands variants algorithm can produce when inputs are changing.",
      ],
      images: [
        { src: "content/projects/08-grid-city/grid-01-hero.png", label: "Street level — faceted glass towers over the terraced public ground", span: 2, fit: "contain", white: true },
        { src: "content/projects/08-grid-city/grid-02-diagram.png", label: "The two algorithmic layers — grid-based organization and the towers that land on it", span: 2, diagram: true },
        { src: "content/projects/08-grid-city/grid-03-courtyard.png", label: "Courtyard — the stepped basalt podium meeting the crystalline residential masses", span: 2, ar: "3000/1714" },
        { src: "content/projects/08-grid-city/grid-04-massing.png", label: "Clay massing study — geometry generated directly by the Grasshopper definition", span: 2, diagram: true },
      ],
    },
    {
      key: "form-finding", code: "B", title: "Form Finding", tag: "Attractors · Extension · Height",
      youtube: "12Hj1Lj21Fk",
      text: [
        "Form is found, not drawn. A set of attractor points marking where the residential towers land pulls and warps the otherwise regular grid around them — streets bend, plots stretch and the public fabric reorganizes itself in response to the towers above.",
        "The same rule set keeps the plan open-ended: the grid can be extended outward into further phases without redrawing, and the city's overall height profile is driven by the attractors too — tallest at the center and tapering down toward its corners.",
      ],
      images: [
        { src: "content/projects/08-grid-city/grid-05-attractors.png", label: "Attractor points for the towers warp the grid-based organization beneath them", span: 2, diagram: true },
        { src: "content/projects/08-grid-city/grid-06-extension.png", label: "The grid is extendable — Grid City growing into its next phases", span: 2, diagram: true },
        { src: "content/projects/08-grid-city/grid-07-height.png", label: "Height profile — the city steps down from a tall center toward its corners", span: 2, diagram: true },
        { src: "content/projects/08-grid-city/grid-11-gh-definition.png", label: "The Grasshopper definition — grid, cores, main volumes, terraces and structure clusters", span: 2, ar: "2135/903" },
        { src: "content/projects/08-grid-city/grid-08-courtyard2.png", label: "Sunset over the central courtyard, the faceted towers rising around it", span: 2, ar: "3000/1714" },
      ],
    },
    {
      key: "facades", code: "C", title: "Residential Towers — Facades", tag: "Faceted Glass · Cantilevers",
      text: [
        "Up close, the towers read as a packed cluster of faceted glass volumes — tilted curtain-wall planes, sharp creases and cantilevered glazed boxes that push out from the mass and catch the light.",
        "The same algorithmic logic that places the towers also drives their skin: each balcony, bay and angled pane is an instance of the rule set rather than a one-off, so the facades stay coherent across the whole cluster while never quite repeating.",
      ],
      images: [
        { src: "content/projects/08-grid-city/grid-09-facade-day.png", label: "Daylight — tilted glass planes and cantilevered glazed bays", span: 2, ar: "2688/1536" },
        { src: "content/projects/08-grid-city/grid-10-facade-dusk.png", label: "Dusk — looking up into the cantilevered boxes and creased curtain wall", span: 2, ar: "2625/1257" },
      ],
    },
    {
      key: "program", code: "D", title: "Program", tag: "Vertical Zoning · Level by Level",
      text: [
        "Grid City is mixed-use through and through. A vertical zoning logic stacks the program from most public at the ground to most private at the top — public functions on the lower levels, semi-public in the middle, and residences above — so the neighborhood balances street-level activity with privacy and panoramic living.",
        "Read level by level, each floor carries its own family of functions: retail and food at grade, leisure and sport, work and care, then the residential towers, with sport and landscape woven across the public ground. The renders show that mix at human scale — rooftop cafés, the central landscaped courtyard and the ground-floor coffee bars opening onto it.",
      ],
      images: [
        { src: "content/projects/08-grid-city/prog-01-zoning.png", label: "Functional & user analysis — public, semi-public and private zoning over the daily cycle", span: 2, diagram: true },
        { src: "content/projects/08-grid-city/prog-02-ground.png", label: "Ground level — cafés & restaurants, grocery and retail", span: 2, diagram: true },
        { src: "content/projects/08-grid-city/prog-03-leisure.png", label: "Leisure & sport level — cinema, exhibitions, yoga, climbing, indoor & aquatic gyms", span: 2, diagram: true },
        { src: "content/projects/08-grid-city/prog-04-business.png", label: "Work & care level — business center, health care and training centers", span: 2, diagram: true },
        { src: "content/projects/08-grid-city/prog-05-residential.png", label: "Residential level — apartments in the towers", span: 2, diagram: true },
        { src: "content/projects/08-grid-city/prog-06-recreation.png", label: "Sport & landscape — pool, courts, BBQ, kids areas and the green roof network", span: 2, diagram: true },
        { src: "content/projects/08-grid-city/prog-07.png", label: "Rooftop café terrace beneath the towers", span: 2, ar: "2688/1536" },
        { src: "content/projects/08-grid-city/prog-08.png", label: "The central landscaped courtyard, a tower rising above the terraces", span: 2, ar: "2688/1536" },
        { src: "content/projects/08-grid-city/prog-09.png", label: "Ground-floor café opening onto the courtyard", span: 1, ar: "2688/1536" },
        { src: "content/projects/08-grid-city/prog-10.png", label: "Coffee bar framed by an arched opening onto the public realm", span: 1, ar: "2688/1536" },
      ],
    },
    {
      key: "landscape", code: "E", title: "Landscape Design", tag: "Green Roofs · Courtyards · Paths",
      text: [
        "Landscape is the connective tissue of Grid City. The roofs of the low-rise fabric become a continuous green surface — planted terraces threaded by walking and cycling paths that tie the towers, courtyards and public buildings into one accessible ground.",
        "Between the buildings, each courtyard is programmed: swimming pools, sport fields, children's playgrounds and an amphitheater drop into the grid alongside the residential towers and commercial entrances, so green space and activity are distributed evenly across the whole plan.",
      ],
      images: [
        { src: "content/projects/08-grid-city/land-01-aerial.png", label: "Aerial — the continuous green-roof landscape stitching the towers together", span: 2, ar: "3000/1714" },
        { src: "content/projects/08-grid-city/land-02-garden.png", label: "Garden terraces and pools at the foot of the towers", span: 2, ar: "2688/1536" },
        { src: "content/projects/08-grid-city/land-03-plan.png", label: "Landscape plan — green roofs, planting and the walking & cycling network around the towers", span: 2, diagram: true },
        { src: "content/projects/08-grid-city/land-04-courtyards.png", label: "Courtyard program plan — pools, sport fields, playgrounds and an amphitheater", span: 2, diagram: true },
      ],
    },
    {
      key: "interiors", code: "F", title: "Apartments — Interiors", tag: "Residential · Light & View",
      text: [
        "Inside the towers, the apartments turn the faceted skin into an asset: full-height glazing — some of it raked along the angled facade planes — pulls daylight deep into open-plan living, dining and kitchen spaces finished in pale stone, warm timber and soft neutrals.",
        "Every unit looks back onto the city it belongs to. The tilted glass frames the neighboring towers, the green roofs and the landscaped courtyards below, so the residents read the masterplan from the inside — by day and, lit from within, by night.",
      ],
      images: [
        { src: "content/projects/08-grid-city/int-01.png", label: "Open-plan living, dining and kitchen behind full-height glass", span: 2, ar: "2688/1536" },
        { src: "content/projects/08-grid-city/int-02.png", label: "Living space along the raked curtain wall, towers beyond", span: 2, ar: "3000/1714" },
        { src: "content/projects/08-grid-city/int-03.png", label: "Lounge overlooking the landscaped courtyard", span: 1, ar: "2688/1536" },
        { src: "content/projects/08-grid-city/int-04.png", label: "The residential cluster glowing at night", span: 1, ar: "2688/1536" },
      ],
    },
  ],
});

/* ============ 09 — SKI RESORT (sectioned, real content) ============ */
window.PORTFOLIO.projects.push({
  n: "09", slug: "ski-resort", title: "Ski Resort",
  type: "Ski Resort Hotel", year: "2026", loc: "Mountains",
  status: "Concept Design", hue: 210,
  hasVideo: false, video: null, hideTopFilm: true,
  cover: "content/projects/09-ski-resort/ski-01-exterior.png",
  circles: [
    "content/projects/09-ski-resort/ski-01-exterior.png",
    "content/projects/09-ski-resort/ski-02-aerial.png",
    "content/projects/09-ski-resort/ski-06-massing.png",
  ],
  previewImgs: [
    "content/projects/09-ski-resort/ski-01-exterior.png",
    "content/projects/09-ski-resort/ski-02-aerial.png",
    "content/projects/09-ski-resort/ski-04-siteplan.png",
  ],
  lead: "A ski-in / ski-out mountain hotel where the slope runs over and through the building.",
  credits: [
    { role: "Project Team", names: ["Albert Sumin", "Irina Sorokina", "Viktoriia Dovgoer"] },
    { role: "Project Team", names: ["Saba Mahdavi", "Soroush Naderi", "Filip Prica"], align: "right" },
  ],
  facts: [
    { k: "Program", v: "Ski Resort Hotel" },
    { k: "Location", v: "Mountains" },
    { k: "Year", v: "2026" },
    { k: "Status", v: "Concept Design" },
  ],
  overview: [
    "The resort is a ski-in / ski-out hotel woven directly into the mountainside. A long, terraced bar of timber-clad rooms steps down the slope, anchored by a pair of faceted restaurant towers and a glazed sky bridge, while the ski runs pass over the building's accessible roof and out to the existing trails.",
    "Two arrivals organize the whole scheme — the main hotel entrance from the access road below, and the ski-slope exit above — connected through a shared public lobby and leisure zone. A spa, pool and terraces spill down toward the valley, giving every guest both the snow and the view.",
  ],
  sections: [
    {
      key: "resort", code: "A", title: "The Resort", tag: "Ski-in / Ski-out Hotel",
      text: [
        "Seen from the piste, the hotel reads as a warm timber volume sheltered under the snow, with a mirror-clad restaurant tower and glass lookout rising beside the slope. Skiers drop in from the run above; guests arrive from the road below.",
        "From the air the section is clear: the terraced bar of rooms follows the contour, a heated pool steams on its valley-side deck, and the proposed ski slopes wrap around and over the roof into the surrounding peaks.",
      ],
      images: [
        { src: "content/projects/09-ski-resort/ski-02-aerial.png", label: "Terraced rooms and steaming pool above the valley", span: 2, ar: "3000/1674" },
        { src: "content/projects/09-ski-resort/ski-01-exterior.png", label: "Dusk on the piste — the timber hotel, restaurant towers and glass lookout", span: 2, ar: "3000/1674" },
      ],
    },
    {
      key: "shape", code: "B", title: "Shape & Facades", tag: "Massing · Elevations · Skin",
      text: [
        "The form begins as a single bar laid along the slope, then is transformed in two moves: a pair of towers is injected to balance the composition and lift an observation deck and roof-terrace restaurant above the trees, and the ski slope is drawn through the building so skier-residents reach the hotel directly while other skiers pass beneath the towers to the restaurants.",
        "The skin pairs warm timber cladding and ribbon screens on the stepped hotel bar with a faceted, perforated metal-and-glass envelope on the leaning towers — solid and sheltering below, luminous and lookout-like above.",
      ],
      images: [
        { src: "content/projects/09-ski-resort/elev-north.png", label: "Massing logic — the box, the tower injection, and the slope implementation", span: 2, diagram: true },
        { src: "content/projects/09-ski-resort/ski-05-entrances.png", label: "The main entrance and ski-slope exit linked through a shared public lobby", span: 2, diagram: true },
        { src: "content/projects/09-ski-resort/shape-r-facade-tower.png", label: "The leaning twin towers and sky bridge at sunset, skiers passing beneath", span: 2 },
        { src: "content/projects/09-ski-resort/shape-r-towers-family.png", label: "Approach on the piste — faceted metal-and-glass towers over the timber base", span: 2 },
        { src: "content/projects/09-ski-resort/shape-concept.png", label: "The stepped timber hotel bar with the lookout tower rising behind", span: 2 },
        { src: "content/projects/09-ski-resort/shape-r-pool.png", label: "Timber ribbon screens and the diagrid stair above the spa pool", span: 1 },
        { src: "content/projects/09-ski-resort/shape-r-cantilever.png", label: "The cantilevered room block lifted on raking columns over the slope", span: 1 },
        { type: "floors", label: "Elevations", floors: [
          { n: "", name: "North", src: "content/projects/09-ski-resort/shape-r-towers-sunset.png" },
          { n: "", name: "South", src: "content/projects/09-ski-resort/elev-south.png" },
          { n: "", name: "East", src: "content/projects/09-ski-resort/elev-west.png" },
        ] },
      ],
    },
    {
      key: "site", code: "C", title: "Site & Program", tag: "Slope · Access · Massing",
      text: [
        "The plans set the building into its terrain: a proposed ski slope and ski-in / ski-out area above, the hotel access road, drop-off and parking below, and a hiking route tying into the existing trail and gondola line.",
        "The two key elements — the main hotel entrance and the ski-slope exit — are visually connected through a shared public lobby. Inside, the program stacks hotel rooms, a restaurant, conference space, gym and a spa with pool across six levels and roughly 17,300 m² of floor area.",
      ],
      beforeAfter: [
        { before: "content/projects/09-ski-resort/ski-connect-trees.png", after: "content/projects/09-ski-resort/ski-connect-cleared.png",
          beforeLabel: "Trees retained", afterLabel: "Slope cleared", ar: "1/1",
          label: "Variants of the slope-to-hotel connection" },
      ],
      images: [
        { src: "content/projects/09-ski-resort/ski-08-paxflow.png", label: "Pax flow — delivery, guest and VIP routes stacked through the six levels", span: 2, diagram: true },
        { src: "content/projects/09-ski-resort/ski-03-traffic.png", label: "Road & traffic planning — slopes, ski-in/ski-out, access and the hiking connection", span: 2, diagram: true },
        { src: "content/projects/09-ski-resort/ski-04-siteplan.png", label: "Site plan — levels, entrances, terraces and spa set into the contours", span: 2, diagram: true },
        { src: "content/projects/09-ski-resort/ski-06-massing.png", label: "Program massing — hotel, restaurant, spa, pool and ski slopes, with key areas", span: 2, diagram: true },
        { type: "floors", label: "Floor Plans", floors: [
          { n: "", name: "Level -1", src: "content/projects/09-ski-resort/plan-l2.png" },
          { n: "", name: "Level 1", src: "content/projects/09-ski-resort/plan-l3.png" },
          { n: "", name: "Level 2", src: "content/projects/09-ski-resort/plan-l4.png" },
          { n: "", name: "Level 3", src: "content/projects/09-ski-resort/plan-l5.png" },
          { n: "", name: "Level 4", src: "content/projects/09-ski-resort/plan-l6.png" },
          { n: "", name: "Level 5", src: "content/projects/09-ski-resort/plan-rooms.png" },
          { n: "", name: "Level 6", src: "content/projects/09-ski-resort/plan-presidential.png" },
          { n: "", name: "Room Layouts", src: "content/projects/09-ski-resort/plan-l-1.png" },
          { n: "", name: "Presidential", src: "content/projects/09-ski-resort/plan-l1.png" },
          { n: "", name: "Area Calc", src: "content/projects/09-ski-resort/plan-areas.png" },
        ] },
      ],
    },
    {
      key: "interiors", code: "D", title: "Interiors", tag: "Material · Public → Private",
      text: [
        "The interiors follow a single gradient — from public to private — read in both materials and colour. Arrival spaces are cool and mineral (stone, fibre concrete, light-blue fabrics and perforated metal); as guests move up into the rooms the palette warms into wood panels, stone pavement and warm-grey fabrics.",
        "Floor by floor the material set shifts: stone and perforated metal at the ground, stone-plate cladding and dark metal on the first floor, and wood with warmer fabrics in the upper guest levels — each room framing the slope through full-height glass.",
      ],
      images: [
        { src: "content/projects/09-ski-resort/int-01-suite-lounge.png", label: "Suite lounge — suspended fireplace and full-height glass onto the piste", span: 2, ar: "1/1" },
        { src: "content/projects/09-ski-resort/int-02-concept.png", label: "Interior concept — the public-to-private gradient and material palette by floor", span: 2, diagram: true },
        { src: "content/projects/09-ski-resort/int-03-lobby.png", label: "Ski-in lobby — the faceted truss roof, marble desk and ski drop", span: 2 },
      ],
    },
    {
      key: "workflow", code: "E", title: "Workflow", tag: "Experiment · AI + Rhino MCP",
      text: [
        "As an experiment, I built the 3D model of the towers entirely using AI, driving Rhino through its MCP interface with Claude Opus 4.8. I split the model into two parts and opened them in separate Rhino files: one I handed to the AI agent, tasking it to develop all of the detailing on top of a massing I had already prepared, while I worked the second part myself in parallel.",
        "On paper it was one general task; in practice it was broken down into many small steps. The AI still works slower than a qualified specialist — but when you run it alongside your own work on a separate task, the setup is genuinely efficient.",
      ],
      images: [
        { src: "content/projects/09-ski-resort/wf-wire-overall.png", label: "Rhino viewport — the full massing in wireframe, AI-detailed towers reading against the prepared base", span: 2 },
        { src: "content/projects/09-ski-resort/wf-wire-towers.png", label: "Wireframe close-up — the perforated tower skins and bridge generated by the agent", span: 1 },
        { src: "content/projects/09-ski-resort/wf-mcp-detail.png", label: "Detail — shows elements under the panel which are also made by AI agent", span: 1 },
      ],
    },
  ],
});
/* ============ 10 — EXPERIMENTAL PUPPETRY ARTS CENTRE (sectioned) ============ */
window.PORTFOLIO.projects.push({
  n: "10", slug: "puppetry", title: "Experimental Puppetry Arts Centre",
  type: "Experimental Puppetry Arts Centre", year: "2023", loc: "Stara Zagora, Bulgaria",
  status: "Competition", hue: 205,
  hasVideo: false, video: null, hideTopFilm: true,
  cover: "content/projects/10-puppetry/pup-ext-day.png",
  circles: [
    "content/projects/10-puppetry/pup-ext-day.png",
    "content/projects/10-puppetry/pup-ext-sign-night.png",
    "content/projects/10-puppetry/pup-aerial-roof.png",
  ],
  previewImgs: [
    "content/projects/10-puppetry/pup-ext-day.png",
    "content/projects/10-puppetry/pup-hall-dancers.png",
    "content/projects/10-puppetry/pup-atrium.png",
  ],
  lead: "An international-competition entry for a modern puppet theatre in Stara Zagora.",
  credits: [
    { role: "Project Team", names: ["Mohamed Abdelhadi", "Markus Prossnigg", "Benjamin Schmidt", "Irina Sorokina", "Albert Sumin"] },
    { role: "Project made at", names: ["Cloud Cooperation"], align: "right" },
  ],
  facts: [
    { k: "Program", v: "Experimental Puppetry Arts Centre" },
    { k: "Location", v: "Stara Zagora, Bulgaria" },
    { k: "Year", v: "2023" },
    { k: "Status", v: "Competition" },
  ],
  overview: [
    "The new theatre stands as a contemporary, sleek counterpoint to the historical building beside it — a four-storey cube of clean lines and minimalist skin that signals a new era of puppetry while stitching itself into the old theatre. Sections of the old western wing are carefully demolished and reborn inside the new building, housing artist and staging functions, with the two lobbies linked on the ground and first floors.",
    "The façade is conceived as a curtain: a mesh veil that invites spectators into a realm of wonder and sets the stage for what unfolds behind it. Inside, a three-dimensional steel grid — drawn from the traditional assembly of stages — shapes floors and walls alike, creating a \"theatre within a theatre\" where performance can happen almost anywhere. The accessible roof becomes a summer venue for open-air cinema and theatre above the neighbourhood.",
  ],
  sections: [
    {
      key: "theatre", code: "A", title: "The Theatre", tag: "Old & New · Cube in the City",
      text: [
        "By deliberately diverging from the ornate aesthetics of the original theatre, the modern cube asserts itself as a testament to modernity and artistic experimentation. By day the curtain reads as a soft, luminous membrane; by night it glows from within, the Bulgarian sign — Държавен Куклен Театър — surfacing across the mesh.",
        "The new volume grafts onto the preserved historical wing, sharing entrances, lobbies and a landscaped forecourt. Above, the accessible roof carries a green terrace, trees and a summer bar — an open-air stage and cinema that turn the top of the building into a meeting point for the district.",
      ],
      images: [
        { src: "content/projects/10-puppetry/pup-ext-day.png", label: "The curtain façade by day — the translucent cube behind its leaning mast, main entrance below", span: 2, ar: "3/2" },
        { src: "content/projects/10-puppetry/pup-ext-sign-night.png", label: "Night — the mesh veil glows and the theatre's name surfaces across the façade", span: 1, ar: "3/2" },
        { src: "content/projects/10-puppetry/pup-ext-sign-day.png", label: "Daytime — the sign reads faintly through the curtain, structure legible behind", span: 1, ar: "3/2" },
        { src: "content/projects/10-puppetry/pup-street-old.png", label: "Old and new — the historical theatre preserved beside the cube, a mural facing the street", span: 2, ar: "3/2" },
        { src: "content/projects/10-puppetry/pup-aerial-roof.png", label: "Aerial — the accessible roof with its green terrace, trees and summer open-air stage", span: 2, ar: "3/2" },
      ],
    },
    {
      key: "facade", code: "B", title: "The Curtain & the Grid", tag: "Façade · Structure",
      text: [
        "The façade concept — a curtain — is a metaphorical invitation: a mesh screen that creates mystery and draws the spectator toward the extraordinary. It hangs as a tensioned veil over a glazed, catwalk-lined skin, layering structure, fabric and shading from the landscape at the base to the roof stage above.",
        "Behind it, the main structure takes inspiration from the traditional assembly of stages: a captivating three-dimensional steel grid that forms the cube and, at the same time, defines its floors and walls. The deliberate visibility of this structure sets up a \"theatre within a theatre\" — a stage on a stage — where the boundaries between performance areas and circulation dissolve.",
      ],
      images: [
        { src: "content/projects/10-puppetry/dwg-facade.png", label: "Façade system — structure and shading, curtain / fabric, catwalks, floor slabs and landscape", span: 2, diagram: true, wide: true },
        { src: "content/projects/10-puppetry/pup-catwalk.png", label: "Glazed catwalk — the perforated mesh curtain hung outboard of the glass skin", span: 2, ar: "1/1" },
        { type: "floors", label: "Elevations", floors: [
          { n: "", name: "Main Entrance", src: "content/projects/10-puppetry/dwg-elev-entrance.png" },
          { n: "", name: "Old & New Theatre", src: "content/projects/10-puppetry/dwg-elev-oldnew.png" },
        ] },
        { src: "content/projects/10-puppetry/pup-ext-night.png", label: "Dusk on the corner — the illuminated cube reading between the street trees", span: 2, ar: "3/2" },
        { src: "content/projects/10-puppetry/pup-courtyard.png", label: "The curtain sweeping down to the garden — glazed base opening onto the lawn", span: 2, ar: "1/1" },
      ],
    },
    {
      key: "inside", code: "C", title: "Inside", tag: "Foyer · Main Hall · Stage-on-Stage",
      text: [
        "Entering behind the curtain, visitors arrive in a spacious exhibition foyer — a gateway to the world of puppetry that folds a café bar, information counter and seating into a shared public room. A floating circulation platform extends the exhibition upward and connects across to the old theatre's workshops, threading the steel grid through every level.",
        "At the heart of the building sits the cross-shaped, multifunctional main hall for up to 200. Departing from the traditional black box, centre-axis wings on both sides let the room reconfigure — shoe-box, centre-stage or fully immersive — with retractable seating platforms that roll away into the wings. State-of-the-art lighting and sound turn the exposed grid into an instrument for the performance itself.",
      ],
      images: [
        { src: "content/projects/10-puppetry/pup-foyer-stair.png", label: "Exhibition foyer — perforated stair, luminous cube installation and the family route through", span: 2, ar: "3/2" },
        { src: "content/projects/10-puppetry/pup-atrium.png", label: "The floating platform over the foyer — glazed grid, catwalks and the blue-cube artwork", span: 1, ar: "3/2" },
        { src: "content/projects/10-puppetry/pup-gallery-posters.png", label: "Gallery walk — event posters lining the catwalk above the foyer", span: 1, ar: "3/2" },
        { src: "content/projects/10-puppetry/pup-hall-dancers.png", label: "The main hall in daylight mode — steel truss overhead, glazed onto the atrium and stair", span: 2, ar: "3/2" },
        { src: "content/projects/10-puppetry/pup-hall-performance.png", label: "Performance mode — the grid dissolved into light, the audience wrapped around the stage", span: 2, ar: "3/2" },
      ],
    },
    {
      key: "drawings", code: "D", title: "Plans & Sections", tag: "Site · Floors · Sections",
      text: [
        "The building sets a 694 m² footprint into its corner site, stacking two underground floors, four above-ground levels and roughly 600 m² of usable roof. The ground floor holds the lobby, foyer and a versatile rehearsal room with artist, staff and delivery access; the first floor floats a circulation platform linked to the old theatre; the second floor is the grand upper foyer and main hall; the third is administration and artist-in-residence space.",
        "All levels — including the two basements of workshop, technical and storage space — are tied together by a freight elevator sized for scenes and props, running all the way to the rooftop stage. The sections read the whole machine at once: warehouse and MEP below grade, foyer and rehearsal at street level, the double-height main hall above, and the open-air theatre on the roof.",
      ],
      images: [
        { src: "content/projects/10-puppetry/dwg-site.png", label: "Situation plan — the new cube and preserved old theatre between the park and school, 1:500", span: 2, diagram: true },
        { type: "floors", label: "Floor Plans", floors: [
          { n: "-2", name: "Basement -2", src: "content/projects/10-puppetry/dwg-basement2.png" },
          { n: "-1", name: "Basement -1", src: "content/projects/10-puppetry/dwg-basement1.png" },
          { n: "0", name: "Ground Floor", src: "content/projects/10-puppetry/dwg-ground.png" },
          { n: "1", name: "First Floor", src: "content/projects/10-puppetry/dwg-first.png" },
          { n: "2", name: "Second Floor", src: "content/projects/10-puppetry/dwg-second.png" },
          { n: "3", name: "Administration", src: "content/projects/10-puppetry/dwg-admin.png" },
          { n: "R", name: "Roof", src: "content/projects/10-puppetry/dwg-roof.png" },
        ] },
        { type: "floors", label: "Sections", floors: [
          { n: "1", name: "Section 1-1", src: "content/projects/10-puppetry/dwg-section11.png" },
          { n: "2", name: "Section 2-2", src: "content/projects/10-puppetry/dwg-section22.png" },
        ] },
      ],
    },
  ],
});
/* ============ 11 — NORTHERN LIGHTS MUSEUM (sectioned) ============ */
window.PORTFOLIO.projects.push({
  n: "11", slug: "northern-lights", title: "Northern Lights Museum",
  type: "Museum", year: "2013", loc: "Finland",
  status: "Concept", hue: 150,
  hasVideo: true, video: null, youtube: "cplxXSrNkUs", hideTopFilm: true,
  cover: "content/projects/11-northern-lights/nl-forest-mist.png",
  circles: [
    "content/projects/11-northern-lights/nl-forest-mist.png",
    "content/projects/11-northern-lights/nl-aerial.png",
    "content/projects/11-northern-lights/nl-form-vessel.jpg",
  ],
  previewImgs: [
    "content/projects/11-northern-lights/nl-forest-mist.png",
    "content/projects/11-northern-lights/nl-pines-pano.png",
    "content/projects/11-northern-lights/nl-aerial.png",
  ],
  lead: "A museum in the Finnish forest shaped as a single continuous ribbon.",
  credits: [
    { role: "Project Team", names: ["Albert Sumin"] },
  ],
  facts: [
    { k: "Program", v: "Museum" },
    { k: "Location", v: "Finland" },
    { k: "Year", v: "2013" },
    { k: "Status", v: "Concept" },
  ],
  overview: [
    "The Northern Lights Museum is conceived as one uninterrupted gesture in the landscape — a ribbon that rises from the forest floor, swells into a polished, mirror-skinned vessel holding the galleries, and loops back on itself as an elevated walk over the water. The reflective shell mirrors the birches, the sky and the changing light, so the building appears to half-disappear into its setting.",
    "Set among Finnish pines and standing water, the museum choreographs a slow approach: visitors cross the looping timber deck, pass beneath and through the knotted form, and arrive in a daylit interior wrapped in glass. The figure-eight of the path turns the whole site into the exhibit — forest, reflection and sky read as clearly as anything held inside.",
  ],
  sections: [
    {
      key: "museum", code: "A", title: "In the Forest", tag: "Vessel · Walkway · Reflection",
      text: [
        "From the clearing the museum reads as a low, liquid form threading between the trees — a chrome vessel and a ribbon of walkway that cross over each other above the pond. In mist the mirror skin turns silver and near-weightless; in rain the timber deck darkens and the whole knot glistens.",
        "The looping path is the project's heart: it lifts visitors over the water, carries them around and through the building, and returns them to the forest floor. Every turn reframes the birches and the still black water, so the walk itself becomes the first gallery.",
      ],
      images: [
        { src: "content/projects/11-northern-lights/nl-forest-mist.png", label: "Mist over the pond — the looping walkway and mirror vessel dissolving into the birches", span: 2, ar: "1.6/1" },
        { src: "content/projects/11-northern-lights/nl-pines-pano.png", label: "Among the pines — the glazed vessel end of the museum seen through the trunks", span: 2, ar: "2.551/1" },
        { src: "content/projects/11-northern-lights/nl-loop-rain.png", label: "Rain on the deck — visitors crossing the timber ribbon over the water", span: 2, ar: "2.091/1" },
        { src: "content/projects/11-northern-lights/nl-aerial.png", label: "Aerial — the figure-eight of walkway and vessel knotting over the pond and clearing", span: 2, ar: "1.6/1" },
      ],
    },
    {
      key: "form", code: "B", title: "The Form", tag: "One Continuous Ribbon",
      text: [
        "Stripped of its setting, the parti is a single looping surface: a flat ribbon that twists up on itself to form a figure-eight, thickening at one end into the mirror-clad gallery vessel and thinning at the other into the walkway. There is no front or back — the museum is one continuous move.",
        "The polished, seamless shell is what makes the form read as liquid metal: it reflects and bends its surroundings across every curve, so the object is legible as pure geometry against white and as a mirror of the forest on site.",
      ],
      images: [
        { src: "content/projects/11-northern-lights/nl-form-loop.jpg", label: "Form study — the ribbon twisting into a figure-eight, vessel and walkway as one surface", span: 2, ar: "1.6/1", diagram: true, white: true },
        { src: "content/projects/11-northern-lights/nl-form-vessel.jpg", label: "The gallery vessel — the thickened, mirror-clad end of the loop", span: 2, ar: "1.713/1", diagram: true, white: true },
      ],
      youtube: "cplxXSrNkUs",
      youtubeLabel: "Northern Lights Museum — film",
    },
  ],
});
/* ============ 12 — BIM ACADEMY OFFICE (sectioned, built interior) ============ */
window.PORTFOLIO.projects.push({
  n: "12", slug: "bim-office", title: "BIM Academy Office",
  type: "Office / Interior", year: "2017", loc: "Moscow",
  status: "Built", hue: 24,
  hasVideo: false, video: null, hideTopFilm: true,
  cover: "content/projects/12-bim-office/photo-desks-bimwall.jpg",
  circles: [
    "content/projects/12-bim-office/photo-openspace-grass.jpg",
    "content/projects/12-bim-office/photo-reception-desk.jpg",
    "content/projects/12-bim-office/photo-rhino-mural.jpg",
  ],
  previewImgs: [
    "content/projects/12-bim-office/photo-desks-bimwall.jpg",
    "content/projects/12-bim-office/photo-desks-beanbags.jpg",
    "content/projects/12-bim-office/photo-bigboss-room.jpg",
  ],
  lead: "A built office for a BIM software-and-consulting studio inside a 19th-century Arma factory building in Moscow.",
  credits: [
    { role: "Project Team", names: ["Albert Sumin", "Sergei Svidko", "Evgenia Engel", "Dmitrii Andreev", "Dmitrii Antipov", "Rustam Ilaziev"] },
  ],
  facts: [
    { k: "Program", v: "Office / Interior" },
    { k: "Location", v: "Moscow" },
    { k: "Year", v: "2017" },
    { k: "Status", v: "Built" },
  ],
  overview: [
    "BIM Academy is a consulting and software company working in building design — it develops tools for designers, provides technical consulting, and runs educational programs. Having grown from five people to twenty-two in three years, the studio needed a bigger home and took a floor in a reconstructed 19th-century building of Moscow's Arma factory.",
    "The old brick walls, cast columns and tall arched windows became the basis of the design rather than a constraint. Finishing was kept to a minimum — existing surfaces were left as found and simply de-dusted, and only glass partitions were added to divide the space. The result reads as a raw loft that quietly doubles as a showroom for the studio's own design-technology workflow: parametric furniture, BIM coordination and on-site model-based assembly.",
  ],
  sections: [
    {
      key: "built", code: "A", title: "As Built", tag: "Photographs",
      text: [
        "The finished office reads exactly as intended — raw brick, cast columns and arched factory windows left as found, with glass partitions and a run of green hexagon floor graphics threading the zones together. Desks face one another under exposed ductwork and linear light lines; a strip of live grass tops the central planter, its dark face carved with BIM vocabulary.",
        "Away from the open floor, the fit-out turns playful: a rhino bursting through a Moscow skyline mural, a parametric slatted reception desk built in-house, a scarlet phone-booth glowing off a black corridor, and glass meeting rooms marked BIG BOSS on the floor and the BIM Academy roundel etched on the partition.",
      ],
      images: [
        { src: "content/projects/12-bim-office/photo-desks-bimwall.jpg", label: "Open space — facing desks, the BIM-vocabulary divider and live-grass planter under raw brick", span: 2, ar: "1.5/1" },
        { src: "content/projects/12-bim-office/photo-openspace-grass.jpg", label: "Down the desks — the grass planter running the length of the floor between the columns", span: 2, ar: "1.5/1" },
        { src: "content/projects/12-bim-office/photo-desks-beanbags.jpg", label: "Workstations giving onto the timber-floored lounge with patterned bean bags", span: 1, ar: "1.5/1" },
        { src: "content/projects/12-bim-office/photo-wc-corridor.jpg", label: "Glass meeting room and the hexagon wayfinding trail toward WC and playroom", span: 1, ar: "1.5/1" },
        { src: "content/projects/12-bim-office/photo-reception-desk.jpg", label: "Reception — the parametric slatted desk built in-house against the black wall", span: 2, ar: "1.5/1" },
        { src: "content/projects/12-bim-office/photo-meeting-brick.jpg", label: "Meeting room — timber table on a steel base, brick piers and the etched BIM Academy roundel", span: 1, ar: "1.5/1" },
        { src: "content/projects/12-bim-office/photo-bigboss-room.jpg", label: "The BIG BOSS room — hexagon light ring, brick and glass with the floor stencil", span: 1, ar: "1.5/1" },
        { src: "content/projects/12-bim-office/photo-rhino-mural.jpg", label: "Rhino mural bursting through a Moscow skyline on a meeting-room door", span: 1, ar: "1.5/1" },
        { src: "content/projects/12-bim-office/photo-bimwall-detail.jpg", label: "The BIM-vocabulary wall in relief under the live grass", span: 1, fit: "contain" },
        { src: "content/projects/12-bim-office/photo-red-room.jpg", label: "A scarlet phone booth glowing off the black-walled corridor", span: 1, fit: "contain" },
      ],
    },
    {
      key: "office", code: "B", title: "The Concept", tag: "Design Renders",
      text: [
        "Every partition in the office is glass. The point is to see one another across the whole floor and provoke interaction — and desks are arranged so people sit facing each other rather than back to back. Beyond the ergonomics, the transparency signals the studio's own value: total openness.",
        "Against the raw brick, cast columns and arched windows, the fit-out stays light — timber-topped steel desks, a green bean-bag RELAX corner, planting and a run of green hexagon floor graphics threading between the zones. Comfort of the workstations and their placement was the first priority, down to a daylight analysis run at the design stage.",
      ],
      images: [
        { src: "content/projects/12-bim-office/office-loft-desks.jpg", label: "Open desks facing each other under the raw brick and the BIM-word divider planter", span: 2, ar: "1.667/1" },
        { src: "content/projects/12-bim-office/office-loft-beanbags.jpg", label: "The RELAX corner — bean bags, planting and the hexagon floor trail by the arched windows", span: 2, ar: "1.667/1" },
        { src: "content/projects/12-bim-office/office-plan-color.png", label: "Furniture plan — open space, meeting room, classroom, kitchen and RELAX zone", span: 2, diagram: true },
      ],
    },
    {
      key: "graphics", code: "C", title: "Floor Graphics", tag: "Wayfinding · Identity",
      text: [
        "A trail of green hexagons — two RAL greens, 6016 dark and 6032 light — runs across the floor and up the walls, tying the zones together and carrying the studio's humour. Stencilled captions mark each stop: READY FOR BIM?, BIG BOSS, CLASSROOM, WC, RELAX, DON'T FORGET YOUR BRAIN, and a few that are best read on site.",
        "The lettering was set out as a proper drawing — every slogan dimensioned and keyed to a placement plan — so the paint crew could reproduce the identity exactly across floor and walls.",
      ],
      images: [
        { src: "content/projects/12-bim-office/office-stencils.jpg", label: "The stencil set — dimensioned slogans painted across floor and walls", span: 2, diagram: true, wide: true },
        { src: "content/projects/12-bim-office/dwg-graphics-plan.png", label: "Graphics layout — the hexagon trail and stencil positions keyed across the plan", span: 2, diagram: true },
      ],
    },
    {
      key: "bim", code: "D", title: "Built with BIM", tag: "Coordination · Fabrication",
      text: [
        "The office is, in a sense, a showroom of the studio's approach. Where they normally model skyscrapers and airports, here they turned the same tools on their own fit-out: the whole interior was built as a BIM model to drive accurate specifications and cost estimates, and the model was used on site for precise installation of the engineering systems and structural work.",
        "Most of the furniture was designed and assembled in-house, modelled with parametric scripts that generated the geometry and prepared the pieces for fabrication. A steel mezzanine adds a sleeping loft over the floor, and provisions — power and a foundation — were even cast in for a robotic arm to experiment with fabricating non-standard surfaces.",
      ],
      images: [
        { src: "content/projects/12-bim-office/office-mep-cutaway.jpg", label: "The coordinated BIM model — ductwork, piping and furniture in one cutaway", span: 2, ar: "1.059/1" },
        { src: "content/projects/12-bim-office/dwg-struct-3d.png", label: "Structural model — the steel mezzanine frame and joist layout over the floor", span: 2, diagram: true },
      ],
    },
    {
      key: "docs", code: "E", title: "Documentation", tag: "Plans · Structure · MEP",
      text: [
        "The fit-out was documented as a full working set — architectural plans, floor build-ups, the furniture layout, the steel mezzanine structure, electrical and low-current runs, and the ventilation and cooling systems — all drawn from the single coordinated model.",
        "The engineering sheets carry both plan and isometric views of the same networks, the way a BIM set does: what you see modelled in the cutaway is the same geometry that gets dimensioned and installed on site.",
      ],
      images: [
        { type: "floors", label: "Working Set", floors: [
          { n: "AR-4", name: "Plan (Reconstruction)", src: "content/projects/12-bim-office/dwg-plan-recon.png" },
          { n: "AR-5", name: "Floor Plan", src: "content/projects/12-bim-office/dwg-floor.png" },
          { n: "AR-8", name: "Furniture Plan", src: "content/projects/12-bim-office/dwg-furniture.png" },
          { n: "AR-21", name: "Structure Plan", src: "content/projects/12-bim-office/dwg-struct-plan.png" },
          { n: "AR-22", name: "Structure Sections", src: "content/projects/12-bim-office/dwg-struct-sections.png" },
          { n: "AR-25", name: "Electrical", src: "content/projects/12-bim-office/dwg-electrical.png" },
          { n: "OV-2", name: "Ventilation", src: "content/projects/12-bim-office/dwg-ventilation.png" },
          { n: "OV-3", name: "Cooling", src: "content/projects/12-bim-office/dwg-cooling.png" },
          { n: "OV-4", name: "Engineering Schematic", src: "content/projects/12-bim-office/dwg-engineering.png" },
        ] },
      ],
    },
  ],
});
/* ============ 13 — OFFICE BUILDING (sectioned, parametric concept) ============ */
window.PORTFOLIO.projects.push({
  n: "13", slug: "office-building", title: "Office Building",
  type: "Office", year: "2014", loc: "Moscow",
  status: "Concept", hue: 20,
  hasVideo: true, video: null, hideTopFilm: true,
  filmsAfter: [
    { youtube: "mBJI2OCiAGk", label: "flythrough", code: "FILM" },
  ],
  cover: "content/projects/13-office-building/ob-courtyard.png",
  circles: [
    "content/projects/13-office-building/ob-courtyard.png",
    "content/projects/13-office-building/ob-birds.png",
    "content/projects/13-office-building/ob-plaza.png",
  ],
  previewImgs: [
    "content/projects/13-office-building/ob-courtyard.png",
    "content/projects/13-office-building/ob-garden.png",
    "content/projects/13-office-building/ob-cafe.png",
  ],
  lead: "A parametric office complex for Moscow.",
  credits: [
    { role: "Project Team", names: ["Albert Sumin"] },
  ],
  facts: [
    { k: "Program", v: "Office" },
    { k: "Location", v: "Moscow" },
    { k: "Year", v: "2014" },
    { k: "Status", v: "Concept" },
  ],
  overview: [
    "The complex is composed of several curved, gently tapering office volumes that lean and swell like vessels, clustered to form sheltered courtyards between them. Their skin is a single continuous field of tiles that shifts from warm clay brick to mirror-polished metal, so the buildings read as both masonry and shimmering reflection depending on the light.",
    "At the ground the heavy volumes lift onto glazed colonnades, opening the base to shops, cafés and restaurants that spill out under umbrellas onto cobbled courts and stepped timber amphitheatres. Landscaped gardens, planting and birdsong turn the space between the offices into a public room — a working complex that behaves like a small piece of city.",
  ],
  sections: [
    {
      key: "building", code: "A", title: "The Building", tag: "Vessels · Courtyards · Skin",
      text: [
        "Between the leaning volumes the courtyards open as a sequence of rooms — a cobbled plaza with café terraces at the base of the curving walls, stepped timber seating cut into the lawn, and gardens that soften the scale of the great tiled drums above.",
        "Close up, the skin is the project: individually set tiles graduate from red and buff brick into flashes of polished metal, wrapping the double-curved surfaces so the façade catches the sun as a shimmer and dissolves the mass. At golden hour the reflective courses glow and the planting fills with birds.",
      ],
      images: [
        { src: "content/projects/13-office-building/ob-courtyard.png", label: "The courtyard — café terraces and amphitheatre steps between the tapering brick volumes", span: 2, ar: "1.75/1" },
        { src: "content/projects/13-office-building/ob-garden.png", label: "Stepped gardens and glazed colonnade at the base of the curving walls", span: 2, ar: "1.75/1" },
        { src: "content/projects/13-office-building/ob-plaza.png", label: "The shimmering brick-and-metal skin over the shopfronts and public plaza", span: 2, ar: "1.75/1" },
        { src: "content/projects/13-office-building/ob-cafe.png", label: "Café terrace under the sunlit curve — umbrellas on the cobbled court", span: 1, ar: "1/1" },
        { src: "content/projects/13-office-building/ob-birds.png", label: "Golden hour — the reflective tiles glowing above the flowering garden", span: 1, ar: "1/1" },
      ],
    },
    {
      key: "parametric", code: "B", title: "Parametric System", tag: "Grasshopper · Galapagos",
      text: [
        "The whole complex was built as a single Grasshopper definition: base massing, floor slabs and areas, the two façade systems and the frames between them, the tiled skin driven by attractors, the railings, the glazed atria and even the courtyard trees are all generated by one connected network of clusters.",
        "Because the geometry is parametric, the design could be tuned rather than drawn — with Galapagos running evolutionary optimization over the surface analysis to search for better-performing versions of the massing and skin. Change the inputs and the entire building, down to the tile pattern and the landscape, rebuilds itself.",
      ],
      images: [
        { src: "content/projects/13-office-building/ob-gh-definition.png", label: "The Grasshopper definition — base, façades, atrium, skin and trees as one clustered network", span: 2, diagram: true, wide: true },
        { src: "content/projects/13-office-building/ob-galapagos.jpg", label: "Galapagos evolutionary solver running over the surface analysis", span: 2, fit: "contain" },
      ],
      youtube: "CaskPodRGhc",
    },
  ],
});
/* ============ 14 — ARCHITECTURAL UNIVERSITY DORMITORY (sectioned) ============ */
window.PORTFOLIO.projects.push({
  n: "14", slug: "dormitory", title: "Architectural University Dormitory",
  type: "Dormitory", year: "2010", loc: "Omsk",
  status: "Competition", hue: 8, hideTopFilm: true,
  cover: "content/projects/14-dormitory/dorm-01-towers.jpg",
  circles: [
    "content/projects/14-dormitory/dorm-01-towers.jpg",
    "content/projects/14-dormitory/dorm-06-entry.jpg",
    "content/projects/14-dormitory/dorm-03-deck.jpg",
  ],
  previewImgs: [
    "content/projects/14-dormitory/dorm-01-towers.jpg",
    "content/projects/14-dormitory/dorm-05-loft.jpg",
    "content/projects/14-dormitory/dorm-02-facade.jpg",
  ],
  lead: "A competition entry for an architecture-university dormitory in Omsk.",
  credits: [
    { role: "Project Team", names: ["Albert Sumin"] },
  ],
  facts: [
    { k: "Program", v: "Dormitory" },
    { k: "Location", v: "Omsk" },
    { k: "Year", v: "2010" },
    { k: "Status", v: "Competition" },
  ],
  overview: [
    "Two parallel slab blocks are raised onto columns and pulled apart to leave a wide public deck floating between and beneath them — a sheltered ground for students that keeps the site open at grade. The elevated platform, its curved balustrade and colonnade become the social heart of the scheme, a covered plaza knitting the two residential bars together.",
    "Each block is filled with duplex living cells and expressed on the outside as a shuffled grid of coloured glass balcony panels — a lively, ever-changing skin over the red-mullioned glazing. Inside, the rooms borrow a constructivist palette of red, black and white, compact split-level cells where a shared common room stitches two personal rooms, one stacked above the other.",
  ],
  sections: [
    {
      key: "towers", code: "A", title: "The Towers", tag: "Twin Slabs · Public Deck · Skin",
      text: [
        "The two dormitory bars sit on either side of an elevated public deck, lifted clear of the ground on rows of columns so the whole base reads as a covered, walkable landscape. The deck curves and opens to admit light and a solitary tree, its underside animated by lighting, a chequerboard screen wall and glimpses through to the fields beyond.",
        "The outer skin is the building's signature: opaque coloured glass balcony panels are shuffled across the red-lined curtain wall so no two floors read the same, turning the mass into a pixelated, playful field that catches the light differently through the day.",
      ],
      images: [
        { src: "content/projects/14-dormitory/dorm-01-towers.jpg", label: "The twin slab blocks split by the elevated public deck floating above the street", span: 2, ar: "2/1" },
        { src: "content/projects/14-dormitory/dorm-02-facade.jpg", label: "The façade close up — shuffled coloured glass balcony panels over red-mullioned glazing", span: 1, ar: "1000/1600" },
        { src: "content/projects/14-dormitory/dorm-03-deck.jpg", label: "The covered public deck — curved balustrade, colonnade and a single tree under the platform", span: 1, ar: "1600/1000" },
        { src: "content/projects/14-dormitory/dorm-04-undercroft.jpg", label: "Beneath the deck — chequerboard screen wall and columns opening to the landscape", span: 2, ar: "1.6/1" },
      ],
    },
    {
      key: "cell", code: "B", title: "The Living Cell", tag: "Duplex · Constructivist Palette",
      text: [
        "The unit — the ячейка — is a compact split-level cell: two personal rooms stacked one above the other, joined by a shared common room with a kitchen and a floating stair. A bespoke storage-and-stair wall doubles as bookshelf, desk and circulation, packing study, sleep and living into a tight footprint.",
        "The interiors run a constructivist palette of red, black and white against warm timber floors — angled coloured door panels, a chequerboard splashback and a folded skylight bring the façade's graphic energy inside the room.",
      ],
      images: [
        { src: "content/projects/14-dormitory/dorm-05-loft.jpg", label: "The study level — floating book-stair, desk and daybed under the raking guardrail", span: 2, ar: "1600/1200" },
        { src: "content/projects/14-dormitory/dorm-06-entry.jpg", label: "The entry and dining nook — angled red-and-black door against white, folded skylight above", span: 1, ar: "1/1" },
        { src: "content/projects/14-dormitory/dorm-07-kitchen.jpg", label: "The common room — kitchen with chequerboard splashback and the floating stair up to the rooms", span: 1, ar: "1200/1600" },
      ],
    },
    {
      key: "drawings", code: "C", title: "Plans & Sections", tag: "Cell · Building",
      text: [
        "The drawings read the interlocking section: personal rooms (личные комнаты) and the shared cell (ячейка) stitched around the common room (общая комната), with the stairs and lift threaded up the spine of each block.",
        "At cell scale the duplex logic is clear — a common room with kitchen and bath on entry, and two personal rooms slotted one above the other behind it.",
      ],
      images: [
        { type: "floors", label: "Drawings", floors: [
          { n: "", name: "Sections 1:500", src: "content/projects/14-dormitory/dorm-08-sections.jpg" },
          { n: "", name: "Cell 1:100", src: "content/projects/14-dormitory/dorm-09-cell.jpg" },
        ] },
      ],
    },
  ],
});
/* ============ 15 — LIBRARY IN COPENHAGEN (sectioned, real content) ============ */
window.PORTFOLIO.projects.push({
  n: "15", slug: "copenhagen-library", title: "Library in Copenhagen",
  type: "Library", year: "2014", loc: "Copenhagen",
  status: "Competition", hue: 30, hideTopFilm: true, track: "team",
  cover: "content/projects/15-copenhagen-library/lib-01-night.jpg",
  circles: [
    "content/projects/15-copenhagen-library/lib-05-reading.jpg",
    "content/projects/15-copenhagen-library/lib-03-ships.jpg",
    "content/projects/15-copenhagen-library/lib-04-furniture.jpg",
  ],
  previewImgs: [
    "content/projects/15-copenhagen-library/lib-01-night.jpg",
    "content/projects/15-copenhagen-library/lib-07-atrium.jpg",
    "content/projects/15-copenhagen-library/lib-05-reading.jpg",
    "content/projects/15-copenhagen-library/lib-03-ships.jpg",
  ],
  lead: "A competition entry for a public library on the Copenhagen waterfront.",
  credits: [
    { role: "Office", names: ["Arhitekturium"] },
    { role: "Project Team", names: ["Vladimir Bindeman", "Albert Sumin", "Alexey Kovalev", "Max Salikin", "Alisa Novohadko"], align: "center" },
    { role: "My Role", names: ["3D modeling", "Renders", "Interior & spatial design"], align: "right" },
  ],
  facts: [
    { k: "Program", v: "Library" },
    { k: "Location", v: "Copenhagen" },
    { k: "Year", v: "2014" },
    { k: "Status", v: "Competition" },
    { k: "Office", v: "Arhitekturium" },
  ],
  overview: [
    "For this competition project I was mainly focused on 3D modelling and interior design, while the rest of the team provided the solutions for shape, façades and landscape.",
    "The 3D-modelling part was a combination of manual modelling in Rhino and a set of simple Grasshopper scripts for tasks like spreading the wooden tiles across the façade or creating the patterns for the interior walls.",
  ],
  sections: [
    {
      key: "building", code: "A", title: "The Building", tag: "Waterfront · Cantilever · Timber",
      text: [
        "According to the competition brief the building is relatively small for a public library, so it was a tricky task to fit the programme inside this volume. That is why many elements in the interior serve multiple purposes — the borders of the central staircase double as tables for the ground-floor café, and the walls work as bookshelves.",
      ],
      images: [
        { src: "content/projects/15-copenhagen-library/lib-05-reading.jpg", label: "Night on the waterfront — the timber volume glowing over the rain-soaked quay", span: 2, ar: "3700/1875" },
        { src: "content/projects/15-copenhagen-library/lib-06-cafe.jpg", label: "The library from the harbour promenade in the rain", span: 1, ar: "3700/1875" },
        { src: "content/projects/15-copenhagen-library/lib-01-night.jpg", label: "The cantilevered reading volume beside the moored tall ships", span: 1, ar: "3700/1875" },
        { src: "content/projects/15-copenhagen-library/lib-08-section.jpg", label: "Long section and street elevation — the reading volume stepping above the historic quay", span: 2, ar: "5000/1668", diagram: true },
      ],
    },
    {
      key: "interiors", code: "B", title: "Interiors", tag: "Atrium · Reading · Café",
      text: [],
      images: [
        { src: "content/projects/15-copenhagen-library/lib-03-ships.jpg", label: "The atrium — a sky of suspended letters over the sculpted white stair", span: 2, ar: "3000/1875" },
        { src: "content/projects/15-copenhagen-library/lib-02-day.jpg", label: "The reading room — timber study carrels and task lamps under tubular lighting", span: 2, ar: "3000/1875" },
        { src: "content/projects/15-copenhagen-library/lib-04-furniture.jpg", label: "The café — a dot-matrix portrait wall against warm wood and bent-ply seating", span: 1, ar: "3000/1875" },
        { src: "content/projects/15-copenhagen-library/lib-07-atrium.jpg", label: "Bespoke bent-plywood furniture designed for the library", span: 1, ar: "2472/1500" },
      ],
    },
    {
      key: "plans", code: "C", title: "Plans", tag: "Ground · Reading · Family",
      text: [
        "The plan stacks a public, active ground onto quieter reading floors and a family level above. At grade the main entrance leads past a bookcrossing area, info point and book shop into a café wrapped around the sculptural stair and reception.",
        "Higher up, the reading room, workspaces and lecture room share the timber floor around the stair void; the top level holds games, a quiet room, a parents' area, a green corner and an outdoor terrace.",
      ],
      images: [
        { type: "floors", label: "Plans", floors: [
          { n: "", name: "Ground — Café & Entrance", src: "content/projects/15-copenhagen-library/plan-third.jpg" },
          { n: "", name: "Reading Level", src: "content/projects/15-copenhagen-library/plan-ground.jpg" },
          { n: "", name: "Family Level & Terrace", src: "content/projects/15-copenhagen-library/plan-upper.jpg" },
        ] },
      ],
    },
  ],
});
/* ============ 16 — LAKHTA CENTER (sectioned, built — collaboration) ============ */
window.PORTFOLIO.projects.push({
  n: "16", slug: "lakhta-center", title: "Lakhta Center",
  type: "Mixed-use", year: "2015–2020", loc: "Saint Petersburg",
  status: "Built", hue: 222, hideTopFilm: true, track: "team",
  cover: "content/projects/16-lakhta-center/arch-render.jpg",
  circles: [
    "content/projects/16-lakhta-center/arch-render.jpg",
    "content/projects/16-lakhta-center/struct-render.jpg",
    "content/projects/16-lakhta-center/mep-render.jpg",
  ],
  previewImgs: [
    "content/projects/16-lakhta-center/lakhta-hero.png",
    "content/projects/16-lakhta-center/arch-render.jpg",
    "content/projects/16-lakhta-center/federated-iso.jpg",
    "content/projects/16-lakhta-center/roof-grid-plan.jpg",
  ],
  lead: "Europe's tallest building — a 462.8-metre twisting glass tower on the Gulf of Finland.",
  credits: [
    { role: "Office", names: ["Gorproject"] },
    { role: "My Role", names: ["BIM Management", "Computational design — façade & roof"], align: "right" },
  ],
  facts: [
    { k: "Program", v: "Mixed-use" },
    { k: "Location", v: "Saint Petersburg" },
    { k: "Year", v: "2015–2020" },
    { k: "Status", v: "Built" },
    { k: "Office", v: "Gorproject" },
  ],
  overview: [
    "Lakhta Center is a mixed-use complex on the shore of the Gulf of Finland in Saint Petersburg, crowned by a 462.8-metre tower that is the tallest building in Europe. The form spirals up from a five-pointed plan — every floor plate a rotated square — so the curtain wall reads as one continuous twist of glass tapering to a needle spire, with the winged multifunctional building spreading out at its base.",
    "I worked on the project as head of the BIM management and computational design department. My responsibilities included project coordination, standards development, parametric façade modelling and related work.",
  ],
  sections: [
    {
      key: "tower", code: "A", title: "The Tower", tag: "Mixed-use · 462.8 m",
      text: [
        "The Tower is the main part of the Lakhta complex. Its main complexity lies in the double-curved façade and the non-repeating floor plans caused by the twisted shape.",
        "As a BIM model, it was divided by discipline and by height into three parts — 21 different models in total.",
      ],
      images: [
        { src: "content/projects/16-lakhta-center/lakhta-hero.png", label: "The completed tower on the Gulf of Finland, beside the design elevation", span: 2, ar: "2003/978" },
      ],
    },
    {
      key: "facade", code: "B", title: "Façade Geometry", tag: "Computational Design",
      text: [
        "As a first step, we received from RMJM — the authors of the concept — a façade-shell model created in 3ds Max like a sculpture, without precise positions or sizes of the elements. I led a team that produced a mathematical description and completely rebuilt the shape through algorithms.",
        "We made all the geometrical calculations on paper — I have attached a few sketches from this stage below — and after that we switched to Grasshopper and Python scripts to produce not only the shape but also algorithms for transferring the geometry to Revit.",
      ],
      images: [
        { src: "content/projects/16-lakhta-center/geo-sketch.jpg", label: "Design geometry notes — rotation, offsets and the star plan", span: 1, fit: "contain", white: true },
        { src: "content/projects/16-lakhta-center/geo-plan.jpg", label: "Tower plan geometry — rotated squares forming the star", span: 1, fit: "contain", white: true },
        { src: "content/projects/16-lakhta-center/rhino-lahta.png", label: "Tower façade definition in Rhino & Grasshopper", span: 2, ar: "1920/1038" },
        { src: "content/projects/16-lakhta-center/rhino-sof.jpg", label: "Spire geometry — Rhino / Grasshopper (СОФ model)", span: 1, ar: "1956/1042" },
        { src: "content/projects/16-lakhta-center/gh-panels.jpg", label: "Panel-splitting Python component", span: 1, ar: "1432/873" },
        { src: "content/projects/16-lakhta-center/gh-canvas.jpg", label: "The Grasshopper definition driving the façade panels", span: 2, ar: "2400/1405" },
      ],
    },
    {
      key: "roof", code: "C", title: "Roof Grids — MFB", tag: "Panelisation",
      text: [
        "Another parametric design task under my responsibility was creating the geometry for the roof of the multifunctional building, which consists of thousands of small parts.",
        "All of them had to be present in the model, because they were used for LEED certificate assessments — calculating the shadow this grid roof casts onto the level below it to understand the cooling effect — and, of course, for manufacturing.",
      ],
      images: [
        { src: "content/projects/16-lakhta-center/mfb-pavilion.jpg", label: "Multifunctional building — wing roofs in wireframe", diagram: true, wide: true },
        { src: "content/projects/16-lakhta-center/roof-grid-plan.jpg", label: "MFB roof panelisation — plan", span: 1, fit: "contain", white: true },
        { src: "content/projects/16-lakhta-center/roof-grid-wing.jpg", label: "MFB roof grid — a developed wing", span: 1, fit: "contain", white: true },
      ],
    },
    {
      key: "bim", code: "D", title: "BIM Coordination", tag: "Federated Model",
      text: [
        "As BIM manager on this project I created multiple standards — BIM Execution Plans for the different disciplines, quality-control, clash-detection and delivery standards, and training programmes for new employees. I also participated in software and plug-in development as a product manager: we built our own apps for project quality checks, family management and export procedures.",
        "In 2015 this was the biggest BIM project in the world. We were in direct contact with the Autodesk offices in Moscow and Boston, and some of our inputs were implemented in later versions of Revit and in upcoming new software such as BIM 360. Overall, everything we did there was unique and without parallel in any other practice worldwide.",
      ],
      images: [
        { src: "content/projects/16-lakhta-center/federated-iso.jpg", label: "Federated model — all disciplines linked", span: 2, fit: "contain", white: true },
        { src: "content/projects/16-lakhta-center/federated-elevation.jpg", label: "Federated model — full building elevation", span: 1, fit: "contain", white: true },
        { src: "content/projects/16-lakhta-center/struct-section.jpg", label: "Structural section — tower, podium and piled foundation", span: 1, fit: "contain", white: true },
      ],
      youtube: "mpK4weLxl3Y",
    },
    {
      key: "site", code: "E", title: "On Site", tag: "Construction · 2015–2020",
      text: [
        "These are photos I took on the construction site during the project. They show the comprehensive process over the years, and the precision with which we built the BIM and parametric models.",
      ],
      images: [
        { src: "content/projects/16-lakhta-center/site-9322.jpg", label: "The tower's glass façade rising behind its climbing cranes", span: 2, ar: "2000/1328" },
        { src: "content/projects/16-lakhta-center/site-9604.jpg", label: "The MFB steel roof cantilevering over the site", span: 1, ar: "2000/1328" },
        { src: "content/projects/16-lakhta-center/site-9607.jpg", label: "Lifting a curved steel member at the tower base", span: 1, ar: "2000/1328" },
        { src: "content/projects/16-lakhta-center/site-9664.jpg", label: "The multifunctional building — steel diagrid and glazed façade taking shape", span: 2, ar: "2000/1378" },
        { src: "content/projects/16-lakhta-center/site-9662.jpg", label: "Erecting a tubular steel arch on the podium roof", span: 1, ar: "2000/1329" },
        { src: "content/projects/16-lakhta-center/site-9643.jpg", label: "Inside the atrium — steel frames and a link bridge between blocks", span: 1, ar: "2000/1386" },
        { src: "content/projects/16-lakhta-center/site-9586.jpg", label: "Falsework and shoring beneath a slab", span: 1, ar: "2000/1329" },
        { src: "content/projects/16-lakhta-center/site-9603.jpg", label: "A walkway through the site", span: 1, ar: "2000/1328" },
      ],
    },
  ],
});
/* ============ 17 — TARTU CULTURAL CENTRE (competition — collaboration) ============ */
window.PORTFOLIO.projects.push({
  n: "17", slug: "tartu-cultural-center", title: "Tartu Cultural Center",
  type: "Library / Mixed-use", year: "2023", loc: "Tartu",
  status: "Competition", hue: 145, hideTopFilm: true, track: "team",
  cover: "content/projects/17-tartu-cultural-center/render-plaza.jpg",
  circles: [
    "content/projects/17-tartu-cultural-center/render-plaza.jpg",
    "content/projects/17-tartu-cultural-center/biofacade-final.jpg",
    "content/projects/17-tartu-cultural-center/render-aerial-roofs.jpg",
  ],
  previewImgs: [
    "content/projects/17-tartu-cultural-center/render-plaza.jpg",
    "content/projects/17-tartu-cultural-center/biofacade-final.jpg",
    "content/projects/17-tartu-cultural-center/atrium-final.jpg",
    "content/projects/17-tartu-cultural-center/night-final.jpg",
  ],
  lead: "A competition proposal for Tartu's new cultural center.",
  credits: [
    { role: "Office", names: ["Cloud Cooperation"] },
    { role: "Project team", names: ["Tyler Bronstein", "Benjamin Smidt", "Albert Sumin", "Felix Knoll", "Irina Sorokina", "Charlotte Rauch", "Markus Prossnigg"] },
    { role: "My Role", names: ["Design of Biodiversity Façade", "Renders"], align: "right" },
  ],
  facts: [
    { k: "Program", v: "Library / Mixed-use" },
    { k: "Location", v: "Tartu, Estonia" },
    { k: "Year", v: "2023" },
    { k: "Status", v: "Competition" },
    { k: "Office", v: "Cloud Cooperation" },
  ],
  overview: [
    "The competition for the new cultural centre in Tartu was our first project at Cloud Cooperation, where we worked to an agile scheme of collaboration in which every one of us was equally involved in the decision-making.",
    "In the end my proposal for the biodiversity façade was kept in the final project — and, of course, I built it with a Grasshopper algorithm. It was also my first experience with rendering after a five-year pause, and my very first with Blender, which I learnt specifically for this project.",
  ],
  sections: [
    {
      key: "park", code: "A", title: "Cultural Centre in the Park", tag: "Concept · Urban",
      text: [
        "The cultural centre is located in an existing park, in keeping with the competition brief, and one of the main tasks was to preserve as much of the park's space and as many of its trees as possible. Another tricky task was to fit a very diverse and comprehensive programme into the building.",
      ],
      images: [
        { src: "content/projects/17-tartu-cultural-center/render-plaza.jpg", label: "The main plaza at dusk, with the curved timber footbridge over the pond", span: 2, ar: "2/1" },
        { src: "content/projects/17-tartu-cultural-center/render-aerial-park.jpg", label: "Aerial view — the building set into its wooded park beside the river", span: 2, ar: "2/1" },
        { src: "content/projects/17-tartu-cultural-center/concept-board.png", label: "Concept, landscape and massing diagrams", span: 2, fit: "contain", white: true },
        { src: "content/projects/17-tartu-cultural-center/site-plan.png", label: "Site plan — building, plaza and park (1:500)", span: 2, fit: "contain", white: true },
      ],
    },
    {
      key: "foyer", code: "B", title: "Foyer & Cultural Plaza", tag: "Public Space",
      text: [
        "The main foyer on the first floor works as both a public boulevard and a connector between the city and the park, linking opposite corners of the site with an urban passage that extends confidently into the landscape. Once inside, the central atrium distributes guests to the main functions while also offering room for leisure and relaxation.",
        "The interior plaza invites visitors to explore, with information points, a ticket office, a small shop and a café with a reading area. Vertical circulation leads up to the public library and the exhibition spaces under the roof, while the light-filled lower foyer gives generous space to gather before events in the Black Box or Small Hall.",
      ],
      images: [
        { src: "content/projects/17-tartu-cultural-center/atrium-final.jpg", label: "The central atrium, lit from above by the circular timber skylight", span: 2, ar: "2/1" },
        { src: "content/projects/17-tartu-cultural-center/night-final.jpg", label: "The riverfront at night — the lit library bridge above the water steps", span: 2, ar: "2/1" },
      ],
    },
    {
      key: "program", code: "C", title: "Library, Museum & Halls", tag: "Mixed-use Programme",
      text: [
        "The centre integrates several functions into one public building, balancing a commitment to the current spatial programme with a high flexibility for future adaptation. The three main functions of the cultural centre are the library, the museum, and the theatre and cinema halls.",
        "The event hall aims for a capacity of 800 seats and can host events from drama theatre to amplified music and screenings.",
      ],
      images: [
        { src: "content/projects/17-tartu-cultural-center/render-library.jpg", label: "Inside the library — stepped reading terraces under the white roof trusses", span: 2, ar: "2/1" },
        { type: "floors", label: "Sections", white: true, floors: [
          { n: "", name: "Section A–A", src: "content/projects/17-tartu-cultural-center/section-aa.png" },
          { n: "", name: "Section B–B", src: "content/projects/17-tartu-cultural-center/section-bb.png" },
          { n: "", name: "Section 1–1", src: "content/projects/17-tartu-cultural-center/section-11.png" },
        ] },
      ],
    },
    {
      key: "plans", code: "D", title: "Floor Plans", tag: "Drawings · 1:250",
      text: [
        "The building stacks its programme across five levels — two below ground for the event centre, cinema, halls and parking, and three above for the foyer, museum and library. Each plan traces the twisting geometry that threads circulation from the main entrance up to the reading rooms under the roof.",
      ],
      images: [
        { src: "content/projects/17-tartu-cultural-center/plan-01-ground.png", label: "First floor plan — foyer, museum and eateries (1:250)", span: 2, fit: "contain", white: true },
        { src: "content/projects/17-tartu-cultural-center/plan-02.png", label: "Second floor plan — museum and library (1:250)", span: 1, fit: "contain", white: true },
        { src: "content/projects/17-tartu-cultural-center/plan-03.png", label: "Third floor plan — library and children's area (1:250)", span: 1, fit: "contain", white: true },
        { src: "content/projects/17-tartu-cultural-center/plan-b1.png", label: "Basement level −1 — parking, cinema and event centre (1:250)", span: 1, fit: "contain", white: true },
        { src: "content/projects/17-tartu-cultural-center/plan-b2.png", label: "Basement level −2 — large hall, black-box configurations (1:250)", span: 1, fit: "contain", white: true },
      ],
    },
    {
      key: "biodiversity", code: "E", title: "Biodiversity Façade", tag: "My Role · Living Envelope",
      text: [
        "The façades address the project's ambition to increase biodiversity by incorporating sustainable, living systems into the building envelope — my main contribution to the team. Acting as a habitat for local wildlife, the living vertical façade provides shelter for birds, insects and vegetation, extending the ecology of the park up the face of the building.",
        "The façade is built from repeating diamond-shaped timber frames, each one assigned a role: a bee's hive, a bird's nest, a planted pocket, or an empty frame kept open for the building to breathe.",
      ],
      images: [
        { src: "content/projects/17-tartu-cultural-center/biofacade-final.jpg", label: "Biodiversity façade", span: 2, ar: "2/1" },
        { src: "content/projects/17-tartu-cultural-center/biodiversity-board.jpg", label: "Biodiversity strategy — green roofs, parks and the living façade cells", span: 2, fit: "contain", white: true },
      ],
    },
    {
      key: "structure", code: "F", title: "Structure & Façade Systems", tag: "Engineering",
      text: [
        "The structural system is a combination of different techniques and approaches: prefabricated elements and monolithic concrete cores, intersected with horizontal metal trusses — this is the main framework of the building.",
      ],
      images: [
        { src: "content/projects/17-tartu-cultural-center/structure-facade.png", label: "Building structures and façade systems", span: 2, fit: "contain", white: true },
        { type: "floors", label: "Elevations", white: true, floors: [
          { n: "", name: "Northwest — Main", src: "content/projects/17-tartu-cultural-center/elev-nw-main.png" },
          { n: "", name: "Northeast — Cinema", src: "content/projects/17-tartu-cultural-center/elev-ne-cinema.png" },
          { n: "", name: "Southeast — Delivery", src: "content/projects/17-tartu-cultural-center/elev-se-delivery.png" },
          { n: "", name: "Office & Biodiversity", src: "content/projects/17-tartu-cultural-center/elev-louver-bio.png" },
        ] },
      ],
    },
    {
      key: "views", code: "G", title: "Landscape & Views", tag: "Renders · Park",
      text: [
        "The park brings Estonian nature into the heart of the city and becomes a gateway to the old town. It is organised around curves that echo the rhythm of ecological flows and the meanders of the river, carrying users from the historic centre through gradients of forest and meadow to the museum forecourt.",
      ],
      images: [
        { src: "content/projects/17-tartu-cultural-center/render-entrance.jpg", label: "The cantilevered glass entrance volume, seen from the park", span: 2, ar: "2/1" },
        { src: "content/projects/17-tartu-cultural-center/render-aerial-river.jpg", label: "Aerial view over the green-roof courtyard and the river", span: 1, ar: "2/1" },
        { src: "content/projects/17-tartu-cultural-center/render-aerial-park.jpg", label: "Aerial view of the centre and its park at sunset", span: 1, ar: "2/1" },
      ],
    },
  ],
  closing: "Like the barn swallow it is named for, the cultural centre settles into the park — a living building that gives Tartu a new public heart and gives the city's wildlife a new home.",
});
/* ============ 18 — AL MAKTOUM INTERNATIONAL AIRPORT (under construction — collaboration) ============ */
window.PORTFOLIO.projects.push({
  n: "18", slug: "dubai-airport", title: "Al Maktoum International Airport",
  type: "Airport", year: "2023–2025", loc: "Dubai",
  status: "Under Construction", hue: 200, hideTopFilm: true, track: "team",
  cover: "content/projects/18-dubai-airport/aerial-view.jpg",
  circles: [
    "content/projects/18-dubai-airport/aerial-view.jpg",
    "content/projects/18-dubai-airport/roof-detail.png",
    "content/projects/18-dubai-airport/exterior-elevation.jpg",
  ],
  previewImgs: [
    "content/projects/18-dubai-airport/aerial-view.jpg",
    "content/projects/18-dubai-airport/exterior-elevation.jpg",
    "content/projects/18-dubai-airport/roof-detail.png",
    "content/projects/18-dubai-airport/top-view.jpg",
  ],
  lead: "The new Al Maktoum International Airport — set to become the world's largest airport.",
  credits: [
    { role: "Office", names: ["Coop Himmelb(l)au"] },
    { role: "My Role", names: ["BIM Management"], align: "right" },
  ],
  facts: [
    { k: "Program", v: "Airport" },
    { k: "Location", v: "Dubai" },
    { k: "Year", v: "2023–2025" },
    { k: "Status", v: "Under Construction" },
    { k: "Office", v: "Coop Himmelb(l)au" },
  ],
  overview: [],
  sections: [
    {
      key: "terminal", code: "A", title: "The Terminal", tag: "Airport · Dubai",
      text: [
        "Al Maktoum International is planned as the world's largest airport — a sequence of terminal roofs that rise and fall like dunes over the concourses, gathered around a landscaped, lake-filled forecourt.",
      ],
      images: [
        { src: "content/projects/18-dubai-airport/aerial-view.jpg", label: "Aerial view — the terminal and its landscaped forecourt beside the airfield", span: 2, ar: "16/9" },
        { src: "content/projects/18-dubai-airport/exterior-elevation.jpg", label: "The landside elevation — the roof canopy sweeping over the arrival drive", span: 2, ar: "3729/1843" },
        { src: "content/projects/18-dubai-airport/roof-detail.png", label: "Roof detail — the layered shells of the terminal canopy", span: 2, ar: "16/9" },
        { src: "content/projects/18-dubai-airport/top-view.jpg", label: "Top view — the terminal, concourses and airfield at dusk", span: 2, ar: "16/9" },
      ],
    },
    {
      key: "bim", code: "B", title: "BIM & Computational Design", tag: "My Role · CDE · Rhino.Inside",
      text: [
        "On the CHBL side I set up the whole BIM environment: the CDE, the BIM Execution Plan and a set of workflow instructions for the team, the federated model organisation, and the clash-detection and quality-check workflows. The airport is divided into principle zones — main terminal, the two concourses, BHS, APM and AGV tracks, parkings — and these zones drive the model division and naming across Revit Server, the shared folders and the client's servers.",
        "The complex geometry runs through a Rhino3D-to-Revit pipeline built on Rhino.Inside: the façades, roofs and roof-connected columns are modelled in Rhino, while structure, floors and standard elements live natively in Revit. Grasshopper scripts transfer the geometry per sector, and after concept design the Rhino model becomes an analytical model of curves and surfaces with categories, materials and worksets assigned — so every transfer lands in Revit as native, scheduled families.",
      ],
      images: [
        { src: "content/projects/18-dubai-airport/bim-zones.png", label: "Principle zones — the basis for model division across the airport", span: 2, fit: "contain", white: true },
        { src: "content/projects/18-dubai-airport/bim-naming.png", label: "Federated model organisation — zone models and their naming convention", span: 2, fit: "contain", white: true },
        { src: "content/projects/18-dubai-airport/rhino-division.png", label: "Rhino / Revit division — complex roof geometry vs native BIM elements", span: 2, fit: "contain", white: true },
        { src: "content/projects/18-dubai-airport/rhino-shell.png", label: "Shell, interior ceiling and skylights — transfer strategy per component", span: 2, fit: "contain", white: true },
        { src: "content/projects/18-dubai-airport/rhino-analytical.png", label: "Analytical Rhino model — layer structure and user parameters for transfer", span: 1, ar: "2048/1064" },
        { src: "content/projects/18-dubai-airport/rhino-gh-script.png", label: "The Grasshopper transfer script — one cluster per element family", span: 1, ar: "1622/1126" },
      ],
    },
    {
      key: "formfinding", code: "C", title: "Form Finding", tag: "Competition Stage · Rhino & Blender",
      text: [
        "On the competition stage of the project I was part of the design team, and these are my form-finding sketches made in Rhino and Blender — studies of a rippled roof landscape flowing over sculptural supports, with light filtering through perforations in the shell.",
      ],
      images: [
        { src: "content/projects/18-dubai-airport/ff-wave-01.png", label: "Roof surface study — a field of flowing ridges", span: 2, ar: "4/3" },
        { src: "content/projects/18-dubai-airport/ff-wave-02.png", label: "Ridge geometry — close-up of the corrugated shell", span: 1, ar: "8/5" },
        { src: "content/projects/18-dubai-airport/ff-wave-03.png", label: "Sweeping roof waves at dusk", span: 1, ar: "8/5" },
        { src: "content/projects/18-dubai-airport/ff-render-01.png", label: "Under the canopy — the shell lifting over the water plaza", span: 2, ar: "2/1" },
        { src: "content/projects/18-dubai-airport/ff-render-02.png", label: "Sculptural supports carrying the perforated roof", span: 2, ar: "2/1" },
        { src: "content/projects/18-dubai-airport/ff-render-03.png", label: "An arched opening between the supports", span: 2, ar: "2/1" },
        { src: "content/projects/18-dubai-airport/ff-render-05.png", label: "The shell dipping to a single point of support", span: 1, ar: "1/1" },
        { src: "content/projects/18-dubai-airport/ff-render-06.png", label: "Through the opening — lit interior landscape", span: 1, ar: "1/1" },
        { src: "content/projects/18-dubai-airport/ff-render-04.png", label: "The roofscape from the water — openings glowing at dusk", span: 2, ar: "2/1" },
        { src: "content/projects/18-dubai-airport/ff-render-07.png", label: "Elevation study — the undulating silhouette over the lake", span: 2, ar: "2/1" },
      ],
    },
  ],
});
/* ============ 19 — SCA ARENA (built — collaboration) ============ */
window.PORTFOLIO.projects.push({
  n: "19", slug: "sca-arena", title: "SCA Arena",
  type: "Hockey Arena", year: "2021", loc: "Saint Petersburg",
  status: "Built", hue: 355, hideTopFilm: true, track: "team",
  cover: "https://coop-himmelblau.at/site/assets/files/3997/sca-arena-2023-01.1800x0.png",
  circles: [
    "https://coop-himmelblau.at/site/assets/files/3997/sca-arena-2023-01.1800x0.png",
    "https://coop-himmelblau.at/site/assets/files/3997/sca-arena-2023-02.1800x0.png",
    "https://coop-himmelblau.at/site/assets/files/3997/sca-arena-2023-04.1800x0.png",
  ],
  previewImgs: [
    "https://coop-himmelblau.at/site/assets/files/3997/sca-arena-2023-01.1800x0.png",
    "https://coop-himmelblau.at/site/assets/files/3997/sca-arena-2023-02.1800x0.png",
    "content/projects/19-sca-arena/wire-side.png",
    "content/projects/19-sca-arena/wire-aerial.png",
  ],
  lead: "A 23,000-seat sports and concert arena in Saint Petersburg, wrapped in a constructivist steel framework.",
  credits: [
    { role: "Office", names: ["Coop Himmelb(l)au"] },
    { role: "My Role", names: ["Computational design — façade"], align: "right" },
  ],
  facts: [
    { k: "Program", v: "Hockey Arena" },
    { k: "Location", v: "Saint Petersburg" },
    { k: "Year", v: "2021" },
    { k: "Status", v: "Built" },
    { k: "Office", v: "Coop Himmelb(l)au" },
  ],
  overview: [],
  sections: [
    {
      key: "arena", code: "A", title: "The Arena", tag: "Constructivist Framework",
      text: [
        "The SKA Arena is one of the largest hockey stadiums in the world. Its unique and complex structure was a challenging part of the Design Development stage, where I joined the CHBL team to help with parametric design and BIM solutions.",
      ],
      images: [
        { src: "https://coop-himmelblau.at/site/assets/files/3997/sca-arena-2023-01.1800x0.png", label: "The completed arena — the steel framework and cantilevered roof at dusk", span: 2, ar: "1800/1296" },
        { src: "https://coop-himmelblau.at/site/assets/files/3997/sca-arena-2023-02.1800x0.png", label: "Under the roof — the arcade between the framework and the plinth", span: 1, ar: "1800/1296" },
        { src: "https://coop-himmelblau.at/site/assets/files/3997/sca-arena-2023-04.1800x0.png", label: "The arena in its park at night", span: 1, ar: "1800/1296" },
        { src: "https://coop-himmelblau.at/site/assets/files/3856/sca-arena-st_petersburg-russia-coop-himmelblau-diagrams27.1800x0.jpg", label: "Structural build-up — ring segments and roof trusses (B+G Ingenieure)", span: 2, fit: "contain", white: true },
        { src: "https://coop-himmelblau.at/site/assets/files/3855/sca-arena-st_petersburg-russia-coop-himmelblau-diagrams04-1.1800x0.jpg", label: "Design diagrams — framework, ring and roof", span: 2, fit: "contain", white: true },
        { src: "https://coop-himmelblau.at/site/assets/files/3942/sca-arena-st_petersburg-russia-coop-himmelblau-drawings-05.1800x0.jpg", label: "Elevation drawing", span: 2, fit: "contain", white: true },
      ],
    },
    {
      key: "facade", code: "B", title: "Computational Design — Façade", tag: "My Role · Rhino & Grasshopper",
      text: [
        "My part of the project was creating a parametric model in Grasshopper for the glass façade skin. For this task I used Elefront to divide it by steps and provide user attributes on each of these steps, to use them on further stages when the model is transferred to the BIM environment.",
        "After that I prepared the whole model, not only my façade, to send it to Revit using Rhino.Inside.",
      ],
      images: [
        { src: "content/projects/19-sca-arena/wire-side.png", label: "The façade master model — framework, arches and roof skin", span: 2, ar: "4/3" },
        { src: "content/projects/19-sca-arena/wire-aerial.png", label: "Aerial view of the model — roof panelisation and the ring-shaped plinth", span: 1, ar: "8/5" },
        { src: "content/projects/19-sca-arena/wire-plinth.png", label: "Side elevation — the plinth building joining the arena", span: 1, ar: "8/5" },
        { src: "content/projects/19-sca-arena/rhino-ui.jpg", label: "The master model in Rhino — layer structure for roof, façade, plinth and lights", span: 2, ar: "1280/700" },
        { src: "content/projects/19-sca-arena/bowl-model.jpg", label: "The bowl model — triangulated façade panels on the stadium structure", span: 1, fit: "contain", white: true },
        { src: "content/projects/19-sca-arena/panel-detail.jpg", label: "A single triangulated façade panel", span: 1, fit: "contain", white: true },
      ],
    },
    {
      key: "park", code: "C", title: "Arena Park", tag: "My Role · Parametric & BIM Model",
      text: [
        "The arena sits close to a new public park. For this part of the project I prepared the parametric and BIM model.",
      ],
      images: [
        { src: "content/projects/19-sca-arena/park-plan.jpg", label: "Park masterplan — amphitheatre, playgrounds, sports fields and skatepark among the pines", span: 2, fit: "contain", white: true },
        { src: "content/projects/19-sca-arena/park-aerial-v2.jpg", label: "The built park beside the arena — pavilions, running track and skatepark", span: 1, ar: "1280/853" },
        { src: "content/projects/19-sca-arena/park-pavilion.png", label: "Under a pavilion canopy — steel V-columns and timber swing frames", span: 1, ar: "1280/853" },
      ],
    },
  ],
});
/* ============ 20 — IPAI HEILBRONN (competition — collaboration) ============ */
window.PORTFOLIO.projects.push({
  n: "20", slug: "ipai", title: "Innovation Park Artificial Intelligence",
  type: "Innovation Campus Masterplan", year: "2022", loc: "Heilbronn, Germany",
  status: "Competition", hue: 230, hideTopFilm: true, track: "team",
  cover: "content/projects/20-ipai/slide-19.png",
  circles: [
    "content/projects/20-ipai/slide-19.png",
    "content/projects/20-ipai/slide-21.png",
    "content/projects/20-ipai/slide-27.png",
  ],
  previewImgs: [
    "content/projects/20-ipai/slide-19.png",
    "content/projects/20-ipai/slide-21.png",
    "content/projects/20-ipai/slide-22.png",
    "content/projects/20-ipai/slide-27.png",
  ],
  lead: "A competition masterplan for an AI innovation campus in Heilbronn — designed with AI in the process.",
  credits: [
    { role: "Office", names: ["Coop Himmelb(l)au"] },
    { role: "My Role", names: ["Computational design"], align: "right" },
  ],
  facts: [
    { k: "Program", v: "Innovation Campus" },
    { k: "Location", v: "Heilbronn, Germany" },
    { k: "Year", v: "2022" },
    { k: "Status", v: "Competition" },
    { k: "Office", v: "Coop Himmelb(l)au" },
  ],
  overview: [],
  sections: [
    {
      key: "concept", code: "A", title: "Concept & Site", tag: "Networked Systems",
      text: [
        "The masterplan for the Innovation Park Artificial Intelligence grows from three ideas: networked systems — a web of interconnected nodes; the simultaneity of those systems; and an open society. The site sits on the northern edge of Heilbronn, close to the Bildungscampus and the Neckar.",
      ],
      images: [
        { src: "content/projects/20-ipai/page-08.png", label: "Concept — networked systems, simultaneity, open society (sketch by Wolf dPrix)", span: 2, ar: "1818/1050" },
        { src: "content/projects/20-ipai/slide-10.png", label: "The site in Heilbronn — five sectors, 139,100 m² main plot", span: 2, ar: "1818/1050" },
      ],
    },
    {
      key: "structure", code: "B", title: "Programme & Structure", tag: "Grids · Clusters · Typologies",
      text: [
        "The programme — business campus, start-up centre, living, labs, data centres and public functions — is organised as a layered system: a flexible grid as the basic structure, mobility fields and anchor points woven through it, single objects and landscape as the free layers on top. A catalogue of building typologies (courtyard, U-form, L-form, bar) fills the grids with workplaces and apartments.",
      ],
      images: [
        { src: "content/projects/20-ipai/page-16.png", label: "Functional programme — allocation and networking of uses", span: 2, ar: "1818/1050" },
        { src: "content/projects/20-ipai/page-18.png", label: "Concept — grid types, levels and the open system", span: 2, ar: "1818/1050" },
        { src: "content/projects/20-ipai/slide-19.png", label: "Structure & layers — single objects, mobility, grid and landscape", span: 2, ar: "1818/1050" },
        { src: "content/projects/20-ipai/slide-23.png", label: "Elements — layering of grid, cluster and single-object structures", span: 2, ar: "1818/1050" },
        { src: "content/projects/20-ipai/slide-24.png", label: "Typology catalogue — courtyard, U-form, L-form and bar buildings", span: 2, ar: "1818/1050" },
        { src: "content/projects/20-ipai/slide-22.png", label: "Cluster variants — three grid configurations across three levels", span: 2, ar: "1818/1050" },
      ],
    },
    {
      key: "ai", code: "C", title: "AI-Driven Design", tag: "My Role · Computational Design",
      text: [
        "This was my part of the project: creating an algorithm in Grasshopper to calculate multiple factors affecting the different parts of the grid, evaluate the results of these calculations and assign one or another function to particular place in the grid.",
      ],
      images: [
        { src: "content/projects/20-ipai/slide-20.png", label: "AI positioning — input, matrix and the 3D functional programme", span: 2, ar: "1818/1050" },
        { src: "content/projects/20-ipai/slide-21.png", label: "Site-condition heatmaps — sun, water, noise, wind, heights and access", span: 2, ar: "1818/1050" },
        { src: "content/projects/20-ipai/slide-27.png", label: "AI variations — generative studies of the campus", span: 2, ar: "1818/1050" },
      ],
    },
  ],
});
/* ============ 21 — RECONSTRUCTION IN STUTTGART (under construction — collaboration) ============ */
window.PORTFOLIO.projects.push({
  n: "21", slug: "stuttgart-office", title: "Reconstruction of the Old Building in Stuttgart",
  type: "Office Building", year: "2024", loc: "Stuttgart",
  status: "Under Construction", hue: 265, hideTopFilm: true, track: "team",
  hasVideo: true, video: null,
  cover: "content/projects/21-stuttgart-office/model-building.jpg",
  circles: [
    "content/projects/21-stuttgart-office/model-building.jpg",
    "content/projects/21-stuttgart-office/model-cutaway-axon.png",
    "content/projects/21-stuttgart-office/model-facade-strip.jpg",
  ],
  previewImgs: [
    "content/projects/21-stuttgart-office/model-building.jpg",
    "content/projects/21-stuttgart-office/model-cutaway-axon.png",
    "content/projects/21-stuttgart-office/model-facade-strip.jpg",
    "content/projects/21-stuttgart-office/dwg-innenhof-wandabwicklung.png",
  ],
  lead: "A revitalisation of an old building in the centre of Stuttgart into a modern office building.",
  credits: [
    { role: "Office", names: ["W+W", "Cloud Cooperation"] },
    { role: "My Role", names: ["Computational design — façade"], align: "right" },
  ],
  facts: [
    { k: "Program", v: "Office Building" },
    { k: "Location", v: "Stuttgart" },
    { k: "Year", v: "2024" },
    { k: "Status", v: "Under Construction" },
    { k: "Office", v: "W+W, Cloud Cooperation" },
  ],
  overview: [],
  sections: [
    {
      key: "building", code: "A", title: "The Building", tag: "Revitalisation · Office",
      text: [
        "An existing building in the centre of Stuttgart is reconstructed into a modern office building. For this project I built the façade skin model in Grasshopper, Rhino.Inside and Revit — the model below shows the full building with the new façade wrapped around the retained structure.",
      ],
      images: [
        { src: "content/projects/21-stuttgart-office/model-building.jpg", label: "The BIM model — the office building with its new façade, terraced roofscape and piled foundation", span: 2, ar: "1280/906" },
      ],
    },
    {
      key: "workflow", code: "B", title: "Façade Workflow", tag: "My Role · Grasshopper · Rhino.Inside · Revit",
      text: [
        "My task was to invent a workflow for the façade development and modelling: the skin is generated by Grasshopper definitions, driven through Rhino.Inside into Revit, where it lands as native families ready for documentation. The work ran in close collaboration with the façade engineers, who provided detail drawings for some parts of the building — their build-ups fed back into the model.",
        "From the finished model I produced the elevation and detail drawings in Revit.",
      ],
      images: [
        { src: "content/projects/21-stuttgart-office/model-cutaway-axon.png", label: "Cutaway axon — the façade skin model on the existing structure, with curved glazing at the entrance", span: 1, ar: "4/3" },
        { src: "content/projects/21-stuttgart-office/model-facade-strip.jpg", label: "A vertical strip of the façade — window build-ups, balustrades and slab connections floor by floor", span: 1, ar: "4/3", fit: "contain", white: true },
      ],
      youtube: "Zb3r8vqp76Y",
      youtubeLabel: "Façade model — walkthrough",
    },
    {
      key: "drawings", code: "C", title: "Elevation & Detail Drawings", tag: "Revit · Workshop Planning",
      text: [
        "The elevation and detail sheets produced from the model in Revit.",
      ],
      images: [
        { src: "content/projects/21-stuttgart-office/dwg-innenhof-wandabwicklung.png", label: "Courtyard façade — wall development and 1:50 details", span: 2, fit: "contain", white: true, ar: "3200/1759" },
        { src: "content/projects/21-stuttgart-office/dwg-innenhof-uebersicht.png", label: "Courtyard façade — overview", span: 2, fit: "contain", white: true, ar: "3200/2264" },
        { src: "content/projects/21-stuttgart-office/dwg-nw-achse-a-b.png", label: "North-west façade — axes A–B with 1:50 details", span: 1, fit: "contain", white: true, ar: "3200/3167" },
        { src: "content/projects/21-stuttgart-office/dwg-no-achse-8-9.png", label: "North-east façade — axes 8–9", span: 1, fit: "contain", white: true, ar: "3200/3167" },
        { src: "content/projects/21-stuttgart-office/dwg-no-theaterpassage-achse-3-4.png", label: "North-east façade — view from the Theaterpassage, axes 3–4", span: 1, fit: "contain", white: true, ar: "3200/3167" },
        { src: "content/projects/21-stuttgart-office/dwg-no-detail-achse-7.png", label: "North-east façade — detail at axis 7", span: 1, fit: "contain", white: true, ar: "3200/3167" },
        { src: "content/projects/21-stuttgart-office/dwg-no-detail-achse-4-5-6.png", label: "North-east façade — details at axes 4–5, 6", span: 1, fit: "contain", white: true, ar: "3200/3167" },
        { src: "content/projects/21-stuttgart-office/dwg-no-anschluss-trh1.png", label: "North-east façade — connection at stair core TRH1", span: 1, fit: "contain", white: true, ar: "3200/2264" },
        { src: "content/projects/21-stuttgart-office/dwg-so-achse-c-e.png", label: "South-east façade — axes C–E", span: 1, fit: "contain", white: true, ar: "3200/2264" },
        { src: "content/projects/21-stuttgart-office/dwg-so-achse-f-hg.png", label: "South-east façade — axes F–HG", span: 1, fit: "contain", white: true, ar: "3200/3167" },
      ],
    },
  ],
});
/* ============ 22 — THREE PIERS, SANYA (concept — piers & shopping mall) ============ */
window.PORTFOLIO.projects.push({
  n: "22", slug: "three-piers", title: "Three Piers",
  type: "Piers / Shopping Mall", year: "2026", loc: "Sanya, Hainan",
  status: "Concept Design", hue: 30,
  hasVideo: false, video: null, hideTopFilm: true,
  cover: "content/projects/22-three-piers/overview-aerial.png",
  circles: [
    "content/projects/22-three-piers/seafood-bay-pavilions.png",
    "content/projects/22-three-piers/central-aerial-amphitheatre.png",
    "content/projects/22-three-piers/sport-aerial-topdown.png",
  ],
  previewImgs: [
    "content/projects/22-three-piers/overview-aerial.png",
    "content/projects/22-three-piers/plan-site-overview.png",
    "content/projects/22-three-piers/plan-seafood-pier.png",
    "content/projects/22-three-piers/reference-water-village.jpg",
  ],
  lead: "One structural and design logic configured into three piers, each shaped by its function.",
  credits: [
    { role: "Project Team", names: ["Albert Sumin", "Irina Sorokina", "Myrto Klimi"] },
    { role: "Project made at", names: ["Coop Himmelb(l)au"], align: "right" },
  ],
  facts: [
    { k: "Program", v: "Piers, Shopping Mall" },
    { k: "Location", v: "Sanya, Hainan" },
    { k: "Year", v: "2026" },
    { k: "Status", v: "Concept Design" },
  ],
  overview: [],
  sections: [
    {
      key: "overview", code: "A", title: "Overview", tag: "Dadonghai District · Competition",
      text: [
        "The competition for the Dadonghai district in Sanya includes plots for new constructions: hotels, a shopping mall and piers. For the piers I use the same structural and design logic to configure them into three different shapes related to their functions.",
        "The floating platforms and pavilions located around the main pier structures are inspired by a real water village I found not far from Sanya — I made hundreds of photos there to use them as references.",
      ],
      images: [
        { src: "content/projects/22-three-piers/overview-aerial.png", label: "Bird's-eye view of the Dadonghai bay — the three piers along the beach", span: 2, ar: "3000/1670" },
        { src: "content/projects/22-three-piers/plan-site-overview.png", label: "Site plan — market, public square, biodiversity park, urban farm, sport area and the seafood market pier", span: 1, ar: "1/1", fit: "contain", white: true },
        { src: "content/projects/22-three-piers/plan-seafood-pier.png", label: "Seafood market pier — floating platforms, cafés, swimming area, kayak rental and oyster farm", span: 1, ar: "1/1", fit: "contain", white: true },
        { src: "content/projects/22-three-piers/piers-elevations-strip.png", label: "The three piers — one structural logic in three configurations", span: 2, fit: "contain", white: true, ar: "16512/3072" },
        { src: "content/projects/22-three-piers/sketch-piers.jpg", label: "Early sketches — pier sections and the swimming area", span: 1, ar: "4031/3023" },
        { src: "content/projects/22-three-piers/reference-water-village.jpg", label: "The water village near Sanya — the reference for the floating platforms and pavilions", span: 1, ar: "4031/3023", fit: "cover" },
      ],
    },
    {
      key: "seafood-pier", code: "B", title: "Seafood Market Pier", tag: "Market · Pavilions · Open Sea Swimming",
      text: [
        "The seafood market is the biggest of the three piers. Around the main structure sits a field of pavilions — restaurants, shops and rental points — with fish stalls and tanks under the long curving canopy, and an open sea swimming area cut into the deck at the pier head.",
        "Behind the pier lies the biodiversity park, which connects the pier with the shopping mall square.",
      ],
      images: [
        { src: "content/projects/22-three-piers/seafood-aerial-topdown.png", label: "Top view — the market spine, the pavilion field on the water and the swimming oculus", span: 2, ar: "3000/2319" },
        { src: "content/projects/22-three-piers/seafood-bay-pavilions.png", label: "The pier in the bay — timber pavilions along the market spine", span: 2, ar: "3000/1674" },
        { src: "content/projects/22-three-piers/seafood-swimming-area.png", label: "The open sea swimming area — stepped terraces around a protected pool", span: 2, ar: "3000/1674" },
        { src: "content/projects/22-three-piers/seafood-market-from-beach.png", label: "The market canopy seen from the beach", span: 1, ar: "3000/1674" },
        { src: "content/projects/22-three-piers/seafood-canopy-stalls.png", label: "Fish stalls under the curving roof at dusk", span: 1, ar: "3000/1674" },
        { src: "content/projects/22-three-piers/seafood-market-hall.png", label: "Inside the market — live tanks, stalls and cafés along the hall", span: 2, ar: "3000/1674" },
        { src: "content/projects/22-three-piers/seafood-rental-frontage.png", label: "Cafés and rental points at the water's edge", span: 1, ar: "3000/1674" },
        { src: "content/projects/22-three-piers/seafood-pier-rooftop-gardens.png", label: "Rooftop gardens and pools above the market", span: 1, ar: "3000/1674" },
        { src: "content/projects/22-three-piers/seafood-biodiversity-park.png", label: "The biodiversity park behind the pier — the link to the shopping mall square", span: 2, ar: "3000/1674" },
      ],
    },
    {
      key: "central-pier", code: "C", title: "Central Pier", tag: "Concerts · Theatrical Performances",
      text: [
        "The central pier is the stage of the bay: it is used mainly for concerts and theatrical performances. A circular walkway reaches out from the beach and encloses a lagoon, with the amphitheatre sitting inside the ring — the audience faces the stage while the sea forms the backdrop.",
      ],
      images: [
        { src: "content/projects/22-three-piers/central-aerial-amphitheatre.png", label: "The ring walkway and the open-air amphitheatre set into the lagoon", span: 2, ar: "3000/1677" },
        { src: "content/projects/22-three-piers/central-waterfront-dawn.png", label: "The layered shell seen from the water at dawn", span: 1, ar: "3000/1677" },
        { src: "content/projects/22-three-piers/central-concert-evening.png", label: "Evening performance — the stage opens under the stacked roof terraces", span: 1, ar: "3000/1674" },
      ],
    },
    {
      key: "sport-pier", code: "D", title: "Sport Pier", tag: "Water Sports · Existing Pier Reused",
      text: [
        "An existing pier stands on this spot, and it is used as the basis for the new structure: the walkway out from the beach is kept and the new sport platform is built on top of its footprint. At the far end the same ring logic returns as a stepped bowl around a protected swimming pool, with the roof deck above used as a diving and viewing platform.",
        "Around it, timber decks carry the kayak and paddle rental, changing rooms and a café, so the whole end of the pier works as a water-sports base.",
      ],
      images: [
        { src: "content/projects/22-three-piers/sport-aerial-topdown.png", label: "Top view — the retained walkway, the stepped bowl and the swimming pool at the pier head", span: 2, ar: "3000/1674" },
        { src: "content/projects/22-three-piers/sport-platform-divers.png", label: "The bathing platform under the ring roof — steps down to the water and the diving deck above", span: 1, ar: "3000/1677" },
        { src: "content/projects/22-three-piers/sport-kayak-frontage.png", label: "The kayak and paddle rental frontage along the deck", span: 1, ar: "3000/1674" },
      ],
    },
    {
      key: "shopping-mall", code: "E", title: "Shopping Mall", tag: "Digital Square · Performances · Market",
      text: [
        "The shopping mall wraps a sunken digital square: the paving and the curved façades are screens, so the whole space becomes a stage in the evening for performances, and a market area during the day, with a canal running through it for boat vendors.",
      ],
      images: [
        { src: "content/projects/22-three-piers/mall-digital-square.png", label: "The digital square between the mall wings — floating market by day, performance stage in the evening", span: 2, ar: "3000/1674" },
      ],
    },
  ],
});
window.placeholderImg = function (label, hue, dark) {
  label = String(label).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  const bg   = dark ? `hsl(${hue} 22% 22%)` : `hsl(${hue} 28% 86%)`;
  const bg2  = dark ? `hsl(${hue} 22% 18%)` : `hsl(${hue} 32% 80%)`;
  const ink  = dark ? `hsl(${hue} 26% 62%)` : `hsl(${hue} 30% 34%)`;
  const svg = `
  <svg xmlns='http://www.w3.org/2000/svg' width='1200' height='820' viewBox='0 0 1200 820'>
    <defs>
      <pattern id='s' width='34' height='34' patternUnits='userSpaceOnUse' patternTransform='rotate(45)'>
        <rect width='34' height='34' fill='${bg}'/>
        <rect width='17' height='34' fill='${bg2}'/>
      </pattern>
    </defs>
    <rect width='1200' height='820' fill='url(#s)'/>
    <rect x='30' y='30' width='1140' height='760' fill='none' stroke='${ink}' stroke-width='3'/>
    <text x='58' y='96' fill='${ink}' font-family='monospace' font-size='30' letter-spacing='1'>${label}</text>
    <text x='600' y='430' fill='${ink}' font-family='monospace' font-size='32' text-anchor='middle' opacity='0.7'>[ image to come ]</text>
  </svg>`;
  return "data:image/svg+xml;charset=utf-8," + encodeURIComponent(svg.trim());
};

window.findProject = function (n) {
  return window.PORTFOLIO.projects.find((p) => p.n === n) || null;
};
