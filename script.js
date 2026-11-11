const projects = {
  parking: {
    title: "Parking-SV",
    website: "https://parkingsv-web-git-main-parkingsv.vercel.app/",
    repository: "https://github.com/parkingSV26/parkingsv-web"
  },
  voxvision: {
    title: "Vox Vision",
    website: "https://fredy-8.github.io/VoxVision/",
    repository: "https://github.com/Fredy-8/VoxVision"
  },
  glowp: {
    title: "GlowP",
    website: null,
    repository: null
  }
};

const projectCopy = {
  en: {
    parking: {
      category: "01 / MOBILITY",
      description: "A technology platform that connects drivers looking for parking with people offering available spaces, making it easier to find a place to park.",
      overview: "A practical alternative for discovering parking spaces offered by their owners.",
      focus: ["Driver-to-space connections", "Available parking search"]
    },
    voxvision: {
      category: "02 / ACCESSIBLE TECHNOLOGY",
      description: "A project designed to support people with visual disabilities through artificial intelligence and computer vision. It aims to recognize objects and describe the surrounding environment through voice.",
      overview: "An assistive project focused on understanding nearby objects and the surrounding space.",
      focus: ["Artificial intelligence", "Object recognition", "Voice descriptions"]
    },
    glowp: {
      category: "03 / HAIR CARE · IN DEVELOPMENT",
      description: "A digital platform concept focused on hair care and style. It aims to help people discover products, care and style recommendations, and barber services suited to their preferences.",
      overview: "A proposal in development; its scope and features may evolve.",
      focus: ["Hair care products", "Style and care recommendations", "Barber services"]
    }
  },
  es: {
    parking: {
      category: "01 / MOVILIDAD",
      description: "Plataforma tecnológica que conecta a conductores que buscan estacionamiento con personas que ofrecen espacios disponibles, facilitando encontrar dónde aparcar.",
      overview: "Una alternativa práctica para descubrir espacios de estacionamiento ofrecidos por sus propietarios.",
      focus: ["Conexión entre conductores y espacios", "Búsqueda de parqueo disponible"]
    },
    voxvision: {
      category: "02 / TECNOLOGÍA ACCESIBLE",
      description: "Proyecto enfocado en apoyar a personas con discapacidad visual mediante inteligencia artificial y visión por computadora. Busca reconocer objetos y describir el entorno mediante voz.",
      overview: "Un proyecto de asistencia para reconocer objetos cercanos y comprender el espacio alrededor.",
      focus: ["Inteligencia artificial", "Reconocimiento de objetos", "Descripciones mediante voz"]
    },
    glowp: {
      category: "03 / CUIDADO CAPILAR · EN DESARROLLO",
      description: "Propuesta de plataforma digital enfocada en el cuidado y estilo del cabello. Busca ayudar a descubrir productos, recomendaciones de cuidado y estilos, y servicios de barbería acordes a las preferencias de cada persona.",
      overview: "Una propuesta en construcción; su alcance y características pueden evolucionar.",
      focus: ["Productos para el cuidado capilar", "Recomendaciones de cuidado y estilo", "Servicios de barbería"]
    }
  }
};

