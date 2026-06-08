function App() {
  return (
    <main>
      <section
        style={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
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
            fontSize: "1.2rem",
            maxWidth: "600px",
          }}
        >
          Creative storyteller, travel enthusiast, and aspiring web developer
          building meaningful digital experiences.
        </p>

        <button
          style={{
            marginTop: "2rem",
            padding: "12px 24px",
            fontSize: "1rem",
            cursor: "pointer",
          }}
        >
          View My Work
        </button>
      </section>
    </main>
  );
}

export default App;