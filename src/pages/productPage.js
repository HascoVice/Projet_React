import React from "react";
import Reassur from "../components/reassur";

import "../pages/productPage.css";

import "bootstrap/dist/css/bootstrap.min.css";
import "mdb-react-ui-kit/dist/css/mdb.min.css";

class ProductPage extends React.Component {
  state = {
    hasClicked: false,
    hasClickedBuy: false,
    hasClickedBuyNum: 0,
    images: null,
    tableau: [],
    compenent: false,
    item: [],
  };

  constructor(props) {
    super(props);

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
            images: data.images.thumbs,
          };
        });
      });
  }

  click_Buy() {
    this.setState((state) => {
      return {
        hasClickedBuyNum: state.hasClickedBuyNum + 1,
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
    let buy = "bottoom clicked";

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
            <figure>
              <img
                //src={this.state.item.images.photo[0]}
                alt="visuel produit"
              ></img>
              <img
                // src={this.state.data.images.thumbs[1]}
                alt="visuel produit"
              ></img>
              <img
                // src={this.props.data.images.thumbs[2]}
                alt="visuel produit"
              ></img>
            </figure>
            {/* image en gros plan */}
            <figure>
              <img src="" alt="visuel produit"></img>
            </figure>
            {/* nomenclature du produit */}
            <div className="productPage__description">
              <h1 className="productPage__description__title">
                {this.state.item.title}
              </h1>
              <div className="productPage__description__avis">
                {this.state.item.rating}
              </div>
              <p className="productPage__description__description">
                {this.state.item.description}
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
            </div>
          </div>
        </section>
        <Reassur />
      </>
    );
  }
}

export default ProductPage;
