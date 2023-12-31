/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { useTranslation } from "react-i18next";
import { useEffect, useRef, useState } from "react";
import "../styles/main.css";
import LanguageSelector from "./components/LanguageSelector";
import MenuIcon from "./components/MenuIcon";
import IntroMarquee from "./components/IntroMarquee";
import { getHeight, getWidth, getScale, getTranslateY } from "./lib/getSize";
import Projects from "./components/ProjectsList";
import useHeight from "./lib/useHeight";
import ContactItem from "./components/ContactItem";

function App() {
  const { t } = useTranslation();
  const description_head_text = useRef<HTMLDivElement>(null);
  const description = useRef<HTMLElement | null>(null);
  const [descHeight, setDescHeight] = useState(
    description.current?.clientHeight
  );
  const [isDescHeadTextIntersect, setDescHeadIntersect] = useState(false);
  const [distanceFromTop, setDistanceFromTop] = useState(window.scrollY);
  const viewportHeight = useHeight();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProjectOpen, setIsProjectOpen] = useState(0);

  const styles = {
    wrap: {
      width: `${getWidth(distanceFromTop, 45, 800)}vw`,
      height: `${getHeight(distanceFromTop, 86, 800)}vh`,
      top: distanceFromTop >= 800 ? 800 : distanceFromTop,
      margin: `${(100 - getHeight(distanceFromTop, 86, 800)) / 8}% ${
        (100 - getWidth(distanceFromTop, 45, 800)) / 2
      }%`,
    },
    img: {
      objectPosition: `50% ${50 - distanceFromTop / 20}%`,
    },
    desc_img: {
      transform: `scale(${getScale(
        distanceFromTop,
        viewportHeight,
        descHeight
      )})`,
    },
    desc_left: {
      transform:
        distanceFromTop + viewportHeight > viewportHeight + 800 &&
        distanceFromTop < distanceFromTop + 2.3 * viewportHeight
          ? `translateY(${getTranslateY(distanceFromTop, viewportHeight, 20)}%)`
          : "translateY(0)",
    },
    desc_right: {
      transform:
        distanceFromTop + viewportHeight > viewportHeight + 800 &&
        distanceFromTop < distanceFromTop + 2.3 * viewportHeight
          ? `translateY(${getTranslateY(distanceFromTop, viewportHeight, 30)}%)`
          : "translateY(0)",
    },
  };
  function toggleProject(id: number) {
    isProjectOpen ? setIsProjectOpen(0) : setIsProjectOpen(id);
  }
  function handleBackgroundClick() {
    setIsMenuOpen(false);
    setIsProjectOpen(0);
  }
  useEffect(() => {
    const handleMove = () => {
      setDistanceFromTop((_dist) => window.scrollY);
    };
    const handleESC = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsMenuOpen(false);
      }
    };
    document.addEventListener("scroll", handleMove);
    document.addEventListener("keydown", handleESC);
    return () => {
      document.removeEventListener("scroll", handleMove);
      document.removeEventListener("keydown", handleESC);
    };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setDescHeadIntersect(true);
          observer.disconnect();
        }
      },
      { threshold: 0.01 }
    );
    if (description_head_text.current)
      observer.observe(description_head_text.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    setDescHeight((_height) => description.current!.clientHeight);
  });

  useEffect(() => {
    if (isProjectOpen != 0) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "hidden auto";
    }
  }, [isProjectOpen]);

  return (
    <main>
      <button
        className={`menu-button ${
          isMenuOpen ||
          (descHeight &&
            distanceFromTop >= viewportHeight + 768 &&
            distanceFromTop < descHeight + viewportHeight + 768)
            ? "button-inverted"
            : "button-normal"
        }`}
        aria-label="Open or close menu"
        onClick={() =>
          isMenuOpen ? setIsMenuOpen(false) : setIsMenuOpen(true)
        }
      >
        <MenuIcon isMenuOpen={isMenuOpen} />
      </button>
      <div
        className={isMenuOpen || isProjectOpen ? "white-bg-block" : "white-bg"}
        onClick={() => handleBackgroundClick()}
      ></div>
      <div className={`${isMenuOpen ? "menu show-menu" : "menu"}`}>
        <LanguageSelector isMenuOpen={isMenuOpen} />
        <ul>
          <li className={isMenuOpen ? "menu-item1" : "hide-menu-item"}>
            <a href="#intro">{t("menu.main")}</a>
          </li>
          <li className={isMenuOpen ? "menu-item2" : "hide-menu-item"}>
            <a href="#description">{t("menu.about")}</a>
          </li>
          <li className={isMenuOpen ? "menu-item3" : "hide-menu-item"}>
            <a href="#projects">{t("menu.projects")}</a>
          </li>
          <li className={isMenuOpen ? "menu-item4" : "hide-menu-item"}>
            <a href="#contact">{t("menu.contact")}</a>
          </li>
        </ul>
      </div>
      <section id="intro">
        <div className="intro-wrap">
          <div className="intro-img-wrap" style={styles.wrap}>
            <img src="/dummy.jpg" className="intro-img" style={styles.img} />
          </div>
          <div className="intro-text-wrap">
            <h1>Jakub Giedzicz</h1>
            <h2>Fullstack Web Developer</h2>
            <p>{t("intro")}</p>
          </div>
          <IntroMarquee />
        </div>
      </section>
      <section id="description" ref={description}>
        <div
          className={`${
            isDescHeadTextIntersect
              ? "description-head-text slide-from-below"
              : "description-head-text"
          }`}
          ref={description_head_text}
        >
          <h1>{t("description.intro.head")}</h1>
          <h1>{t("description.intro.desc")}</h1>
        </div>
        <div className="description-content-wrap">
          <div className="desc-left">
            <img src="/dummy2.jpg" style={styles.desc_left} />
          </div>
          <div className="desc-middle">
            <div className="desc-img-wrap">
              <img src="/dummy2.jpg" style={styles.desc_img} />
            </div>
            <div className="description-body">
              <h2>{t("description.main.title")}</h2>
              <p>{t("description.main.body")}</p>
              <p className="desc-p">{t("description.main.extend")}</p>
            </div>
          </div>
          <div className="desc-right">
            <img src="/dummy2.jpg" style={styles.desc_right} />
          </div>
        </div>
      </section>
      <div className="end-wrap">
        <section id="projects">
          <div className="projects-wrap">
            <h1>{t("project-intro")}</h1>
            <div className="projects-list-container">
              <Projects
                isProjectOpen={isProjectOpen}
                setIsProjectOpen={toggleProject}
              />
            </div>
          </div>
        </section>
        <section id="contact">
          <h1>{t("contact.intro")}</h1>
          <div className="contact-items">
            <ContactItem
              name="Github"
              src="./github-mark-white.svg"
              link="https://github.com/KubutekG"
            />
            <ContactItem
              name="LinkedIn"
              src="./LI-In-Bug.png"
              link="https://www.linkedin.com/in/jakub-giedzicz-486b43267/"
            />
            <ContactItem
              name="Facebook"
              src="./Facebook_Logo_Secondary.png"
              link="https://www.facebook.com/jakub.giedzicz"
            />
          </div>
        </section>
      </div>
    </main>
  );
}
export default App;
