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
          <section
            className="col-12 col-md-6 col-lg-3 d-flex justify-content-center p-0 m-0"
            key={index}
          >
            <img
              src={lenguaje.level}
              className="img-fluid"
              alt={lenguaje.lenguage}
              style={{ width: "288px", height: "200px" }}
            />
          </section>
        ))}
      </article>
    </section>
  );
};
export default CardSkills;
