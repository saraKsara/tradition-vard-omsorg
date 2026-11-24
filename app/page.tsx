import { SiteFooter } from "./components/SiteFooter";
import { SiteHeader } from "./components/SiteHeader";

const services = [
  {
    title: "Personlig omsorg i hemmet",
    href: "/personlig-hemtjanst",
    text: "Privat omsorg och service som planeras runt dig, dina vanor och hur du vill leva ditt liv. Du får en fast omsorgskontakt och möter så få olika personer som möjligt.",
    list: ["Personlig omvårdnad", "Måltider och inköp", "Promenader och socialt stöd"],
  },
  {
    title: "Ledsagning & avlösning",
    href: "/ledsagning-och-avlosning",
    text: "Tryggt sällskap till aktiviteter, ärenden och kulturupplevelser – eller avlastning i hemmet när en närstående behöver tid för annat.",
    list: ["Ledsagning utanför hemmet", "Avlösning för anhöriga", "Individuell planering"],
  },
  {
    title: "Hemtjänst med möjlighet till RUT",
    href: "/privatfinansierad-hemtjanst",
    text: "Privata, flexibla tjänster som bokas direkt. RUT-avdrag kan användas för de insatser som uppfyller Skatteverkets villkor.",
    list: ["Ärenden och inköp", "Sällskap och aktiviteter", "Hushållsnära tjänster med RUT"],
  },
];

const faqs = [
  {
    question: "Vem kan få hjälp av Tradition?",
    answer:
      "Vi hjälper äldre och personer som behöver stöd i vardagen. Vår privatfinansierade hemtjänst och våra hushållsnära tjänster bokas direkt av dig eller en närstående.",
  },
  {
    question: "Får jag en fast kontaktperson?",
    answer:
      "Ja. En fast omsorgskontakt och ett litet, noga matchat team ger bättre kontinuitet, tydligare kommunikation och större trygghet.",
  },
  {
    question: "Talar all personal svenska?",
    answer:
      "Ja. Alla våra medarbetare talar och förstår svenska obehindrat. Det gör kommunikationen trygg och tydlig för både dig och dina närstående.",
  },
  {
    question: "Hur bokar jag hemtjänst?",
    answer:
      "Ring eller mejla oss så börjar vi med ett förutsättningslöst samtal. Därefter planerar vi stödet tillsammans och matchar dig med rätt medarbetare.",
  },
  {
    question: "Vilka områden arbetar ni i?",
    answer:
      <>Vi utgår från Stockholms norra innerstad, bland annat Östermalm, Gärdet, Vasastan, Norrmalm, Hagastaden, Hjorthagen och Norra Djurgårdsstaden. <a href="/intresseanmalan">Kontakta oss</a> även om du bor i en annan del av Stockholm.</>,
  },
  {
    question: "Har ni tillstånd från IVO?",
    answer: <>Ja. Tradition vård &amp; omsorg AB har tillstånd från IVO att bedriva hemtjänst. <a href="/trygghet-och-tillstand">Läs om tillståndet och vår verksamhetschef Johanna Bondesson</a>.</>,
  },
  {
    question: "Behöver jag ett biståndsbeslut?",
    answer: "Nej. Den omsorg vi erbjuder här är privatfinansierad och bokas direkt hos oss. Du behöver inget kommunalt biståndsbeslut. IVO-tillstånd och kommunens godkännande av utförare är två olika saker.",
  },
  {
    question: "Vad kostar hjälpen och vilka tider kan jag boka?",
    answer: <>Privat hemtjänst beräknas till cirka 300 kr per timme efter preliminärt RUT. Pris, omfattning och möjliga tider går vi igenom inför bokning. <a href="/priser-och-bokning">Läs om priser, RUT och bokning</a>.</>,
  },
  {
    question: "Hur lämnar jag synpunkter eller klagomål?",
    answer: <>Prata med din fasta omsorgskontakt eller kontakta verksamhetschef Johanna Bondesson via vår telefon eller e-post. <a href="/synpunkter">Här hittar du kontaktvägar och information om återkoppling</a>.</>,
  },
];

