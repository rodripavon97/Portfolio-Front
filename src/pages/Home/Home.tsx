import Jumbotron from "../../components/Jumbotron";
import { PATH_NAME } from "../../constants/routes";
import AboutME from "../AboutME";
import Projects from "../Projects";
import Skills from "../Skills";

const Home: React.FC = () => {
  return (
    <>
      <section id={PATH_NAME.HOME} className="container-fluid">
        <Jumbotron />

        <AboutME />

        <Skills />

        <Projects />
      </section>
    </>
  );
};
export default Home;
