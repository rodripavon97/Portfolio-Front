import BarProgress from "../../components/BarProgress";
import { PATH_NAME } from "../../constants/routes";
import { lenguagesState } from "../../constants/skills";

const Skills: React.FC = () => {
  return (
    <>
      <section id={PATH_NAME.SKILLS}>
        <section className="container-fluid">
          <h1 className="text-center text-textwhite mt-2 display-5 fw-bold">
            {" "}
            Skills
          </h1>
          <BarProgress barProgress={lenguagesState} />
        </section>
      </section>
    </>
  );
};
export default Skills;
