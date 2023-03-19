import { ILenguage } from "../../interfaces/ILenguaje";

export interface BarProgressProps {
  barProgress: ILenguage[];
}

const CardSkills: React.FunctionComponent<BarProgressProps> = ({
  barProgress,
}: BarProgressProps) => {
  return (
    <section className="container mt-5">
      <article className="row g-3">
        {barProgress.map((lenguaje, index) => (
          <section className="col-12 col-md-6 col-lg-3 my-3 d-flex justify-content-center" key={index}>
            <div className="card" style={{ width: "16rem" }}>
              <img src={lenguaje.level} className="card-img-top rounded-circle" alt="..." 
            />
              <div className="card-body">
                <h5 className="card-title">{lenguaje.lenguage}</h5>
                <p className="card-text">
                    Cantidad de proyectos {lenguaje.cantidad}
                </p>
              </div>
            </div>
          </section>
        ))}
      </article>
    </section>
  );
};
export default CardSkills;
