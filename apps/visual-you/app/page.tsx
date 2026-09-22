import Image from "next/image";

const features = [
  {
    number: "01",
    eyebrow: "Your body, in progress",
    title: "Organ coloring",
    copy: "Your organs change color with the habits you track. Positive choices improve their symbolic condition, while unwanted or missed habits may lower it—turning invisible patterns into something you can see.",
    note: "Motivational indicators only — never medical assessments or diagnoses.",
    image: "/screenshots/2ndorgan.png",
    alt: "Visual You body statistics screen showing color-coded organs",
  },
  {
    number: "02",
    eyebrow: "Train with intention",
    title: "Muscle progress",
    copy: "Arms, chest, shoulders, back, abs, and legs respond to your completed workouts. As you train consistently, each muscle group changes color so you can see where your effort is going.",
    note: "A clear visual map of the muscle groups receiving your attention.",
    image: "/screenshots/3rdmscl.png",
    alt: "Visual You screen showing color-coded muscle group progress",
  },
  {
    number: "03",
    eyebrow: "Every day has a story",
    title: "Calendars & streaks",
    copy: "A daily history colored from red to blue shows your overall performance at a glance. Open any day to see what you completed, missed, or planned, while overall and habit-specific streaks make consistency tangible.",
    note: "Streak Aids can protect your momentum after up to two missed days.",
    image: "/screenshots/4thcalendars.png",
    alt: "Visual You calendar and streak history screens",
  },
  {
    number: "04",
    eyebrow: "Change at a human pace",
    title: "Plans that adapt",
    copy: "Gradual Reduction uses fast, medium, or easy schedules to increase the time between unwanted behaviors. Gradual Growth gently adds active days or repetitions and can move missed tasks to another eligible day.",
    note: "Heatmaps translate numerical records into a red-to-blue history of your progress.",
    image: "/screenshots/5thgradual.png",
    alt: "Visual You gradual reduction plan calendar",
  },
  {
    number: "05",
    eyebrow: "Patterns, not guesswork",
    title: "Graphs that explain",
    copy: "See how your habits change across daily, weekly, monthly, and yearly periods. Explore one habit, combine several into a Main Graph, or build Group Graphs for goals that belong together.",
    note: "Flexible tracking supports repetitions, time, amounts, and numerical goals.",
    image: "/screenshots/6thinfo.png",
    alt: "Visual You custom habit graphs and progress charts",
  },
  {
    number: "06",
    eyebrow: "Consistency deserves credit",
    title: "Badges & tokens",
    copy: "Meaningful milestones earn badges and tokens. Use rewards to temporarily unlock selected premium features, obtain Streak Aids, and keep the journey motivating long after the first burst of energy.",
    note: "A reward system built around progress—not perfection.",
    image: "/screenshots/7thbadges.png",
    alt: "Visual You badges, tokens, and streak rewards",
  },
  {
    number: "07",
    eyebrow: "Guidance when you need it",
    title: "AI Coach",
    copy: "Ask about routines, progress, difficult patterns, or gradual-change plans. The AI Coach uses what you choose to share to offer practical strategies, fresh perspective, and encouragement along the way.",
    note: "AI guidance does not replace professional medical or psychological advice.",
    image: "/screenshots/8thai.png",
    alt: "Visual You AI Coach screen with suggested habit questions",
  },
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Visual You home">
          <Image src="/screenshots/logoorg.png" alt="" width={48} height={48} priority />
          <span>Visual You</span>
        </a>
        <nav aria-label="Primary navigation">
          <a href="#about">About</a>
          <a href="#features">Features</a>
          <a href="/termsandpolicies">Terms and Policies</a>
        </nav>
        <a className="nav-cta" href="/#store">Get the app <span>↓</span></a>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow"><span>●</span> Habit tracking, made visible</p>
          <h1>Your choices.<br />Your progress.<br /><em>Visualized.</em></h1>
          <p className="hero-intro">Visual You turns the choices you make every day into visible change across your virtual body, calendars, graphs, streaks, and rewards.</p>
          <div className="hero-actions">
            <a className="button light" href="/#store">Get the app <span>↓</span></a>
            <a className="quiet-link" href="#about">Discover the app <span>↓</span></a>
          </div>
          <div className="hero-proof"><strong>Offline-first.</strong><span>Private by design.</span><span>Built for steady progress.</span></div>
        </div>
        <div className="hero-visual">
          <div className="logo-card"><Image src="/screenshots/logoorg.png" alt="Visual You logo" width={220} height={220} priority /></div>
          <Image className="hero-phone" src="/screenshots/firstpart.png" alt="Visual You home screen with quick habit tracking and body visualization" width={1024} height={1536} priority />
          <div className="progress-card"><span>Today&apos;s progress</span><strong>6 choices logged</strong><i><b /></i></div>
        </div>
      </section>

      <section className="store-section" id="store">
        <div className="store-card">
          <p className="store-platform">For iPhone</p>
          <img className="store-badge apple-badge" src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg" alt="Download Visual You on the App Store" />
          <div className="qr-placeholder" aria-label="App Store QR code coming soon"><i /><i /><i /><span>QR code<br />coming soon</span></div>
          <p className="store-status"><span /> App Store link coming soon</p>
        </div>

        <div className="store-message">
          <p className="section-tag">Take Visual You with you</p>
          <h2>Build better habits.<br /><em>One choice at a time.</em></h2>
          <p>Choose your store or scan its QR code when Visual You becomes available. Your progress stays close, private, and ready whenever you are.</p>
        </div>

        <div className="store-card">
          <p className="store-platform">For Android</p>
          <img className="store-badge play-badge" src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png" alt="Get Visual You on Google Play" />
          <div className="qr-placeholder" aria-label="Google Play QR code coming soon"><i /><i /><i /><span>QR code<br />coming soon</span></div>
          <p className="store-status"><span /> Google Play link coming soon</p>
        </div>
      </section>

      <section className="intro-section" id="about">
        <p className="section-tag">The idea</p>
        <h2>Numbers tell you <em>how much.</em><br />Visual You shows you <em>what it means.</em></h2>
        <div className="intro-grid">
          <p>Build beneficial habits, reduce unwanted behaviors, exercise, and stay consistent. Your virtual body and progress history evolve alongside you, making change easier to understand and more motivating to continue.</p>
          <div className="pill-list"><span>Good habits</span><span>Unwanted habits</span><span>Workouts</span><span>Plans</span><span>Rewards</span><span>AI Coach</span></div>
        </div>
      </section>

      <section className="feature-section" id="features">
        {features.map((feature, index) => (
          <article className={`feature ${index % 2 ? "reverse" : ""}`} key={feature.number}>
            <div className="feature-media"><span className="feature-number">{feature.number}</span><Image src={feature.image} alt={feature.alt} width={1200} height={1500} sizes="(max-width: 800px) 100vw, 52vw" /></div>
            <div className="feature-copy">
              <p className="section-tag">{feature.eyebrow}</p>
              <h2>{feature.title}</h2>
              <p>{feature.copy}</p>
              <aside><span>i</span>{feature.note}</aside>
            </div>
          </article>
        ))}
      </section>

      <section className="why-section">
        <div><p className="section-tag">Why Visual You?</p><h2>One place for the whole journey.</h2></div>
        <div className="why-list">
          <p><span>01</span>See progress instead of only counting it.</p>
          <p><span>02</span>Grow good habits and reduce unwanted ones.</p>
          <p><span>03</span>Track with thumbs, repetitions, time, amounts, or numbers.</p>
          <p><span>04</span>Customize themes, languages, bodies, and page layouts.</p>
          <p><span>05</span>Keep everyday tracking reliable with offline-first storage.</p>
        </div>
      </section>

      <section className="closing" id="early-access">
        <Image src="/screenshots/logoorg.png" alt="Visual You logo" width={118} height={118} />
        <p className="section-tag">Build your better you</p>
        <h2>Progress you can finally see.</h2>
        <p>Not perfect overnight. Just more aware, more consistent, and one choice closer every day.</p>
        <a className="button light" href="/#store">Get the app <span>↑</span></a>
        <div className="disclaimer">Visual body and organ colors are symbolic motivational indicators. They are not medical information, assessments, or diagnoses.</div>
      </section>

      <footer className="site-footer">
        <Image className="footer-art" src="/screenshots/sanjarvyfooter.png" alt="" fill sizes="100vw" />
        <div className="footer-top">
          <nav aria-label="Footer navigation"><a href="#about">About</a><a href="#features">Features</a><a href="/termsandpolicies">Terms and Policies</a><a href="mailto:hello@visualyou.app">Contact</a></nav>
        </div>
        <div className="footer-message"><h2>See the person<br />you&apos;re becoming.</h2></div>
        <div className="footer-midline"><p>One day at a time.</p><a href="#top">Visual You by</a></div>
        <div className="footer-bottom"><p>Visual You, made by Sanjar.</p><p>© 2026 Visual You</p></div>
      </footer>
    </main>
  );
}
