import type { Metadata } from "next";
import { SiteFooter } from "../components/SiteFooter";
import { SiteHeader } from "../components/SiteHeader";

export const metadata: Metadata = {
  title: "Personlig omsorg i hemmet | Tradition vård & omsorg",
  description:
    "Privatfinansierad, trygg och personlig omsorg i Stockholms norra innerstad med fast omsorgskontakt och små team.",
};

const support = [
  ["Personlig omvårdnad", "Hjälp med exempelvis hygien, på- och avklädning och vardagliga rutiner – alltid med respekt för din integritet."],
  ["Mat och måltider", "Stöd med enklare matlagning, måltider och inköp utifrån dina vanor och önskemål."],
  ["Hem och vardag", "Serviceinsatser som skapar ordning, trygghet och mer utrymme för det du tycker om."],
  ["Socialt stöd", "Promenader, samtal och sällskap som ger vardagen innehåll, kontinuitet och igenkänning."],
];

const partners = [
  "Specialister inom bostadsanpassning för ett säkert hem",
  "Leverantörer av trygghetslarm med tillgång till jour och trygghetsstöd dygnet runt",
  "Vårdcentral och distriktssköterskor",
  "Dietister med fokus på kost, näring och välbefinnande",
  "Arbetsterapeuter för bedömning av hjälpmedel och vardagsfunktion",
  "Fysioterapeuter för rehabilitering och rörelse i hemmet",
];

export default function PersonalHomeCarePage() {
  return (
    <main className="service-page" id="top">
      <SiteHeader />

      <section className="service-masthead">
        <nav className="breadcrumb" aria-label="Brödsmulor"><a href="/">Hem</a><span>/</span><span>Personlig omsorg i hemmet</span></nav>
        <p className="eyebrow light">Privat omsorg som bokas direkt</p>
        <h1>Personlig omsorg.<br /><em>På dina villkor.</em></h1>
        <p className="service-lead">
          Omsorg och service som planeras runt dig, dina vanor och hur du vill
          leva ditt liv – med en fast omsorgskontakt och så få olika personer
          som möjligt.
        </p>
      </section>

      <section className="service-process section">
        <div className="service-section-title">
          <p className="eyebrow">Så kommer du igång</p>
          <div>
            <h2>Vi hjälper dig hela vägen.</h2>
          </div>
        </div>
        <div className="service-steps">
          <article><span>01</span><h3><a href="/intresseanmalan">Kontakta oss</a></h3><p>Ring eller mejla oss och berätta vad du eller en närstående behöver hjälp med.</p></article>
          <article><span>02</span><h3>Personlig planering</h3><p>Vi går igenom behov, vanor och önskemål och utformar ett tydligt upplägg tillsammans.</p></article>
          <article><span>03</span><h3>Rätt person</h3><p>Vi matchar dig med en fast omsorgskontakt och ett litet, noggrant utvalt team.</p></article>
        </div>
      </section>

      <section className="service-intro section">
        <div>
          <p className="eyebrow">En relation i centrum</p>
          <h2>Trygghet börjar med<br /><em>att bli sedd.</em></h2>
        </div>
        <div className="service-intro-copy">
          <p>
            Vi har ett relationsinriktat förhållningssätt. Genom att lära känna
            din livshistoria, dina rutiner och önskemål kan vi ge stöd som känns
            personligt och naturligt i ditt eget hem.
          </p>
          <p>
            Alla medarbetare talar svenska obehindrat, är noggrant utvalda och
            har genomgått bakgrundskontroll. Kontinuitet, respekt och ett gott
            samarbete med dig och dina närstående står alltid i fokus.
          </p>
        </div>
      </section>

      <section className="service-offerings section">
        <div className="service-section-title">
          <p className="eyebrow">Det här kan vi hjälpa till med</p>
          <h2>Stöd för en tryggare vardag.</h2>
        </div>
        <div className="offering-grid">
          {support.map(([title, text]) => (
            <article key={title}><h3>{title}</h3><p>{text}</p></article>
          ))}
        </div>
      </section>

      <section className="collaboration section">
        <div className="collaboration-heading">
          <p className="eyebrow light">Kvalitetssäkrad omsorg</p>
          <h2>Samverkan som skapar<br /><em>en trygg helhet.</em></h2>
          <p>
            Vid behov och med ditt samtycke kan vi samverka med relevanta
            yrkesfunktioner. Målet är att vardagen ska fungera smidigt och att
            du ska känna dig trygg med helheten.
          </p>
          <p>
            Externa leverantörers larm och jour är separata tjänster. Vi går igenom vad som kan erbjudas, eventuella kostnader och vem som ansvarar. Egen nattpatrull eller larmjour ingår inte automatiskt i en bokning.
          </p>
        </div>
        <ol className="collaboration-list">
          {partners.map((partner) => <li key={partner}><p>{partner}</p></li>)}
        </ol>
      </section>

      <section className="service-cta">
        <p className="eyebrow light">Personlig hjälp från första samtalet</p>
        <h2>Vill du veta hur vi kan<br /><em>hjälpa just dig?</em></h2>
        <div><a className="button button-light" href="tel:+46852512942">Ring 08-525 129 42</a><a className="button button-ghost" href="mailto:kontakt@traditionvardomsorg.com">Skicka e-post</a></div>
      </section>

      <SiteFooter />
    </main>
  );
}
