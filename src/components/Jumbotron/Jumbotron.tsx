import "animate.css";
import "../Jumbotron/jumbotrom.scss";
import bannerImg from "../../assets/Coding-vs-programming.jpg";
import CVme from "../../assets/RodrigoPavonCV.pdf"
import SocialMedia from "../SocialMedia/SocialMedia";
import profileImg from "../../assets/image.png";
import { media } from "../../constants/social";

const Jumbotron: React.FC = () => {
  return (
    <div className="jumbotron jumbotron-fluid">
      <div className="container-fluid bg-secondary p-0">
        <div className="row">
          <div className="col-md-12 col-sm-12 col-lg-4 d-flex align-items-center m-0">
            <div className="clipped-image">
              <img
                src={profileImg}
                alt="Background Image"
                className="img-fluid"
              />
            </div>
          </div>
          <div className="col-md-12 col-sm-12 col-lg-8">
            <h1 className="animate__animated animate__bounceIn animate__delay-2s display-4 fw-bold text-white">
              Rodrigo <span className="text-darkcyan"> Pavón Gomez</span>
            </h1>
            <p className="col-md-8 accordiondisplay-5 fw-semibold fs-4 text-darkblue">
              Desarrolador FrontEnd && FullStack Trainee
            </p>
            <SocialMedia media={media} />
            <p className="col-md-10 text-white mb-2">
              Actualmente estudio la carrera de Programación Informatica. Me
              encanta desarrollar proyectos con React, Bootstrap, Axios para la
              conexion, manejo el Stack Mern. Soy muy apasionado, me gusta
              aprender y conocer nuevos caminos y lenguajes que fortalezca mis
              aptitudes
            </p>
            <a href={CVme} download>
              <button className="btn btn-info btn-lg" type="button">
                Download CV
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Jumbotron;