const translations = {
  en: {
    documentTitle: "Edwin Aguilar — Portfolio",
    navLabel: "Main navigation",
    languageLabel: "Language selector",
    menuOpen: "Open menu",
    menuClose: "Close menu",
    closeDialog: "Close dialog",
    sectionAbout: '<span>02</span> / ABOUT ME',
    sectionJourney: '<span>03</span> / MY JOURNEY',
    sectionProjects: '<span>04</span> / SELECTED WORK',
    sectionSkills: '<span>05</span> / TOOLKIT',
    sectionContact: '<span>06</span> / CONTACT',
    aboutEyebrow: "A LITTLE ABOUT ME",
    aboutHeading: 'A curious mind<br>with big <span>ideas.</span>',
    aboutLead: "My name is Edwin Aguilar. I am a high school student from El Salvador, completing General High School and participating in the ¡Supérate! ADOC program.",
    aboutParagraph1: "My interest in technology started with curiosity. I wanted to understand how applications, websites, and computer systems work. That curiosity gradually became a motivation to learn programming and develop my own projects.",
    aboutParagraph2: "I want to study Computer Systems Engineering and continue growing as a person and as a future professional. I believe technology is more than writing code: it is a way to turn ideas into solutions that can help others.",
    aboutMantra: "Think it.<br>Build it.<br>Improve it.",
    aboutMantraCaption: "Every great project begins with an idea.",
    locationLabel: "LOCATION",
    educationLabel: "EDUCATION",
    goalLabel: "GOAL",
    educationValue: "General High School",
    goalValue: "Computer Systems Engineering",
    cvLabel: "View résumé",
    journeyEyebrow: "LEARNING AND GROWTH",
    journeyHeading: 'My journey<span>.</span>',
    journeyNote: "Academic experiences, projects, and lessons that are part of my path.",
    journeyEntries: [
      ["ACADEMIC EXPERIENCE", "Academic journey", "My General High School education and preparation to complete this academic stage.", "ONGOING"],
      ["PERSONAL GROWTH", "¡Supérate! ADOC Program", "Academic and personal learning through the ¡Supérate! ADOC scholarship program.", "EXPERIENCE"],
      ["ONGOING LEARNING", "English learning & TOEIC", "English language learning and preparation related to TOEIC.", "ONGOING"],
      ["ONGOING LEARNING", "Programming & technology", "Building knowledge in programming, computer science, and digital tools through personal projects.", "ONGOING"],
      ["PROJECT EXPERIENCE", "Project development", "Participating in the creation and development of projects such as Parking-SV and Vox Vision.", "EXPERIENCE"],
      ["PERSONAL GROWTH", "Communication & public speaking", "Presenting ideas, projects, and proposals in front of an audience.", "EXPERIENCE"]
    ],
    projectsEyebrow: "IDEAS IN PROGRESS",
    projectsHeading: "Projects<span>.</span>",
    projectsNote: "Each project is an opportunity to learn, experiment, and create something useful.",
    projectWebsite: "Visit Website",
    projectRepository: "View Repository",
    projectDetails: "More details",
    glowpDetails: "View proposal",
    projectStatus: "PROJECT",
    developmentStatus: "IN DEVELOPMENT",
    glowpPending: "In development",
    projectTypes: ["01 — MOBILITY", "02 — ACCESSIBLE TECHNOLOGY", "03 — HAIR CARE"],
    projectDescriptions: [
      "A technology platform connecting drivers looking for parking with people who have spaces available, offering a practical way to find parking.",
      "A project supporting people with visual disabilities through AI and computer vision to recognize objects and describe their surroundings through voice.",
      "A digital platform concept for discovering hair care products, style recommendations, and barber services."
    ],
    projectsFootnote: "GlowP is a project in development. Its proposed features may evolve.",
    skillsEyebrow: "TOOLS AND APPROACH",
    skillsHeading: "Skills<span>.</span>",
    skillsNote: "Knowledge and qualities I continue to develop through learning and practice.",
    hardSkills: "Hard Skills",
    softSkills: "Soft Skills",
    englishLabel: "English Language",
    englishDescription: "Currently developing my English skills through language learning and preparation related to TOEIC.",
    languageLearning: "LANGUAGE LEARNING",
    inProgress: "IN PROGRESS",
    hardSkillItems: [
      ["Web Development", "HTML, CSS, and JavaScript for developing and structuring websites."],
      ["Logical Thinking", "Logical thinking, mathematical reasoning, and problem-solving."],
      ["Programming", "Programming fundamentals and applying logic to develop technological solutions."],
      ["Digital Tools", "Using Microsoft Office and a range of digital tools."],
      ["Computer Science", "Interest and knowledge in computing, technology, and computer systems."]
    ],
    softSkillItems: [
      ["Teamwork", "Collaborating, sharing ideas, and working as part of a team."],
      ["Responsibility", "Commitment to academic and project tasks and responsibilities."],
      ["Adaptability", "Willingness to learn and adapt to new tools and technologies."],
      ["Problem Solving", "Analyzing situations and looking for solutions."],
      ["Continuous Learning", "Motivation to keep learning and continually improve."]
    ],
    contactEyebrow: "HAVE AN IDEA, PROJECT, OR OPPORTUNITY?",
    contactTitle: "CONTACT ME<span>.</span>",
    contactDescription: "I am open to learning, collaborating, and connecting with people who share an interest in technology and innovation.",
    githubLabel: "View repositories",
    linkedinLabel: "Connect",
    instagramLabel: "View profile",
    emailLabel: "Send an email",
    instagramAria: "Edwin Aguilar's Instagram profile, @zhac_14e",
    quoteLabel: "Closing thought",
    footerText: "Built with curiosity and code.",
    modalFocus: "PROJECT OVERVIEW",
    modalHighlights: "PROJECT FOCUS"
  },
  es: {
    documentTitle: "Edwin Aguilar — Portafolio",
    navLabel: "Navegación principal",
    languageLabel: "Selector de idioma",
    menuOpen: "Abrir menú",
    menuClose: "Cerrar menú",
    closeDialog: "Cerrar ventana",
    sectionAbout: '<span>02</span> / SOBRE MÍ',
    sectionJourney: '<span>03</span> / MI RECORRIDO',
    sectionProjects: '<span>04</span> / PROYECTOS',
    sectionSkills: '<span>05</span> / HABILIDADES',
    sectionContact: '<span>06</span> / CONTACTO',
    aboutEyebrow: "UN POCO SOBRE MÍ",
    aboutHeading: 'Una mente curiosa<br>con grandes <span>ideas.</span>',
    aboutLead: "Mi nombre es Edwin Aguilar. Soy estudiante de Bachillerato General en El Salvador y participo en el programa ¡Supérate! ADOC.",
    aboutParagraph1: "Mi interés por la tecnología comenzó con la curiosidad por entender cómo funcionan las aplicaciones, los sitios web y los sistemas computacionales. Esa curiosidad se convirtió poco a poco en motivación para aprender programación y desarrollar proyectos propios.",
    aboutParagraph2: "Quiero estudiar Ingeniería en Sistemas y seguir creciendo como persona y futuro profesional. Creo que la tecnología es más que escribir código: permite convertir ideas en soluciones que pueden ayudar a otras personas.",
    aboutMantra: "Piensa en ello.<br>Constrúyelo.<br>Mejóralo.",
    aboutMantraCaption: "Todo gran proyecto comienza con una idea.",
    locationLabel: "UBICACIÓN",
    educationLabel: "EDUCACIÓN",
    goalLabel: "META",
    educationValue: "Bachillerato General",
    goalValue: "Ingeniería en Sistemas",
    cvLabel: "Ver currículum",
    journeyEyebrow: "APRENDER Y CRECER",
    journeyHeading: 'Mi recorrido<span>.</span>',
    journeyNote: "Experiencias académicas, proyectos y aprendizajes que forman parte de mi camino.",
    journeyEntries: [
      ["EXPERIENCIA ACADÉMICA", "Recorrido académico", "Formación en Bachillerato General y preparación para completar esta etapa académica.", "EN CURSO"],
      ["CRECIMIENTO PERSONAL", "Programa ¡Supérate! ADOC", "Experiencia de formación académica y personal dentro del programa de becas ¡Supérate! ADOC.", "EXPERIENCIA"],
      ["APRENDIZAJE EN CURSO", "Inglés y preparación TOEIC", "Aprendizaje del idioma inglés y preparación relacionada con TOEIC.", "EN CURSO"],
      ["APRENDIZAJE EN CURSO", "Programación y tecnología", "Desarrollo de conocimientos en programación, informática y herramientas tecnológicas mediante proyectos propios.", "EN CURSO"],
      ["EXPERIENCIA EN PROYECTOS", "Desarrollo de proyectos", "Participación en la creación y desarrollo de proyectos como Parking-SV y Vox Vision.", "EXPERIENCIA"],
      ["CRECIMIENTO PERSONAL", "Comunicación y expresión oral", "Presentación de ideas, proyectos y propuestas frente al público.", "EXPERIENCIA"]
    ],
    projectsEyebrow: "IDEAS EN CONSTRUCCIÓN",
    projectsHeading: "Proyectos<span>.</span>",
    projectsNote: "Cada proyecto representa una oportunidad para aprender, experimentar y crear algo útil.",
    projectWebsite: "Visitar sitio",
    projectRepository: "Ver repositorio",
    projectDetails: "Más detalles",
    glowpDetails: "Ver propuesta",
    projectStatus: "PROYECTO",
    developmentStatus: "EN CONSTRUCCIÓN",
    glowpPending: "Proyecto en desarrollo",
    projectTypes: ["01 — MOVILIDAD", "02 — TECNOLOGÍA ACCESIBLE", "03 — CUIDADO CAPILAR"],
    projectDescriptions: [
      "Plataforma tecnológica para conectar a conductores que buscan estacionamiento con personas que ofrecen espacios disponibles, facilitando encontrar dónde aparcar.",
      "Proyecto de asistencia para personas con discapacidad visual: utiliza inteligencia artificial y visión por computadora para reconocer objetos y describir el entorno mediante voz.",
      "Propuesta de plataforma para descubrir productos, recomendaciones de cuidado capilar, estilos y servicios de barbería."
    ],
    projectsFootnote: "GlowP es una propuesta en desarrollo. Sus características están sujetas a evolución.",
    skillsEyebrow: "HERRAMIENTAS Y ENFOQUE",
    skillsHeading: "Habilidades<span>.</span>",
    skillsNote: "Conocimientos y cualidades que sigo desarrollando a través del aprendizaje y la práctica.",
    hardSkills: "Habilidades técnicas",
    softSkills: "Habilidades personales",
    englishLabel: "English Language",
    englishDescription: "Actualmente desarrollando mis habilidades de inglés, con experiencia de aprendizaje y preparación relacionada con TOEIC.",
    languageLearning: "APRENDIZAJE DE IDIOMAS",
    inProgress: "EN DESARROLLO",
    hardSkillItems: [
      ["Desarrollo web", "HTML, CSS y JavaScript para desarrollar y estructurar sitios web."],
      ["Pensamiento lógico", "Pensamiento lógico, razonamiento matemático y resolución de problemas."],
      ["Programación", "Fundamentos de programación y aplicación de la lógica para desarrollar soluciones tecnológicas."],
      ["Herramientas digitales", "Manejo de Microsoft Office y diferentes herramientas digitales."],
      ["Informática", "Interés y conocimientos en informática, tecnología y sistemas computacionales."]
    ],
    softSkillItems: [
      ["Trabajo en equipo", "Capacidad para colaborar, compartir ideas y trabajar en equipo."],
      ["Responsabilidad", "Compromiso con las tareas y responsabilidades académicas y de proyectos."],
      ["Adaptabilidad", "Disposición para aprender y adaptarse a nuevas herramientas y tecnologías."],
      ["Resolución de problemas", "Capacidad para analizar situaciones y buscar soluciones."],
      ["Aprendizaje continuo", "Motivación para seguir aprendiendo y mejorar constantemente."]
    ],
    contactEyebrow: "¿TIENES UNA IDEA, PROYECTO U OPORTUNIDAD?",
    contactTitle: "CONTÁCTAME<span>.</span>",
    contactDescription: "Estoy abierto a aprender, colaborar y conectar con personas que compartan el interés por la tecnología y la innovación.",
    githubLabel: "Ver repositorios",
    linkedinLabel: "Conectar",
    instagramLabel: "Ver perfil",
    emailLabel: "Enviar un correo",
    instagramAria: "Instagram de Edwin Aguilar, @zhac_14e",
    quoteLabel: "Frase final",
    footerText: "Construido con curiosidad y código.",
    modalFocus: "ENFOQUE DEL PROYECTO",
    modalHighlights: "ASPECTOS DEL PROYECTO"
  }
};

