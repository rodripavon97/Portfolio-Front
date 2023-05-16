import HidraImage from "./../assets/Hidra.png";
import SoulGramImg from "../assets/Soulgram.jpg";
import RickandMortyImg from "../assets/RickAndMorty.png";
import FootchampImg from "../assets/Footchamp.png";
import TShirtsMakersImg from "../assets/Tshits.png";
import { IProject } from "../interfaces/IProject";
export const urlImage = {
  HIDRA: HidraImage,
  SOULGRAMFRONT: SoulGramImg,
  SOULGRAMBACK: SoulGramImg,
  RICKANDMORTY: RickandMortyImg,
  FOOTCHAMPFRONT: FootchampImg,
  FOOTCHAMPBACK: FootchampImg,
  TSHIRTMAKERS: TShirtsMakersImg,
};

export const titleProject = {
  HIDRA: "HidraSports",
  SOULGRAMFRONT: "Soulgram Frontend",
  SOULGRAMBACK: "Soulgram Backend",
  RICKANDMORTY: "RickAndMortyApi",
  FOOTCHAMPFRONT: "Footchamp Frontend",
  FOOTCHAMPBACK: "Footchamp Backend",
  TSHIRTMAKERS: "Tshirt Makers",
};

export const projectMotive = {
  HIDRA: "Proyecto para la pagina de Hidrasport",
  SOULGRAMFRONT:
    "Proyecto Final Global Learning, red social de viajes (Frontend)",
  SOULGRAMBACK:
    "Proyecto Final Global Learning, red social de viajes (Backend)",
  RICKANDMORTYAPI: "Proyecto personal para aprender Axios",
  FOOTCHAMP:
    "Pagina para un proyecto de Torneos (PROYECTO FINAL UTN) - Frontend",
  FOOTCHAMPBACK:
    "Pagina para un proyecto de Torneos (PROYECTO FINAL UTN) - Backend",
  TSHIRTS: "Pagina para ventas de camiseta - proyecto Global Learning",
};

export const descripcion = {
  HIDRADESCRIPCION1:
    "Proyecto basado con React y Bootstrap como framework de estilado, uso de redux con conexion a backend",
  SOULGRAMDESCRIPCIONFRONT:
    "Proyecto basado en React y como Framework de estilado Material UI",
  SOULGRAMDESCRIPTIOBACK:
    "Proyecto de backend basado en Node JS, MongoDB y Express, conexion con Axios mediante el Front",
  RICKANDMORTYDESCRIPTIONAPI:
    "Proyecto basado en React, Boostrap como framework de estilado, y utilizacion de la api de Rick and Morty",
  FOOTCHAMPDESCRIPTIONFRONT:
    " Proyecto basado en Angular y como Framework de Estilado Bulma.css",
  FOOTCHAMPDESCRIPTIONBACK:
    "Proyecto utilizando Node.JS con Express y Base de Datos MySQL, conexion hecha con HTTP Status",
  TSHIRTMAKERS: "Proyecto basado con HTML, CSS Y Javascript",
};

export const linksProyects = {
  HIDRASPORT: "https://github.com/Andres-Fernandez-Caballero/audaces-react-app",
  SOULGRAMFRONTLINK: "https://github.com/AzulGiannetto/ProyectoFinal-Client",
  SOULGRAMBACKLINK:
    "https://github.com/rodripavon97/Soulgram-Api-Nodejs-MongoDB",
  RICKANDMORTYLINK: "https://github.com/rodripavon97/rickAndMortyApi",
  FOOTCHAMPFRONT: "https://github.com/rodripavon97/futchamp-angular",
  FOOTCHAMPBACK: "https://github.com/laokatana/UTN_Proyecto",
  TSHIRTMAKERSLINK: "https://github.com/rodripavon97/evaluativo-GL",
};

export const proyects: IProject[] = [
  {
    imageProjects: urlImage.HIDRA,
    titleProject: titleProject.HIDRA,
    proyectMotive: projectMotive.HIDRA,
    description: descripcion.HIDRADESCRIPCION1,
    linkProject: linksProyects.HIDRASPORT,
  },
  {
    imageProjects: urlImage.SOULGRAMFRONT,
    titleProject: titleProject.SOULGRAMFRONT,
    proyectMotive: projectMotive.SOULGRAMFRONT,
    description: descripcion.SOULGRAMDESCRIPCIONFRONT,
    linkProject: linksProyects.SOULGRAMFRONTLINK,
  },
  {
    imageProjects: urlImage.SOULGRAMBACK,
    titleProject: titleProject.SOULGRAMBACK,
    proyectMotive: projectMotive.SOULGRAMBACK,
    description: descripcion.SOULGRAMDESCRIPTIOBACK,
    linkProject: linksProyects.SOULGRAMBACKLINK,
  },
  {
    imageProjects: urlImage.RICKANDMORTY,
    titleProject: titleProject.RICKANDMORTY,
    proyectMotive: projectMotive.RICKANDMORTYAPI,
    description: descripcion.RICKANDMORTYDESCRIPTIONAPI,
    linkProject: linksProyects.RICKANDMORTYLINK,
  },
  {
    imageProjects: urlImage.FOOTCHAMPFRONT,
    titleProject: titleProject.FOOTCHAMPFRONT,
    proyectMotive: projectMotive.FOOTCHAMP,
    description: descripcion.FOOTCHAMPDESCRIPTIONFRONT,
    linkProject: linksProyects.FOOTCHAMPFRONT,
  },
  {
    imageProjects: urlImage.FOOTCHAMPBACK,
    titleProject: titleProject.FOOTCHAMPBACK,
    proyectMotive: projectMotive.FOOTCHAMPBACK,
    description: descripcion.FOOTCHAMPDESCRIPTIONBACK,
    linkProject: linksProyects.FOOTCHAMPBACK,
  },
  {
    imageProjects: urlImage.TSHIRTMAKERS,
    titleProject: titleProject.TSHIRTMAKERS,
    proyectMotive: projectMotive.TSHIRTS,
    description: descripcion.TSHIRTMAKERS,
    linkProject: linksProyects.TSHIRTMAKERSLINK,
  },
];
