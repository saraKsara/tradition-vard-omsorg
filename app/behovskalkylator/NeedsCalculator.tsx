"use client";

import { useMemo, useState } from "react";
import { SiteFooter } from "../components/SiteFooter";
import { SiteHeader } from "../components/SiteHeader";

const HOME_PRICE = 599;
const SERVICE_PRICE_EX_VAT = 479.2;
const SERVICE_VAT = 0.25;
const RUT_RATE = 0.5;
const ANNUAL_RUT_ROT_CAP = 75_000;
const WEEKS_PER_MONTH = 4.33;
const WEEKS_PER_YEAR = 52;

const moneyFormatter = new Intl.NumberFormat("sv-SE", { maximumFractionDigits: 0 });
const hoursFormatter = new Intl.NumberFormat("sv-SE", {
  minimumFractionDigits: 1,
  maximumFractionDigits: 1,
});

const money = (value: number) => `${moneyFormatter.format(Math.round(Math.max(0, value)))} kr`;
const parsePositive = (value: string | number) => {
  const parsed = Number(String(value || "0").replace(",", "."));
  return Number.isFinite(parsed) ? Math.max(0, parsed) : 0;
};
const normalizeHours = (value: number) => Math.round(Math.max(0, value) * 2) / 2;

type StepperProps = {
  id: string;
  label: string;
  value: number;
  onChange: (value: number) => void;
};

function HoursStepper({ id, label, value, onChange }: StepperProps) {
  return (
    <div className="calc-hours">
      <div className="calc-stepper" aria-label={`${label} per vecka`}>
        <button type="button" onClick={() => onChange(normalizeHours(value - 0.5))} aria-label={`Minska ${label.toLowerCase()}`}>−</button>
        <label htmlFor={id}>
          <span>Tim/vecka</span>
          <input
            id={id}
            type="number"
            min="0"
            step="0.5"
            inputMode="decimal"
            value={value}
            onChange={(event) => onChange(parsePositive(event.target.value))}
            onBlur={() => onChange(normalizeHours(value))}
          />
        </label>
        <button type="button" onClick={() => onChange(normalizeHours(value + 0.5))} aria-label={`Öka ${label.toLowerCase()}`}>+</button>
      </div>
      <output htmlFor={id}>{hoursFormatter.format(value)} timmar/vecka</output>
    </div>
  );
}

type FieldProps = {
  id: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
  helper?: string;
  placeholder?: string;
  max?: number;
  step?: number;
};

function NumberField({ id, label, value, onChange, helper, placeholder, max, step = 500 }: FieldProps) {
  return (
    <label className="calc-field" htmlFor={id}>
      <span>{label}</span>
      <div className="calc-input-wrap">
        <input
          id={id}
          type="number"
          min="0"
          max={max}
          step={step}
          inputMode="numeric"
          value={value}
          placeholder={placeholder}
          onChange={(event) => onChange(event.target.value)}
          aria-describedby={helper ? `${id}-helper` : undefined}
        />
        <i>kr</i>
      </div>
      {helper && <small id={`${id}-helper`}>{helper}</small>}
    </label>
  );
}

