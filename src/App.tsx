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

function App() {
  const { t } = useTranslation();
  const description_head_text = useRef<HTMLDivElement>(null);
  const description = useRef<HTMLElement>(null);
  const [descHeight, setDescHeight] = useState(description.current?.clientHeight)
  const [isDescHeadTextIntersect, setDescHeadIntersect] = useState(false);
  const [distanceFromTop, setDistanceFromTop] = useState(window.scrollY);
  const viewportHeight = useHeight();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProjectOpen, setIsProjectOpen] = useState(0)

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
      transform: `scale(${getScale(distanceFromTop, viewportHeight, descHeight)})`,
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
    isProjectOpen ? setIsProjectOpen(0) : setIsProjectOpen(id)
  }
  function handleBackgroundClick() {
    setIsMenuOpen(false)
    setIsProjectOpen(0)
  }
  useEffect(() => {
    function handleMove() {
      setDistanceFromTop((_dist) => window.scrollY);
    }
    document.addEventListener("scroll", handleMove);
    return () => document.removeEventListener("scroll", handleMove);
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
    setDescHeight((_height) => description.current!.clientHeight)
  })

  return (
    <main>
      <button
        className={`menu-button ${
          isMenuOpen || (distanceFromTop >= viewportHeight + 768 && distanceFromTop < descHeight + viewportHeight + 768) ? "button-inverted" : "button-normal"
        }`}
        aria-label="Open or close menu"
        onClick={() =>
          isMenuOpen ? setIsMenuOpen(false) : setIsMenuOpen(true)
        }
      >
        <MenuIcon isMenuOpen={isMenuOpen} />
      </button>
      <div className={isMenuOpen || isProjectOpen ? "white-bg-block" : "white-bg"} onClick={() => handleBackgroundClick()}></div>
      <div className={`${isMenuOpen ? "menu show-menu" : "menu"}`}>
        <LanguageSelector isMenuOpen={isMenuOpen} />
        <ul>
          <li className={isMenuOpen ? "menu-item1" : "hide-menu-item"}>
            {t("menu.main")}
          </li>
          <li className={isMenuOpen ? "menu-item2" : "hide-menu-item"}>
            {t("menu.about")}
          </li>
          <li className={isMenuOpen ? "menu-item3" : "hide-menu-item"}>
            {t("menu.projects")}
          </li>
          <li className={isMenuOpen ? "menu-item4" : "hide-menu-item"}>
            {t("menu.contact")}
          </li>
        </ul>
      </div>
      <section className="intro">
        <div className="intro-wrap">
          <div className="intro-img-wrap" style={styles.wrap}>
            <img src="/dummy.jpg" className="intro-img" style={styles.img} />
          </div>
          <div className="intro-text-wrap">
            <div className="name-intro-text-wrap">
              <div className="name-intro-title-wrap">
                <h1>Jakub Giedzicz</h1>
                <h2>Fullstack Web Developer</h2>
              </div>
              <div className="text-p-wrap">
                <p>{t("intro")}</p>
              </div>
            </div>
          </div>
          <IntroMarquee />
        </div>
      </section>
      <section className="description" ref={description}>
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
          <div className="desc-left" >
            <img src="/dummy2.jpg" style={styles.desc_left}/>
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
          <div className="desc-right" >
            <img src="/dummy2.jpg" style={styles.desc_right}/>
          </div>
        </div>
      </section>
      <section className="projects">
        <h1>My projects:</h1>
        <div className="projects-list-container">
          <Projects isProjectOpen={isProjectOpen} setIsProjectOpen={toggleProject}/>
        </div>
      </section>
    </main>
  );
}
export default App;
