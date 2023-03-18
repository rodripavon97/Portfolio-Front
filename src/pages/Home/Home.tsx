import Jumbotron from "../../components/Jumbotron";
import { PATH_NAME } from "../../constants/routes";
import AboutME from "../AboutME";
import Projects from "../Projects";
import Skills from "../Skills";

const Home: React.FC = () => {
  return (
    <>
      <section id={PATH_NAME.HOME}>
        <Jumbotron />
        <div className="container-fluid d-flex flex-column mt-4">
          <AboutME />
        </div>
        <div className="container-fluid d-flex flex-column mt-4">
          <Skills />
        </div>
        <div className="container-fluid d-flex flex-column mt-4">
          <Projects />
        </div>
      </section>
    </>
  );
};
export default Home;
