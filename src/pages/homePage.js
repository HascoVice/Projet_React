import Caroussel from "../components/caroussel";
import Articles from "../components/articles";
import Cards from "../components/bandeau_homePage";

import "bootstrap/dist/css/bootstrap.min.css";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "./homePage.css";

function HomePage() {
  return (
    <>
      <Caroussel />
      <section className="wrapper__cards">
        <Cards />
        <Cards />
        <Cards />
      </section>

      <Articles />
    </>
  );
}

export default HomePage;
