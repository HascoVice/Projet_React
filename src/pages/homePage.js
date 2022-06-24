import Articles from "../components/articles";
import Cards from "../components/bandeau_homePage";
import Slider from "../components/Slider";

import "bootstrap/dist/css/bootstrap.min.css";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "./homePage.css";

function HomePage() {
  return (
    <>
      <Slider />
      <div><progress id="countdown" max="100" value="70"> </progress></div>
      
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
