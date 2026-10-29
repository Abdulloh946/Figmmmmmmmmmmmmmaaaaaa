
import "./Header.css";
import img from "../../assets/kattakon.png";

function Header() {
  return (
    <div className="sayt">
      <header className="header">
        <a href="#" className="logo">
          <span className="logo-belgi">✣</span>
          logoipsum<span className="logo-nuqta">•</span>
        </a>

        <nav className="nav">
          <a className="faol" href="#home">Home</a>
          <a href="#features">Features</a>
          <a href="#pricing">Pricing</a>
          <a href="#blog">Blog</a>
        </nav>

        <a className="header-btn" href="#get-started">
          Get Started
        </a>
      </header>

      <main id="home" className="hero">
        <section className="hero-matn">
          <h1>
            Grow your
            <br />
            subscription
            <br />
            business
          </h1>

          <p>
            Outcome-centered products that reduce churn,
            optimize pricing, and grow your subscription
            business end-to-end.
          </p>

          <div className="hero-tugmalar">
            <a href="#get-started" className="asosiy-btn">
              Get Started
            </a>

            <a
              href="#features"
              className="past-btn"
              aria-label="Pastga tushish"
            >
              <span>↓</span>
            </a>
          </div>
        </section>

        <section className="hero-rasm">
          <img
            src={img}
            alt="3D skeytbord uchayotgan sportchi"
          />
        </section>
      </main>

      <section className="hamkorlar" id="features">
        <div className="hamkor hamkor-1">
          <span className="hamkor-belgi">◉</span>
          <span>logoipsum</span>
        </div>

        <div className="hamkor hamkor-2">
          <span className="hamkor-belgi">▥</span>
          <span>LOGOIPSUM</span>
        </div>

        <div className="hamkor hamkor-3">
          <span className="hamkor-belgi">●</span>
          <span>logoipsum</span>
        </div>

        <div className="hamkor hamkor-4">
          <span className="hamkor-belgi">≋</span>
          <span>Logoipsum</span>
        </div>

        <div className="hamkor hamkor-5">
          <span className="hamkor-belgi">◧</span>
          <span>logoipsum</span>
        </div>
      </section>
    </div>
  );
}

export default Header;
