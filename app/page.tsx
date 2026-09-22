export default function Home() {
  const visualYouUrl =
    process.env.NEXT_PUBLIC_VISUAL_YOU_URL ?? "http://localhost:3001/";

  return (
    <main className="profile-shell">
      <header>
        <a className="wordmark" href="#top">Sanjar.</a>
        <nav aria-label="Primary navigation">
          <a href="#work">Work</a>
          <a href="#about">About</a>
          <a href="mailto:hello@sanjar.net">Contact</a>
        </nav>
      </header>

      <section className="profile-hero" id="top">
        <p className="kicker">Personal profile · Company home</p>
        <h1>I build digital products<br />with purpose.</h1>
        <p className="intro">This is the future home of Sanjar&apos;s profile, company, and the products being built along the way.</p>
      </section>

      <section className="work" id="work">
        <p className="section-label">Selected work</p>
        <a className="project-card" href={visualYouUrl}>
          <div><span>01 · HABITS &amp; WELLBEING</span><h2>Visual You</h2><p>A kinder, more visual way to build habits and see who you&apos;re becoming.</p></div>
          <span className="arrow">↗</span>
        </a>
      </section>

      <footer id="about"><span>Sanjar.net</span><span>More soon.</span></footer>
    </main>
  );
}
