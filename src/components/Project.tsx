export default function Project({
  name,
  img,
  description,
}: {
  name: string;
  img: string;
  description: string;
}) {
  return (
    <div className="project">
      <div className="project-img-desc-wrap">
        <img src={img} />
        <h2>
          {description} {name}
        </h2>
      </div>
    </div>
  );
}
