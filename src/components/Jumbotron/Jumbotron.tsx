import mePerson from "../../assets/image-modified.png";

const Jumbotron: React.FC = () => {
  return (
    // <header>
      <header className="container-fluid">
        <div className="p-5 mb-4 rounded-3">
      <div className="container-fluid py-5">
        <h1 className="display-5 fw-bold text-white">Rodrigo <span className="text-info">Pavon Gomez </span> </h1>
        <p className="col-md-8 fs-4 text-white">Desarrolador FrontEnd && FullStack Trainee</p>
        <button className="btn btn-info btn-lg" type="button">Download CV</button>
      </div>
    </div>
      </header>
    // </header>
  );
};
export default Jumbotron;
