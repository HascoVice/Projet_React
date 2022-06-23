import Logo from "../assets/headerNav_img/Gomu_logo.png";
import Loupe from "../assets/headerNav_img/svgexport-1.svg";
import Panier from "../assets/headerNav_img/Voir mon panier.svg";
import { Form, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./headerNav.css";
import ModalConnexion from "../components/modal_connexion";
import "./modal_connexion.css";
import React from "react";
import classNames from "classnames";

class HeaderNav extends React.Component {
  state = {
    clicked: "",
    input: "",
  };

  constructor(props) {
    super(props);
    this.searchPrevent = this.searchPrevent.bind(this);
    this.searchBar = this.searchBar.bind(this);
  }

  handleClick = (name) => {
    this.setState({ clicked: name });
  };

  ////////
  searchPrevent(event) {
    event.preventDefault();
    this.props.func(this.state.input);
    console.log(this.state.input);
  }

  searchBar(event) {
    this.setState(() => {
      return {
        input: event.target.value,
      };
    });
  }
  /////////////
  render() {
    return (
      <div className="section__headerNav">
        <header className="header">
          <div className="header__logo">
            <figure className="logo__picture">
              <img src={Logo} alt="logo MANFRA" />
            </figure>
          </div>

          <h1>MANFRA</h1>

          <div className="header__nav">
            <div className="header__nav__link">
              <div className="header__nav__loggin">
                <ModalConnexion />

                <Link className="btn-primary btn-panier" to={"/Panier"}>
                  Mon panier
                </Link>
                <Link className="header__nav" to="/panier">
                  <img className="nav__panier" src={Panier} alt="mon panier" />
                </Link>
              </div>
              <div className="header__nav__icone">
                <form onSubmit={this.searchPrevent}>
                  <input
                    onChange={this.searchBar}
                    type="text"
                    className="form-control me-sm-2"
                    placeholder="Search"
                  />
                  <button type="submit">
                    <img
                      className="nav__loupe"
                      src={Loupe}
                      alt="recherhcer"
                    ></img>
                  </button>
                </form>

                {/* burger menu en min-width 830px */}
                <div className="nav__burger">
                  <span>☰</span>
                </div>
              </div>
              <nav className="nav__hidden">
                <ul className="nav__menuDeroulant">
                  <li>
                    <a href="#" className="menuDeroulant__link">
                      Accueil
                    </a>
                  </li>
                  <li>
                    <a href="#" className="menuDeroulant__link">
                      Boutique
                    </a>
                  </li>
                  <li>
                    <a href="#" className="menuDeroulant__link">
                      News
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </header>

        <Nav fill variant="pills" defaultActiveKey="/" className="nav" id="nav">
          <Nav.Item className="Nav-background"></Nav.Item>
          <Nav.Item id="Nav-Item">
            <Link
              id="Nav-Link"
              className={classNames({
                "nav-link": true,
                active: this.state.clicked === "home",
              })}
              onClick={(event) => {
                this.handleClick("home");
              }}
              to="/"
            >
              Accueil
            </Link>
          </Nav.Item>
          <Nav.Item id="Nav-Item">
            <Link
              id="Nav-Link"
              className={classNames({
                "nav-link": true,
                active: this.state.clicked === "Boutique",
              })}
              onClick={(event) => {
                this.handleClick("Boutique");
              }}
              to="/categoriePage/Boutique"
            >
              Boutique
            </Link>
          </Nav.Item>

          <Nav.Item id="Nav-Item">
            <Link
              id="Nav-Link"
              className={classNames({
                "nav-link": true,
                active: this.state.clicked === "news",
              })}
              onClick={(event) => {
                this.handleClick("news");
              }}
              to="/News"
            >
              News
            </Link>
          </Nav.Item>
          <Nav.Item id="Nav-Item">
            <Link
              id="Nav-Link"
              className={classNames({
                "nav-link": true,
                active: this.state.clicked === "faq",
              })}
              onClick={(event) => {
                this.handleClick("faq");
              }}
              to="/FAQ"
            >
              FAQ
            </Link>
          </Nav.Item>
          <Nav.Item className="Nav-background"></Nav.Item>
        </Nav>
      </div>
    );
  }
}
export default HeaderNav;
