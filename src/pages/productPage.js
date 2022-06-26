import React from "react";
import Reassur from "../components/reassur";
import { Link } from "react-router-dom";
import "../pages/productPage.css";
import { heart } from "../assets/Group 1.png";

import "bootstrap/dist/css/bootstrap.min.css";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
class ProductPage extends React.Component {
  state = {
    hasClicked: false,
    hasClickedBuy: false,
    hasClickedBuyNum: 0,
    images: [],
    tableau: [],
    compenent: false,
    item: [],
    images__props: null,
  };

  constructor(props) {
    super(props);
    this.click_heart = this.click_heart.bind(this);
    this.click_Buy = this.click_Buy.bind(this);
    this.Click_Buy_Stockage = this.Click_Buy_Stockage.bind(this);

    this.componentDidMount = this.componentDidMount.bind(this);
    //this.componentDidUpdate = this.componentDidUpdate.bind(this);
    this.handleFetch = this.handleFetch.bind(this);
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    this.handleFetch(id);
    console.log(id);
    console.log("received " + this.props.match.params.id);
  }
  // componentDidUpdate() {
  //   const { id } = this.props.match.params;
  //   if (this.state.compenent === true) {
  //     this.handleFetch(id);
  //   }

  //   if (this.state.compenent === false) {
  //     if (this.props.json !== this.state.item) {
  //       this.handleFetch(id);
  //     }
  //     return;
  //   }
  // }
  handleFetch(id) {
    fetch("https://otakod.es/hetic/ecommerce-api/products/" + id)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        this.setState((state) => {
          return {
            search: "",
            compenent: false,
            item: data,
            images: data.images.photos,
            images__props: data.images.photos[0],
          };
        });
      });
  }
  handleClick = (event) => {
    this.setState(() => {
      return {
        images__props: event.target.src,
      };
    });
    console.log(event.target.src);
  };

  click_Buy() {
    this.setState((state) => {
      return {
        hasClickedBuyNum: state.hasClickedBuyNum + 1,
      };
    });
  }
  click_heart() {
    this.setState(() => {
      return {
        hasClicked: true,
      };
    });
  }
  Click_Buy_Stockage() {
    let tab = [];
    console.log(tab);
    let obj = {
      id: this.props.data.id,
      name: this.props.data.title,
      price: this.props.data.price,
      image: this.props.data.images.photos[0],
      count: 1,
    };

    tab.push(obj);

    if (JSON.parse(localStorage.getItem("Product : ")) !== null) {
      let New_data = JSON.parse(localStorage.getItem("Product : "));
      New_data.push(obj);
      localStorage.setItem("Product : ", JSON.stringify(New_data));
      console.log(New_data);
    }

    if (JSON.parse(localStorage.getItem("Product : ")) === null) {
      localStorage.setItem("Product : ", JSON.stringify(tab));
    }
  }

  render() {
    let heart = "heart is-active";
    let buy = "bottoom clicked";
    let images = this.state.images;

    //var listImages = images.map((image) => <li>{image}</li>);
    console.log("images", images);
    //console.log("images", listImages);
    if (this.state.hasClicked === false) {
      heart = "heart";
    }
    if (this.state.hasClickedBuyNum % 2 === 0) {
      buy = "bottoom";
    } else if (this.state.hasClickedBuyNum % 2 === 1) {
      buy = "bottoom clicked";
    }
    let PriceRaye;
    let Promo = "tag-saleDisable";
    if (
      parseFloat(this.state.item.price) >
      parseFloat(this.state.item.priceDiscount)
    ) {
      PriceRaye = "PriceRaye";
      Promo = "tag-sale";
    }

    return (
      <>
        <section className="productPage">
          <div className="productPage__wrapper">
            <div class={Promo}></div>
            {/* image différentes à intégrer en fetch  */}
            <ul className="visuel_list">
              <li className="visuel__produit__petitformat">
                {images.map((image) => {
                  return (
                    <img
                      className="images"
                      key={image}
                      src={image}
                      alt="visuel_produit_miniature"
                      onClick={this.handleClick}
                    />
                  );
                })}
              </li>
            </ul>
            {/* image en gros plan */}
            <figure>
              <img
                className="visuel__produit__grandformat"
                src={this.state.images__props}
                alt="visuel_produit_miniature"
              />
            </figure>
            {/* nomenclature du produit */}
            <div className="productPage__description">
              <h1 className="productPage__description__title">
                {this.state.item.title}
              </h1>
              <p className="productPage__description__description">
                {this.state.item.description}
              </p>
              <div onClick={this.click_heart} className="placement">
                <div className={heart}></div>
              </div>
              <p roductPage__description__votant>
                {this.state.item.raters} Avis
              </p>
              <p className="productPage__description__avis">
                Note globale :{this.state.item.rating}
              </p>

              <div
                onClick={() => {
                  this.Click_Buy_Stockage();
                  this.click_Buy();
                }}
                className="buy"
              >
                <i className="material-icons chariot">add_shopping_cart</i>
                <p>Ajouter au panier &nbsp; -</p>
                <p className={PriceRaye}>{this.state.item.price}</p>
                <p className="priceDiscount">{this.state.item.priceDiscount}</p>
              </div>

              <div className="wrapper__CTA">
                <Link to={"./categoriePage/Boutique"}>
                  <div className="voir_mon_panier">
                    <p>Continuer mes achats</p>
                  </div>
                </Link>
                <Link>
                  <div className="voir_mon_panier">
                    <p>Voir mon panier</p>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </section>
        <Reassur />
      </>
    );
  }
}

export default ProductPage;
