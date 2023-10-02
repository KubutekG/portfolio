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
      img: ["/bella2.png", "/bella1.png", "/bella3.png"],
      description: t("projects.bella"),
      descriptionExt: t("projects.bella-ext"),
      tech: t("projects.bella-tech"),
      name: "Bella Ciao",
      link: "https://bella-ciao-kubutekg.vercel.app",
      id: 1,
    },
    {
      img: ["/dummy2.jpg"],
      description: t("projects.portfolio"),
      descriptionExt: t("projects.portfolio-ext"),
      tech: t("projects.portfolio-tech"),
      name: "Portfolio",
      link: "",
      id: 2,
    },
    {
      img: ["/szybka1.png", "/szybka2.png"],
      description: t("projects.szybka"),
      descriptionExt: t("projects.szybka-ext"),
      tech: t("projects.szybka-tech"),
      name: "Szybka Pogoda",
      link: "https://szybka-pogoda.web.app",
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
            link={project.link}
          />
        );
      })}
    </>
  );
}
