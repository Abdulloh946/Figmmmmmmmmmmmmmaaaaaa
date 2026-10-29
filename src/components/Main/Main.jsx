
import "./Main.css";
import img from "../../assets/Ikktasibirda.png";
import img2 from "../../assets/Ikktasibirda2.png";

function Main() {
  return (
    <main className="asosiy">
      <section className="bolim birinchi-bolim">
        <div className="rasmlar">
          <img
            className="birlashtirilgan-rasm"
            src={img}
            alt="Subscription index"
          />
        </div>

        <div className="matn">
          <h2>Subscription index</h2>
          <p>
            A daily dataset to keep you up to date on
            subscription market trends and what's happening
            in your vertical.
          </p>
          <a href="#features">Learn more</a>
        </div>
      </section>

      <section className="bolim ikkinchi-bolim" id="features">
        <div className="matn">
          <h2>In-depth metrics</h2>
          <p>
            Accurate, real-time reporting at your fingertips.
            Getting data has never been easier.
          </p>
          <a href="#pricing">Learn more</a>
        </div>

        <div className="rasmlar">
          <img
            className="birlashtirilgan-rasm"
            src={img2}
            alt="In-depth metrics"
          />
        </div>
      </section>
    </main>
  );
}

export default Main;
