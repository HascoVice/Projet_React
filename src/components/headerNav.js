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
  constructor(props) {
    super(props);
    this.state = {
      clicked: "",
    };
  }

  handleClick = (name) => {
    this.setState({ clicked: name });
  };

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
            <div className="header__nav__loggin">
              <ModalConnexion />
            </div>
            <div className="header__nav__icone">
              <a href="#">
                <img className="nav__loupe" src={Loupe} alt="rechercher" />
              </a>
              <Link className="header__nav" to="/panier">
                <img className="nav__panier" src={Panier} alt="mon panier" />
              </Link>
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
                    Figurines
                  </a>
                </li>
                <li>
                  <a href="./search.html" className="menuDeroulant__link">
                    Vêtements
                  </a>
                </li>
                <li>
                  <a href="#" className="menuDeroulant__link">
                    Décorations
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
                active: this.state.clicked === "figurines",
              })}
              onClick={(event) => {
                this.handleClick("figurines");
              }}
              to="/categoriePage/Figurines"
            >
              Figurines
            </Link>
          </Nav.Item>
          <Nav.Item id="Nav-Item">
            <Link
              id="Nav-Link"
              className={classNames({
                "nav-link": true,
                active: this.state.clicked === "vetements",
              })}
              onClick={(event) => {
                this.handleClick("vetements");
              }}
              to="/categoriePage/Vêtements"
            >
              Vêtements
            </Link>
          </Nav.Item>
          <Nav.Item id="Nav-Item">
            <Link
              id="Nav-Link"
              className={classNames({
                "nav-link": true,
                active: this.state.clicked === "deco",
              })}
              onClick={(event) => {
                this.handleClick("deco");
              }}
              to="/categoriePage/Décorations"
            >
              Décorations
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
                active: this.state.clicked === "contact",
              })}
              onClick={(event) => {
                this.handleClick("contact");
              }}
              to="/Contact"
            >
              Contact
            </Link>
          </Nav.Item>
          <Nav.Item className="Nav-background"></Nav.Item>
        </Nav>
      </div>
    );
  }
}
export default HeaderNav;
