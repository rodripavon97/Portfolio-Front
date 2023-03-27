import Jumbotron from "../../components/Jumbotron";
import { PATH_NAME } from "../../constants/routes";


const Home: React.FC = () => {
  return (
    <>
      <Jumbotron />
      <section id={PATH_NAME.HOME} className="container-fluid">
       
      </section>
    </>
  );
};
export default Home;
