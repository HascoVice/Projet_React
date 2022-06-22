import "./App.css";
import HomePage from "../src/pages/homePage";
import { Switch, Route } from "react-router-dom";
import CategoriePage from "../src/pages/categoriePage";
import ShoppingCartPage from "../src/pages/shoppingCartPage";
import News from "../src/pages/news";
import Contact from "../src/pages/contact";
import HeaderNav from "./components/headerNav";
import Footer from "./components/footer";

function App() {
  return (
    <>
      <div className="wrapper__homePage">
        <HeaderNav />
        <Switch>
          <Route path="/" exact>
            <HomePage />
          </Route>
          <Route path="/categoriePage/Figurines">
            <CategoriePage />
          </Route>
          <Route path="/categoriePage/Vêtements">
            <CategoriePage />
          </Route>
          <Route path="/categoriePage/Décorations">
            <CategoriePage />
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

export default App;
