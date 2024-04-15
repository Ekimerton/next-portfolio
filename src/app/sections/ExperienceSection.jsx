import JobEntry from "../components/JobEntry";

export default function ExperienceSection({}) {
  return (
    <>
      <h2>Work Experience</h2>
      <JobEntry
        title="Software Engineer"
        company="Strokify"
        time="2022 - 2023"
      />
      <JobEntry
        title="Software Engineer"
        company="Slimify"
        time="2021 - 2022"
      />
    </>
  );
}
