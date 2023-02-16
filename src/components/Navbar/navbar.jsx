import Img from "../img/sumka.png"

export function Navbar() {
  return (
    <main>
      <section className="navbar__main">
        <ul className=" navbar__list">
          <li className="navbar__item">
            <h3 className="navbar__sub-title">Free</h3>
            <h2 className="navbar__title">$0</h2>
            <p className="navbar__text">Free forever</p>
            <p className="navbar__text">Up to 2 users</p>
            <p className="navbar__text">Github</p>
            <button className="Navbar__btn">Get Started</button>
          </li>
          <li className="navbar__item">
            <h3 className="navbar__sub-title">Lite</h3>
            <h2 className="navbar__title">$199</h2>
            <p className="navbar__text">Teams</p>
            <p className="navbar__text">Up to 8 users</p>
            <p className="navbar__text">Github</p>
            <button className="Navbar__btn">Buy Now</button>
          </li>
          <li className="navbar__item">
            <h3 className="navbar__sub-title">Pro</h3>
            <h2 className="navbar__title">$399</h2>
            <p className="navbar__text">teams</p>
            <p className="navbar__text">Unlimited users</p>
            <p className="navbar__text">Github</p>
            <button className="Navbar__btn">Buy Now</button>
          </li>
          <li className="navbar__item2">
            <h3 className="navbar__sub-title">Enterprise</h3>
           <img className="img" src={Img} alt="mjj"/>
            <p className="navbar__text">Teams</p>
            <p className="navbar__text">Unlimited users</p>
            <p className="navbar__text">Github</p>
            <button className="Navbar__btn">Contact us</button>
          </li>
        </ul>
      </section>
    </main>
  );
}
