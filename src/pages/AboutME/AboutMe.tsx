import { PATH_NAME } from "../../constants/routes";
import Me from "../../assets/image-modified.png";

const AboutME: React.FC = () => {
  return (
    <section className="container-fluid p-4" id={PATH_NAME.ABOUTME}>
      <h1 className="text-center text-textwhite mt-2 display-5 fw-bold">
        {" "}
        About Me
      </h1>
      <div className="container-fluid">
        <div className="row row-cols-1 row-cols-md-2 justify-content-center g-4">
          <div className="col bg-secondary border border-darkred" style={{width:"400px", height:"400px"}}>
            <img
              src={Me}
              alt=""
              className="img-fluid d-block mx-auto"
              width={400}
              height={400}
            />
          </div>
          <div className="col">
            <p className="text-white fw-light text-center  p-4 mx-4">
              Me llamo Rodrigo Pavon, tengo 25 Años. Actualmente estudio la
              carrera de Programación Informatica. Me encanta desarrollar
              proyectos con React, Bootstrap, Axios para la conexion, manejo el
              Stack Mern. Soy muy apasionado, me gusta aprender y conocer nuevos
              caminos y lenguajes que fortalezca mis aptitudes
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default AboutME;