export default function Home() {
  return (
    <main>
      <SiteHeader />

      <section className="intro intro-first section" id="introduktion">
        <div className="intro-mark" aria-hidden="true">T</div>
        <div className="intro-copy">
          <p className="eyebrow">Välkommen till Tradition</p>
        </div>
        <div className="intro-detail">
          <p>
            God omsorg börjar med att bli sedd. Därför lär vi känna människan
            bakom behovet – livshistorien, rutinerna och allt det lilla som gör
            vardagen personlig.
          </p>
          <p>
            Du möter svensktalande, noggrant utvalda medarbetare som genomgått
            bakgrundskontroll och arbetar med värme, professionalism och största
            respekt för din integritet.
          </p>
          <a className="text-link" href="#om-oss">Vår syn på omsorg</a>
        </div>
      </section>

      <aside className="interest-strip" aria-label="Intresseanmälan">
        <a href="/intresseanmalan">
          <span>Anmäl intresse för vår omsorg redan idag!</span>
        </a>
      </aside>

      <section className="hero" id="top">
        <img
          className="hero-image"
          src="/images/ostermalm.webp"
          alt="En äldre kvinna i rullstol tillsammans med sin omsorgskontakt i ett hem på Östermalm"
        />
        <div className="hero-shade" />
        <div className="hero-content">
          <p className="eyebrow light">EXKLUSIV OMSORG I STOCKHOLM</p>
          <h1>Personligt, tryggt och diskret stöd i vardagen.</h1>
          <p className="hero-subtitle">
            Utformat kring ditt liv, dina vanor och dina önskemål.
          </p>
          <div className="hero-actions">
            <a className="button button-light" href="tel:+46852512942">Ring 08-525 129 42</a>
            <a className="button button-light" href="/intresseanmalan">Skriv meddelande</a>
          </div>
        </div>
        <a className="scroll-cue" href="#erbjudande" aria-label="Fortsätt till vårt erbjudande">
          <span>Upptäck vår omsorg</span><i />
        </a>
      </section>

      <section className="services section" id="erbjudande">
        <div className="section-heading">
          <p className="eyebrow">Vårt erbjudande</p>
          <h2>Omsorg på<br /><em>dina villkor.</em></h2>
          <p>Privatfinansierad hemtjänst och omsorg som bokas direkt – med möjlighet till RUT för godkända tjänster.</p>
        </div>

        <div className="service-grid">
          {services.map((service) => (
            <a className="service-card" href={service.href} key={service.title}>
              <h3>{service.title}</h3>
              <p>{service.text}</p>
              <ul>
                {service.list.map((item) => <li key={item}>{item}</li>)}
              </ul>
              <span className="service-link">Läs mer om tjänsten</span>
            </a>
          ))}
        </div>
      </section>

      <section className="calculator-teaser section">
        <div className="calculator-teaser-copy">
          <p className="eyebrow light">Behovskalkylator</p>
          <h2>Räkna på privat omsorg<br /><em>i lugn och ro.</em></h2>
          <p>
            Välj tjänster och timmar per vecka för att få en vägledande
            månadskostnad. Du kan också se hur ditt RUT-utrymme påverkar
            kalkylen – inga uppgifter sparas.
          </p>
          <a className="button button-light" href="/behovskalkylator">Gå till Kalkylatorn</a>
        </div>
        <div className="calculator-teaser-facts">
          <div><strong>Direkt</strong><span>resultat</span></div>
          <div><strong>Lokalt</strong><span>i din webbläsare</span></div>
          <div><strong>Privat</strong><span>inga uppgifter sparas</span></div>
        </div>
      </section>

      <section className="contact" id="kontakt">
        <div className="contact-inner">
          <p className="eyebrow light">Låt oss börja med ett samtal</p>
          <h2>Hur kan vi göra din<br /><em>vardag tryggare?</em></h2>
          <p>
            Berätta vad du eller en närstående behöver. Du får prata direkt med
            oss, utan förpliktelser.
          </p>
          <div className="contact-actions">
            <a href="tel:+46852512942"><small>Ring oss</small><strong>08-525 129 42</strong></a>
            <a href="mailto:kontakt@traditionvardomsorg.com"><small>Skriv till oss</small><strong>kontakt@traditionvardomsorg.com</strong></a>
          </div>
        </div>
      </section>

      <section className="process section">
        <div className="section-heading compact">
          <p className="eyebrow">Så kommer du igång</p>
          <h2>En trygg början.</h2>
        </div>
        <div className="steps">
          <article><span>01</span><h3>Första samtalet</h3><p>Vi lyssnar på din situation, svarar på frågor och hjälper dig att se vilken lösning som passar.</p></article>
          <article><span>02</span><h3>Personlig plan</h3><p>Tillsammans planerar vi stödet utifrån behov, vanor, önskemål och praktiska förutsättningar.</p></article>
          <article><span>03</span><h3>Rätt person</h3><p>Du får en fast kontakt och ett litet team som är noga utvalt för just dig.</p></article>
        </div>
      </section>

      <section className="faq section" id="fragor">
        <div className="faq-heading">
          <p className="eyebrow">Bra att veta</p>
          <h2>Vanliga frågor.</h2>
          <p>Hittar du inte ditt svar? Ring oss – vi hjälper dig gärna.</p>
        </div>
        <div className="faq-list">
          {faqs.map((faq, index) => (
            <details key={faq.question} open={index === 0}>
              <summary><span>{faq.question}</span><i /></summary>
              <p>{faq.answer}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="founder section" id="om-oss">
        <div className="founder-collage" aria-label="Sara Krantz, Tradition och Stockholm">
          <figure className="collage-logo-hero">
            <img src="/images/tradition-logo-crop.png" alt="Tradition vård och omsorg, etablerat 2026" />
          </figure>
          <figure className="collage-stockholm-tall">
            <img src="/images/stockholm-waterfront.webp" alt="Stockholms historiska siluett vid vattnet" />
          </figure>
          <figure className="collage-founder-small">
            <img src="/images/sara-krantz-greige.webp" alt="Sara Krantz, grundare av Tradition vård och omsorg" />
          </figure>
          <figure className="collage-dose">
            <img src="/images/dosett.webp" alt="Dosett och rollator i en omsorgssituation i hemmet" />
          </figure>
          <figure className="collage-stockholm-wide">
            <img src="/images/stockholm-city-hall.webp" alt="Stockholms stadshus i kvällsljus" />
          </figure>
        </div>
        <div className="founder-copy">
          <p className="eyebrow">Därför startade vi Tradition</p>
          <h2>“Det var de små sakerna som gjorde den stora skillnaden.”</h2>
          <p>
            När min egen mamma behövde omsorg i hemmet förstod jag värdet av
            ett gemensamt språk och av att någon såg hela hennes historia –
            leverpastejen på smörgåsen, musiken från en svunnen tid och samtalen
            om det som varit.
          </p>
          <p>
            Där föddes Tradition: ur viljan att ge fler familjer samma trygghet
            och äldre en omsorg där personlighet, värdighet och valfrihet får ta plats.
          </p>
          <div className="signature">
            <strong>Sara Krantz</strong>
            <span>Grundare, Tradition vård & omsorg</span>
          </div>
        </div>
      </section>

      <section className="johanna-section section" id="mot-johanna" aria-labelledby="johanna-heading">
        <img className="johanna-portrait" src="/images/johanna-bondesson.webp" alt="Johanna Bondesson, verksamhetschef och föreståndare" width="1122" height="1402" loading="lazy" />
        <div className="johanna-copy">
          <p className="eyebrow">Möt vår verksamhetschef</p>
          <h2 id="johanna-heading">Johanna Bondesson</h2>
          <p className="information-role">Verksamhetschef och föreståndare</p>
          <p>Johanna är utbildad socionom och har mångårig erfarenhet både som vårdbiträde och som biståndshandläggare för äldre i flera kommuner. Hennes bakgrund förenar erfarenhet av den dagliga omsorgen med kunskap om äldres behov och vägar till stöd.</p>
          <p>Som verksamhetschef och föreståndare ansvarar Johanna för verksamheten och är din kontakt när du har frågor om omsorgens kvalitet och upplägg.</p>
          <a className="text-link" href="/trygghet-och-tillstand#johanna">Lär känna Johanna och hennes ansvar</a>
          <div className="johanna-contact"><a href="tel:+46852512942">08-525 129 42</a><a href="mailto:kontakt@traditionvardomsorg.com">kontakt@traditionvardomsorg.com</a></div>
          <p className="johanna-permit">Tradition har tillstånd från IVO att bedriva hemtjänst. <a href="/trygghet-och-tillstand">Läs om trygghet &amp; tillstånd</a>.</p>
        </div>
      </section>

      <section className="promise">
        <div className="promise-copy">
          <p className="eyebrow light">Vårt löfte</p>
          <blockquote>“Med mjuk hand. I varje möte.”</blockquote>
          <p>
            Vi matchar medarbetare och kund med omsorg – utifrån språk,
            personlighet, livshistoria och personliga önskemål.
          </p>
        </div>
        <div className="promise-facts" aria-label="Våra trygghetslöften">
          <div><strong>Fast</strong><span>omsorgskontakt</span></div>
          <div><strong>Små</strong><span>personliga team</span></div>
          <div><strong>100%</strong><span>svensktalande</span></div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
