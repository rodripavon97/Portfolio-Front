import React from "react";
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
            <div
              className="card h-100 bg-darkblue border border-darkinfo"
              style={{ width: "16rem" }}
            >
              <section className="row">
                <article className="col-md-4 col-lg-12" style={{ textAlign: "center" }}>
                  <Icon
                    icon={lenguaje.level}
                    style={{
                      color: "#B6EADA",
                      fontSize: 110,
                      textAlign: "center",
                    }}
                  />
                </article>
              </section>

              <div className="card-body">
                <h5 className="card-title fw-bold text-darkcyan">
                  {lenguaje.lenguage}
                </h5>
              </div>
            </div>
          </section>
        ))}
      </article>
    </section>
  );
};
export default CardSkills;
