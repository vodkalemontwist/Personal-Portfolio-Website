import { useState, useEffect } from "react";
import {
  FaBars,
  FaTimes,
  FaArrowDown,
  FaArrowRight,
  FaCamera,
  FaChevronLeft,
  FaChevronRight,
  FaCode,
  FaGithub,
  FaInstagram,
  FaEnvelope,
  FaExternalLinkAlt,
  FaGlobeAsia,
  FaMapMarkedAlt,
  FaPaperPlane,
  FaPlaneDeparture,
  FaRoute
} from "react-icons/fa";
import { AnimatePresence, motion } from "framer-motion";
import profile from "./assets/optimized/profile.jpg";
import photo1 from "./assets/optimized/photography/photo1.jpg";
import photo2 from "./assets/optimized/photography/photo2.jpg";
import photo3 from "./assets/optimized/photography/photo3.jpg";
import photo4 from "./assets/optimized/photography/photo4.jpg";
import photo5 from "./assets/optimized/photography/photo5.jpg";
import photo6 from "./assets/optimized/photography/photo6.jpg";
import portfolioPreview from "./assets/optimized/projects/portfolio-preview.jpg";
import fieaPreview from "./assets/optimized/projects/fiea-preview.jpg";
import photographyPreview from "./assets/optimized/projects/photography-preview.jpg";
import wiesenderRedesign from "./assets/projects/wiesender-redesign.png";

const photos = [
  {
    src: photo1,
    title: "Frame 01",
    alt: "Selected photography frame from Raffi Fuad Hilmy's portfolio",
    width: 1050,
    height: 1400,
  },
  {
    src: photo2,
    title: "Frame 02",
    alt: "Landscape-oriented photography frame from Raffi Fuad Hilmy's portfolio",
    width: 1400,
    height: 1050,
  },
  {
    src: photo3,
    title: "Frame 03",
    alt: "Vertical photography frame from Raffi Fuad Hilmy's portfolio",
    width: 1050,
    height: 1400,
  },
  {
    src: photo4,
    title: "Frame 04",
    alt: "Atmospheric photography frame from Raffi Fuad Hilmy's portfolio",
    width: 1050,
    height: 1400,
  },
  {
    src: photo5,
    title: "Frame 05",
    alt: "Wide photography frame from Raffi Fuad Hilmy's portfolio",
    width: 1400,
    height: 1050,
  },
  {
    src: photo6,
    title: "Frame 06",
    alt: "Travel photography frame from Raffi Fuad Hilmy's portfolio",
    width: 1400,
    height: 1050,
  },
];

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#photography", label: "Photography" },
  { href: "#travel", label: "Travel" },
  { href: "#contact", label: "Contact" },
];

const heroHighlights = [
  { icon: FaCode, label: "Web Development" },
  { icon: FaCamera, label: "Photography" },
  { icon: FaMapMarkedAlt, label: "Travel Stories" },
];

const aboutHighlights = [
  {
    icon: FaCode,
    title: "Frontend Craft",
    text: "Building responsive React experiences with clean structure, motion, and careful visual details.",
  },
  {
    icon: FaCamera,
    title: "Visual Storytelling",
    text: "Using photography and composition to make digital work feel more personal and memorable.",
  },
  {
    icon: FaMapMarkedAlt,
    title: "Explorer Mindset",
    text: "Documenting places, people, and ideas through the Fiea brand while learning by doing.",
  },
];

const skills = [
  "React",
  "JavaScript",
  "Tailwind CSS",
  "Framer Motion",
  "Git",
  "GitHub",
  "Photography",
  "Content Creation",
  "Travel Storytelling",
];

