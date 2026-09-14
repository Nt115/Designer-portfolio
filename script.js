/* ══════════════════════════════════════════
   NAQIYA TABASSUM — Designer Portfolio
   script.js
══════════════════════════════════════════ */

/* ─────────────────────────────────────────
   PROJECT DATA
   Each entry drives the modal content.
───────────────────────────────────────── */
const PROJECTS = [
  {
    id: 'icrams',
    title: 'ICRAMS 2025 — Conference Brochure',
    tag: 'Print · Brochure',
    year: '2025',
    role: 'Graphic Designer',
    client: 'Bhaktavatsalam Memorial College for Women, Chennai',
    tools: 'Adobe InDesign, Adobe Illustrator, Canva Pro',
    desc: `A tri-fold academic conference brochure designed for the International Conference on Recent Advancements in Multidisciplinary Sciences (ICRAMS 2025), held on 3rd–4th March 2025.

The design balances institutional authority with visual clarity — using a dark teal palette, scientific illustrations (atoms, math symbols, lab equipment), and a structured three-panel information hierarchy covering the event overview, organising committee, and registration details.

Key elements include a QR code–based registration flow, tiered fee structure table, and a custom scientific illustration collage built from vector assets.`,
    highlights: [
      'Tri-fold layout with 3 distinct information zones',
      'Custom scientific illustration collage as hero visual',
      'QR code–integrated registration and payment flow',
      'Dark teal + white palette reinforcing academic credibility',
      'Bilingual-ready layout structure'
    ],
    previewClass: 'modal-preview--icrams',
    previewContent: `
      <div class="mp-icrams-real">
        <img src="assets/icrams_1.jpg" alt="ICRAMS Brochure Page 1" />
        <img src="assets/icrams_2.jpg" alt="ICRAMS Brochure Page 2" />
      </div>`
  },
  {
    id: 'love-red',
    title: 'LOVE — Poetry Collection Poster (Red Edition)',
    tag: 'Print · Poster Design',
    year: '2024',
    role: 'Graphic Designer',
    client: 'Crescent Literary Society — Office Bearers Edition',
    tools: 'Adobe Photoshop, Canva Pro',
    desc: `A 3×3 mosaic grid poster designed as the cover and promotional artwork for the Crescent Literary Society's annual poetry collection — office bearers edition.

The design uses a typographic grid system where bold letter tiles spelling "LOVE" alternate with curated photo tiles — roses, bokeh hearts, and floral imagery. The crimson red palette was chosen to evoke passion and romantic poetry, while the white background keeps it clean and printable.

This is the first of two colour variants (the second being the pink members' edition), demonstrating a consistent design system applied across different audience segments.`,
    highlights: [
      '3×3 typographic mosaic grid system',
      'Crimson red palette — passion, romance, poetry',
      'Curated photo selection: roses, heart bokeh, floral close-ups',
      'Scalable template system used across multiple editions',
      'Print and social media optimised (square format)'
    ],
    previewClass: 'modal-preview--love-red',
    previewContent: `
      <div class="mp-real-img"><img src="assets/love-red.png" alt="love-red project image" /></div>`
  },
  {
    id: 'love-pink',
    title: 'LOVE — Poetry Collection Poster (Pink Edition)',
    tag: 'Print · Poster Design',
    year: '2024',
    role: 'Graphic Designer',
    client: 'Crescent Literary Society — Members Edition',
    tools: 'Adobe Photoshop, Canva Pro',
    desc: `The members' edition variant of the LOVE poster series — using the same 3×3 mosaic grid system but recoloured in vibrant magenta/hot-pink.

The photo selection shifts to lighter, more abundant florals — fields of pink roses, a pink heart sculpture, and a close-up of a dew-kissed mauve rose — reinforcing a softer, more expansive feeling compared to the intense crimson of the office bearers' edition.

This project demonstrates systematic colour thinking: one template, two tones, two distinct emotional registers for two different audiences within the same organisation.`,
    highlights: [
      'Colour variant of a shared design system',
      'Hot pink / magenta palette — softer, more joyful tone',
      'Photo curation: pink rose fields, heart sculpture, mauve close-up',
      'Demonstrates brand consistency across audience segments',
      'Square format — optimised for print and Instagram'
    ],
    previewClass: 'modal-preview--love-pink',
    previewContent: `
      <div class="mp-real-img"><img src="assets/love-pink.png" alt="love-pink project image" /></div>`
  },
  {
    id: 'litrapture',
    title: 'Litrapture \'24 — Block & Tackle Event Poster',
    tag: 'Print · Event Poster',
    year: '2024',
    role: 'Graphic Designer & Event Co-ordinator',
    client: 'Crescent Literary Society — Litrapture 2024',
    tools: 'Canva Pro, Adobe Illustrator',
    desc: `An event registration poster for "Block & Tackle" — a debate competition held as part of Litrapture '24, the annual literary festival of Crescent Literary Society.

The design uses a sky-blue palette with hand-drawn cloud and blob doodles to create a playful, approachable aesthetic — deliberately distinct from formal academic event posters. The whimsical style was chosen to attract student participation and lower the intimidation barrier of a debate event.

The layout balances clear registration information (fee, QR code, contact details) with the playful visual language, demonstrating the ability to design for both fun and function simultaneously.`,
    highlights: [
      'Sky-blue + dark teal palette — friendly, approachable',
      'Hand-drawn cloud and blob doodle elements',
      'QR code registration integration',
      'Typographic hierarchy: event name → type → date → CTA',
      'Designed to drive student walk-in registrations'
    ],
    previewClass: 'modal-preview--litrapture',
    previewContent: `
      <div class="mp-real-img"><img src="assets/litrapture.png" alt="litrapture project image" /></div>`
  },
  {
    id: 'depleted-v1',
    title: '"Depleted" — Poetry Graphic (Light Version)',
    tag: 'Editorial · Social Media',
    year: '2023',
    role: 'Social Media Designer',
    client: 'Crescent Literary Society — Instagram',
    tools: 'Adobe Photoshop, Canva Pro',
    desc: `An editorial social media graphic designed to present the poem "Depleted" by Arihaam on the Crescent Literary Society's Instagram page.

The design uses a warm, moody dark photo as background — a person writing at a desk under lamplight — to visually reinforce the poem's theme of exhaustion and quiet perseverance. A white L-shaped corner bracket frames the content, and the title is set in a flowing script typeface for emotional contrast against the clean body text.

This is the lighter, high-contrast version of the graphic. The left-side vertical bar creates a strong reading axis that guides the eye naturally through the stanzas.`,
    highlights: [
      'Corner-bracket framing device — editorial precision',
      'Warm dark photo background — moody, literary atmosphere',
      'Script headline + serif body — emotional typographic contrast',
      'Left vertical bar creates natural reading axis',
      'Optimised for Instagram square format'
    ],
    previewClass: 'modal-preview--depleted-v1',
    previewContent: `
      <div class="mp-real-img"><img src="assets/depleted-v1.png" alt="depleted-v1 project image" /></div>`
  },
  {
    id: 'depleted-v2',
    title: '"Depleted" — Poetry Graphic (Dark Version)',
    tag: 'Editorial · Social Media',
    year: '2023',
    role: 'Social Media Designer',
    client: 'Crescent Literary Society — Instagram',
    tools: 'Adobe Photoshop, Canva Pro',
    desc: `The refined, darker iteration of the "Depleted" poetry graphic — representing a second design pass on the same content.

The photo is more desaturated and darker, pushing the background further into shadow. The text content is contained within a frosted glass panel (semi-transparent black overlay with blur) which improves legibility while maintaining the atmospheric quality of the photo.

The attribution "~ Arihaam" is moved to the right-aligned bottom position — a subtle layout change that gives the design more breathing room and a more polished editorial feel. Together, the two versions demonstrate a deliberate iteration process: same content, refined execution.`,
    highlights: [
      'Frosted glass text panel — legibility meets atmosphere',
      'More desaturated photo — darker, more subdued mood',
      'Right-aligned attribution — editorial layout refinement',
      'Demonstrates design iteration and version comparison',
      'Companion piece to the Light Version'
    ],
    previewClass: 'modal-preview--depleted-v2',
    previewContent: `
      <div class="mp-real-img"><img src="assets/depleted-v2.png" alt="depleted-v2 project image" /></div>`
  },
  {
    id: 'terrain-pulicat',
    title: 'Pulicat Lake & Chennai — 3D Satellite Terrain',
    tag: '3D Visualisation · GIS',
    year: '2024',
    role: '3D Cartographic Designer',
    client: 'Academic GIS Research Project',
    tools: 'QGIS, Blender, NASA SRTM Data, Sentinel-2 Satellite Imagery',
    desc: `A 3D terrain visualisation of the Chennai coastal region and Pulicat Lake, created by draping high-resolution Sentinel-2 satellite imagery over a Digital Elevation Model (DEM) extruded in 3D.

The render uses a neutral beige studio background to keep the focus on the terrain itself. Pulicat Lake — India's second largest brackish water lagoon — is clearly visible as a green coastal feature between the land and the Bay of Bengal. Clean annotation labels with leader lines identify key geographic points.

This project demonstrates the ability to bridge technical GIS data processing with clean, presentation-ready 3D visual output — a rare combination of cartographic and graphic design skills.`,
    highlights: [
      'Sentinel-2 satellite imagery draped on 3D DEM',
      'Blender render with studio neutral background',
      'Pulicat Lake clearly visible as coastal lagoon feature',
      'Clean annotation labels with leader lines',
      'Bridges GIS data processing and visual design'
    ],
    previewClass: 'modal-preview--terrain-coastal',
    previewContent: `
      <div class="mp-real-img"><img src="assets/terrain-pulicat.png" alt="terrain-pulicat project image" /></div>`
  },
  {
    id: 'terrain-tirupati',
    title: 'Eastern Ghats — 3D Elevation Model (Tirupati Region)',
    tag: '3D Visualisation · GIS',
    year: '2024',
    role: '3D Cartographic Designer',
    client: 'Academic GIS Research Project',
    tools: 'QGIS, Blender, SRTM 30m DEM, QGIS2Blender',
    desc: `A 3D Digital Elevation Model (DEM) render of the Eastern Ghats mountain range, covering the Tirupati, Chittoor, and Srikalahasti region of Andhra Pradesh.

The elevation data is visualised using a natural red-to-green colour ramp — darker reds and browns for high elevations (the Tirumala hills where Tirupati sits), transitioning through orange mid-tones to green plains. This makes the dramatic topographic variation of the Eastern Ghats immediately legible.

The warm sandy background and soft directional lighting give the render an approachable, almost sculptural quality — making raw scientific data feel like an artwork.`,
    highlights: [
      'SRTM 30m resolution DEM data processing',
      'Red-to-green elevation colour ramp',
      'Tirumala Hills clearly visible at high elevation',
      'Warm sandy background + directional Blender lighting',
      'Three labeled location pins with leader lines'
    ],
    previewClass: 'modal-preview--terrain-dem',
    previewContent: `
      <div class="mp-real-img"><img src="assets/terrain-tirupati.png" alt="terrain-tirupati project image" /></div>`
  },
  {
    id: 'terrain-rayachoty',
    title: 'Rayachoty — 3D Rocky Terrain Render',
    tag: '3D Visualisation · GIS',
    year: '2024',
    role: '3D Cartographic Designer',
    client: 'Academic GIS Research Project',
    tools: 'QGIS, Blender, SRTM DEM, Satellite Texture Mapping',
    desc: `A photorealistic 3D terrain render of Rayachoty in Kadapa district, Andhra Pradesh — one of the most geologically distinctive landscapes in South India, characterised by rugged quartzite ridges and rocky outcrops.

Unlike the DEM colour-ramp approach used in the Tirupati render, this visualisation uses satellite texture mapping directly onto the extruded terrain, giving it a photorealistic appearance. The muted earthy tones — ochre, dark brown, slate — reflect the actual geological character of the Rayachoty region.

The render is intentionally minimal: a single location annotation, no colour ramp legend, letting the terrain's natural drama speak for itself.`,
    highlights: [
      'Satellite texture mapped directly to 3D terrain (no colour ramp)',
      'Photorealistic quartzite ridge and rocky outcrop detail',
      'Muted earthy palette — geologically authentic',
      'Minimal annotation — terrain as the hero',
      'Demonstrates versatility across render styles'
    ],
    previewClass: 'modal-preview--terrain-rocky',
    previewContent: `
      <div class="mp-real-img"><img src="assets/terrain-rayachoty.png" alt="terrain-rayachoty project image" /></div>`
  },
  {
    id: 'president',
    title: 'President Announcement — Crescent Literary Society',
    tag: 'Editorial · Social Media',
    year: '2024',
    role: 'Graphic Designer (self-designed)',
    client: 'Crescent Literary Society — Official Instagram',
    tools: 'Adobe Photoshop, Canva Pro',
    desc: `A bold typographic announcement poster created for Naqiya Tabassum's appointment as President of the Crescent Literary Society at B.S. Abdur Rahman Crescent Institute of Science & Technology.

The design uses a dramatic monochrome treatment: a greyscale desaturated photo as background with the word "PRESIDENT" repeated at varying scales and opacities as a watermark — creating a layered, editorial typography effect. A clean white rectangular frame overlays the composition, and the subject photo is placed in cut-out style in the foreground.

The name is set in bold uppercase sans-serif at the bottom with a dotted rule underline — a purposeful nod to title cards and editorial spreads.`,
    highlights: [
      'Repeating typographic watermark at multiple scales and opacities',
      'Monochrome + cut-out photo — editorial announcement style',
      'White rectangular frame overlay — structured yet bold',
      'CLS badge positioned in the top-right corner',
      'Name treated as a title card — bold, clean, authoritative'
    ],
    previewClass: 'modal-preview--president',
    previewContent: `
      <div class="mp-real-img"><img src="assets/president.jpg" alt="president project image" /></div>`
  },
  {
    id: 'auditions',    title: 'Literary Auditions 2023-24 — Event Poster',
    tag: 'Print · Event Poster',
    year: '2023',
    role: 'Graphic Designer',
    client: 'ISTD-C & Final Years, Crescent Literary Society',
    tools: 'Canva Pro, Adobe Photoshop',
    desc: `An event poster for the Literary Auditions 2023-24 organised by ISTD-C and the Final Year batch of the Crescent Literary Society. The auditions covered four disciplines: Writing, Improv, Debate, and Pop Quiz.

The poster's most distinctive feature is the Kodak film-strip photo border — top and bottom strips of actual candid photographs from previous society events, creating an authentic, community-driven visual narrative. This deliberate use of real photography adds warmth and social proof.

The central content sits on a paper-textured background with a large ghost "BITS" watermark, giving the poster depth and brand identity. A script typeface for the date and location adds personality, while the QR code makes registration frictionless.`,
    highlights: [
      'Kodak film-strip border with real society event candids',
      'Ghost "BITS" watermark on paper-texture background',
      'Dual logo placement — Crescent Institute + CLS',
      'Script + serif typographic pairing for date/location',
      'QR code for direct mobile registration',
      'Covers 4 disciplines in one clear visual hierarchy'
    ],
    previewClass: 'modal-preview--auditions',
    previewContent: `
      <div class="mp-real-img"><img src="assets/auditions.jpg" alt="Literary Auditions 2023-24" /></div>`
  },
  {
    id: 'antagonist',
    title: '"How to Create an Impactful Antagonist" — CLS Educational Series',
    tag: 'Editorial · Social Media Series',
    year: '2023',
    role: 'Graphic Designer & Content Designer',
    client: 'Crescent Literary Society — Instagram Educational Series',
    tools: 'Adobe Photoshop, Canva Pro',
    desc: `The cover slide for CLS's "Character Building" educational carousel series on Instagram — an initiative to help members improve their creative writing skills.

This slide introduces the concept of an antagonist. The design deliberately breaks from the club's usual warm aesthetic: a pitch-black background, smoke texture at the edges, glitch-style typography with pink and cyan shadows, and a large illustrated jaw with sharp teeth as the hero visual — creating immediate intrigue and visual tension.

The phonetic pronunciation "an·ta·guh·nuhst" adds an editorial dictionary reference detail, and the "Swipe to read →" CTA invites engagement. The contrast between this dark cover and the softer slides that follow is an intentional design choice — hooks the reader before the content delivers.`,
    highlights: [
      'Dark atmospheric design — deliberate tonal break from usual CLS palette',
      'Glitch typography effect — pink and cyan text-shadow offset',
      'Illustrated jaw/teeth as conceptual hero visual',
      'Phonetic pronunciation — editorial dictionary reference detail',
      '"Swipe to read →" CTA drives carousel engagement',
      'Part of a multi-slide educational content series'
    ],
    previewClass: 'modal-preview--antagonist',
    previewContent: `
      <div class="mp-real-img"><img src="assets/antagonist.webp" alt="antagonist project image" /></div>`
  },
  {
    id: 'support-cover',
    title: '"How to Build a Supporting Character" — Cover Slide',
    tag: 'Editorial · Social Media Series',
    year: '2023',
    role: 'Graphic Designer & Content Designer',
    client: 'Crescent Literary Society — Instagram Educational Series',
    tools: 'Adobe Illustrator, Adobe Photoshop, Canva Pro',
    desc: `Cover slide for the "How to Build a Supporting Character" carousel — part of the same CLS character-building educational series as the Antagonist graphic.

The design shifts to a completely different visual language: warm cream background, soft watercolour pink wash, and a collection of illustrated character figures (faceless, stylised) to represent the ensemble nature of supporting characters.

A deep rose ribbon banner at the bottom carries the slide title in an elegant script, contrasting with the serif header above. The illustrated characters — including figures with distinct personality markers (Guy Fawkes mask, sunglasses, hats) — add visual storytelling depth, reinforcing the idea that supporting characters have their own defined identities.`,
    highlights: [
      'Warm cream + watercolour pink wash — soft, literary palette',
      'Illustrated character ensemble — distinct personality markers per figure',
      'Deep rose ribbon banner with script typography',
      'Serif + script typographic pairing — editorial warmth',
      'Visual contrast to the dark Antagonist cover — same series, different register',
      'Characters have visual identity cues (masks, glasses, hats)'
    ],
    previewClass: 'modal-preview--support-cover',
    previewContent: `
      <div class="mp-real-img"><img src="assets/support-cover.webp" alt="support-cover project image" /></div>`
  },
  {
    id: 'support-slide',
    title: '"Supporting Characters" — Interior Carousel Slide',
    tag: 'Editorial · Social Media Series',
    year: '2023',
    role: 'Graphic Designer & Content Designer',
    client: 'Crescent Literary Society — Instagram Educational Series',
    tools: 'Adobe Illustrator, Canva Pro',
    desc: `An interior content slide from the "Supporting Character" carousel series — the slide that delivers the core definition.

The design uses a sage green background with illustrated character figures arranged as a living border frame around the content. The figures are diverse and rendered in flat illustration style — a deliberate choice that emphasises the breadth and variety of supporting characters in storytelling.

The central text sits inside a frosted glass panel (white with low opacity + blur), creating clear legibility against the illustrated background. Wildflower botanical elements at the base of the frame soften the composition. The script typeface inside the panel completes the editorial, journal-like tone of the series.`,
    highlights: [
      'Illustrated character border frame — 10+ diverse figures',
      'Frosted glass text panel — clear hierarchy in a busy composition',
      'Sage green palette — calm, thoughtful, literary',
      'Wildflower botanical accents at the base',
      'Script typeface inside panel — consistent with series voice',
      'Flat illustration style — accessible, contemporary feel'
    ],
    previewClass: 'modal-preview--support-slide',
    previewContent: `
      <div class="mp-real-img"><img src="assets/support-slide.webp" alt="support-slide project image" /></div>`
  }
];

