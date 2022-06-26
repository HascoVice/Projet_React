import { logDOM } from "@testing-library/react";
import React from "react";
import "../components/menu-filter.css";
import FlavorForm from "../components/optionSelectCat"
let categorie;
class Sidebar extends React.Component{

  constructor(props){
    super(props)
    this.Input = this.Input.bind(this)
  }

  Input(event){
this.props.input(event.target.value)
console.log(event.target.value)
  }

  render(){
    return(
      <div className="menu-filter">
<p>Trier par:</p>
<div className="Keyword">
  <div className="form__grouped field">
    <input
      type="text"
      className="form__fielded"
      placeholder="Name"
      name="Keyword"
      id="Keyword"
      required=""
    />
    <label className="labelmenu form__label" htmlFor="Keyword">
      Mot-Clé
    </label>
  </div>
</div>
<ul className="ul__menu">
  <li className="ulli">
    <div className="div">
      <input className="inputChecking" id="c1" type="radio" name="categorie" onChange={this.Input} value="figurine" />
      <label className="labelmenu" htmlFor="c1">Figurines</label> 
    </div>
  </li>
  <li className="ulli">
    <div className="div">
      <input className="inputChecking" id="c1" type="radio" name="categorie" onChange={this.Input} value="vetement" />
      <label className="labelmenu" htmlFor="c1">Vetements</label>
    </div>
  </li>
  <li className="ulli">
    <div className="div">
      <input className="inputChecking" id="c1" type="radio" name="categorie" onChange={this.Input} value="deco" />
      <label className="labelmenu" htmlFor="c1">Decoration</label>
    </div>
  </li>
  <div className="Price">
    <div className="form__grouped field">
      <input
        type="number"
        className="form__fielded"
        placeholder="Name"
        name="firstprice"
        id="firstprice"
        required=""
      />
      <label className="labelmenu form__label" htmlFor="firstprice" >
        Price
      </label>
    </div>
    <span className="A"> À </span>
    <div className="form__grouped field">
      <input
        type="number"
        className="form__fielded"
        placeholder="Name"
        name="secondprice"
        id="secondprice"
        required=""
      />
      <label className="labelmenu form__label" htmlFor="secondprice" >
        Price
      </label>
    </div>
  </div>
  <li className="ulli">
    <div className="div">
      <input className="inputChecking" id="c1" type="radio" name="categorie" onChange={this.Input} value="note" />
      <label className="labelmenu" htmlFor="c1">Les mieux notés</label>
    </div>
  </li>
  <li className="ulli">
    <div className="div">
      <input className="inputChecking" id="c1" type="radio" name="categorie" onChange={this.Input} value="price" />
      <label className="labelmenu" htmlFor="c1">Bon plan</label>
    </div>
  </li>
  <li className="ulli">
    <div className="div">
      <input className="inputChecking" id="c1" type="radio" name="categorie" onChange={this.Input} value="stock" />
      <label className="labelmenu" htmlFor="c1">Stock épuisé</label>
    </div>
  </li>
</ul>
</div>
  );
  }
    
}
export default Sidebar