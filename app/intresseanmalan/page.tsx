import { SiteFooter } from "../components/SiteFooter";
import { SiteHeader } from "../components/SiteHeader";
import { InterestForm } from "./InterestForm";

export default function InterestPage() {
  return (
    <main className="interest-page">
      <SiteHeader />

      <section className="interest-masthead">
        <div>
          <p className="eyebrow light">Intresseanmälan</p>
          <h1>Vi hör gärna<br /><em>från dig.</em></h1>
          <p>
            Lämna dina kontaktuppgifter så kan vi börja med ett personligt,
            förutsättningslöst samtal om vilken omsorg som passar dig eller en närstående.
          </p>
        </div>

        <InterestForm />
      </section>

      <SiteFooter />
    </main>
  );
}
