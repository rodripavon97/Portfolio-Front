import { ILenguage } from "../../interfaces/ILenguaje";

export interface BarProgressProps {
  barProgress: ILenguage[];
}

const BarProgress: React.FunctionComponent<BarProgressProps> = ({
  barProgress,
}: BarProgressProps) => {
  return (
    <div className="progressHolder">
      <article className="container-fluid p-5">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4">
          {barProgress.map((progress, index) => (
            <>
              <article className="col">
                <p className="barProgress-label text-textwhite" key={index}>
                  {progress.lenguage}
                </p>
                <section className="progress">
                  <div
                    className="barProgress-bar progress-bar-striped bg-darkcyan"
                    role="progressbar"
                    style={{ width: progress.level + "%" }}
                    aria-valuenow={progress.level}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  >
                    
                  </div>
                </section>
              </article>
            </>
          ))}
        </div>
      </article>
    </div>
  );
};
export default BarProgress;
