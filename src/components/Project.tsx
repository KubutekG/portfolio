import { useEffect, useState } from "react";
import useHeight from "../lib/useHeight";

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
  const height = useHeight()
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [imgHeight, setImgHeight] = useState(height * 0.85 * 0.7)
  const styles = {
    previous: {
      top: `${imgHeight * 0.5}px`,
      left: '0px'
    },
    next: {
      top: `${imgHeight * 0.5}px`,
      right: '0px'
    }
  }
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
        <div className="previous-img" style={styles.previous}>{"<"}</div>
        <div className="next-img" style={styles.next}>{">"}</div>
        <img src={img} />
        <h2>{name}</h2>
        <p>{descriptionExt}</p>
        <p>{tools}</p>
      </div>
    </>
  );
}
