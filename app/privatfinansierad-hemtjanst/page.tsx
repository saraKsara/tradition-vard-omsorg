import type { Metadata } from "next";
import { SiteFooter } from "../components/SiteFooter";
import { SiteHeader } from "../components/SiteHeader";

export const metadata: Metadata = {
  title: "Privatfinansierad hemtjänst | Tradition vård & omsorg",
  description:
    "Flexibel och diskret privatfinansierad hemtjänst i Stockholm, helt på dina villkor och med möjlighet till RUT-avdrag för godkända insatser.",
};

const examples = [
  ["Personlig omsorg", "Stöd med personlig hygien, på- och avklädning och andra vardagliga rutiner i hemmet."],
  ["Sällskap och tillsyn", "Närvaro, högläsning, samtal och promenader som skapar trygghet och innehåll i vardagen."],
  ["Ärenden och inköp", "Hjälp med enklare ärenden, besök på vårdcentral, bank eller butik när det är kopplat till omsorgen."],
  ["Hem och måltider", "Enklare matlagning, städning, tvätt och praktiskt stöd utifrån vad som är viktigt för dig."],
];

export default function PrivateHomeCarePage() {
  return (
    <main className="service-page" id="top">
      <SiteHeader />

      <section className="service-masthead private-tone">
        <nav className="breadcrumb" aria-label="Brödsmulor"><a href="/">Hem</a><span>/</span><span>Privatfinansierad hemtjänst</span></nav>
        <p className="eyebrow light">Privat omsorg som bokas direkt</p>
        <h1>Privatfinansierad<br /><em>Hemtjänst.</em></h1>
        <p className="service-lead">
          Personlig omsorg för dig som vill investera i extra stöd i vardagen –
          tryggt, diskret och helt på dina egna villkor.
        </p>
      </section>

      <section className="service-intro section">
        <div>
          <p className="eyebrow">Mer valfrihet</p>
          <h2>Du bestämmer<br /><em>vad, när och hur.</em></h2>
        </div>
        <div className="service-intro-copy">
          <p>
            Privatfinansierad hemtjänst kan bokas direkt av dig eller en
            närstående. Stödet anpassas efter din vardag och kan komplettera
            annan omsorg som du redan har.
          </p>
          <p>
            Du får en personlig kontakt och ett noga matchat, svensktalande
            team. Diskretion, kvalitet och kontinuitet är alltid i fokus.
          </p>
        </div>
      </section>

      <section className="service-offerings section">
        <div className="service-section-title">
          <p className="eyebrow">Exempel på stöd</p>
          <h2>Utformat kring din vardag.</h2>
        </div>
        <div className="offering-grid">
          {examples.map(([title, text]) => (
            <article key={title}><h3>{title}</h3><p>{text}</p></article>
          ))}
        </div>
      </section>

      <section className="rut-section section">
        <div>
          <p className="eyebrow light">Med möjlighet till RUT-avdrag</p>
          <h2>En tydlig kostnad.<br /><em>En flexibel lösning.</em></h2>
          <p>
            För arbete som uppfyller Skatteverkets villkor är priset cirka
            300 kr per timme efter preliminärt RUT-avdrag.
            Kalkylatorns grundpris är 599 kr per timme före avdrag.
          </p>
          <p className="rut-caution">
            RUT gäller inte automatiskt för alla insatser. Hälso- och sjukvård
            utförd av legitimerad personal, resekostnader och fristående
            ledsagning till kulturaktiviteter omfattas exempelvis inte.
          </p>
          <a className="text-link light-link" href="https://www4.skatteverket.se/rattsligvagledning/edition/2026.8/2944.html" target="_blank" rel="noreferrer">Läs Skatteverkets villkor</a>
        </div>
        <aside className="price-card">
          <span>Privat hemtjänst</span>
          <strong>cirka 300 kr<small>/timme med preliminärt RUT*</small></strong>
          <p>* Förutsätter att tjänsten och kunden uppfyller Skatteverkets villkor. 599 kr/timme före avdrag i kalkylatorn.</p>
        </aside>
      </section>

      <section className="booking-note section"><p>Priserna är vägledande. Inför bokning går vi igenom pris, eventuell moms och tillägg, tider och villkor för just ditt upplägg. <a href="/priser-och-bokning">Läs om priser och bokning</a>.</p></section>

      <section className="private-calculator section">
        <div>
          <p className="eyebrow">Räkna i lugn och ro</p>
          <h2>Vad skulle din omsorg kosta?</h2>
          <p>Välj antal timmar och fyll i ditt RUT-utrymme för att få en vägledande månadskostnad. Uppgifterna stannar i din webbläsare.</p>
        </div>
        <a className="button dark-button" href="/behovskalkylator">Öppna behovskalkylatorn</a>
      </section>

      <section className="service-cta">
        <p className="eyebrow light">Boka privat omsorg direkt</p>
        <h2>Låt oss utforma stödet<br /><em>tillsammans.</em></h2>
        <div><a className="button button-light" href="tel:+46852512942">Ring 08-525 129 42</a><a className="button button-ghost" href="mailto:kontakt@traditionvardomsorg.com">Skicka e-post</a></div>
      </section>

      <SiteFooter />
    </main>
  );
}
