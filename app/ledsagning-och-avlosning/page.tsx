import type { Metadata } from "next";
import { SiteFooter } from "../components/SiteFooter";
import { SiteHeader } from "../components/SiteHeader";

export const metadata: Metadata = {
  title: "Ledsagning och avlösning | Tradition vård & omsorg",
  description:
    "Trygg ledsagning och avlösning i Stockholm – personligt stöd för att delta i vardagslivet och avlastning för närstående.",
};

export default function CompanionCarePage() {
  return (
    <main className="service-page" id="top">
      <SiteHeader />

      <section className="service-masthead sand-tone">
        <nav className="breadcrumb" aria-label="Brödsmulor"><a href="/">Hem</a><span>/</span><span>Ledsagning och avlösning</span></nav>
        <p className="eyebrow">Stöd som skapar frihet</p>
        <h1>Ledsagning<br /><em>& avlösning.</em></h1>
        <p className="service-lead">
          Tryggt sällskap till aktiviteter och ärenden – och ett omsorgsfullt
          stöd i hemmet när en närstående behöver tid för återhämtning eller annat.
        </p>
      </section>

      <section className="service-intro section">
        <div>
          <p className="eyebrow">Närvaro och kontinuitet</p>
          <h2>Mer utrymme för<br /><em>livet utanför hemmet.</em></h2>
        </div>
        <div className="service-intro-copy">
          <p>
            Ledsagning och avlösning bokas direkt av dig eller en närstående.
            Vi utformar stödet tillsammans med dig och matchar dig med en
            medarbetare som skapar trygghet och igenkänning.
          </p>
          <p>
            Vi arbetar med samma höga krav på språk, bemötande, diskretion och
            kontinuitet som i all vår omsorg.
          </p>
        </div>
      </section>

      <section className="two-services section">
        <article>
          <p className="eyebrow">Ledsagning</p>
          <h2>Tryggt stöd när du vill komma ut.</h2>
          <p>
            För dig som behöver stöd för att delta i aktiviteter och vardagsliv.
            Det kan handla om promenader, träning, cafébesök, att träffa vänner,
            uträtta ärenden eller ta del av kultur.
          </p>
          <ul><li>En person du lär känna</li><li>Stöd anpassat efter aktiviteten</li><li>Trygghet före, under och efter</li></ul>
        </article>
        <article>
          <p className="eyebrow">Avlösning</p>
          <h2>Trygghet hemma när en närstående är borta.</h2>
          <p>
            Vi tar över omsorgen i hemmet under en överenskommen tid så att en
            närstående kan vila, göra egna aktiviteter eller sköta andra delar
            av livet med tryggheten att du har det bra.
          </p>
          <ul><li>Omsorg i den egna bostaden</li><li>Planering tillsammans med familjen</li><li>Kontinuitet och lugn</li></ul>
        </article>
      </section>

      <section className="service-process section">
        <div className="service-section-title">
          <p className="eyebrow">Så kommer du igång</p>
          <h2>Från första samtal till rätt person.</h2>
        </div>
        <div className="service-steps numberless">
          <article><h3><a href="/intresseanmalan">Kontakta oss</a></h3><p>Ring eller mejla och berätta vilket stöd du eller en närstående behöver.</p></article>
          <article><h3>Planera tillsammans</h3><p>Vi kommer överens om innehåll, tider och ett upplägg som passar vardagen.</p></article>
          <article><h3>Personlig matchning</h3><p>Vi lär känna dig och matchar dig med rätt medarbetare.</p></article>
        </div>
      </section>

      <section className="service-cta">
        <p className="eyebrow light">Boka ett första samtal direkt</p>
        <h2>Har du frågor om<br /><em>ledsagning eller avlösning?</em></h2>
        <div><a className="button button-light" href="tel:+46852512942">Ring 08-525 129 42</a><a className="button button-ghost" href="mailto:kontakt@traditionvardomsorg.com">Skicka e-post</a></div>
      </section>

      <SiteFooter />
    </main>
  );
}
