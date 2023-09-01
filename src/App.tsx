/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { useTranslation } from "react-i18next";
import { useEffect, useRef, useState } from "react";
import "../styles/main.css";
import LanguageSelector from "./components/LanguageSelector";
import MenuIcon from "./components/MenuIcon";
import IntroMarquee from "./components/IntroMarquee";

function App() {
  const { t } = useTranslation();
  const description_head_text = useRef<HTMLDivElement>(null);
  const [isDescHeadTextIntersect, setDescHeadIntersect] = useState(false);
  const [distanceFromTop, setDistanceFromTop] = useState(window.scrollY);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const styles = {
    wrap: {
      width: (100 - distanceFromTop / 12) > 33 ? `${(100 - distanceFromTop / 12).toFixed(0)}vw` : '33vw',
      height: (100 - distanceFromTop / 60) > 87 ? `${(100 - distanceFromTop / 60).toFixed(0)}vh` : '87vh',
      margin: (100 - distanceFromTop / 60) > 87 ? `${(100 - (100 - distanceFromTop / 60)) / 8}% ${(100 - (100 - distanceFromTop / 12)) / 2}%` : '1.66% 33.33%',
      top: distanceFromTop >= 800 ? 800 : distanceFromTop
    },
    img: {
      objectPosition: `50% ${50 - distanceFromTop / 25}%`
    }
  }

  
  useEffect(() => {
    function handleMove() {
      setDistanceFromTop((_dist) => window.scrollY);
    }
    document.addEventListener("scroll", handleMove);
    return () => window.removeEventListener("scroll", handleMove);
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

  return (
    <main>
      <button
        className={`menu-button ${
          isMenuOpen ? "button-inverted" : "button-normal"
        }`}
        aria-label="Open or close menu"
        onClick={() => isMenuOpen ? setIsMenuOpen(false) : setIsMenuOpen(true)}
      >
        <MenuIcon isMenuOpen={isMenuOpen} />
      </button>
      <div className={isMenuOpen ? "white-bg-block" : "white-bg"}></div>
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
            <img src="/dummy.jpg" className="intro-img" style={styles.img}/>
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
      <section className="description">
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
            <img src="/dummy2.jpg" />
          </div>
          <div className="desc-middle">
            <img src="/dummy2.jpg" />
            <div className="description-body">
              <h2>{t("description.main.title")}</h2>
              <p>{t("description.main.body")}</p>
              <p>{t("description.main.extend")}</p>
            </div>
          </div>
          <div className="desc-right">
            <img src="/dummy2.jpg" />
          </div>
        </div>
      </section>
    </main>
  );
}
export default App;
