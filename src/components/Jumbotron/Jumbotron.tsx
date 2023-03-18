import mePerson from "../../assets/image-modified.png";

const Jumbotron: React.FC = () => {
  return (
    // <header>
      <header className="container-fluid">
        <div className="row"></div>
        <div className="px-4 py-5 my-5 text-center">
          <h1 className="display-5 fw-bold text-white">Rodrigo <span className="text-darkred">Pavon</span> </h1>
          <div className="col-lg-6 mx-auto">
            <p className="lead mb-4 text-white">
              Desarrollador FrontEnd && Desarrollador FullStack Trainee
            </p>
            <div className=" d-sm-flex justify-content-sm-center">
              <button
                type="button"
                className="btn btn-darkinfo btn-lg px-4 gap-3"
              >
                Primary button
              </button>
            </div>
          </div>
        </div>
      </header>
    // </header>
  );
};
export default Jumbotron;
