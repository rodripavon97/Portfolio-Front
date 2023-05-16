import Jumbotron from "../../components/Jumbotron";
import { PATH_NAME } from "../../constants/routes";

const Home: React.FC = () => {
  return (
    <>
      <section id={PATH_NAME.HOME} className="container-fluid">
        <Jumbotron />
      </section>
    </>
  );
};
export default Home;
