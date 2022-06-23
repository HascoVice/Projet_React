import "./App.css";
import React from "react";
import HomePage from "../src/pages/homePage";
import { Switch, Route } from "react-router-dom";
import CategoriePage from "../src/pages/categoriePage";
import ShoppingCartPage from "../src/pages/shoppingCartPage";
import News from "../src/pages/news";
import Contact from "../src/pages/contact";
import HeaderNav from "./components/headerNav";
import Footer from "./components/footer";

class App extends React.Component {

  state={
		search: '',
	}

  constructor(){
    super()
    this.test = this.test.bind(this)

  }

  test(data){
		console.log('data' + data)
		this.setState(()=>{
			return {
				search : data
			}
		})
		
	}

  render(){
    return (
    <>
      <div className="wrapper__homePage">
        <HeaderNav func={this.test} />
        <Switch>
          <Route path="/" exact>
            <HomePage />
          </Route>
          <Route path="/categoriePage/Figurines">
            <CategoriePage bar={this.state.search} />
          </Route>
          <Route path="/categoriePage/Vêtements">
            <CategoriePage bar={this.state.search} />
          </Route>
          <Route path="/categoriePage/Décorations">
            <CategoriePage bar={this.state.search} />
          </Route>
          <Route path="/News">
            <News />
          </Route>
          <Route path="/Contact">
            <Contact />
          </Route>
          <Route path="/Panier">
            <ShoppingCartPage />
          </Route>
        </Switch>

        <Footer />
      </div>
    </>
  );
  }
  
}

export default App;
