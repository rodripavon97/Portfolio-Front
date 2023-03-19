import Hidra from "../../assets/Hidra.png";
import RickAndMorty from "../../assets/RickAndMorty.png";
import SoulGram from "../../assets/Soulgram.jpg";
import FootballChamp from "../../assets/Footchamp.png";
import TShirts from "../../assets/Tshits.png"
const CardProjects: React.FC = () => {
  return (
    <>
      <section className="container">
        <section className="row g-3 justify-content-center d-flex">
          <article className="col-lg-3 col-md-6 col-12 my-3 d-flex">
            <div className="card bg-darkblue border border-darkred h-100" style={{ width: "18rem"}}>
              <img src={Hidra} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title text-center text-darkinfo">HidraSport</h5>
                <p className="card-text text-white">
                  <li>Proyecto para la pagina de Hidrasport</li>
                  <li>
                    Proyecto basado con React y Bootstrap como framework de
                    estilado, uso de redux con conexion a backend
                  </li>
                </p>
              </div>
            </div>
          </article>
          <article className="col-lg-3 col-md-6 col-12 my-3 d-flex">
          <div className="card bg-darkblue border border-darkred h-100" style={{ width: "18rem"}}>
              <img src={SoulGram} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title text-center text-darkinfo">Solugram Front - Back</h5>
                <p className="card-text text-white">
                  <li> Proyecto Final Global Learning, red social de viajes</li>
                  <li>
                    Proyecto basado con React y Material Ui, Utilizacion de Node
                    Js, Express y Mongo DB para el backend{" "}
                  </li>
                </p>
              </div>
            </div>
          </article>
          <article className="col-lg-3 col-md-6 col-12 my-3 d-flex">
          <div className="card bg-darkblue border border-darkred h-100" style={{ width: "18rem"}}>
              <img src={RickAndMorty} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title text-center text-darkinfo">
                  Rick And Morty Api-React
                </h5>
                <p className="card-text text-white">
                  <li> Proyecto personal para aprender Axios</li>
                  <li>
                    Proyecto basado con React y Bulma como framework de
                    estilado, conexion a api a traves de Axios{" "}
                  </li>
                </p>
              </div>
            </div>
          </article>
          <article className="col-lg-3 col-md-6 col-12 my-3 d-flex">
          <div className="card bg-darkblue border border-darkred h-100" style={{ width: "18rem"}}>
              <img src={FootballChamp} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title text-center text-darkinfo">Footchamp</h5>
                <p className="card-text text-white">
                  <li>Pagina para un proyecto de Torneos</li>
                  <li>
                    {" "}
                    Proyecto basado con Angular y Bulma como framework de
                    estilado, mySql con node y Express y la conexion httpStatus{" "}
                  </li>
                </p>
              </div>
            </div>
          </article>
          <article className="col-lg-3 col-md-6 col-12 my-3 d-flex">
          <div className="card bg-darkblue border border-darkred h-100" style={{ width: "18rem"}}>
              <img src={TShirts} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title text-center text-darkinfo">TShirts Makers</h5>
                <p className="card-text text-white">
                  <li>Pagina para ventas de camiseta - proyecto </li>
                    {" "}
                    <li>
                    Proyecto basado con HTML, CSS Y Javascript
                  </li>
                </p>
              </div>
            </div>
          </article>
        </section>
      </section>
    </>
  );
};
export default CardProjects;