const projects = [
  {
    title: "Personal Portfolio Website",
    status: "Featured Build",
    href: "https://github.com/vodkalemontwist/Personal-Portfolio-Website",
    external: true,
    image: portfolioPreview,
    imageAlt: "Portfolio Website Preview",
    imageWidth: 1200,
    imageHeight: 750,
    tags: ["React", "Tailwind CSS", "Vite"],
    description:
      "A modern portfolio website showcasing my projects, photography, travel experiences, and personal brand.",
    action: "View Repository",
  },
  {
    title: "Fiea Travel Brand",
    status: "Creative Brand",
    href: "#travel",
    image: fieaPreview,
    imageAlt: "Fiea Travel Brand Preview",
    imageWidth: 1200,
    imageHeight: 800,
    tags: ["Content Creation", "Photography", "Branding"],
    description:
      "A travel and storytelling direction for the Fiea brand, combining photography, creative identity, and exploration.",
    action: "Explore Travel",
  },
  {
    title: "Photography Showcase",
    status: "Gallery Feature",
    href: "#photography",
    image: photographyPreview,
    imageAlt: "Photography Showcase Preview",
    imageWidth: 800,
    imageHeight: 1200,
    tags: ["Photography", "Visual Storytelling", "React"],
    description:
      "An interactive visual gallery with animated cards, keyboard controls, and a focused lightbox experience.",
    action: "Open Gallery",
  },
  {
    title: "Wiesender Redesign",
    status: "Redesign Concept",
    href: "https://wiesender-redesign.vercel.app",
    external: true,
    description:
      "A responsive website redesign concept for Wiesender, focused on cleaner product presentation, modern layout, and improved user experience.",
    image: wiesenderRedesign,
    imageAlt: "Wiesender Redesign Preview",
    imageWidth: 2880,
    imageHeight: 1562,
    tags: ["React", "Tailwind CSS", "UX Redesign"],
    action: "View Repository",
  },
];

const travelHighlights = [
  {
    icon: FaGlobeAsia,
    title: "Travel Stories",
    text: "Documenting destinations, cultures, and memorable experiences through photography and storytelling.",
  },
  {
    icon: FaCamera,
    title: "Photography Journeys",
    text: "Capturing landscapes, architecture, automotive culture, and everyday moments from around the world.",
  },
  {
    icon: FaRoute,
    title: "Fiea Brand",
    text: "Building a personal travel and creative brand focused on exploration, visual storytelling, and authentic experiences.",
  },
];

const contactLinks = [
  {
    icon: FaEnvelope,
    title: "Email",
    text: "Get in touch for collaborations.",
    href: "mailto:raffifuadhilmy@gmail.com",
    action: "Send Email",
  },
  {
    icon: FaInstagram,
    title: "Instagram",
    text: "Travel and photography content.",
    href: "https://instagram.com/fieaiea",
    action: "Open Instagram",
    external: true,
  },
  {
    icon: FaGithub,
    title: "GitHub",
    text: "Explore my development projects.",
    href: "https://github.com/vodkalemontwist",
    action: "Open GitHub",
    external: true,
  },
];

