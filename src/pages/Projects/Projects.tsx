import CardProjects from "../../components/CardsProjects"
import { PATH_NAME } from "../../constants/routes"

const Projects: React.FC = () => {
return (
    <section className="container-fluid" id={PATH_NAME.PROJECTS}>
        <h1 className="text-center text-textwhite mb-4 display-5 fw-bold text-decoration">
            {" "}
            Projects
          </h1>
        <CardProjects/>
    </section>
)

}
export default Projects