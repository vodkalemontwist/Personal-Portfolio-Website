import profile from "./assets/profile2.jpg";

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navbar */}
      <nav className="fixed top-0 w-full border-b border-white/10 bg-black/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <h1 className="text-xl font-bold text-[#D4A574]">
            Fiea
          </h1>

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

  <div className="relative mb-8">
    <div className="absolute inset-0 rounded-full bg-[#D4A574]/20 blur-3xl" />

    <img
      src={profile}
      alt="Raffi Fuad Hilmy"
      className="relative h-60 w-60 rounded-full object-cover border border-white/20"
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
    <button className="rounded-xl bg-[#D4A574] px-6 py-3 font-medium text-black transition hover:scale-105 hover:brightness-110">
      View Projects
    </button>

    <button className="rounded-xl border border-white/20 px-6 py-3 transition hover:bg-white/10 hover:scale-105">
      Explore
    </button>
   </div> 
      </section>
      <section
  id="about"
  className="mx-auto max-w-6xl px-6 py-32"
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
  </div>
  
  );
}

export default App;