/* index for prev/next navigation */
let currentProjectIndex = 0;

/* ─────────────────────────────────────────
   MODAL OPEN / CLOSE / NAVIGATE
───────────────────────────────────────── */
function openModal(id) {
  const idx = PROJECTS.findIndex(p => p.id === id);
  if (idx === -1) return;
  currentProjectIndex = idx;
  renderModal(PROJECTS[idx]);
  document.getElementById('projectModal').classList.add('open');
  document.getElementById('modalBackdrop').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  document.getElementById('projectModal').classList.remove('open');
  document.getElementById('modalBackdrop').classList.remove('open');
  document.body.style.overflow = '';
}

function navigateModal(dir) {
  currentProjectIndex = (currentProjectIndex + dir + PROJECTS.length) % PROJECTS.length;
  renderModal(PROJECTS[currentProjectIndex]);
}

function renderModal(project) {
  // preview
  const preview = document.getElementById('modalPreview');
  preview.className = 'project-modal__preview ' + project.previewClass;
  preview.innerHTML = project.previewContent;

  // text content
  document.getElementById('modalTag').textContent   = project.tag;
  document.getElementById('modalYear').textContent  = project.year;
  document.getElementById('modalTitle').textContent = project.title;
  document.getElementById('modalDesc').textContent  = project.desc;
  document.getElementById('modalRole').textContent   = project.role;
  document.getElementById('modalClient').textContent = project.client;
  document.getElementById('modalTools').textContent  = project.tools;

  // highlights
  const hlContainer = document.getElementById('modalHighlights');
  if (project.highlights && project.highlights.length) {
    hlContainer.innerHTML = '<h4>Design Highlights</h4><ul>' +
      project.highlights.map(h => `<li>${h}</li>`).join('') +
      '</ul>';
  } else {
    hlContainer.innerHTML = '';
  }

  // counter
  document.getElementById('modalCounter').textContent =
    `${currentProjectIndex + 1} / ${PROJECTS.length}`;
}

