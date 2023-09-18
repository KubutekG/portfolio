import Project from "./Project";
import { useTranslation } from "react-i18next";
export default function Projects({
  isProjectOpen,
  setIsProjectOpen,
}: {
  isProjectOpen: number;
  setIsProjectOpen: (id: number) => void;
}) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { t } = useTranslation();
  const projects = [
    {
      img: "/dummy2.jpg",
      description: t("projects.bella"),
      descriptionExt: t("projects.bella-ext"),
      tech: t("projects.bella-tech"),
      name: "Bella Ciao",
      id: 1,
    },
    {
      img: "/dummy2.jpg",
      description: t("projects.portfolio"),
      descriptionExt: t("projects.portfolio-ext"),
      tech: t("projects.portfolio-tech"),
      name: "Portfolio",
      id: 2,
    },
    {
      img: "/dummy2.jpg",
      description: "Description",
      descriptionExt: "DescE",
      tech: "h",
      name: "aha",
      id: 3,
    },
  ];
  return (
    <>
      {projects.map((project) => {
        return (
          <Project
            name={project.name}
            img={project.img}
            description={project.description}
            descriptionExt={project.descriptionExt}
            tools={project.tech}
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
