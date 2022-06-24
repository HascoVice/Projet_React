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
    image: null,
    tableau: [],
  };

  constructor(props) {
    super(props);
    this.click_Buy = this.click_Buy.bind(this);

    this.Click_Buy_Stockage = this.Click_Buy_Stockage.bind(this);
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

    return (
      <>
        <section className="productPage">
          {/* image différentes à intégrer en fetch  */}
          <figure>
            <img
              // src={this.props.data.images.thumbs[0]}
              alt="visuel produit"
            ></img>
            <img
              // src={this.props.data.images.thumbs[1]}
              alt="visuel produit"
            ></img>
            <img
              // src={this.props.data.images.thumbs[2]}
              alt="visuel produit"
            ></img>
          </figure>
          {/* image en gros plan */}
          <figure>
            <img src="" alt="image produit"></img>
          </figure>
          <div className="productPage__description">
            <h1 className="productPage__description__title">
              {/* {this.props.data.title} */} figurine
            </h1>
            <div className="productPage__description__avis">coeur</div>
            <p className="productPage__description__description">
              Le lorem ipsum est, en imprimerie, une suite de mots sans
              signification utilisée à titre provisoire pour calibrer une mise
              en page, le texte définitif venant remplacer le faux-texte dès
              qu'il est prêt ou que la mise en page est achevée. Généralement,
              on utilise un texte en faux latin, le Lorem ipsum ou Lipsum.
            </p>
            <div
              onClick={() => {
                this.Click_Buy_Stockage();
                this.click_Buy();
              }}
              className="buy"
            >
              {/* <p>{this.props.data.price}</p> */}
              <p>price</p>
              <i className="material-icons">add_shopping_cart</i>
            </div>
          </div>
        </section>
        <Reassur />
      </>
    );
  }
}

export default ProductPage;
