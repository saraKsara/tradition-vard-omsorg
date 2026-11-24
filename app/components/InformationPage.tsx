import type { ReactNode } from "react";
import { SiteHeader } from "./SiteHeader";
import { SiteFooter } from "./SiteFooter";

export function InformationPage({ title, eyebrow, lead, children, parent }: { title: string; eyebrow: string; lead: string; children: ReactNode; parent?: { title: string; href: string } }) {
  return (
    <main className="information-page" id="top">
      <SiteHeader />
      <section className="information-masthead">
        <nav className="breadcrumb" aria-label="Brödsmulor"><a href="/">Hem</a><span>/</span>{parent ? <><a href={parent.href}>{parent.title}</a><span>/</span></> : null}<span>{title}</span></nav>
        <p className="eyebrow light">{eyebrow}</p>
        <h1>{title}</h1>
        <p className="service-lead">{lead}</p>
      </section>
      <div className="information-body">{children}</div>
      <SiteFooter />
    </main>
  );
}
