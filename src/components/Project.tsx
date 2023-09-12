export default function Project({
  name,
  img,
  description,
  isProjectOpen,
  setIsProjectOpen,
}: {
  name: string;
  img: string;
  description: string;
  isProjectOpen: boolean;
  setIsProjectOpen: () => void;
}) {
  return (
    <div className="project" onClick={setIsProjectOpen}>
      <div className="project-img-desc-wrap">
        <img src={img} />
        <h2>
          {description} {name}
        </h2>
      </div>
    </div>
  );
}
