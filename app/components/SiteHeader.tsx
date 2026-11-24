export function SiteHeader() {
  return (
    <header className="site-header">
      <a className="wordmark" href="/" aria-label="Tradition – startsida">
        <span>TRADITION</span>
        <small>VÅRD & OMSORG</small>
      </a>

      <nav className="desktop-nav" aria-label="Huvudmeny">
        <a href="/#erbjudande">Vårt erbjudande</a>
        <a href="/behovskalkylator">Behovskalkylator</a>
        <details className="about-menu">
          <summary>Om oss</summary>
          <div className="about-submenu">
            <a href="/#om-oss">Om Tradition</a>
            <a href="/#mot-johanna">Möt Johanna</a>
            <a href="/trygghet-och-tillstand">Trygghet &amp; tillstånd</a>
          </div>
        </details>
        <a href="/#fragor">Vanliga frågor</a>
        <a className="nav-cta" href="/intresseanmalan">Kontakta oss</a>
      </nav>

      <details className="mobile-menu">
        <summary aria-label="Öppna meny"><span />Meny</summary>
        <nav aria-label="Mobilmeny">
          <a href="/#erbjudande">Vårt erbjudande</a>
          <a href="/behovskalkylator">Behovskalkylator</a>
          <a href="/#om-oss">Om oss</a>
          <div className="mobile-about-submenu" aria-label="Under Om oss">
            <a href="/#mot-johanna">Möt Johanna</a>
            <a href="/trygghet-och-tillstand">Trygghet &amp; tillstånd</a>
          </div>
          <a href="/#fragor">Vanliga frågor</a>
          <a href="/intresseanmalan">Kontakta oss</a>
        </nav>
      </details>
    </header>
  );
}
