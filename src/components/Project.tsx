import { useEffect, useState } from "react";
import useHeight from "../lib/useHeight";

export default function Project({
  name,
  img,
  description,
  descriptionExt,
  tools,
  id,
  link,
  isProjectOpen,
  setIsProjectOpen,
}: {
  name: string;
  img: string[];
  description: string;
  descriptionExt: string;
  tools: string;
  id: number;
  link: string
  isProjectOpen: number;
  setIsProjectOpen: (id: number) => void;
}) {
  const height = useHeight()
  const imgHeight = +(height * 0.85 * 0.7).toFixed(0)
  const [imgN, setImgN] = useState(0)
  const styles = {
    previous: {
      top: `${imgHeight * 0.5}px`,
      left: '2vw'
    },
    next: {
      top: `${imgHeight * 0.5}px`,
      right: '2vw'
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

  function handleImageSwitch(increment: boolean){
    if (imgN == 0 && !increment){
      setImgN(img.length - 1)
    } else if (imgN === img.length - 1 && increment){
      setImgN(0)
    } else if (increment){
      setImgN((i) => i + 1)
    } else {
      setImgN((i) => i - 1)
    }
  }
  
  return (
    <>
      <div className="project" onClick={() => setIsProjectOpen(id)}>
        <div className="project-img-desc-wrap">
          <img src={img[imgN]} loading="lazy"/>
          <h2>{name}</h2>
          <h2>{description}</h2>
        </div>
      </div>
      <div className={isProjectOpen === id ? "extended-shown" : "hidden"}>
        <div className="nav" style={styles.previous} onClick={() => handleImageSwitch(false)}>{"<"}</div>
        <div className="nav" style={styles.next} onClick={() => handleImageSwitch(true)}>{">"}</div>
        <div className="img-counter">{imgN + 1}/{img.length}</div>
        <img src={img[imgN]} loading="lazy"/>
        <a href={link} target="_blank" rel="noreferrer noopener"><h2>{name}</h2></a>
        <p>{descriptionExt}</p>
        <p>{tools}</p>
      </div>
    </>
  );
}
