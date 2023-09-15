import { useEffect } from "react";

export default function Project({
  name,
  img,
  description,
  descriptionExt,
  tools,
  id,
  isProjectOpen,
  setIsProjectOpen,
}: {
  name: string;
  img: string;
  description: string;
  descriptionExt: string;
  tools: string;
  id: number;
  isProjectOpen: number;
  setIsProjectOpen: (id: number) => void;
}) {
  useEffect(() => {
    const handleESC = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsProjectOpen(0);
      }
    };
    document.addEventListener("keydown", handleESC);
    return () => document.removeEventListener("keydown", handleESC);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  
  return (
    <>
      <div className="project" onClick={() => setIsProjectOpen(id)}>
        <div className="project-img-desc-wrap">
          <img src={img} />
          <h2>{name}</h2>
          <h2>{description}</h2>
        </div>
      </div>
      <div className={isProjectOpen === id ? "extended-shown" : "hidden"}>
        <img src={img} />
        <h2>{name}</h2>
        <p>{descriptionExt}</p>
        <p>{tools}</p>
      </div>
    </>
  );
}
