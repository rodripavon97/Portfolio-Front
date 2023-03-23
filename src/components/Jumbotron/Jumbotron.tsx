import { saveAs } from "file-saver";
import "animate.css";
import mePerson from "../../assets/image-modified.png";

const Jumbotron: React.FC = () => {
  const saveManual = () => {
    saveAs("../../assets/RodrigoPavonCV.pdf", "rodrigopavonCV.pdf");
  };

  return (
    // <header>
    <header className="container-fluid">
      <div className="p-5 mb-4 rounded-3">
        <div className="container-fluid py-5">
          <h1 className="animate__animated animate__bounceIn animate__delay-2s display-5 fw-bold text-black">
            Rodrigo <span className="text-textdark"> Pavón Gomez</span>
          </h1>
          <p className="col-md-8 fs-4 text-black">
            Desarrolador FrontEnd && FullStack Trainee
          </p>
          <button
            className="btn btn-info btn-lg"
            type="button"
            onClick={saveManual}
          >
            Download CV
          </button>
        </div>
      </div>
    </header>
    // </header>
  );
};
export default Jumbotron;
