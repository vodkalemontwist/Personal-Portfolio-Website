function App() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#0f172a",
        color: "white",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <nav
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "20px 40px",
        }}
      >
        <h2>Fiea</h2>

        <div style={{ display: "flex", gap: "20px" }}>
          <span>About</span>
          <span>Projects</span>
          <span>Photography</span>
          <span>Travel</span>
          <span>Contact</span>
        </div>
      </nav>

      <section
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          minHeight: "80vh",
          padding: "2rem",
        }}
      >
        <h1
          style={{
            fontSize: "4rem",
            marginBottom: "1rem",
          }}
        >
          Raffi Fuad Hilmy
        </h1>

        <p
          style={{
            maxWidth: "700px",
            fontSize: "1.2rem",
            lineHeight: "1.7",
            opacity: 0.8,
          }}
        >
          Creative storyteller, photographer, travel enthusiast and aspiring
          web developer building meaningful digital experiences through code,
          visual storytelling and exploration.
        </p>

        <div
          style={{
            marginTop: "2rem",
            display: "flex",
            gap: "1rem",
          }}
        >
          <button
            style={{
              padding: "12px 24px",
              border: "none",
              borderRadius: "8px",
              cursor: "pointer",
            }}
          >
            View Projects
          </button>

          <button
            style={{
              padding: "12px 24px",
              borderRadius: "8px",
              border: "1px solid white",
              background: "transparent",
              color: "white",
              cursor: "pointer",
            }}
          >
            Explore Fiea
          </button>
        </div>
      </section>
    </div>
  );
}

export default App;