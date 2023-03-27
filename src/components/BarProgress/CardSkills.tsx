import { ILenguage } from "../../interfaces/ILenguaje";
import { Icon } from "@iconify/react";

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
            className="col-12 col-md-6 col-lg-3 my-3 d-flex justify-content-center p-0 m-0"
            key={index}
          >
            <div className="card h-100 bg-darkblue border border-darkinfo" style={{ width: "16rem" }}>
              <Icon
                icon={lenguaje.level}
                style={{ color: "#B6EADA", fontSize: 125, textAlign:"center"}}
              />

              <div className="card-body">
                <h4 className="card-title text-white">
                  {lenguaje.lenguage}
                </h4>
              </div>
            </div>
          </section>
        ))}
      </article>
    </section>
  );
};
export default CardSkills;
