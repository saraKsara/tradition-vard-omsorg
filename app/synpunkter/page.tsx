import type { Metadata } from "next";
import { InformationPage } from "../components/InformationPage";

export const metadata: Metadata = { title: "Synpunkter och klagomål | Tradition vård & omsorg", description: "Så kontaktar du Tradition med synpunkter och klagomål om omsorgen. Ansvarig är verksamhetschef Johanna Bondesson." };

export default function FeedbackPage() {
  return <InformationPage title="Vi vill höra vad du tycker." eyebrow="Synpunkter och klagomål" lead="Berätta när något fungerar bra eller när något behöver bli bättre. Både du som får omsorg och du som är närstående är välkommen att höra av dig.">
    <section><h2>Så lämnar du en synpunkt</h2><p>Du kan prata med din fasta omsorgskontakt eller vända dig direkt till verksamhetschef Johanna Bondesson via telefon, e-post eller brev.</p><p><a href="tel:+46852512942">08-525 129 42</a><br /><a href="mailto:kontakt@traditionvardomsorg.com?subject=Synpunkt%20till%20verksamhetschefen">kontakt@traditionvardomsorg.com</a></p><p>Tradition vård &amp; omsorg AB<br />Till verksamhetschefen<br />Tegeluddsvägen 76<br />115 28 Stockholm</p></section>
    <section><h2>Vad behöver vi veta?</h2><p>Beskriv vad som har hänt, ungefär när det hände och hur du önskar att vi återkommer. Du behöver inte lämna fler personuppgifter än vad som behövs för att vi ska kunna förstå och hantera frågan.</p><p>Undvik att skicka personnummer, diagnoser eller andra känsliga uppgifter i vanlig e-post. Ring oss om du behöver berätta om personliga förhållanden. Du kan också lämna synpunkter utan att ange ditt namn, men då kan vi inte återkoppla direkt till dig.</p></section>
    <section><h2>Vad händer sedan?</h2><p>Verksamhetschefen ansvarar för att synpunkten tas om hand, att det som har hänt följs upp och att behov av åtgärder bedöms. När du lämnar kontaktuppgifter återkommer vi till dig om hur frågan hanteras. Om vi behöver mer information kontaktar vi dig.</p><p>Om du inte är nöjd med återkopplingen ber vi dig kontakta Johanna igen och beskriva vad du anser fortfarande behöver lösas.</p></section>
    <section><h2>Om det är brådskande</h2><p>Ring oss om frågan behöver hanteras snabbt. E-post och intresseformuläret är inte larmkanaler. Vid akut fara för liv eller hälsa, ring 112.</p></section>
  </InformationPage>;
}
