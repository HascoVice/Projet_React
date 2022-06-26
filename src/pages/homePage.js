import Articles from "../components/articles";
import Cardrate from "../components/bandeau_homePage";
import Slider from "../components/Slider";
import Reassur from "../components/reassur";

import "bootstrap/dist/css/bootstrap.min.css";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "./homePage.css";

function HomePage() {
  return (
    <>
      <Slider />
      <section className="wrapper__cards">
        <Cardrate />
      </section>

      <Articles />
      <Reassur />
    </>
  );
}

export default HomePage;
