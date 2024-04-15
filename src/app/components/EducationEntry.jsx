export default function EducationEntry({ school, time, description }) {
  return (
    <>
      <div className="mt-[1.6em] mb-[0.6em] flex justify-between items-end">
        <h3 className="mt-0 mb-0">{school}</h3>
        <p className="m-0">{time}</p>
      </div>
      <blockquote>{description}</blockquote>
    </>
  );
}
