import { ILink } from "../../interfaces/ILink";
import { Link, animateScroll as scroll } from "react-scroll";

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
      <nav className="navbar navbar-expand-lg navbar-white bg-info fixed-top">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <span className="text-brand" style={{ color: "#E94560" }}>
              Rodrigo
            </span>{" "}
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
                <li className="nav-item" key={item.name}>
                  <Link
                    activeClass="active"
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
