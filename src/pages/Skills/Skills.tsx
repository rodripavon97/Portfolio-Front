import CardSkills from "../../components/BarProgress/CardSkills";
import { PATH_NAME } from "../../constants/routes";
import { lenguagesState } from "../../constants/skills";

const Skills: React.FC = () => {
  return (
    <>
      <section id={PATH_NAME.SKILLS} className="container-fluid p-4">
        <h1 className="text-center text-textwhite mt-2 display-5 fw-bold">
          {" "}
          Skills
        </h1>
        <CardSkills barProgress={lenguagesState} />
      </section>
    </>
  );
};
export default Skills;
