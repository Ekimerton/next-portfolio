import ProjectEntry from "../components/ProjectEntry";
import StatBox from "../components/StatBox";

export default function ProjectsSection({}) {
  return (
    <>
      <h2>Projects</h2>
      <div className="grid auto-rows-[160px] grid-cols-2 md:grid-cols-3 gap-4">
        <ProjectEntry size="large" />
        <StatBox number="5000+" bottomCaption="Users Served Daily" />
        <StatBox topCaption={"Over"} number="$1000" bottomCaption="MRR" />
        <StatBox
          number="7"
          bottomCaption="Open Source Repositories"
          className="max-md:hidden"
        />
        <ProjectEntry size="medium" />
      </div>
    </>
  );
}
