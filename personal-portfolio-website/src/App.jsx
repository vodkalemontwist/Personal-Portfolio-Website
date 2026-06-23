import { useState, useEffect } from "react";
import {
  FaGithub,
  FaInstagram,
  FaEnvelope
} from "react-icons/fa";
import { motion } from "framer-motion";
import profile from "./assets/profile2.jpg";
import photo1 from "./assets/photography/photo1.jpg";
import photo2 from "./assets/photography/photo2.jpg";
import photo3 from "./assets/photography/photo3.jpg";
import photo4 from "./assets/photography/photo4.jpg";
import photo5 from "./assets/photography/photo5.jpg";
import photo6 from "./assets/photography/photo6.jpg";
import portfolioPreview from "./assets/projects/portfolio-preview.jpg";
import fieaPreview from "./assets/projects/fiea-preview.jpg";
import photographyPreview from "./assets/projects/photography-preview.jpg";

const photos = [photo1, photo2, photo3, photo4, photo5, photo6];

function App() {
  const fadeInUp = {
    initial: { opacity: 0, y: 40 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 },
  };
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setSelectedImage(null);
      }

      if (e.key === "ArrowLeft" && selectedIndex !== null) {
        const newIndex =
          selectedIndex === 0
            ? photos.length - 1
            : selectedIndex - 1;

        setSelectedIndex(newIndex);
        setSelectedImage(photos[newIndex]);
      }

      if (e.key === "ArrowRight" && selectedIndex !== null) {
        const newIndex =
          selectedIndex === photos.length - 1
            ? 0
            : selectedIndex + 1;

        setSelectedIndex(newIndex);
        setSelectedImage(photos[newIndex]);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedIndex]);
  useEffect(() => {
    if (selectedImage) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [selectedImage]);
  return (
    <div
      id="top"
      className="min-h-screen bg-black text-white"
    >
      {/* Navbar */}
      <nav className="fixed top-0 z-50 w-full border-b border-white/10 bg-black/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#top"
            className="text-2xl font-bold text-[#D4A574] tracking-wide hover:opacity-80 transition"
          >
            Fiea
          </a>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-2xl md:hidden"
          >
            ☰
          </button>

          <div className="hidden gap-6 md:flex">
            <a href="#about" className="text-zinc-400 hover:text-[#D4A574] transition-all duration-300 hover:-translate-y-0.5">
              About
            </a>
            <a href="#projects" className="text-zinc-400 hover:text-[#D4A574] transition-all duration-300 hover:-translate-y-0.5">
              Projects
            </a>
            <a href="#photography" className="text-zinc-400 hover:text-[#D4A574] transition-all duration-300 hover:-translate-y-0.5">
              Photography
            </a>
            <a href="#travel" className="text-zinc-400 hover:text-[#D4A574] transition-all duration-300 hover:-translate-y-0.5">
              Travel
            </a>
            <a href="#contact" className="text-zinc-400 hover:text-[#D4A574] transition-all duration-300 hover:-translate-y-0.5">
              Contact
            </a>
          </div>

          {menuOpen && (
            <div className="flex flex-col border-t border-white/10 bg-black md:hidden">
              <a
                href="#about"
                className="p-4"
                onClick={() => setMenuOpen(false)}
              >
                About
              </a>
              <a
                href="#projects"
                className="p-4"
                onClick={() => setMenuOpen(false)}
              >
                Projects
              </a>
              <a
                href="#photography"
                className="p-4"
                onClick={() => setMenuOpen(false)}
              >
                Photography
              </a>
              <a
                href="#travel"
                className="p-4"
                onClick={() => setMenuOpen(false)}
              >
                Travel
              </a>
              <a
                href="#contact"
                className="p-4"
                onClick={() => setMenuOpen(false)}
              >
                Contact
              </a>
            </div>
          )}

        </div>
      </nav>

      {/* Hero */}
      <motion.section
        className="flex min-h-screen flex-col items-center justify-center px-6 pt-24 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="relative mb-8">
          <div className="absolute inset-0 rounded-full bg-[#D4A574]/20 blur-3xl" />

          <img
            src={profile}
            alt="Raffi Fuad Hilmy"
            className="relative h-64 w-64 rounded-full object-cover border border-white/20"
          />
        </div>
        <p className="mb-8 text-[#D4A574]">
          Developer • Photographer • Traveler
        </p>

        <p className="mt-4 text-sm text-zinc-400 md:text-base">
          Building experiences through technology, photography, and travel.
        </p>

        <h1 className="mb-4 text-5xl font-bold md:text-7xl">
          Raffi Fuad Hilmy
        </h1>

        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#D4A574]/30 bg-[#D4A574]/10 px-4 py-2 text-sm text-[#D4A574]">
          <span className="h-2 w-2 rounded-full bg-[#D4A574]"></span>
          Available for collaborations
        </div>

        <div className="mx-auto mb-6 h-1 w-24 rounded-full bg-[#D4A574]" />

        <p className="max-w-2xl text-lg leading-8 text-zinc-400">
          Developer, photographer, and traveler documenting experiences,
          building digital products, and sharing stories through the Fiea brand.
        </p>

        <div className="mt-8 flex flex-col gap-4 sm:flex-row">
          <a
            href="#projects"
            className="rounded-xl bg-[#D4A574] px-6 py-3 font-medium text-black transition hover:scale-105 hover:brightness-110"
          >
            View Projects
          </a>

          <a
            href="#travel"
            className="rounded-xl border border-white/20 px-6 py-3 transition hover:bg-white/10 hover:scale-105"
          >
            Explore
          </a>
        </div>
        <div className="mt-16 animate-bounce text-2xl text-zinc-500">
          ↓
        </div>
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

        <div className="grid gap-12 md:grid-cols-2">
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
          </div>

          <div className="grid grid-cols-2 gap-4">
            {[
              "React",
              "JavaScript",
              "Tailwind CSS",
              "Git",
              "GitHub",
              "Photography",
              "Content Creation",
              "Travel Storytelling",
            ].map((skill) => (
              <div
                key={skill}
                className="rounded-xl border border-white/10 bg-white/5 p-4 text-center"
              >
                {skill}
              </div>
            ))}
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
          <motion.a
            href="https://github.com/vodkalemontwist/Personal-Portfolio-Website"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.0 }}
            className="block rounded-2xl border border-white/10 bg-white/5 p-6 transition duration-300 hover:-translate-y-2 hover:border-[#D4A574]/50 hover:bg-white/10"
          >
            <img
              src={portfolioPreview}
              alt="Portfolio Website Preview"
              className="mb-5 h-48 w-full rounded-xl object-cover border border-white/10 shadow-lg"
            />
            <h3 className="mb-2 text-2xl font-semibold">
              Personal Portfolio Website
            </h3>

            <div className="mb-4 flex flex-wrap gap-2">
              <span className="rounded-full bg-[#D4A574]/20 px-3 py-1 text-sm text-[#D4A574]">
                React
              </span>

              <span className="rounded-full bg-[#D4A574]/20 px-3 py-1 text-sm text-[#D4A574]">
                Tailwind CSS
              </span>

              <span className="rounded-full bg-[#D4A574]/20 px-3 py-1 text-sm text-[#D4A574]">
                Vite
              </span>
            </div>

            <p className="mb-6 text-zinc-400">
              A modern portfolio website showcasing my projects,
              photography, travel experiences, and personal brand.
            </p>
          </motion.a>

          <motion.a
            href="#travel"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="group rounded-2xl border border-white/10 bg-white/5 p-6 transition-all duration-300 hover:-translate-y-2 hover:border-[#D4A574]/50 hover:bg-white/10"
          >
            <img
              src={fieaPreview}
              alt="Fiea Travel Brand Preview"
              className="mb-5 h-48 w-full rounded-xl object-cover border border-white/10 shadow-lg"
            />
            <h3 className="mb-2 text-2xl font-semibold">
              Fiea Travel Brand
            </h3>

            <div className="mb-4 flex flex-wrap gap-2">
              <span className="rounded-full bg-[#D4A574]/20 px-3 py-1 text-sm text-[#D4A574]">
                Content Creation
              </span>

              <span className="rounded-full bg-[#D4A574]/20 px-3 py-1 text-sm text-[#D4A574]">
                Photography
              </span>

              <span className="rounded-full bg-[#D4A574]/20 px-3 py-1 text-sm text-[#D4A574]">
                Branding
              </span>
            </div>

            <p className="mb-6 text-zinc-400">
              A personal travel and storytelling brand focused on documenting journeys, photography, and creative experiences through digital content.
            </p>
          </motion.a>

          <motion.a
            href="#photography"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="block rounded-2xl border border-white/10 bg-white/5 p-6 transition duration-300 hover:-translate-y-2 hover:border-[#D4A574]/50 hover:bg-white/10"
          >
            <img
              src={photographyPreview}
              alt="Photography Showcase Preview"
              className="mb-5 h-48 w-full rounded-xl border border-white/10 object-cover shadow-lg"
            />
            <h3 className="mb-2 text-2xl font-semibold">
              Photography Showcase
            </h3>

            <div className="mb-4 flex flex-wrap gap-2">
              <span className="rounded-full bg-[#D4A574]/20 px-3 py-1 text-sm text-[#D4A574]">
                Photography
              </span>

              <span className="rounded-full bg-[#D4A574]/20 px-3 py-1 text-sm text-[#D4A574]">
                Visual Storytelling
              </span>

              <span className="rounded-full bg-[#D4A574]/20 px-3 py-1 text-sm text-[#D4A574]">
                React
              </span>
            </div>

            <p className="mb-6 text-zinc-400">
              A curated collection of automotive, travel, and lifestyle photography presented through an interactive gallery experience.
            </p>

          </motion.a>
        </div>
      </motion.section>
      <motion.section
        id="photography"
        className="mx-auto max-w-6xl px-6 py-32 scroll-mt-24"
        {...fadeInUp}
      >
        <div className="mb-12">
          <p className="mb-3 text-[#D4A574]">PHOTOGRAPHY</p>

          <h2 className="max-w-3xl text-4xl font-bold leading-tight">
            Capturing moments, stories, and perspectives through photography.
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {photos.map(
            (photo, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.1,
                }}
                className="group relative overflow-hidden rounded-2xl border border-white/10"
              >
                <img
                  src={photo}
                  alt={`Photography ${index + 1}`}
                  onClick={() => {
                    setSelectedImage(photo);
                    setSelectedIndex(index);
                  }}
                  className="h-96 w-full cursor-pointer object-cover transition duration-500 group-hover:scale-110"
                />

                <div className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 transition duration-300 group-hover:opacity-100">
                  <span className="text-lg font-medium text-white">
                    View Photo
                  </span>
                </div>
              </motion.div>
            )
          )}
        </div>
      </motion.section>
      <motion.section
        id="travel"
        className="mx-auto max-w-6xl px-6 py-32 scroll-mt-24"
        {...fadeInUp}
      >
        <div className="mb-12">
          <p className="mb-3 text-[#D4A574]">FIEA</p>

          <h2 className="max-w-3xl text-4xl font-bold leading-tight">
            Exploring the world through travel, storytelling, and creativity.
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0 }}
            className="group rounded-2xl border border-white/10 bg-white/5 p-6 transition-all duration-300 hover:-translate-y-2 hover:border-[#D4A574]/50 hover:bg-white/10"
          >
            <div className="mb-4 text-3xl">🌍</div>

            <h3 className="mb-4 text-2xl font-semibold">
              Travel Stories
            </h3>

            <p className="text-zinc-400">
              Documenting destinations, cultures, and memorable experiences through photography and storytelling.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="group rounded-2xl border border-white/10 bg-white/5 p-6 transition-all duration-300 hover:-translate-y-2 hover:border-[#D4A574]/50 hover:bg-white/10"
          >
            <div className="mb-4 text-3xl">📷</div>

            <h3 className="mb-4 text-2xl font-semibold">
              Photography Journeys
            </h3>

            <p className="text-zinc-400">
              Capturing landscapes, architecture, automotive culture, and everyday moments from around the world.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="group rounded-2xl border border-white/10 bg-white/5 p-6 transition-all duration-300 hover:-translate-y-2 hover:border-[#D4A574]/50 hover:bg-white/10"
          >
            <div className="mb-4 text-3xl">✨</div>

            <h3 className="mb-4 text-2xl font-semibold">
              Fiea Brand
            </h3>

            <p className="text-zinc-400">
              Building a personal travel and creative brand focused on exploration, visual storytelling, and authentic experiences.
            </p>
          </motion.div>
        </div>
      </motion.section >
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

          <motion.a
            href="mailto:raffifuadhilmy@gmail.com"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0 }}
            className="rounded-2xl border border-white/10 bg-white/5 p-8 text-center transition duration-300 hover:-translate-y-2 hover:border-[#D4A574]/50 hover:bg-white/10"
          >
            <div className="mb-3 flex justify-center">
              <FaEnvelope size={32} className="text-[#D4A574]" />
            </div>
            <h3 className="mb-2 text-xl font-semibold">Email</h3>
            <p className="text-sm text-zinc-400">
              Get in touch for collaborations.
            </p>
          </motion.a>

          <motion.a
            href="https://instagram.com/fieaiea"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="rounded-2xl border border-white/10 bg-white/5 p-8 text-center transition duration-300 hover:-translate-y-2 hover:border-[#D4A574]/50 hover:bg-white/10"
          >
            <div className="mb-3 flex justify-center">
              <FaInstagram size={32} className="text-[#D4A574]" />
            </div>
            <h3 className="mb-2 text-xl font-semibold">Instagram</h3>
            <p className="text-sm text-zinc-400">
              Travel and photography content.
            </p>
          </motion.a>

          <motion.a
            href="https://github.com/vodkalemontwist"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="rounded-2xl border border-white/10 bg-white/5 p-8 text-center transition duration-300 hover:-translate-y-2 hover:border-[#D4A574]/50 hover:bg-white/10"
          >
            <div className="mb-3 flex justify-center">
              <FaGithub size={32} className="text-[#D4A574]" />
            </div>
            <h3 className="mb-2 text-xl font-semibold">GitHub</h3>
            <p className="text-sm text-zinc-400">
              Explore my development projects.
            </p>
          </motion.a>

        </div>
      </motion.section>
      <footer className="border-t border-white/10 py-8 text-center text-sm text-zinc-500">
        © 2026 Raffi Fuad Hilmy. Building experiences through technology, photography, and travel.
      </footer>
      {
        selectedImage && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-6 animate-in fade-in duration-300"
            onClick={() => setSelectedImage(null)}
          >
            <button
              className="absolute right-6 top-6 text-4xl text-white hover:text-[#D4A574] transition"
              onClick={() => setSelectedImage(null)}
            >
              ✕
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();

                const prevIndex =
                  selectedIndex === 0
                    ? photos.length - 1
                    : selectedIndex - 1;

                setSelectedIndex(prevIndex);
                setSelectedImage(photos[prevIndex]);
              }}
              className="absolute left-6 text-5xl text-white hover:text-[#D4A574]"
            >
              ←
            </button>

            <div className="absolute top-6 left-1/2 -translate-x-1/2 rounded-full bg-black/50 px-4 py-2 text-white">
              {selectedIndex + 1} / {photos.length}
            </div>
            <img
              src={selectedImage}
              alt="Preview"
              onClick={(e) => e.stopPropagation()}
              className="max-h-[90vh] max-w-[90vw] rounded-2xl shadow-2xl"
            />

            <button
              onClick={(e) => {
                e.stopPropagation();

                const nextIndex =
                  selectedIndex === photos.length - 1
                    ? 0
                    : selectedIndex + 1;

                setSelectedIndex(nextIndex);
                setSelectedImage(photos[nextIndex]);
              }}
              className="absolute right-6 text-5xl text-white hover:text-[#D4A574]"
            >
              →
            </button>
          </div>
        )
      }
    </div >
  );
}

export default App;
