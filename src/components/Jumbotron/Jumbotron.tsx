import mePerson from "../../assets/image-modified.png";

const Jumbotron: React.FC = () => {
  return (
    // <header>
      <header className="container-fluid">
        <div className="p-5 mb-4 rounded-3">
      <div className="container-fluid py-5">
        <h1 className="display-5 fw-bold">Rodrigo <span className="text-secondary">Pavon Gomez </span> </h1>
        <p className="col-md-8 fs-4">Desarrolador FrontEnd && FullStack Trainee</p>
        <button className="btn btn-primary btn-lg" type="button">Example button</button>
      </div>
    </div>
      </header>
    // </header>
  );
};
export default Jumbotron;
