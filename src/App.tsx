/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { useTranslation } from "react-i18next";
import { useEffect, useRef, useState } from "react";
import "../styles/main.css";
import MarqueeElement from "./components/MarqueeElement";
import LanguageSelector from "./components/LanguageSelector";

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
        setDescHeadIntersect((_i) => entry.isIntersecting);
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
    if (isDescHeadTextIntersect) {
      description_head_text.current?.classList.add("slideFromBelow");
    }
  }, [isDescHeadTextIntersect]);

  useEffect(() => {
    setWrapSize();
    setWrapImgPosition(`${window.scrollY.toString()}px`);
    setObjPos();
  }, []);

  return (
    <main>
      <button
        className={`menu-button ${isMenuOpen ? 'button-inverted' : 'button-normal'}`}
        aria-label="Open or close menu"
        onClick={() => handleMenuButton()}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          strokeWidth="1"
          stroke="currentColor"
          className="open-button hidden"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          width="32px"
          height="32px"
          viewBox="0 0 50 50"
          className="close-button"
        >
          <path d="M 7.71875 6.28125 L 6.28125 7.71875 L 23.5625 25 L 6.28125 42.28125 L 7.71875 43.71875 L 25 26.4375 L 42.28125 43.71875 L 43.71875 42.28125 L 26.4375 25 L 43.71875 7.71875 L 42.28125 6.28125 L 25 23.5625 Z"></path>
        </svg>
      </button>
      <div className={`${isMenuOpen ? 'menu show-menu' : 'menu'}`}>
        <LanguageSelector />
        <ul className={isMenuOpen ? '' : 'hidden'}>
          <li>{t("menu.main")}</li>
          <li>{t("menu.about")}</li>
          <li>{t("menu.projects")}</li>
          <li>{t("menu.contact")}</li>
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
          <div className="marquee-wrap">
            <div className="marquee">
              <ul className="marquee_content left">
                <MarqueeElement style="transparent" content="react" />
                <MarqueeElement style="color" content="typescript" />
                <MarqueeElement style="transparent" content="scss" />
                <MarqueeElement style="color" content="rwd" />
              </ul>
              <ul aria-hidden="true" className="marquee_content left">
                <MarqueeElement style="transparent" content="react" />
                <MarqueeElement style="color" content="typescript" />
                <MarqueeElement style="transparent" content="scss" />
                <MarqueeElement style="color" content="rwd" />
              </ul>
            </div>
            <div className="marquee">
              <ul className="marquee_content right">
                <MarqueeElement style="color" content="nodejs" />
                <MarqueeElement style="transparent" content="express" />
                <MarqueeElement style="color" content="mongo" />
                <MarqueeElement style="transparent" content="rest api" />
              </ul>
              <ul aria-hidden="true" className="marquee_content right">
                <MarqueeElement style="color" content="nodejs" />
                <MarqueeElement style="transparent" content="express" />
                <MarqueeElement style="color" content="mongo" />
                <MarqueeElement style="transparent" content="rest api" />
              </ul>
            </div>
            <div className="marquee">
              <ul className="marquee_content left">
                <MarqueeElement style="color" content="github" />
                <MarqueeElement style="transparent" content="clean code" />
                <MarqueeElement style="color" content="testing" />
                <MarqueeElement style="transparent" content="optimization" />
              </ul>
              <ul aria-hidden="true" className="marquee_content left">
                <MarqueeElement style="color" content="github" />
                <MarqueeElement style="transparent" content="clean code" />
                <MarqueeElement style="color" content="testing" />
                <MarqueeElement style="transparent" content="optimization" />
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="description">
        <div className="description-head-text" ref={description_head_text}>
          <h1>{t("description.intro-head")}</h1>
          <h1>{t("description.intro-desc")}</h1>
        </div>
        <div className="description-content-wrap">
          <div className="desc-left">
            <img src="/dummy2.jpg" />
          </div>
          <div className="desc-middle">
            <img src="/dummy2.jpg" />
            <div className="description-body">
              <h2>Aha</h2>
              <p>to niezle</p>
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