export function NeedsCalculator() {
  const [homeHours, setHomeHours] = useState(0);
  const [serviceHours, setServiceHours] = useState(0);
  const [income, setIncome] = useState("");
  const [usedRut, setUsedRut] = useState("0");
  const [verifiedSpace, setVerifiedSpace] = useState("");
  const [hasPartner, setHasPartner] = useState(false);
  const [partnerIncome, setPartnerIncome] = useState("");
  const [partnerUsed, setPartnerUsed] = useState("0");
  const [partnerVerified, setPartnerVerified] = useState("");

  const calculation = useMemo(() => {
    const statutoryRemaining = (used: string) =>
      Math.max(0, ANNUAL_RUT_ROT_CAP - Math.min(ANNUAL_RUT_ROT_CAP, parsePositive(used)));

    const effectiveSpace = (used: string, verified: string) => {
      const statutory = statutoryRemaining(used);
      if (verified.trim() === "") return { space: statutory, verified: false };
      return { space: Math.min(statutory, parsePositive(verified)), verified: true };
    };

    const homeGrossMonth = homeHours * WEEKS_PER_MONTH * HOME_PRICE;
    const requestedRutMonth = homeGrossMonth * RUT_RATE;
    const requestedRutYear = homeHours * WEEKS_PER_YEAR * HOME_PRICE * RUT_RATE;

    const mainPerson = effectiveSpace(usedRut, verifiedSpace);
    let combinedSpace = mainPerson.space;
    let anyVerified = mainPerson.verified;

    if (hasPartner) {
      const partner = effectiveSpace(partnerUsed, partnerVerified);
      combinedSpace += partner.space;
      anyVerified = anyVerified || partner.verified;
    }

    const allowableRutYear = Math.min(requestedRutYear, combinedSpace);
    const monthlyRutUsed = Math.min(requestedRutMonth, allowableRutYear / 12);
    const homeCustomerMonth = homeGrossMonth - monthlyRutUsed;
    const serviceMonth = serviceHours * WEEKS_PER_MONTH * SERVICE_PRICE_EX_VAT * (1 + SERVICE_VAT);
    const monthlyTotal = homeCustomerMonth + serviceMonth;
    const noRutMonthly = homeGrossMonth + serviceMonth;
    const remainingAfterYear = Math.max(0, combinedSpace - allowableRutYear);

    let statusTone = "ok";
    let statusText = "Skriv in timmar per vecka för privat hemtjänst eller service.";

    if (homeHours === 0 && serviceHours === 0) {
      statusText = "Skriv in timmar per vecka för privat hemtjänst eller service.";
    } else if (homeHours === 0) {
      statusText = "Ingen RUT-berättigad hemtjänst är vald. Privat service visas utan RUT.";
    } else if (combinedSpace <= 0) {
      statusTone = "bad";
      statusText = "Det finns inget angivet RUT-utrymme kvar. Kostnaden visas därför utan RUT.";
    } else if (requestedRutYear <= combinedSpace) {
      statusTone = anyVerified ? "ok" : "warn";
      statusText = anyVerified
        ? "Det verifierade eller angivna RUT-utrymmet räcker för den valda omfattningen under hela året."
        : "Årsgränsen räcker för den valda omfattningen, men exakt skatteutrymme är inte verifierat. Kontrollera hos Skatteverket.";
    } else {
      statusTone = "warn";
      const months = combinedSpace / Math.max(requestedRutMonth, 1);
      const wholeMonths = Math.floor(months);
      const days = Math.round((months - wholeMonths) * 30.4);
      statusText = `RUT-utrymmet räcker ungefär ${wholeMonths} månader${days ? ` och ${days} dagar` : ""} med den valda omfattningen. Därefter ökar kundens kostnad.`;
    }

    const summaryText = homeHours > 0
      ? "Efter preliminärt RUT där det är tillämpligt."
      : serviceHours > 0
        ? "Privat service visas utan RUT."
        : "Skriv timmar per vecka för att se kostnaden.";

    return {
      allowableRutYear,
      combinedSpace,
      homeCustomerMonth,
      monthlyRutUsed,
      monthlyTotal,
      noRutMonthly,
      remainingAfterYear,
      serviceMonth,
      statusText,
      statusTone,
      summaryText,
      totalWeekly: homeHours + serviceHours,
    };
  }, [homeHours, serviceHours, usedRut, verifiedSpace, hasPartner, partnerUsed, partnerVerified]);

  return (
    <main className="calculator-page" id="top">
      <SiteHeader />

      <section className="calculator-masthead">
        <p className="eyebrow light">Behovskalkylator</p>
        <h1>Beräkna din<br /><em>omsorgs&shy;kostnad.</em></h1>
        <p>
          Välj tjänster, ange timmar per vecka och fyll i ditt RUT-utrymme.
          Kalkylen uppdateras direkt och ger en vägledande månadskostnad.
        </p>
        <p className="calculator-masthead-service-copy">
          Vi erbjuder personlig omsorg för dig som önskar ett tryggt, diskret
          och högkvalitativt stöd i vardagen. Vår privata omsorg riktar sig till
          äldre som själva väljer att investera i extra omsorg, helt på sina
          egna villkor.
        </p>
      </section>

      <div className="calculator-layout">
        <div className="calculator-form">
          <section className="calc-card">
            <div className="calc-section-heading">
              <div>
                <p className="calc-kicker">Tjänster</p>
                <h2>Välj tjänst och omfattning.</h2>
                <p>Timmarna kan skrivas in direkt eller justeras i steg om 0,5 timme.</p>
              </div>
            </div>

            <div className="calc-service-list">
              <article className={homeHours > 0 ? "is-active" : ""}>
                <div>
                  <h3>Privat hemtjänst</h3>
                  <strong>cirka 300 kr/timme med preliminärt RUT*</strong>
                  <p>Personlig omsorg och hemtjänstinsatser i hemmet.</p>
                </div>
                <HoursStepper id="homeHours" label="Privat hemtjänst" value={homeHours} onChange={setHomeHours} />
              </article>

              <article className={serviceHours > 0 ? "is-active" : ""}>
                <div>
                  <h3>Privat service</h3>
                  <strong>Beräknas utan RUT</strong>
                  <p>Hushållsnära service, planering och praktiskt stöd. Här räknas hela kostnaden utan avdrag; vissa arbetsmoment kan ge RUT efter bedömning.</p>
                </div>
                <HoursStepper id="serviceHours" label="Privat service" value={serviceHours} onChange={setServiceHours} />
              </article>
            </div>
          </section>

          <section className="calc-card">
            <div className="calc-section-heading">
              <div>
                <p className="calc-kicker">RUT-utrymme</p>
                <h2>Fyll i årets utrymme.</h2>
                <p>Årsinkomst är frivilligt. Exakt RUT-utrymme behöver kontrolleras hos Skatteverket.</p>
              </div>
            </div>

            <div className="calc-fields">
              <NumberField id="income" label="Din årsinkomst före skatt" value={income} onChange={setIncome} placeholder="t.ex. 600 000" step={1000} helper="Frivilligt. Sparas inte av kalkylatorn." />
              <NumberField id="usedRut" label="ROT/RUT redan använt i år" value={usedRut} onChange={setUsedRut} max={75_000} helper="ROT och RUT är tillsammans högst 75 000 kr per person och år." />
              <NumberField id="verifiedSpace" label="Verifierat återstående RUT-/skatteutrymme" value={verifiedSpace} onChange={setVerifiedSpace} max={75_000} placeholder="valfritt" helper="Fyll i beloppet om du har kontrollerat ditt utrymme." />
            </div>

            <label className="calc-toggle">
              <input type="checkbox" checked={hasPartner} onChange={(event) => setHasPartner(event.target.checked)} />
              <span aria-hidden="true" />
              <div><strong>Lägg till partners RUT-utrymme</strong><small>Partnern behöver uppfylla villkoren för RUT och dela hushållet.</small></div>
            </label>

            {hasPartner && (
              <div className="calc-partner">
                <p className="calc-kicker">Partners uppgifter</p>
                <div className="calc-fields">
                  <NumberField id="partnerIncome" label="Partners årsinkomst före skatt" value={partnerIncome} onChange={setPartnerIncome} placeholder="t.ex. 600 000" step={1000} helper="Frivilligt. Sparas inte av kalkylatorn." />
                  <NumberField id="partnerUsed" label="Partners ROT/RUT redan använt" value={partnerUsed} onChange={setPartnerUsed} max={75_000} />
                  <NumberField id="partnerVerified" label="Partners verifierade återstående utrymme" value={partnerVerified} onChange={setPartnerVerified} max={75_000} placeholder="valfritt" />
                </div>
              </div>
            )}

            <p className="calc-note">
              Kalkylatorn kan kontrollera årsgränsen och fördela RUT mellan två personer,
              men inkomsten ensam ger inte ett slutligt besked.
            </p>
          </section>
        </div>

        <aside className="calc-summary" aria-live="polite">
          <p className="calc-kicker light">Din uppskattade kostnad</p>
          <strong className="calc-total">{money(calculation.monthlyTotal)}<small>/månad</small></strong>
          <p className="calc-summary-text">{calculation.summaryText}</p>

          <dl className="calc-summary-grid">
            <div><dt>Timmar per vecka</dt><dd>{hoursFormatter.format(calculation.totalWeekly)}</dd></div>
            <div><dt>RUT per år</dt><dd>{money(calculation.allowableRutYear)}</dd></div>
            <div><dt>RUT kvar efter året</dt><dd>{money(calculation.remainingAfterYear)}</dd></div>
          </dl>

          <div className={`calc-status ${calculation.statusTone}`}>{calculation.statusText}</div>

          <details className="calc-details">
            <summary>Visa beräkningen <span>+</span></summary>
            <dl>
              <div><dt>Privat hemtjänst per månad efter preliminärt RUT</dt><dd>{money(calculation.homeCustomerMonth)}</dd></div>
              <div><dt>Privat service per månad inkl. moms</dt><dd>{money(calculation.serviceMonth)}</dd></div>
              <div><dt>Preliminärt RUT per månad</dt><dd>{money(calculation.monthlyRutUsed)}</dd></div>
              <div><dt>Beräknat gemensamt RUT-utrymme</dt><dd>{money(calculation.combinedSpace)}</dd></div>
              <div><dt>Kostnad när RUT-utrymmet är förbrukat</dt><dd>{money(calculation.noRutMonthly)}/mån</dd></div>
            </dl>
          </details>

          <div className="calc-actions">
            <a className="button button-light" href="/intresseanmalan">Jag vill bli kontaktad</a>
            <button className="calc-print" type="button" onClick={() => window.print()}>Skriv ut beräkningen</button>
          </div>

          <p className="calc-privacy"><strong>Integritet:</strong> Alla beräkningar görs lokalt i din webbläsare. Uppgifterna skickas inte vidare och sparas inte.</p>
        </aside>
      </div>

      <section className="calc-disclaimer">
        <p>
          * Cirka 300 kr/timme förutsätter preliminärt RUT-avdrag.
          Slutligt RUT beror på ditt skatteutrymme och Skatteverkets beslut. Endast godkänd arbetskostnad kan ge avdrag. Grundpris före RUT är 599 kr/timme för privat hemtjänst. Privat service beräknas till 599 kr/timme inklusive moms utan avdrag. <a href="/priser-och-bokning">Läs om priser och bokning</a>.
        </p>
        <a href="https://www.skatteverket.se/privat/fastigheterochbostad/rotarbeteochrutarbete/safungerarrutavdraget.4.d5e04db14b6fef2c866097.html" target="_blank" rel="noreferrer">Läs om RUT hos Skatteverket</a>
      </section>

      <SiteFooter topHref="#top" />
    </main>
  );
}
