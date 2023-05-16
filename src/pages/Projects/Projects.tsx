import React from "react"
import CardProjects from "../../components/CardsProjects"
import { proyects } from "../../constants/projects"
import { PATH_NAME } from "../../constants/routes"

const Projects: React.FC = () => {
return (
    <section className="container-fluid p-4" id={PATH_NAME.PROJECTS}>
        <h1 className="text-center text-textwhite mb-4 display-5 fw-bold">
            Projects
          </h1>
        <CardProjects projects={proyects}/>
    </section>
)

}
export default Projects