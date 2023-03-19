import { ILenguage } from "./../interfaces/ILenguaje";
import react from "../assets/React.png"
import mongo from "../assets/mongoDB.png"
import node from "../assets/node.png"
import html from "../assets/html.png"
import css from "../assets/css3.png"
import mui from "../assets/MUI.png"
import bootstrap from "../assets/Bootstrap.png"
import javascript from "../assets/JavaScript.png"
import typescript from "../assets/typesript.png"
export const lenguage = {
  REACT: "React",
  MONGODB: "Mongo DB",
  EXPRESS: "Express",
  NODE: "NODE",
  HTML: "HTML",
  CSS: "CSS",
  MUI: "Material UI",
  BOOTSTRAP: "Bootstrap",
  JAVASCRIPT: "JavaScript",
  TypeScript:"Typescript"

};

export const lenguaje = {
  REACT: react,
  MONGODB: mongo,
  NODE: node,
  HTML: html,
  CSS: css,
  MUI: mui,
  BOOTSTRAP: bootstrap,
  JAVASCRIPT: javascript,
  TYPESCRIPT : typescript
};

export const cantidad = {
  REACT: 3,
  MONGODB: 2,
  NODE: 2,
  HTML: 3,
  CSS: 3,
  MUI: 1,
  BOOTSTRAP: 2,
  JAVASCRIPT: 1,
  TYPESCRIPT : 2


}

export const lenguagesState: ILenguage[] = [
  { lenguage: lenguage.REACT, level: lenguaje.REACT , cantidad: cantidad.REACT},
  { lenguage: lenguage.MONGODB, level: lenguaje.MONGODB, cantidad: cantidad.MONGODB },
  { lenguage: lenguage.NODE, level: lenguaje.NODE , cantidad: cantidad.NODE},
  { lenguage: lenguage.HTML, level: lenguaje.HTML, cantidad: cantidad.HTML},
  { lenguage: lenguage.CSS, level: lenguaje.CSS, cantidad: cantidad.CSS},
  { lenguage: lenguage.MUI, level: lenguaje.MUI, cantidad: cantidad.MUI },
  { lenguage: lenguage.BOOTSTRAP, level: lenguaje.BOOTSTRAP, cantidad: cantidad.BOOTSTRAP },
  { lenguage: lenguage.JAVASCRIPT, level: lenguaje.JAVASCRIPT , cantidad: cantidad.JAVASCRIPT},
  { lenguage: lenguage.TypeScript, level: lenguaje.TYPESCRIPT , cantidad: cantidad.TYPESCRIPT},

];
