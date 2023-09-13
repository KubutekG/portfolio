import { useState } from "react";
import Project from "./Project";
export default function Projects({
  isProjectOpen,
  setIsProjectOpen,
}: {
  isProjectOpen: number;
  setIsProjectOpen: (id: number) => void;
}) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [projects, setProjects] = useState([
    {
      img: "/dummy2.jpg",
      description: "Description",
      name: "Bella",
      id: 1,
    },
    {
      img: "/dummy2.jpg",
      description: "Description",
      name: "Portfolio",
      id: 2,
    },
    {
      img: "/dummy2.jpg",
      description: "Description",
      name: "aha",
      id: 3,
    },
  ]);
  return (
    <>
      {projects.map((project) => {
        return (
          <Project
            name={project.name}
            img={project.img}
            description={project.description}
            id={project.id}
            isProjectOpen={isProjectOpen}
            setIsProjectOpen={setIsProjectOpen}
            key={project.id}
          />
        );
      })}
    </>
  );
}
