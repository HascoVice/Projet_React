import React from "react";
import Reassur from "../components/reassur";
import { heart } from "../assets/Group 1.png";

import { useHistory } from "react-router-dom";

import "../pages/productPage.css";

import "bootstrap/dist/css/bootstrap.min.css";
import "mdb-react-ui-kit/dist/css/mdb.min.css";

function PassToMeMyLastRouterHistory() {
  let historyObj = useHistory();
  function handleClick() {
    historyObj.goBack();
  }
  return (
    <div>
      <button className="btn  btn-productPage" onClick={() => handleClick()}>
        Continuer mes achats
      </button>
    </div>
  );
}
function PassToMeMyRouterHistory() {
  let historyObj = useHistory();
  function handleClick() {
    historyObj.push("/Panier");
  }
  return (
    <div>
      <button className="btn  btn-productPage" onClick={() => handleClick()}>
        Voir mon panier
      </button>
    </div>
  );
}
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
    console.log("j ai cliqué");
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
      id: this.state.item.id,
      name: this.state.item.title,
      price: this.state.item.price,
      image: this.state.item.images.photos[0],
      count: 1,
    };

    let count = 0;
    if (JSON.parse(localStorage.getItem("Product : ")) !== null) {
      let New_data = JSON.parse(localStorage.getItem("Product : "));
      New_data.map((dataa, index) => {
        let name = JSON.stringify(New_data[index].name);
        count += dataa.count;
        if (New_data[index].name == this.state.item.title) {
          New_data[index].count += 1;
        }
        tab.push(dataa.count);
      });
      localStorage.setItem("Product : ", JSON.stringify(New_data));
      this.setState(() => {
        return {
          count: tab,
          local: New_data || [],
          new_count: count,
        };
      });
    }
    tab.push(obj);
    if (JSON.parse(localStorage.getItem("Product : ")) === null) {
      localStorage.setItem("Product : ", JSON.stringify(tab));
    }
  }

  render() {
    let heart = "heart is-active";
    let buy = "bottoom clicked";
    let images = this.state.images;

    let PriceRaye;
    let Promo = "tag-saleDisable";

    console.log("images", images);

    if (this.state.hasClicked === false) {
      heart = "heart";
    }
    if (this.state.hasClickedBuyNum % 2 === 0) {
      buy = "bottoom";
    } else if (this.state.hasClickedBuyNum % 2 === 1) {
      buy = "bottoom clicked";
    }

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
            {/* petites image différentes  */}
            <ul className="visuel__list">
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
            {/* image en grand */}

            <figure>
              <img
                className="visuel__produit__grandformat"
                src={this.state.images__props}
                alt="visuel produit en grand"
              />
            </figure>

            {/* nomenclature du produit */}
            <div className="productPage__wrapper__description">
              <div className="productPage__description">
                <h1 className="productPage__description__title">
                  {this.state.item.title}
                </h1>
                <p className="productPage__description__description">
                  {this.state.item.description}
                </p>

                <a href="#" className="productPage__description__votant">
                  {this.state.item.raters} Avis
                </a>
                <div className="productPage__wrapper__heart">
                  <div
                    className={`productPage${heart}`}
                    onClick={this.click_heart}
                  ></div>
                  <p className="productPage__description__avis">
                    Note globale : {this.state.item.rating}
                  </p>
                </div>
              </div>
              <div className="bottoom__wrapper">
                <div className="bottoom__wrapper__productPage">
                  <div className={buy}>
                    <div className="left">
                      <div className="details__productPage">
                        <div className="allPrice__productPge">
                          <p className={PriceRaye}>
                            Prix: {this.state.item.price}
                          </p>
                          <p className="priceDiscount__card">
                            {this.state.item.priceDiscount}
                          </p>
                        </div>
                      </div>
                      <div
                        onClick={() => {
                          this.Click_Buy_Stockage();
                          this.click_Buy();
                        }}
                        className="buy"
                      >
                        <i className="material-icons">add_shopping_cart</i>
                      </div>
                    </div>

                    <div className="right">
                      <div className="done">
                        <i className="material-icons">done</i>
                      </div>
                      <div className="details__productPage">
                        <p className="Add_to_cart">Ajouter au panier</p>
                      </div>
                      <div onClick={this.click_Buy} className="remove">
                        <i className="material-icons">clear</i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="wrapper__CTA">
                  <PassToMeMyLastRouterHistory />

                  <PassToMeMyRouterHistory />
                </div>
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
