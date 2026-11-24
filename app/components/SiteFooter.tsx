export function SiteFooter({ topHref = "#top" }: { topHref?: string }) {
  return (
    <footer>
      <div className="footer-brand">
        <span>TRADITION</span>
        <small>VÅRD & OMSORG</small>
      </div>
      <div>
        <h3>Besöksadress</h3>
        <p>Tegeluddsvägen 76<br />115 28 Stockholm</p>
      </div>
      <div>
        <h3>Kontakt</h3>
        <p><a href="tel:+46852512942">08-525 129 42</a><br /><a href="mailto:kontakt@traditionvardomsorg.com">kontakt@traditionvardomsorg.com</a></p>
      </div>
      <div className="footer-bottom">
        <div className="footer-company"><span>© 2026 Tradition vård &amp; omsorg AB</span><span>Org.nr 559538-4040</span></div>
        <nav className="footer-links" aria-label="Företagsinformation"><a href="/trygghet-och-tillstand">Trygghet &amp; tillstånd</a><a href="/priser-och-bokning">Priser &amp; bokning</a><a href="/synpunkter">Synpunkter &amp; klagomål</a><a href="/integritet">Integritetspolicy</a></nav>
        <a href={topHref}>Till toppen</a>
      </div>
    </footer>
  );
}
