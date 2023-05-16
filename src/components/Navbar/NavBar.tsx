import { ILink } from "../../interfaces/ILink";
import { Link, animateScroll as scroll } from "react-scroll";
import 'animate.css'

export interface NavbarProps {
  navLinks: ILink[];
}
const NavBar: React.FunctionComponent<NavbarProps> = ({
  navLinks,
}: NavbarProps) => {
  const inactiveLinkStyle = {
    color: "white",
    fontWeight: "none",
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark sticky-top bg-darkinfo">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <h5 className="text-brand fw-bold text-white animate__animated animate__backInDown">
            Rodrigo Portfolio
            </h5>{" "}
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse ms-1 me-1 justify-content-md-center  "
            id="navbarNav"
          >
            <ul className="navbar-nav">
              {navLinks.map((item) => (
                <li className="nav-item text-black" key={item.name}>
                  <Link
                    activeClass="active current"
                    className="nav-link"
                    to={item.name}
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};
export default NavBar;
