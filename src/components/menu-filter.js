import { logDOM } from "@testing-library/react";
import React from "react";
import "../components/menu-filter.css";
import classNames from "classnames";
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
<p className="entête">Trier par:</p>

<ul className="ul__menu">
  <li className="ulli">
    <div className="div">
      <input className="inputChecking" id="a1" type="radio" name="categorie" onChange={this.Input} value="figurine" />
      <label className="labelmenu" htmlFor="a1">Figurines</label> 
    </div>
  </li>
  <li className="ulli">
    <div className="div">
      <input className="inputChecking" id="b1" type="radio" name="categorie" onChange={this.Input} value="vetement" />
      <label className="labelmenu" htmlFor="b1">Vetements</label>
    </div>
  </li>
  <li className="ulli">
    <div className="div">
      <input className="inputChecking" id="c1" type="radio" name="categorie" onChange={this.Input} value="deco" />
      <label className="labelmenu" htmlFor="c1">Decoration</label>
    </div>
  </li>
  <li className="ulli">
    <div className="div">
      <input className="inputChecking" id="d1" type="radio" name="category" onChange={this.Input} value="note" />
      <label className="labelmenu" htmlFor="d1">Les mieux notés</label>
    </div>
  </li>
  <li className="ulli">
    <div className="div">
      <input className="inputChecking" id="e1" type="radio" name="category" onChange={this.Input} value="price" />
      <label className="labelmenu" htmlFor="e1">Bon plan</label>
    </div>
  </li>
  <li className="ulli">
    <div className="div">
      <input className="inputChecking" id="f1" type="radio" name="category" onChange={this.Input} value="stock" />
      <label className="labelmenu" htmlFor="f1">Stock épuisé</label>
    </div>
  </li>
</ul>
</div>
  );
  }
    
}
export default Sidebar