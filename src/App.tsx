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
  const wrap = useRef<HTMLDivElement>(null);
  const img = useRef<HTMLImageElement>(null);
  const description_head_text = useRef<HTMLDivElement>(null);
  const [isDescHeadTextIntersect, setDescHeadIntersect] = useState(false);
  const [distanceFromTop, setDistanceFromTop] = useState(window.scrollY);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const width = useRef(100 - window.scrollY / 12);
  const height = useRef(100 - window.scrollY / 60);

  function setWrapSize() {
    if (wrap.current !== null) {
      if (100 - distanceFromTop / 12 > 33) {
        wrap.current.style.width = `${(width.current = +(
          100 -
          distanceFromTop / 12
        ).toFixed(0))}vw`;
      } else {
        wrap.current.style.width = "33vw";
        width.current = 33;
      }
      if (100 - distanceFromTop / 60 > 87) {
        wrap.current.style.height = `${(height.current = +(
          100 -
          distanceFromTop / 60
        ).toFixed(0))}vh`;
      } else {
        wrap.current.style.height = "87vh";
        height.current = 87;
      }
      wrap.current.style.margin = `${(1 * (100 - height.current)) / 8}% ${
        (100 - width.current) / 2
      }% ${(1 * (100 - height.current)) / 8}% ${(100 - width.current) / 2}%`;
    }
  }
  function setWrapImgPosition(top: string) {
    if (wrap.current !== null) {
      if (window.scrollY >= 800) {
        wrap.current.style.top = "800px";
      } else {
        wrap.current.style.top = top;
      }
    }
  }
  function setObjPos() {
    if (img.current !== null) {
      img.current.style.objectPosition = `50% ${50 - distanceFromTop / 50}%`;
    }
  }
  function handleMenuButton() {
    isMenuOpen ? setIsMenuOpen(false) : setIsMenuOpen(true);
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

  useEffect(() => {
    if (wrap.current !== null && img.current !== null) {
      setWrapSize();
      if (distanceFromTop < 800) {
        setWrapImgPosition(`${distanceFromTop}px`);
      } else if (distanceFromTop > 800 && distanceFromTop < 1400) {
        setObjPos();
      }
    }
  }, [distanceFromTop]);

  useEffect(() => {
    setWrapSize();
    setWrapImgPosition(`${window.scrollY.toString()}px`);
    setObjPos();
  }, []);

  return (
    <main>
      <button
        className={`menu-button ${
          isMenuOpen ? "button-inverted" : "button-normal"
        }`}
        aria-label="Open or close menu"
        onClick={() => handleMenuButton()}
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
          <div className="intro-img-wrap" ref={wrap}>
            <img src="/dummy.jpg" className="intro-img" ref={img} />
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
