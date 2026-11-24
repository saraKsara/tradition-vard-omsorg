import type { Metadata } from "next";
import { InformationPage } from "../components/InformationPage";

export const metadata: Metadata = { title: "Trygghet och tillstånd | Tradition vård & omsorg", description: "Läs om Traditions tillstånd från IVO, verksamhetschef Johanna Bondesson och vem som ansvarar för omsorgen." };

export default function TrustPage() {
  return <InformationPage parent={{ title: "Om oss", href: "/#om-oss" }} title="Trygghet och tillstånd." eyebrow="Ett tydligt ansvar" lead="Personlig omsorg ska också ha en tydlig avsändare. Här hittar du uppgifter om vårt tillstånd och vem som ansvarar för verksamheten.">
    <section className="information-profile" id="johanna"><img className="information-portrait" src="/images/johanna-bondesson.webp" alt="Johanna Bondesson, verksamhetschef och föreståndare på Tradition vård och omsorg" width="1122" height="1402" loading="lazy" /><div><h2>Johanna Bondesson</h2><p className="information-role">Verksamhetschef och föreståndare</p><p>Johanna är utbildad socionom och har mångårig erfarenhet både som vårdbiträde och som biståndshandläggare för äldre i flera kommuner. Hon har därmed erfarenhet av såväl det praktiska omsorgsarbetet som att utreda äldres behov av stöd.</p><p>Johanna ansvarar för verksamheten och är din kontakt när du har frågor om omsorgens kvalitet, upplägg eller vill lämna synpunkter. Du når henne via vår gemensamma telefon och e-post. Ange gärna att du vill komma i kontakt med Johanna.</p><p><a href="tel:+46852512942">08-525 129 42</a><br /><a href="mailto:kontakt@traditionvardomsorg.com">kontakt@traditionvardomsorg.com</a></p></div></section>
    <section><h2>Tillstånd från IVO</h2><p>Tradition vård &amp; omsorg AB har tillstånd från Inspektionen för vård och omsorg (IVO) att bedriva hemtjänst.</p>
      <dl className="information-facts"><div><dt>Tillståndshavare</dt><dd>Tradition vård &amp; omsorg AB</dd></div><div><dt>Organisationsnummer</dt><dd>559538-4040</dd></div><div><dt>Föreståndare</dt><dd>Johanna Bondesson</dd></div></dl>
      <p>Uppgifterna är hämtade ur IVO:s tillståndsbevis. <a href="mailto:kontakt@traditionvardomsorg.com">Kontakta oss</a> om du vill ta del av tillståndsbeviset.</p>
    </section>
    <section><h2>Vem tillståndet omfattar</h2><p>Tillståndets målgrupper är äldre och vuxna med fysiska behov, demenssjukdom eller psykisk funktionsnedsättning. Vi går tillsammans igenom vilket stöd som passar dina behov och ryms inom vår verksamhet.</p><p>IVO-tillståndet gäller hemtjänst enligt socialtjänstlagen. Det är inte ett godkännande som kommunal utförare. På den här webbplatsen erbjuder vi privatfinansierad omsorg som bokas direkt hos oss, utan kommunalt biståndsbeslut.</p></section>

    <section><h2>Omsorg som planeras tillsammans</h2><p>Du får en fast omsorgskontakt och ett litet, noggrant matchat team. Vi planerar stödet med dig utifrån behov, vanor och önskemål. Du bestämmer om och hur dina närstående ska vara delaktiga.</p><p>Våra medarbetare omfattas av tystnadsplikt. Information om dig ska hanteras med respekt för din integritet. Vid första planeringen går vi igenom praktiska frågor, till exempel tillträde till bostaden och hur du kontaktar oss vid förändringar.</p><p><a href="/synpunkter">Lämna synpunkter på omsorgen</a> eller läs om <a href="/priser-och-bokning">priser och bokning</a>.</p></section>
  </InformationPage>;
}