function App() {
  const fadeInUp = {
    initial: { opacity: 0, y: 40 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 },
  };
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const selectedPhoto = selectedIndex === null ? null : photos[selectedIndex];
  const navLinkClass =
    "rounded-md text-zinc-400 transition-all duration-300 hover:-translate-y-0.5 hover:text-[#D4A574] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4A574]";
  const mobileNavLinkClass =
    "rounded-xl px-4 py-3 text-zinc-300 transition hover:bg-white/10 hover:text-[#D4A574] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4A574]";

  const closePhoto = () => {
    setSelectedIndex(null);
  };

  const showPreviousPhoto = () => {
    setSelectedIndex((currentIndex) => {
      if (currentIndex === null) {
        return currentIndex;
      }

      return currentIndex === 0 ? photos.length - 1 : currentIndex - 1;
    });
  };

  const showNextPhoto = () => {
    setSelectedIndex((currentIndex) => {
      if (currentIndex === null) {
        return currentIndex;
      }

      return currentIndex === photos.length - 1 ? 0 : currentIndex + 1;
    });
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setSelectedIndex(null);
        setMenuOpen(false);
      }

      if (e.key === "ArrowLeft") {
        setSelectedIndex((currentIndex) => {
          if (currentIndex === null) {
            return currentIndex;
          }

          return currentIndex === 0 ? photos.length - 1 : currentIndex - 1;
        });
      }

      if (e.key === "ArrowRight") {
        setSelectedIndex((currentIndex) => {
          if (currentIndex === null) {
            return currentIndex;
          }

          return currentIndex === photos.length - 1 ? 0 : currentIndex + 1;
        });
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  useEffect(() => {
    if (!selectedPhoto) {
      return undefined;
    }

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [selectedPhoto]);
  return (
    <div
      id="top"
      className="min-h-screen bg-black text-white"
    >
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-[#D4A574] focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-black focus:shadow-lg focus:shadow-black/30"
      >
        Skip to content
      </a>

      {/* Navbar */}
      <nav
        aria-label="Main navigation"
        className="fixed top-0 z-50 w-full border-b border-white/10 bg-black/85 shadow-lg shadow-black/20 backdrop-blur-md"
      >
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a
            href="#top"
            onClick={() => setMenuOpen(false)}
            className="text-2xl font-bold tracking-wide text-[#D4A574] transition hover:opacity-80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4A574]"
          >
            Fiea
          </a>

          <div className="hidden gap-6 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={navLinkClass}
              >
                {link.label}
              </a>
            ))}
          </div>

          <button
            type="button"
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            onClick={() => setMenuOpen(!menuOpen)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-[#D4A574] transition hover:border-[#D4A574]/50 hover:bg-[#D4A574]/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4A574] md:hidden"
          >
            {menuOpen ? (
              <FaTimes aria-hidden="true" />
            ) : (
              <FaBars aria-hidden="true" />
            )}
          </button>
        </div>

        <AnimatePresence>
          {menuOpen && (
            <motion.div
              id="mobile-menu"
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.2 }}
              className="border-t border-white/10 bg-black/95 shadow-lg shadow-black/30 md:hidden"
            >
              <div className="mx-auto flex max-w-6xl flex-col gap-1 px-6 py-4">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className={mobileNavLinkClass}
                    onClick={() => setMenuOpen(false)}
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      <main id="main-content">
        {/* Hero */}
        <motion.section
          className="flex min-h-screen flex-col items-center justify-center px-6 pb-16 pt-28 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <motion.div
            className="relative mb-8"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <div className="absolute inset-0 rounded-full bg-[#D4A574]/20 blur-3xl" />

            <img
              src={profile}
              alt="Raffi Fuad Hilmy"
              width="900"
              height="900"
              decoding="async"
              fetchPriority="high"
              className="relative h-56 w-56 rounded-full border border-white/20 object-cover shadow-2xl shadow-[#D4A574]/10 md:h-64 md:w-64"
            />
          </motion.div>

          <motion.div
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#D4A574]/30 bg-[#D4A574]/10 px-4 py-2 text-sm text-[#D4A574]"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <span className="h-2 w-2 rounded-full bg-[#D4A574]" />
            Available for collaborations
          </motion.div>

          <motion.p
            className="mb-4 text-sm uppercase tracking-[0.28em] text-[#D4A574] md:text-base"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Developer • Photographer • Traveler
          </motion.p>

          <motion.h1
            className="mb-5 max-w-4xl text-5xl font-bold leading-tight md:text-7xl"
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Raffi Fuad Hilmy
          </motion.h1>

          <motion.div
            className="mx-auto mb-6 h-1 w-24 rounded-full bg-[#D4A574]"
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.5, delay: 0.55 }}
          />

          <motion.p
            className="max-w-2xl text-lg leading-8 text-zinc-400"
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.65 }}
          >
            Developer, photographer, and traveler documenting experiences,
            building digital products, and sharing stories through the Fiea brand.
          </motion.p>

          <motion.div
            className="mt-8 flex flex-wrap justify-center gap-3"
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.75 }}
          >
            {heroHighlights.map(({ icon: Icon, label }) => (
              <span
                key={label}
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-zinc-300"
              >
                <Icon aria-hidden="true" className="text-[#D4A574]" />
                {label}
              </span>
            ))}
          </motion.div>

          <motion.div
            className="mt-8 flex flex-col gap-4 sm:flex-row"
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.85 }}
          >
            <a
              href="#projects"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#D4A574] px-6 py-3 font-medium text-black transition hover:scale-105 hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4A574]"
            >
              View Projects
              <FaArrowRight aria-hidden="true" />
            </a>

            <a
              href="#travel"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/20 px-6 py-3 transition hover:scale-105 hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4A574]"
            >
              Explore
              <FaArrowDown aria-hidden="true" />
            </a>
          </motion.div>

          <a
            href="#about"
            aria-label="Scroll to about section"
            className="mt-16 animate-bounce text-2xl text-zinc-500 transition hover:text-[#D4A574] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4A574]"
          >
            <FaArrowDown aria-hidden="true" />
          </a>
        </motion.section>
        <motion.section
          id="about"
          className="mx-auto max-w-6xl px-6 py-32 scroll-mt-24"
          {...fadeInUp}
        >
          <div className="mb-12">
            <p className="mb-3 text-[#D4A574]">ABOUT ME</p>

            <h2 className="max-w-3xl text-4xl font-bold leading-tight">
              A creative storyteller with a passion for technology and exploration.
            </h2>
          </div>

          <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr]">
            <div>
              <p className="text-lg leading-8 text-zinc-400">
                I'm Raffi Fuad Hilmy, a developer, photographer, and traveler
                passionate about creating meaningful experiences through technology
                and visual storytelling.
              </p>

              <p className="mt-6 text-lg leading-8 text-zinc-400">
                Through my personal brand, Fiea, I document journeys, capture
                moments, and explore new perspectives while continuously developing
                my skills in modern web development.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                {heroHighlights.map(({ icon: Icon, label }) => (
                  <div
                    key={label}
                    className="rounded-2xl border border-white/10 bg-white/5 p-4"
                  >
                    <Icon aria-hidden="true" className="mb-3 text-xl text-[#D4A574]" />
                    <p className="text-sm font-medium text-white">{label}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <div className="grid gap-4">
                {aboutHighlights.map(({ icon: Icon, title, text }, index) => (
                  <motion.div
                    key={title}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.45, delay: index * 0.12 }}
                    className="rounded-2xl border border-white/10 bg-white/5 p-5 shadow-lg shadow-black/20"
                  >
                    <div className="mb-3 flex items-center gap-3">
                      <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#D4A574]/10 text-[#D4A574]">
                        <Icon aria-hidden="true" />
                      </span>
                      <h3 className="text-xl font-semibold">{title}</h3>
                    </div>

                    <p className="leading-7 text-zinc-400">{text}</p>
                  </motion.div>
                ))}
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-lg shadow-black/20">
                <div className="mb-5 flex items-center justify-between gap-4">
                  <h3 className="text-xl font-semibold">Core Toolkit</h3>
                  <span className="text-sm text-[#D4A574]">Always learning</span>
                </div>

                <div className="flex flex-wrap gap-3">
                  {skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-white/10 bg-black/30 px-4 py-2 text-sm text-zinc-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.section>
        <motion.section
          id="projects"
          className="mx-auto max-w-6xl px-6 py-32 scroll-mt-24"
          {...fadeInUp}
        >
          <div className="mb-12">
            <p className="mb-3 text-[#D4A574]">PROJECTS</p>

            <h2 className="max-w-3xl text-4xl font-bold leading-tight">
              Things I've built and continue to improve.
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
              <motion.a
                key={project.title}
                href={project.href}
                target={project.external ? "_blank" : undefined}
                rel={project.external ? "noopener noreferrer" : undefined}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="group flex h-full flex-col rounded-2xl border border-white/10 bg-white/5 p-6 shadow-lg shadow-black/30 transition duration-300 hover:-translate-y-2 hover:border-[#D4A574]/50 hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4A574]"
              >
                <div className="relative mb-5 overflow-hidden rounded-xl border border-white/10 shadow-lg">
                  <img
                    src={project.image}
                    alt={project.imageAlt}
                    width={project.imageWidth}
                    height={project.imageHeight}
                    loading="lazy"
                    decoding="async"
                    className="h-48 w-full object-cover transition duration-500 group-hover:scale-105"
                  />

                  <span className="absolute left-3 top-3 rounded-full border border-white/10 bg-black/70 px-3 py-1 text-xs font-medium text-[#D4A574] backdrop-blur-sm">
                    {project.status}
                  </span>
                </div>

                <h3 className="mb-3 text-2xl font-semibold">
                  {project.title}
                </h3>

                <div className="mb-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-[#D4A574]/20 px-3 py-1 text-sm text-[#D4A574]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <p className="mb-6 flex-1 leading-7 text-zinc-400">
                  {project.description}
                </p>

                <span className="inline-flex items-center gap-2 text-sm font-medium text-[#D4A574] transition group-hover:gap-3">
                  {project.action}
                  <FaArrowRight aria-hidden="true" />
                </span>
              </motion.a>
            ))}
          </div>
        </motion.section>
        <motion.section
          id="photography"
          className="mx-auto max-w-6xl px-6 py-32 scroll-mt-24"
          {...fadeInUp}
        >
          <div className="mb-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="mb-3 text-[#D4A574]">PHOTOGRAPHY</p>

              <h2 className="max-w-3xl text-4xl font-bold leading-tight">
                Capturing moments, stories, and perspectives through photography.
              </h2>
            </div>

            <div className="inline-flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-zinc-300">
              <FaCamera aria-hidden="true" className="text-[#D4A574]" />
              {photos.length} selected frames
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {photos.map(
              (photo, index) => (
                <motion.button
                  type="button"
                  key={photo.title}
                  onClick={() => {
                    setSelectedIndex(index);
                  }}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.4,
                    delay: index * 0.1,
                  }}
                  aria-label={`Open ${photo.title}`}
                  className="group relative block w-full overflow-hidden rounded-2xl border border-white/10 bg-white/5 text-left shadow-lg shadow-black/30 transition duration-300 hover:-translate-y-1 hover:border-[#D4A574]/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4A574]"
                >
                  <img
                    src={photo.src}
                    alt={photo.alt}
                    width={photo.width}
                    height={photo.height}
                    loading="lazy"
                    decoding="async"
                    className="h-80 w-full cursor-pointer object-cover transition duration-500 group-hover:scale-110 md:h-96"
                  />

                  <div className="absolute inset-0 flex flex-col justify-between bg-gradient-to-b from-black/20 via-transparent to-black/85 p-5 opacity-0 transition duration-300 group-hover:opacity-100 group-focus-visible:opacity-100">
                    <span className="w-fit rounded-full border border-white/10 bg-black/50 px-3 py-1 text-xs font-medium text-[#D4A574] backdrop-blur-sm">
                      {photo.title}
                    </span>

                    <span className="inline-flex items-center gap-2 text-base font-medium text-white">
                      <FaCamera aria-hidden="true" className="text-[#D4A574]" />
                      View Photo
                    </span>
                  </div>
                </motion.button>
              )
            )}
          </div>
        </motion.section>
        <motion.section
          id="travel"
          className="mx-auto max-w-6xl px-6 py-32 scroll-mt-24"
          {...fadeInUp}
        >
          <div className="mb-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="mb-3 text-[#D4A574]">FIEA</p>

              <h2 className="max-w-3xl text-4xl font-bold leading-tight">
                Exploring the world through travel, storytelling, and creativity.
              </h2>
            </div>

            <a
              href="#contact"
              className="inline-flex w-fit items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-medium text-[#D4A574] transition hover:-translate-y-1 hover:border-[#D4A574]/50 hover:bg-[#D4A574]/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4A574]"
            >
              <FaPlaneDeparture aria-hidden="true" />
              Collaborate with Fiea
            </a>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {travelHighlights.map(({ icon: Icon, title, text }, index) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="group rounded-2xl border border-white/10 bg-white/5 p-6 shadow-lg shadow-black/20 transition-all duration-300 hover:-translate-y-2 hover:border-[#D4A574]/50 hover:bg-white/10"
              >
                <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#D4A574]/10 text-[#D4A574] transition group-hover:bg-[#D4A574]/20">
                  <Icon aria-hidden="true" />
                </div>

                <h3 className="mb-4 text-2xl font-semibold">
                  {title}
                </h3>

                <p className="leading-7 text-zinc-400">
                  {text}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.section>
        <motion.section
          id="contact"
          className="mx-auto max-w-6xl px-6 py-32 scroll-mt-24"
          {...fadeInUp}
        >
          <div className="mb-12 text-center">
            <p className="mb-3 text-[#D4A574]">CONTACT</p>

            <h2 className="mb-6 text-4xl font-bold">
              Let's connect.
            </h2>

            <p className="mx-auto max-w-2xl text-zinc-400">
              Whether it's web development, photography, travel content,
              or creative collaboration, I'd love to hear from you.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {contactLinks.map(({ icon: Icon, title, text, href, action, external }, index) => (
              <motion.a
                key={title}
                href={href}
                target={external ? "_blank" : undefined}
                rel={external ? "noopener noreferrer" : undefined}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="group flex min-h-64 flex-col rounded-2xl border border-white/10 bg-white/5 p-8 text-left shadow-lg shadow-black/20 transition duration-300 hover:-translate-y-2 hover:border-[#D4A574]/50 hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4A574]"
              >
                <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#D4A574]/10 text-[#D4A574]">
                  <Icon aria-hidden="true" size={24} />
                </div>

                <h3 className="mb-3 text-xl font-semibold">{title}</h3>
                <p className="flex-1 leading-7 text-zinc-400">
                  {text}
                </p>

                <span className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-[#D4A574] transition group-hover:gap-3">
                  {action}
                  {external ? (
                    <FaExternalLinkAlt aria-hidden="true" />
                  ) : (
                    <FaPaperPlane aria-hidden="true" />
                  )}
                </span>
              </motion.a>
            ))}
          </div>
        </motion.section>
      </main>

      <footer className="border-t border-white/10 px-6 py-10 text-sm text-zinc-500">
        <div className="mx-auto flex max-w-6xl flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <div>
            <a
              href="#top"
              className="mb-2 inline-block text-2xl font-bold tracking-wide text-[#D4A574] transition hover:opacity-80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4A574]"
            >
              Fiea
            </a>
            <p>
              © {new Date().getFullYear()} Raffi Fuad Hilmy. Building experiences through technology, photography, and travel.
            </p>
          </div>

          <div className="flex flex-wrap gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="transition hover:text-[#D4A574] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4A574]"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </footer>
      <AnimatePresence>
        {selectedPhoto && selectedIndex !== null && (
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label={`${selectedPhoto.title} photo preview`}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 px-4 py-8 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => {
              closePhoto();
            }}
          >
            <div className="absolute left-1/2 top-5 -translate-x-1/2 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm text-white shadow-lg shadow-black/30 backdrop-blur-md">
              {selectedPhoto.title} / {photos.length}
            </div>

            <button
              type="button"
              aria-label="Close photo preview"
              className="absolute right-5 top-5 inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/10 text-white shadow-lg shadow-black/30 backdrop-blur-md transition hover:border-[#D4A574]/50 hover:bg-[#D4A574]/10 hover:text-[#D4A574] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4A574]"
              onClick={(e) => {
                e.stopPropagation();
                closePhoto();
              }}
            >
              <FaTimes aria-hidden="true" />
            </button>

            <button
              type="button"
              aria-label="Previous photo"
              onClick={(e) => {
                e.stopPropagation();
                showPreviousPhoto();
              }}
              className="absolute left-4 top-1/2 inline-flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-white/10 text-white shadow-lg shadow-black/30 backdrop-blur-md transition hover:border-[#D4A574]/50 hover:bg-[#D4A574]/10 hover:text-[#D4A574] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4A574] md:left-8"
            >
              <FaChevronLeft aria-hidden="true" />
            </button>

            <motion.img
              key={selectedPhoto.src}
              src={selectedPhoto.src}
              alt={selectedPhoto.alt}
              width={selectedPhoto.width}
              height={selectedPhoto.height}
              decoding="async"
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.25 }}
              onClick={(e) => e.stopPropagation()}
              className="max-h-[82vh] max-w-[92vw] rounded-2xl border border-white/10 object-contain shadow-2xl shadow-black/60"
            />

            <button
              type="button"
              aria-label="Next photo"
              onClick={(e) => {
                e.stopPropagation();
                showNextPhoto();
              }}
              className="absolute right-4 top-1/2 inline-flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-white/10 text-white shadow-lg shadow-black/30 backdrop-blur-md transition hover:border-[#D4A574]/50 hover:bg-[#D4A574]/10 hover:text-[#D4A574] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4A574] md:right-8"
            >
              <FaChevronRight aria-hidden="true" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