const $ = (selector, scope = document) => scope.querySelector(selector);
const $$ = (selector, scope = document) => [...scope.querySelectorAll(selector)];
let currentLanguage = "es";

document.addEventListener("DOMContentLoaded", () => {
  const cinematicWorld = $(".cinematic-world");
  if (cinematicWorld) {
    cinematicWorld.classList.add("global-world", "region-home");
    document.body.insertBefore(cinematicWorld, document.body.firstChild);
  }

  const year = $("#currentYear");
  if (year) year.textContent = new Date().getFullYear();

  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const gsapReady = Boolean(window.gsap && window.ScrollTrigger);
  let motionContext = null;
  let motionMedia = null;
  let playHeroIntro = null;
  let refreshScrollTriggers = null;

  if (gsapReady && !prefersReducedMotion) {
    gsap.registerPlugin(window.ScrollTrigger);
    document.documentElement.classList.add("gsap-motion-active");
    motionContext = gsap.context(() => {
      gsap.fromTo(
        [".loader-emblem", ".loader-mark", ".loader-track", ".loader-meta"],
        { autoAlpha: 0, y: 9 },
        { autoAlpha: 1, y: 0, duration: 0.55, stagger: 0.07, ease: "power2.out" }
      );

      const intro = gsap.timeline({
        paused: true,
        defaults: {
          duration: 0.62,
          ease: "power2.out",
          clearProps: "opacity,visibility,transform"
        }
      });
      gsap.to(".loader-particles i", {
        y: index => index % 2 ? -16 : 16,
        x: index => index % 2 ? 11 : -11,
        autoAlpha: 0.15,
        duration: 1.15,
        stagger: { each: 0.09, from: "center" },
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true
      });
      gsap.to(".live-dot", {
        scale: 1.45,
        duration: 0.7,
        ease: "steps(2)",
        repeat: -1,
        yoyo: true
      });
      intro
        .fromTo(".hero-topline", { autoAlpha: 0, y: 8 }, { autoAlpha: 1, y: 0 })
        .fromTo(".hero-copy .eyebrow", { autoAlpha: 0, y: 12 }, { autoAlpha: 1, y: 0 }, "-=0.36")
        .fromTo(".hero-title", { autoAlpha: 0, y: 18 }, { autoAlpha: 1, y: 0, duration: 0.78 }, "-=0.34")
        .fromTo(".hero-description", { autoAlpha: 0, y: 10 }, { autoAlpha: 1, y: 0 }, "-=0.42")
        .fromTo(".hero-actions .button", { autoAlpha: 0, y: 9 }, {
          autoAlpha: 1, y: 0, stagger: 0.08, clearProps: "opacity,visibility,transform"
        }, "-=0.32")
        .fromTo(".hero-aside", { autoAlpha: 0, y: 12 }, { autoAlpha: 1, y: 0 }, "-=0.5")
        .fromTo(".hero-bottom", { autoAlpha: 0 }, { autoAlpha: 1, duration: 0.4 }, "-=0.2");
      playHeroIntro = () => intro.play(0);

      const revealOnce = (elements, options = {}) => {
        elements.forEach(element => {
          gsap.fromTo(element,
            { autoAlpha: 0, y: options.y ?? 18 },
            {
              autoAlpha: 1,
              y: 0,
              duration: options.duration ?? 0.7,
              delay: options.delay ?? 0,
              ease: "power2.out",
              clearProps: "opacity,visibility,transform",
              onComplete: () => {
                if (element.classList.contains("reveal")) element.classList.add("visible");
              },
              scrollTrigger: {
                trigger: options.trigger || element,
                start: options.start || "top 88%",
                once: true
              }
            }
          );
        });
      };

      revealOnce($$(".reveal").filter(element =>
        !element.matches(".project-card")
      ));
      revealOnce($$(".section-grid > div:first-child, .section-heading-row > div, .contact-title, .contact-description, .contact-main-link, .closing-quote p"), {
        y: 14,
        duration: 0.75
      });

      const timeline = $(".timeline");
      const timelineItems = $$(".timeline-item", timeline || document);
      if (timeline && timelineItems.length) {
        gsap.set(timeline, { "--timeline-progress": 0 });
        gsap.fromTo(timelineItems,
          { autoAlpha: 0, y: 15 },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.58,
            stagger: 0.1,
            ease: "power2.out",
            clearProps: "opacity,visibility,transform",
            scrollTrigger: { trigger: timeline, start: "top 82%", once: true }
          }
        );
        gsap.to(timeline, {
          "--timeline-progress": 1,
          ease: "none",
          scrollTrigger: {
            trigger: timeline,
            start: "top 72%",
            end: "bottom 55%",
            scrub: 0.6
          }
        });
      }

      const projectCards = $$(".project-card");
      const projectsGrid = $(".projects-grid");
      if (projectsGrid && projectCards.length) {
        gsap.fromTo(projectCards,
          { autoAlpha: 0, y: 20 },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.65,
            stagger: 0.12,
            ease: "power2.out",
            clearProps: "opacity,visibility,transform",
            onComplete: () => projectCards.forEach(card => card.classList.add("visible")),
            scrollTrigger: { trigger: projectsGrid, start: "top 84%", once: true }
          }
        );
      }

      const skills = $$(".skill-card");
      const skillsGroups = $(".skills-groups");
      if (skillsGroups && skills.length) {
        gsap.fromTo(skills,
          { autoAlpha: 0, y: 14 },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.5,
            stagger: { each: 0.045, from: "start", grid: "auto", axis: "x" },
            ease: "power2.out",
            clearProps: "opacity,visibility,transform",
            scrollTrigger: { trigger: skillsGroups, start: "top 84%", once: true }
          }
        );
      }

      const timelineTrack = $(".marquee-track");
      const marqueeGroups = $$(".marquee-group", timelineTrack || document);
      if (timelineTrack && marqueeGroups.length > 1) {
        gsap.to(timelineTrack, {
          xPercent: -(100 / marqueeGroups.length),
          duration: 24,
          ease: "none",
          repeat: -1
        });
      }

      motionMedia = gsap.matchMedia();
      motionMedia.add({
        wide: "(min-width: 821px)",
        compact: "(max-width: 820px)"
      }, context => {
        const cleanups = [];
        const ambientAnimations = [];
        const sceneLayers = $$("[data-parallax]");
        const parallaxScale = context.conditions.wide ? 1 : 0.35;

        $$(".cinematic-world [data-world-depth]").forEach(layer => {
          const depth = Number(layer.dataset.worldDepth) || 0;
          gsap.to(layer, {
            y: () => window.innerHeight * depth * 0.2 * parallaxScale,
            ease: "none",
            scrollTrigger: {
              trigger: document.body,
              start: "top top",
              end: "bottom bottom",
              scrub: 0.8,
              invalidateOnRefresh: true
            }
          });
        });

        ambientAnimations.push(
          gsap.to(".world-stars path", {
            autoAlpha: () => gsap.utils.random(0.35, 1),
            duration: () => gsap.utils.random(1.4, 3.8),
            stagger: { each: 0.12, from: "random" },
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut"
          }),
          gsap.to(".world-clouds-far", {
            x: 13,
            duration: 32,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut"
          }),
          gsap.to(".world-clouds-near", {
            x: -18,
            duration: 23,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut"
          }),
          gsap.to(".world-waterline-far", {
            x: -10,
            duration: 18,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut"
          }),
          gsap.to(".world-waterline-near", {
            x: 15,
            duration: 11,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut"
          }),
          gsap.to(".world-reflections", {
            autoAlpha: 0.62,
            duration: 3.8,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut"
          }),
          gsap.to(".world-moon", {
            y: -2,
            scale: 1.015,
            duration: 4.5,
            repeat: -1,
            yoyo: true,
            transformOrigin: "center",
            ease: "sine.inOut"
          }),
          gsap.to(".world-flame", {
            scaleY: 0.86,
            scaleX: 1.12,
            duration: 0.32,
            stagger: { each: 0.11, from: "random" },
            repeat: -1,
            yoyo: true,
            transformOrigin: "50% 100%",
            ease: "steps(2)"
          }),
          gsap.to(".world-smoke path", {
            y: -9,
            x: 3,
            autoAlpha: 0.22,
            duration: 4.5,
            stagger: { each: 0.7, from: "random" },
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut"
          }),
          gsap.to(".world-particles path", {
            y: -5,
            autoAlpha: 0.35,
            duration: 3.2,
            stagger: { each: 0.8, from: "random" },
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut"
          })
        );
        const onVisibilityChange = () => ambientAnimations.forEach(animation => animation.paused(document.hidden));
        document.addEventListener("visibilitychange", onVisibilityChange);
        cleanups.push(() => document.removeEventListener("visibilitychange", onVisibilityChange));

        sceneLayers.forEach(layer => {
          const speed = Number(layer.dataset.parallax) || 0.08;
          gsap.to(layer, {
            y: () => window.innerHeight * speed * parallaxScale,
            ease: "none",
            scrollTrigger: {
              trigger: ".hero",
              start: "top top",
              end: "bottom top",
              scrub: 0.7,
              invalidateOnRefresh: true
            }
          });
        });

        gsap.to(".pixel-wave-track", {
          xPercent: -50,
          duration: context.conditions.wide ? 28 : 38,
          ease: "none",
          repeat: -1
        });

        const backgroundColors = [
          ["#about", "#0b172b", "about"],
          ["#journey", "#0a192d", "journey"],
          ["#projects", "#081426", "projects"],
          ["#skills", "#0b1930", "skills"],
          ["#contact", "#091628", "contact"]
        ];
        const worldRegions = ["home", "about", "journey", "projects", "skills", "contact"];
        const setWorldRegion = region => {
          if (!cinematicWorld) return;
          cinematicWorld.classList.remove(...worldRegions.map(name => `region-${name}`));
          cinematicWorld.classList.add(`region-${region}`);
        };
        backgroundColors.forEach(([selector, color, region], index) => {
          const section = $(selector);
          const previousColor = index ? backgroundColors[index - 1][1] : "#091426";
          const previousRegion = index ? backgroundColors[index - 1][2] : "home";
          if (!section) return;
          gsap.fromTo(section, { "--scene-offset": "-14px" }, {
            "--scene-offset": "14px",
            ease: "none",
            scrollTrigger: {
              trigger: section,
              start: "top bottom",
              end: "bottom top",
              scrub: 0.7,
              invalidateOnRefresh: true
            }
          });
          window.ScrollTrigger.create({
            trigger: section,
            start: "top 58%",
            end: "bottom 42%",
            onEnter: () => {
              setWorldRegion(region);
              gsap.to(document.documentElement, {
                "--bg": color, duration: 0.65, overwrite: "auto", ease: "power1.out"
              });
            },
            onEnterBack: () => {
              setWorldRegion(region);
              gsap.to(document.documentElement, {
                "--bg": color, duration: 0.65, overwrite: "auto", ease: "power1.out"
              });
            },
            onLeaveBack: () => {
              setWorldRegion(previousRegion);
              gsap.to(document.documentElement, {
                "--bg": previousColor, duration: 0.55, overwrite: "auto", ease: "power1.out"
              });
            }
          });
        });

        const highlight = $(".about-quote h3");
        if (highlight) {
          gsap.to(highlight, {
            color: "#c4f05b",
            scrollTrigger: {
              trigger: highlight,
              start: "top 82%",
              end: "bottom 45%",
              scrub: 0.65
            }
          });
        }

        const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
        if (context.conditions.wide && finePointer) {
          const cursor = $("#customCursor");
          const pointerTargets = $$("a, button");
          const moveX = cursor ? gsap.quickTo(cursor, "x", { duration: 0.18, ease: "power2.out" }) : null;
          const moveY = cursor ? gsap.quickTo(cursor, "y", { duration: 0.18, ease: "power2.out" }) : null;
          if (cursor) gsap.set(cursor, { autoAlpha: 1, xPercent: -50, yPercent: -50 });

          const onPointerMove = event => {
            moveX?.(event.clientX);
            moveY?.(event.clientY);
          };
          document.addEventListener("pointermove", onPointerMove, { passive: true });
          cleanups.push(() => document.removeEventListener("pointermove", onPointerMove));

          pointerTargets.forEach(element => {
            const onEnter = () => {
              cursor?.classList.add("active");
              if (!element.matches(".language-button, .menu-button")) {
                gsap.to(element, { scale: 1.015, duration: 0.22, ease: "back.out(2)", overwrite: "auto" });
              }
            };
            const onLeave = () => {
              cursor?.classList.remove("active");
              gsap.to(element, { scale: 1, duration: 0.25, ease: "elastic.out(1, 0.55)", overwrite: "auto" });
            };
            element.addEventListener("pointerenter", onEnter);
            element.addEventListener("pointerleave", onLeave);
            cleanups.push(() => {
              element.removeEventListener("pointerenter", onEnter);
              element.removeEventListener("pointerleave", onLeave);
            });
          });

          const magneticTargets = $$(".button, .nav-link, .nav-contact, .project-link, .project-open, .social-card");
          magneticTargets.forEach(element => {
            const onMove = event => {
              const rect = element.getBoundingClientRect();
              const x = (event.clientX - rect.left - rect.width / 2) * 0.12;
              const y = (event.clientY - rect.top - rect.height / 2) * 0.12;
              gsap.to(element, { x, y, duration: 0.25, ease: "power2.out", overwrite: "auto" });
            };
            const onLeave = () => gsap.to(element, {
              x: 0, y: 0, duration: 0.6, ease: "elastic.out(1, 0.45)", overwrite: "auto"
            });
            element.addEventListener("pointermove", onMove);
            element.addEventListener("pointerleave", onLeave);
            cleanups.push(() => {
              element.removeEventListener("pointermove", onMove);
              element.removeEventListener("pointerleave", onLeave);
            });
          });

          const tiltCards = $$(".project-card, .skill-card, .english-card, .timeline-item, .profile-card");
          tiltCards.forEach(card => {
            const onMove = event => {
              const rect = card.getBoundingClientRect();
              const x = (event.clientX - rect.left) / rect.width - 0.5;
              const y = (event.clientY - rect.top) / rect.height - 0.5;
              gsap.to(card, {
                rotationY: x * 3.2,
                rotationX: -y * 3.2,
                transformPerspective: 900,
                duration: 0.32,
                ease: "power2.out",
                overwrite: "auto"
              });
            };
            const onLeave = () => gsap.to(card, {
              rotationX: 0,
              rotationY: 0,
              rotationZ: card.matches(".profile-card") ? 1.5 : 0,
              duration: 0.55,
              ease: "elastic.out(1, 0.55)",
              overwrite: "auto"
            });
            card.addEventListener("pointermove", onMove);
            card.addEventListener("pointerleave", onLeave);
            cleanups.push(() => {
              card.removeEventListener("pointermove", onMove);
              card.removeEventListener("pointerleave", onLeave);
            });
          });
        }

        return () => cleanups.forEach(cleanup => cleanup());
      });

      refreshScrollTriggers = () => window.ScrollTrigger.refresh();
    }, document.body);

    window.addEventListener("pagehide", event => {
      if (!event.persisted) {
        motionMedia?.revert();
        motionContext?.revert();
      }
    }, { once: true });
  }

  const preloader = $("#preloader");
  const loaderFill = $("#loaderFill");
  const loaderPercent = $("#loaderPercent");
  const loaderStatus = $("#loaderStatus");
  let loaderDone = false;
  const finishLoader = () => {
    if (loaderDone) return;
    loaderDone = true;
    if (loaderFill) loaderFill.style.width = "100%";
    if (loaderPercent) loaderPercent.textContent = "100%";
    if (loaderStatus) loaderStatus.textContent = "READY";
    if (window.gsap && !prefersReducedMotion) {
      gsap.killTweensOf(".loader-particles i");
      gsap.to(".loader-particles i", {
        x: index => index % 2 ? 26 : -26,
        y: index => index % 2 ? -24 : 24,
        autoAlpha: 0,
        duration: 0.32,
        stagger: 0.025,
        ease: "power2.in"
      });
    }
    window.setTimeout(() => {
      preloader?.classList.add("loaded");
      playHeroIntro?.();
    }, 120);
  };
  let progress = 0;
  const loaderTimer = window.setInterval(() => {
    progress = Math.min(progress + 20, 100);
    if (loaderFill) loaderFill.style.width = `${progress}%`;
    if (loaderPercent) loaderPercent.textContent = `${String(progress).padStart(2, "0")}%`;
    if (progress >= 100) {
      window.clearInterval(loaderTimer);
      finishLoader();
    }
  }, 45);
  window.addEventListener("load", finishLoader, { once: true });
  window.setTimeout(finishLoader, 750);

  const header = $("#header");
  const menuButton = $("#menuButton");
  const navigation = $("#navigation");
  const updateMenuState = isOpen => {
    navigation?.classList.toggle("open", isOpen);
    menuButton?.setAttribute("aria-expanded", String(isOpen));
    menuButton?.setAttribute("aria-label", isOpen
      ? translations[currentLanguage].menuClose
      : translations[currentLanguage].menuOpen);
  };
  const closeMenu = () => updateMenuState(false);
  menuButton?.addEventListener("click", () => {
    updateMenuState(menuButton.getAttribute("aria-expanded") !== "true");
  });
  $$(".nav-link, .nav-contact", navigation || document).forEach(link => {
    link.addEventListener("click", closeMenu);
  });
  const updateHeader = () => header?.classList.toggle("scrolled", window.scrollY > 25);
  updateHeader();
  window.addEventListener("scroll", updateHeader, { passive: true });

  const revealItems = $$(".reveal");
  if (prefersReducedMotion) {
    revealItems.forEach(item => item.classList.add("visible"));
  } else if (!gsapReady && "IntersectionObserver" in window) {
    const revealObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    revealItems.forEach(item => revealObserver.observe(item));
  } else if (!gsapReady) {
    revealItems.forEach(item => item.classList.add("visible"));
  }
  if (refreshScrollTriggers) {
    window.addEventListener("load", () => requestAnimationFrame(refreshScrollTriggers), { once: true });
  }

  const sections = $$("main section[id]");
  if ("IntersectionObserver" in window) {
    const sectionObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          $$(".nav-link, .nav-contact").forEach(link => {
            link.classList.toggle("active", link.getAttribute("href") === `#${entry.target.id}`);
          });
        }
      });
    }, { rootMargin: "-35% 0px -55% 0px" });
    sections.forEach(section => sectionObserver.observe(section));
  }

  const modal = $("#projectModal");
  const modalTitle = $("#modalTitle");
  const modalCategory = $("#modalCategory");
  const modalDescription = $("#modalDescription");
  const modalContribution = $("#modalContribution");
  const modalFocusLabel = $("#modalFocusLabel");
  const modalHighlightsLabel = $("#modalHighlightsLabel");
  const modalTechnologies = $("#modalTechnologies");
  const closeModalButton = $("#closeModal");
  let lastFocusedElement = null;
  let activeProjectId = null;

  const closeModal = () => {
    modal?.classList.remove("open");
    modal?.setAttribute("aria-hidden", "true");
    document.body.classList.remove("modal-open");
    activeProjectId = null;
    lastFocusedElement?.focus();
  };
  const openProject = id => {
    const project = projects[id];
    const localizedProject = projectCopy[currentLanguage][id];
    if (!project || !localizedProject || !modal) return;
    activeProjectId = id;
    lastFocusedElement = document.activeElement;
    modalCategory.textContent = localizedProject.category;
    modalTitle.textContent = project.title;
    modalDescription.textContent = localizedProject.description;
    modalContribution.textContent = localizedProject.overview;
    modalFocusLabel.textContent = translations[currentLanguage].modalFocus;
    modalHighlightsLabel.textContent = translations[currentLanguage].modalHighlights;
    modalTechnologies.replaceChildren();
    localizedProject.focus.forEach(focus => {
      const tag = document.createElement("span");
      tag.textContent = focus;
      modalTechnologies.appendChild(tag);
    });
    modal.classList.add("open");
    modal.setAttribute("aria-hidden", "false");
    document.body.classList.add("modal-open");
    closeModalButton?.focus();
  };
  $$(".project-open").forEach(button => {
    button.addEventListener("click", () => openProject(button.dataset.project));
  });
  closeModalButton?.addEventListener("click", closeModal);
  modal?.addEventListener("click", event => {
    if (event.target === modal) closeModal();
  });

  let toastTimer;
  const showToast = message => {
    const toast = $("#toast");
    if (!toast) return;
    toast.textContent = message;
    toast.classList.add("show");
    window.clearTimeout(toastTimer);
    toastTimer = window.setTimeout(() => toast.classList.remove("show"), 2600);
  };

  document.addEventListener("keydown", event => {
    if (event.key === "Escape") {
      closeModal();
      closeMenu();
    }
  });

  const cursor = $("#customCursor");
  if (cursor && window.matchMedia("(pointer:fine)").matches && !gsapReady && !prefersReducedMotion) {
    cursor.style.opacity = "1";
    document.addEventListener("pointermove", event => {
      cursor.style.left = `${event.clientX}px`;
      cursor.style.top = `${event.clientY}px`;
    });
    $$("a, button").forEach(element => {
      element.addEventListener("pointerenter", () => cursor.classList.add("active"));
      element.addEventListener("pointerleave", () => cursor.classList.remove("active"));
    });
  }

  let logoClicks = 0;
  let logoTimer;
  $(".logo")?.addEventListener("click", () => {
    if (window.location.hash !== "#home") return;
    logoClicks++;
    window.clearTimeout(logoTimer);
    logoTimer = window.setTimeout(() => { logoClicks = 0; }, 1200);
    if (logoClicks >= 5) {
      showToast(currentLanguage === "es" ? "DETALLE SECRETO · SIGUE CREANDO" : "SECRET DETAIL · KEEP BUILDING");
      logoClicks = 0;
    }
  });

  const profileCard = $(".profile-card");
  if (profileCard && window.matchMedia("(pointer:fine)").matches && !gsapReady && !prefersReducedMotion) {
    profileCard.addEventListener("pointermove", event => {
      const rect = profileCard.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width - 0.5;
      const y = (event.clientY - rect.top) / rect.height - 0.5;
      profileCard.style.transform = `rotateX(${-y * 4}deg) rotateY(${x * 4}deg) rotate(1.5deg)`;
    });
    profileCard.addEventListener("pointerleave", () => {
      profileCard.style.transform = "rotate(1.5deg)";
    });
  }

  const setHTML = (selector, value) => {
    const element = typeof selector === "string" ? $(selector) : selector;
    if (element) element.innerHTML = value;
  };
  const setText = (selector, value) => {
    const element = $(selector);
    if (element) element.textContent = value;
  };
  const renderSkills = (selector, items) => {
    $$(selector).forEach((card, index) => {
      const item = items[index];
      if (!item) return;
      setTextWithin(card, "h4", item[0]);
      setTextWithin(card, "p", item[1]);
    });
  };
  const setTextWithin = (scope, selector, value) => {
    const element = $(selector, scope);
    if (element) element.textContent = value;
  };

  const applyLanguage = language => {
    currentLanguage = language === "en" ? "en" : "es";
    const copy = translations[currentLanguage];
    document.documentElement.lang = currentLanguage;
    document.title = copy.documentTitle;
    navigation?.setAttribute("aria-label", copy.navLabel);
    $(".language-switch")?.setAttribute("aria-label", copy.languageLabel);
    if (menuButton) {
      menuButton.setAttribute("aria-label", menuButton.getAttribute("aria-expanded") === "true" ? copy.menuClose : copy.menuOpen);
    }
    closeModalButton?.setAttribute("aria-label", copy.closeDialog);
    $(".profile-image img")?.setAttribute("alt", currentLanguage === "en" ? "Photo of Edwin Aguilar" : "Fotografía de Edwin Aguilar");
    setText(".scene-caption", currentLanguage === "en"
      ? "A QUIET NIGHT · A NEW HORIZON"
      : "NOCHE SERENA · UN NUEVO HORIZONTE");

    $$('.nav-link[href="#home"]')[0].innerHTML = `<span>01</span> ${currentLanguage === "en" ? "Home" : "Inicio"}`;
    $$('.nav-link[href="#about"]')[0].innerHTML = `<span>02</span> ${currentLanguage === "en" ? "About me" : "Sobre mí"}`;
    $$('.nav-link[href="#journey"]')[0].innerHTML = `<span>03</span> ${currentLanguage === "en" ? "Journey" : "Trayectoria"}`;
    $$('.nav-link[href="#projects"]')[0].innerHTML = `<span>04</span> ${currentLanguage === "en" ? "Projects" : "Proyectos"}`;
    $$('.nav-link[href="#skills"]')[0].innerHTML = `<span>05</span> ${currentLanguage === "en" ? "Skills" : "Habilidades"}`;
    setHTML(".nav-contact", `${currentLanguage === "en" ? "Contact me" : "Contáctame"} <b>↗</b>`);

    setHTML(".hero-topline > span:first-child", currentLanguage === "en" ? '<i class="live-dot"></i> AVAILABLE / ONLINE' : '<i class="live-dot"></i> SYSTEM ONLINE');
    setText(".hero-copy .eyebrow", currentLanguage === "en" ? "STUDENT · TECH ENTHUSIAST · FUTURE DEVELOPER" : "ESTUDIANTE · ENTUSIASTA POR LA TECNOLOGÍA · FUTURO DESARROLLADOR");
    setHTML(".hero-title", currentLanguage === "en"
      ? "A CURIOUS MIND<br>WITH BIG <span>IDEAS.</span>"
      : "UNA MENTE CURIOSA<br>CON GRANDES <span>IDEAS.</span>");
    setText(".hero-description", currentLanguage === "en"
      ? "I explore technology to turn real problems into digital solutions. Learning, building, and improving with every project."
      : "Exploro la tecnología para convertir problemas reales en soluciones digitales. Aprendiendo, construyendo y mejorando en cada proyecto.");
    setHTML(".hero-actions .button-primary", `${currentLanguage === "en" ? "Explore projects" : "Explorar proyectos"} <span>↗</span>`);
    setHTML(".hero-actions .button-ghost", `${currentLanguage === "en" ? "About me" : "Conocer más"} <span>↓</span>`);
    setText(".hero-index span:first-child", "01 / 06");
    setText(".hero-index span:nth-child(2)", currentLanguage === "en" ? "SCROLL TO EXPLORE" : "DESPLÁZATE PARA EXPLORAR");
    setText(".hero-topline > span:nth-child(2)", currentLanguage === "en" ? "PORTFOLIO / 2026" : "PORTAFOLIO / 2026");
    setText(".hero-bottom span:first-child", currentLanguage === "en" ? "DESIGNED TO CREATE IMPACT" : "DISEÑADO PARA CREAR IMPACTO");
    setHTML(".hero-bottom span:nth-child(2)", currentLanguage === "en" ? "SCROLL <b>⌄</b>" : "DESLIZA <b>⌄</b>");
    setText(".profile-info p", currentLanguage === "en" ? "Aspiring Computer Systems Engineer" : "Aspirante a Ingeniería en Sistemas");

    setHTML(".about-section .section-tag", copy.sectionAbout);
    setText(".about-section .eyebrow", copy.aboutEyebrow);
    setHTML(".about-section .section-heading", copy.aboutHeading);
    setText(".about-lead", copy.aboutLead);
    setText(".about-content > p:nth-of-type(2)", copy.aboutParagraph1);
    setText(".about-content > p:nth-of-type(3)", copy.aboutParagraph2);
    setHTML(".about-quote h3", copy.aboutMantra);
    setText(".about-quote p", copy.aboutMantraCaption);
    const aboutStats = $$(".about-stats div");
    const stats = [
      [copy.locationLabel, "El Salvador"],
      [copy.educationLabel, copy.educationValue],
      [copy.goalLabel, copy.goalValue]
    ];
    aboutStats.forEach((stat, index) => {
      if (!stats[index]) return;
      setTextWithin(stat, "strong", stats[index][0]);
      setTextWithin(stat, "span", stats[index][1]);
    });
    setHTML(".cv-link", `${copy.cvLabel} <span>↗</span>`);

    setHTML(".journey-section .section-tag", copy.sectionJourney);
    setText(".journey-section .eyebrow", copy.journeyEyebrow);
    setHTML(".journey-section .section-heading", copy.journeyHeading);
    setText(".journey-section .section-side-note", copy.journeyNote);
    $$(".timeline-item").forEach((item, index) => {
      const entry = copy.journeyEntries[index];
      if (!entry) return;
      setTextWithin(item, ".timeline-label", entry[0]);
      setTextWithin(item, "h3", entry[1]);
      setTextWithin(item, "p", entry[2]);
      setTextWithin(item, ".timeline-state", entry[3]);
    });

    setHTML(".projects-section .section-tag", copy.sectionProjects);
    setText(".projects-section .eyebrow", copy.projectsEyebrow);
    setHTML(".projects-section .section-heading", copy.projectsHeading);
    setText(".projects-section .section-side-note", copy.projectsNote);
    $$(".project-card").forEach((card, index) => {
      setTextWithin(card, ".project-status", index === 2 ? copy.developmentStatus : copy.projectStatus);
      setTextWithin(card, ".project-type", copy.projectTypes[index]);
      setTextWithin(card, ".project-copy p", copy.projectDescriptions[index]);
      const links = $$(".project-link", card);
      if (links.length > 1) {
        links[0].innerHTML = `${copy.projectWebsite} <span>↗</span>`;
        links[1].innerHTML = `${copy.projectRepository} <span>↗</span>`;
      } else {
        setTextWithin(card, ".project-link-pending", copy.glowpPending);
      }
      setHTML($(".project-open", card), `${index === 2 ? copy.glowpDetails : copy.projectDetails} <span>＋</span>`);
    });
    setHTML(".projects-footnote", `<span>✳</span> ${copy.projectsFootnote}`);

    setHTML(".skills-section .section-tag", copy.sectionSkills);
    setText(".skills-section .eyebrow", copy.skillsEyebrow);
    setHTML(".skills-section .section-heading", copy.skillsHeading);
    setText(".skills-intro", copy.skillsNote);
    setHTML(".skill-group:nth-child(1) .skill-group-title", `<span>01</span> ${copy.hardSkills}`);
    setHTML(".skill-group:nth-child(2) .skill-group-title", `<span>02</span> ${copy.softSkills}`);
    renderSkills(".skill-group:nth-child(1) .skill-card", copy.hardSkillItems);
    renderSkills(".skill-group:nth-child(2) .skill-card", copy.softSkillItems);
    setText(".english-card .project-type", copy.languageLearning);
    setText(".english-card h3", copy.englishLabel);
    setText(".english-card p", copy.englishDescription);
    setText(".english-status", copy.inProgress);

    setHTML(".contact-section .section-tag", copy.sectionContact);
    setText(".contact-section > .eyebrow", copy.contactEyebrow);
    setHTML(".contact-title", copy.contactTitle);
    setText(".contact-description", copy.contactDescription);
    const socialCards = $$(".social-card");
    const socialLabels = [copy.githubLabel, copy.linkedinLabel, copy.instagramLabel, copy.emailLabel];
    socialCards.forEach((card, index) => setTextWithin(card, "strong", socialLabels[index]));
    $("#instagramContact")?.setAttribute("aria-label", copy.instagramAria);
    $(".footer-instagram")?.setAttribute("aria-label", copy.instagramAria);
    setText(".footer-instagram span", "@zhac_14e");
    setHTML(".closing-quote", `<p>${currentLanguage === "en"
      ? "“Every great solution begins with a question, an idea, and the desire to learn something new.”"
      : "«Cada gran solución comienza con una pregunta, una idea y las ganas de aprender algo nuevo.»"}</p>`);
    $(".closing-quote")?.setAttribute("aria-label", copy.quoteLabel);
    setText(".footer p", copy.footerText);

    if (modal?.classList.contains("open")) {
      const localizedProject = projectCopy[currentLanguage][activeProjectId];
      if (localizedProject) {
        modalCategory.textContent = localizedProject.category;
        modalDescription.textContent = localizedProject.description;
        modalContribution.textContent = localizedProject.overview;
        modalFocusLabel.textContent = copy.modalFocus;
        modalHighlightsLabel.textContent = copy.modalHighlights;
        modalTechnologies.replaceChildren();
        localizedProject.focus.forEach(focus => {
          const tag = document.createElement("span");
          tag.textContent = focus;
          modalTechnologies.appendChild(tag);
        });
      }
    }
    $$(".language-button").forEach(button => {
      const active = button.dataset.lang === currentLanguage;
      button.classList.toggle("active", active);
      button.setAttribute("aria-pressed", String(active));
    });
  };

  $$(".language-button").forEach(button => button.addEventListener("click", () => applyLanguage(button.dataset.lang)));
  applyLanguage("es");
});
