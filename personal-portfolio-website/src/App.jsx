import profile from "./assets/profile2.jpg";

import photo1 from "./assets/photography/photo1.jpg";
import photo2 from "./assets/photography/photo2.jpg";
import photo3 from "./assets/photography/photo3.jpg";
import photo4 from "./assets/photography/photo4.jpg";
import photo5 from "./assets/photography/photo5.jpg";
import photo6 from "./assets/photography/photo6.jpg";

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navbar */}
      <nav className="fixed top-0 z-50 w-full border-b border-white/10 bg-black/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a
            href="#"
            className="text-xl font-bold text-[#D4A574]"
            >
            Fiea
          </a>
          <div className="hidden gap-6 md:flex">
            <a href="#about" className="text-zinc-400 hover:text-white transition">
              About
            </a>
            <a href="#projects" className="text-zinc-400 hover:text-white transition">
              Projects
            </a>
            <a href="#photography" className="text-zinc-400 hover:text-white transition">
              Photography
            </a>
            <a href="#travel" className="text-zinc-400 hover:text-white transition">
              Travel
            </a>
            <a href="#contact" className="text-zinc-400 hover:text-white transition">
              Contact
            </a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="flex min-h-screen flex-col items-center justify-center px-6 text-center">

  <div className="mt-8 flex flex-col gap-4 sm:flex-row">
    <div className="absolute inset-0 rounded-full bg-[#D4A574]/20 blur-3xl" />

    <img
      src={profile}
      alt="Raffi Fuad Hilmy"
      className="relative h-64 w-64 rounded-full object-cover border border-white/20"
    />
  </div>

  <p className="mb-6 text-[#D4A574]">
    Developer • Photographer • Traveler
  </p>

  <h1 className="mb-4 text-5xl font-bold md:text-7xl">
    Raffi Fuad Hilmy
  </h1>

  <div className="mx-auto mb-6 h-1 w-24 rounded-full bg-[#D4A574]" />

  <p className="max-w-xl text-lg text-zinc-400">
    Creating digital experiences through code, photography, and travel
    storytelling. Exploring the intersection of technology, creativity,
    and adventure.
  </p>

  <div className="mt-8 flex gap-4">
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
      </section>
      <section
  id="about"
  className="mx-auto max-w-6xl px-6 py-32 scroll-mt-24"
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
</section>
<section
  id="projects"
  className="mx-auto max-w-6xl px-6 py-32 scroll-mt-24"
>
  <div className="mb-12">
    <p className="mb-3 text-[#D4A574]">PROJECTS</p>

    <h2 className="max-w-3xl text-4xl font-bold leading-tight">
      Things I've built and continue to improve.
    </h2>
  </div>

  <div className="grid gap-6 md:grid-cols-2">
    <div className="rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:border-[#D4A574]/50 hover:bg-white/10">
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

<a
  href="https://github.com/vodkalemontwist/Personal-Portfolio-Website"
  target="_blank"
  rel="noopener noreferrer"
  className="inline-block rounded-xl bg-[#D4A574] px-4 py-2 text-black font-medium"
>
  View Source
</a>
    </div>
  </div>
</section>
<section
  id="photography"
  className="mx-auto max-w-6xl px-6 py-32 scroll-mt-24"
>
  <div className="mb-12">
    <p className="mb-3 text-[#D4A574]">PHOTOGRAPHY</p>

    <h2 className="max-w-3xl text-4xl font-bold leading-tight">
      Capturing moments, stories, and perspectives through photography.
    </h2>
  </div>

<div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
  {[photo1, photo2, photo3, photo4, photo5, photo6].map(
    (photo, index) => (
      <div
        key={index}
        className="group overflow-hidden rounded-2xl border border-white/10"
      >
        <img
          src={photo}
          alt={`Photography ${index + 1}`}
          className="w-full object-cover transition duration-500 group-hover:scale-110"
        />
      </div>
    )
  )}
</div>
</section>
<section
  id="travel"
  className="mx-auto max-w-6xl px-6 py-32 scroll-mt-24"
>
  <div className="mb-12">
    <p className="mb-3 text-[#D4A574]">FIEA</p>

    <h2 className="max-w-3xl text-4xl font-bold leading-tight">
      Exploring the world through travel, storytelling, and creativity.
    </h2>
  </div>

  <div className="grid gap-8 md:grid-cols-2">
    <div className="rounded-2xl border border-white/10 bg-white/5 p-8">
      <h3 className="mb-4 text-2xl font-semibold">
        Travel Stories
      </h3>

      <p className="text-zinc-400">
        Through Fiea, I document experiences, destinations, and
        memorable moments from my travels, sharing stories and
        perspectives from around the world.
      </p>
    </div>

    <div className="rounded-2xl border border-white/10 bg-white/5 p-8">
      <h3 className="mb-4 text-2xl font-semibold">
        Creative Projects
      </h3>

      <p className="text-zinc-400">
        Combining photography, design, and storytelling to create
        engaging content that inspires curiosity and exploration.
      </p>
    </div>
  </div>
</section>
<section
  id="contact"
  className="mx-auto max-w-6xl px-6 py-32 scroll-mt-24"
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

  <div className="flex flex-col items-center gap-4">
    <a
      href="mailto:raffifuadhilmy@gmail.com"
      className="rounded-xl border border-white/10 bg-white/5 px-6 py-4 transition hover:bg-white/10"
    >
      Email Me
    </a>

    <a
      href="https://github.com/vodkalemontwist"
      target="_blank"
      rel="noopener noreferrer"
      className="rounded-xl border border-white/10 bg-white/5 px-6 py-4 transition hover:bg-white/10"
    >
      GitHub
    </a>
  </div>
</section>
<footer className="border-t border-white/10 py-8 text-center text-zinc-500">
  © 2026 Raffi Fuad Hilmy · Built with React & Tailwind CSS
</footer>
  </div>
  
  );
}

export default App;