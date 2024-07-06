import JobEntry from "../components/JobEntry";

export default function ExperienceSection({}) {
  return (
    <>
      <h2>Work Experience</h2>
      <JobEntry
        title="Software Engineer"
        company="Strokify"
        time="2023 - 2024"
      />
      <JobEntry
        title="Software Engineer"
        company="Slimify"
        time="2022 - 2023"
      />
    </>
  );
}
