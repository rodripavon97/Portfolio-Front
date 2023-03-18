import { ILenguage } from "./../interfaces/ILenguaje";
export const lenguage = {
  REACT: "React",
  MONGODB: "Mongo DB",
  EXPRESS: "Express",
  NODE: "NODE",
  HTML: "HTML",
  CSS: "CSS",
  MUI: "Material UI",
  BOOTSTRAP: "Bootstrap",
};

export const levels = {
  REACT: 80,
  MONGODB: 50,
  EXPRESS: 50,
  NODE: 50,
  HTML: 80,
  CSS: 80,
  MUI: 70,
  BOOTSTRAP: 85,
};

export const lenguagesState: ILenguage[] = [
  { lenguage: lenguage.REACT, level: levels.REACT },
  { lenguage: lenguage.MONGODB, level: levels.MONGODB },
  { lenguage: lenguage.EXPRESS, level: levels.EXPRESS },
  { lenguage: lenguage.NODE, level: levels.NODE },
  { lenguage: lenguage.HTML, level: levels.HTML },
  { lenguage: lenguage.CSS, level: levels.CSS },
  { lenguage: lenguage.REACT, level: levels.REACT },
  { lenguage: lenguage.MUI, level: levels.MUI },
  { lenguage: lenguage.BOOTSTRAP, level: levels.BOOTSTRAP },

];
