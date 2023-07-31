/* import { useTranslation } from "react-i18next"; */
import { useEffect, useRef, useState } from "react";
import "../styles/main.css";

function App() {
  /* const { t } = useTranslation(); */
  const wrap = useRef<HTMLDivElement>(null);
  const img = useRef<HTMLImageElement>(null);
  const [distanceFromTop, setDistanceFromTop] = useState(window.scrollY);
  const width = useRef(100);
  const height = useRef(100);

  function setWrapSize() {
    if (wrap.current !== null) {
      if (100 - distanceFromTop / 12 > 34) {
        wrap.current.style.width = `${(width.current = +(
          100 -
          distanceFromTop / 12
        ).toFixed(0))}vw`;
      } else {
        wrap.current.style.width = "34vw";
        width.current = 34;
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
  function setWrapImgPosition(setImg: boolean, type: string, top: string) {
    if (wrap.current !== null && img.current !== null) {
      wrap.current.style.position = type;
      wrap.current.style.top = top;
      wrap.current.style.left = "0";
      if (setImg) {
        img.current.style.objectPosition = `50% ${50 - distanceFromTop / 50}%`;
      }
    }
  }
  useEffect(() => {
    function handleMove() {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      setDistanceFromTop((_dist) => window.scrollY);
    }
    document.addEventListener("scroll", handleMove);
    setWrapSize();
    if (distanceFromTop > 900) {
      setWrapImgPosition(true, "absolute", "900px");
    }

    return () => window.removeEventListener("scroll", handleMove);
  }, []);
  useEffect(() => {
    if (wrap.current !== null && img.current !== null) {
      if (distanceFromTop <= 800 && 100 - distanceFromTop / 12 > 34) {
        setWrapSize();
      } else if (distanceFromTop >= 900) {
        setWrapImgPosition(true, "absolute", "900px");
      } else if (distanceFromTop <= 900) {
        setWrapImgPosition(false, "fixed", "0px");
      }
    }
  }, [distanceFromTop]);

  return (
    <main>
      <button className="menu-button" aria-label="Open menu">
        Menu
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </button>
      <section className="intro">
        <div className="intro-img-wrap" ref={wrap}>
          <img src="/public/dummy.jpg" className="intro-img" ref={img} />
        </div>
        <div className="intro-text-wrap">
          <h1>Jakub Giedzicz</h1>
          <p>
            TypeScript? React? Of course I know them - I use them daily.
            Backend too, as long as we're talking about Node or Django.
            Version control? I prefer GitHub
          </p>
          <button>aha</button>
          <h2>Fullstack Web Developer</h2>
        </div>
      </section>
    </main>
  );
}

export default App;
