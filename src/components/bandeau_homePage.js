import React from "react";
import ReactDOM from "react-dom/client";
import "./bandeau_homePage.css";

class Card extends React.Component {

  state = {
		hasClicked : false,
		hasClickedBuy : false,
		hasClickedBuyNum: 0,
    }

  constructor(props){
    super(props)
    this.click_Buy = this.click_Buy.bind(this);
    this.click_heart = this.click_heart.bind(this);

}

click_Buy(){
    this.setState((state)=>{
  return {
    hasClickedBuyNum : state.hasClickedBuyNum + 1,
  }
})
}

click_heart(){
this.setState(() =>{
  return{
    hasClicked: true
  }
})
}

  render(){

    let heart = 'heart is-active';
		let buy = 'bottoom clicked';

		if(this.state.hasClicked === false){
			heart = 'heart';
		}
		
		if(this.state.hasClickedBuyNum % 2 === 0){
			buy = 'bottoom';
			
		}
		else if (this.state.hasClickedBuyNum % 2 === 1){
			buy = 'bottoom clicked';
		}

    return (
      <>
                <div className="wrapper__card">
      <div className="container_new">
          <div className="top_new"> <img className='img' src="https://media.gqmagazine.fr/photos/61b08f7d706093c21a5fb515/16:9/w_1280,c_limit/B9723396273Z.1_20200506170704_000+G02FVMCAG.1-0.jpg" alt=""/> </div>
          <div className={buy}>
          <div className="left">
              <div className="details">
              <h1>{"this.props.data.title"}</h1>
              </div>
              <div onClick={this.click_Buy} className="buy"><i className="material-icons">add_shopping_cart</i></div>
          </div>
          <div className="right">
              <div className="done"><i className="material-icons">done</i></div>
              <div className="details">
              <h1>Chair</h1>
              <p>Added to your cart</p>
              </div>
              <div onClick={ this.click_Buy } className="remove"><i className="material-icons">clear</i></div>
  
          </div>
          </div>
      </div>
      <div onClick={ this.click_heart } className="placement">
          <div className={heart}></div>
          </div>
  </div>
      </>
    );
  }

}

function Cards() {
  return (
    <>
      {" "}
      <h2 className="bandeau__title">Les nouveautés</h2>
      <div className="bandeau_cards">
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </>
  );
}

export default Cards;
