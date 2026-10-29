
import "./Nav.css";
import img1 from "../../assets/carta.png";
import img2 from "../../assets/calculator.png";
import img3 from "../../assets/camera.png";

function Nav() {
  return (
    <nav className="narx-nav">
      <section className="xizmatlar">
        <div className="xizmat">
          <img src={img1} alt="Benchmarks" />
          <h3>Benchmarks</h3>
          <p>
            See how you stack up against comparable
            companies in similar stages.
          </p>
        </div>

        <div className="xizmat">
          <img src={img2} alt="Pricing Audit" />
          <h3>Pricing Audit</h3>
          <p>
            Benchmark the health of your monetization
            and pricing strategy.
          </p>
        </div>

        <div className="xizmat">
          <img src={img3} alt="Retention Audit" />
          <h3>Retention Audit</h3>
          <p>
            Audit where revenue leakage exists and
            where you can increase retention.
          </p>
        </div>
      </section>

      <section className="narx-bolim" id="pricing">
        <div className="narx-sarlavha">
          <h2>
            Get the right plan
            <br />
            for future product.
          </h2>

          <div className="tarif-tanlash">
            <button className="tanlangan">Yearly</button>
            <button>Monthly</button>
          </div>
        </div>

        <div className="tariflar">
          <div className="tarif">
            <p className="tarif-nomi">Starter</p>
            <h3 className="tarif-narxi">Free</h3>

            <div className="tarif-xususiyatlar">
              <p>1 Website</p>
              <p>5 GB Hosting</p>
              <p>Limited Support</p>
            </div>

            <button className="tarif-btn">Get Started</button>
          </div>

          <div className="tarif premium">
            <p className="tarif-nomi">Premium</p>
            <h3 className="tarif-narxi">
              $29<span>/month</span>
            </h3>

            <div className="tarif-xususiyatlar">
              <p>10 Website</p>
              <p>15 GB Hosting</p>
              <p>Premium Support</p>
            </div>

            <button className="tarif-btn">Get Started</button>
          </div>

          <div className="tarif">
            <p className="tarif-nomi">Enterprise</p>
            <h3 className="tarif-narxi">
              $49<span>/month</span>
            </h3>

            <div className="tarif-xususiyatlar">
              <p>Unlimited Website</p>
              <p>50 GB Hosting</p>
              <p>Premium Support</p>
            </div>

            <button className="tarif-btn">Get Started</button>
          </div>
        </div>
      </section>
    </nav>
  );
}

export default Nav;
