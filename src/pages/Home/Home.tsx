import Jumbotron from "../../components/Jumbotron";
import { PATH_NAME } from "../../constants/routes";
import AboutME from "../AboutME";
import Projects from "../Projects";
import Skills from "../Skills";

const Home: React.FC = () => {
  return (
    <>
      <Jumbotron />
      <section id={PATH_NAME.HOME} className="container-fluid">
        <AboutME />

        <Skills />

        <Projects />
      </section>
    </>
  );
};
export default Home;
