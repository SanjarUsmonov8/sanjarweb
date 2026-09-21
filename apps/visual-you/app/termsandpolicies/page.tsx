import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { readFile } from "node:fs/promises";
import path from "node:path";

export const metadata: Metadata = {
  title: "Terms and Policies — Visual You",
  description: "Terms of Use for the Visual You mobile application and related services.",
};

const sectionTitles = [
  "Purpose of Visual You",
  "Medical and health disclaimer",
  "Gradual plans",
  "Eligibility and minors",
  "Accounts and security",
  "Local storage, backup, and device transfer",
  "AI Coach",
  "User content and responsibility",
  "Subscriptions, purchases, tokens, and rewards",
  "Advertisements",
  "Acceptable use",
  "Intellectual property",
  "Service availability and changes",
  "Suspension and account termination",
  "Disclaimers",
  "Limitation of liability",
  "Governing law and disputes",
  "Changes to these Terms",
  "Contact",
];

function getSections(raw: string) {
  return sectionTitles.map((title, index) => {
    const marker = `${index + 1}. ${title}`;
    const nextMarker = index + 1 < sectionTitles.length ? `${index + 2}. ${sectionTitles[index + 1]}` : null;
    const start = raw.indexOf(marker) + marker.length;
    const end = nextMarker ? raw.indexOf(nextMarker, start) : raw.length;
    const body = raw.slice(start, end).trim();
    return { number: index + 1, title, paragraphs: body.split(/\r?\n/).map((line) => line.trim()).filter(Boolean) };
  });
}

export default async function TermsAndPoliciesPage() {
  const raw = await readFile(path.join(process.cwd(), "content", "terms-of-use.txt"), "utf8");
  const sections = getSections(raw);

  return (
    <main className="legal-page">
      <header className="legal-header">
        <Link className="brand" href="/" aria-label="Visual You home"><Image src="/screenshots/logoorg.png" alt="" width={44} height={44} /><span>Visual You</span></Link>
        <Link className="legal-back" href="/"><span>←</span> Back to Visual You</Link>
      </header>

      <section className="legal-hero">
        <p className="section-tag">Legal</p>
        <h1>Terms and<br />Policies.</h1>
        <div className="legal-dates"><p><span>Effective date</span>5th November</p><p><span>Last updated</span>10th September 2026</p></div>
      </section>

      <div className="legal-layout">
        <aside className="legal-index" aria-label="Terms sections">
          <p>On this page</p>
          {sections.map((section) => <a href={`#section-${section.number}`} key={section.number}><span>{String(section.number).padStart(2, "0")}</span>{section.title}</a>)}
        </aside>

        <article className="legal-document">
          <div className="legal-introduction">
            <p>These Terms of Use govern your access to and use of the Visual You mobile application and related services, collectively called the “Service.”</p>
            <p>The Service is operated by Sanjar Usmonov, referred to as “Visual You,” “we,” “us,” or “our.”</p>
            <p>By creating an account, selecting “I agree,” purchasing a subscription, or using the Service, you agree to these Terms and our Privacy Policy.</p>
          </div>

          {sections.map((section) => (
            <section className="legal-section" id={`section-${section.number}`} key={section.number}>
              <div className="legal-section-heading"><span>{String(section.number).padStart(2, "0")}</span><h2>{section.title}</h2></div>
              <div className="legal-section-body">{section.paragraphs.map((paragraph, index) => <p key={index}>{paragraph}</p>)}</div>
            </section>
          ))}
        </article>
      </div>

      <footer className="legal-footer"><p>© 2026 Visual You</p><Link href="/">Return to the app page ↑</Link></footer>
    </main>
  );
}
