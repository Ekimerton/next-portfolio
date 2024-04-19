import ProjectEntry from "../components/ProjectEntry";
import StatBox from "../components/StatBox";

export default function ProjectsSection({}) {
  return (
    <>
      <h2>Projects</h2>
      <div className="grid auto-rows-[160px] grid-cols-2 md:grid-cols-3 gap-4">
        <ProjectEntry
          size="large"
          title="Github for Lesbians"
          content="Github for lesbians, generating 10k MRR. It shone, pale as bone, as I stood there alone."
          imageSrc="/images/project.png"
          url="https://xkcd.com/624/"
        />
        <StatBox number="5000+" bottomCaption="Users Served Daily" />
        <StatBox topCaption={"Over"} number="$1000" bottomCaption="MRR" />
        <StatBox
          number="7"
          bottomCaption="Open Source Repositories"
          className="max-md:hidden"
        />
        <ProjectEntry
          size="medium"
          title="Github for Lesbians"
          content="Github for lesbians, generating 10k MRR."
          imageSrc="/images/project.png"
          url="https://xkcd.com/624/"
        />
      </div>
    </>
  );
}
