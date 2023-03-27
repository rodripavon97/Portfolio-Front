import { saveAs } from "file-saver";
import "animate.css";
import mePerson from "../../assets/image-modified.png";
import bannerImg from "../../assets/Coding-vs-programming.jpg";

const Jumbotron: React.FC = () => {
  const saveManual = () => {
    saveAs("../../assets/RodrigoPavonCV.pdf", "rodrigopavonCV.pdf");
  };

  return (
    // <header>
    <header className="container-fluid">
      <section className="row row-cols-lg-2 row-cols-sm-2">
        <article className="col-md-12 col-sm-12 col-lg-6 d-flex align-items-center">
          <div className="container-fluid">
            <img
              src={bannerImg}
              className="img-fluid"
              alt=""
              style={{ maxHeight: "100%", objectFit: "contain" }}
            />
          </div>
        </article>
        <article className="col-md-12 col-sm-12 col-lg-6 d-flex justify-content-between">
         
            <div className="container-fluid">
              <h1 className="animate__animated animate__bounceIn animate__delay-2s display-4 fw-bold text-white">
                Rodrigo <span className="text-darkcyan"> Pavón Gomez</span>
              </h1>
              <p className="col-md-8 accordiondisplay-5 fw-semibold fs-4 text-textdark">
                Desarrolador FrontEnd && FullStack Trainee
              </p>
              <p className="col-md-10 text-white mb-2">
                Actualmente estudio la carrera de Programación Informatica. Me
                encanta desarrollar proyectos con React, Bootstrap, Axios para
                la conexion, manejo el Stack Mern. Soy muy apasionado, me gusta
                aprender y conocer nuevos caminos y lenguajes que fortalezca mis
                aptitudes
              </p>
              <button
                className="btn btn-info btn-lg"
                type="button"
                onClick={saveManual}
              >
                Download CV
              </button>
            </div>
          
        </article>
      </section>
    </header>
    // </header>
  );
};
export default Jumbotron;
