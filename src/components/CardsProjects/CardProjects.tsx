import React from "react";
import { IProject } from "../../interfaces/IProject";
import { Link } from "react-router-dom";

export interface ProjectsProps {
  projects: IProject[];
}
const CardProjects: React.FunctionComponent<ProjectsProps> = ({
  projects,
}: ProjectsProps) => {
  return (
    <>
      <main className="container">
        <section className="row g-3">
          {projects.map((project, index) => (
            <article className="col-lg-3 col-md-6 col-12 my-3 d-flex justify-content-center">
              <div
                className="card bg-darkblue border border-darkinfo h-100"
                style={{ width: "16rem" }}
                key={index}
              >
                <img
                  src={project.imageProjects}
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title fw-bold text-center text-darkcyan">
                    {project.titleProject}
                  </h5>
                  <p className="card-text text-white">
                    <li>{project.proyectMotive}</li>
                    <li>{project.description}</li>
                  </p>
                </div>
                <Link to={project.linkProject} className="btn btn-info">
                  Ir al proyecto
                </Link>
              </div>
            </article>
          ))}
        </section>
      </main>
    </>
  );
};
export default CardProjects;