/* close on Escape key */
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeModal();
  if (e.key === 'ArrowLeft')  navigateModal(-1);
  if (e.key === 'ArrowRight') navigateModal(1);
});

/* ─────────────────────────────────────────
   MOBILE MENU
───────────────────────────────────────── */
function toggleMenu() {
  const menu = document.getElementById('mobileMenu');
  menu.classList.toggle('open');
}

/* ─────────────────────────────────────────
   NAV SCROLL SHADOW
───────────────────────────────────────── */
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  nav.style.boxShadow = window.scrollY > 20
    ? '0 4px 30px rgba(0,0,0,0.4)'
    : 'none';
});

/* ─────────────────────────────────────────
   WORK FILTER
───────────────────────────────────────── */
const filterBtns = document.querySelectorAll('.filter-btn');
const cards      = document.querySelectorAll('.project-card');

filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const filter = btn.dataset.filter;
    cards.forEach(card => {
      const show = filter === 'all' || card.dataset.category === filter;
      card.classList.toggle('hidden', !show);
      if (show) card.style.animation = 'fadeIn 0.4s ease both';
    });
  });
});

/* ─────────────────────────────────────────
   CONTACT FORM
───────────────────────────────────────── */
function handleSubmit(e) {
  e.preventDefault();
  const successMsg = document.getElementById('formSuccess');
  successMsg.hidden = false;
  e.target.reset();
  setTimeout(() => { successMsg.hidden = true; }, 5000);
}

/* ─────────────────────────────────────────
   SCROLL-REVEAL
───────────────────────────────────────── */
const observer = new IntersectionObserver(
  entries => entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  }),
  { threshold: 0.1 }
);

document.querySelectorAll(
  '.project-card, .service-card, .about__text, .about__image-wrap, .contact__text, .contact__form'
).forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(30px)';
  el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  observer.observe(el);
});

/* ─────────────────────────────────────────
   SMOOTH ANCHOR SCROLL (fixed nav offset)
───────────────────────────────────────── */
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', e => {
    const href = link.getAttribute('href');
    if (href === '#') return;
    const target = document.querySelector(href);
    if (!target) return;
    e.preventDefault();
    const navH = 72;
    window.scrollTo({ top: target.offsetTop - navH, behavior: 'smooth' });
  });
});
