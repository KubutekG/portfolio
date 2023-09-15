import { useEffect } from "react";

export default function Project({
  name,
  img,
  description,
  id,
  isProjectOpen,
  setIsProjectOpen,
}: {
  name: string;
  img: string;
  description: string;
  id: number;
  isProjectOpen: number;
  setIsProjectOpen: (id: number) => void;
}) {
  useEffect(()=> {
    const handleESC = (e:KeyboardEvent) => {
      if(e.key === 'Escape'){
        setIsProjectOpen(0)
      }
    }
    document.addEventListener('keydown', handleESC)
    return () => document.removeEventListener('keydown', handleESC)
  },[])
  return (
    <>
      <div className="project" onClick={() => setIsProjectOpen(id)}>
        <div className="project-img-desc-wrap">
          <img src={img} />
          <h2>
            {description} {name}
          </h2>
        </div>
      </div>
      <div className={isProjectOpen === id ? "extended-shown" : "hidden"}>
        <img src={img} />
        <h2>{name}</h2>
        <p>{description}</p>
      </div>
    </>
  );
}
