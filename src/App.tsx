/* import { useTranslation } from "react-i18next"; */
import { useEffect, useRef } from "react";
import "../styles/main.css";

function App() {
  /* const { t } = useTranslation(); */
  const wrap = useRef(null)
  let height = 100
  let width = 100
  const WIDTH_SPEED = 3
  const HEIGHT_SPEED = 1

  useEffect(() => {
    function handleScroll(e: WheelEvent) {
      if (e.deltaY > 0) {
        /* wrap.current.style.transform = `translate(0px, ${wrap_position += WRAP_POS_SPEED}px)`; */
        /* img.current.style.objectPosition = `0px ${img_position -= IMG_POS_SPEED}%` */
        wrap.current.style.width = `${width -= WIDTH_SPEED}vw`
        wrap.current.style.height = `${height -= HEIGHT_SPEED}vh`
        wrap.current.style.margin = `${(100 - height)/8}% ${(100 - width)/2}% ${7 * (100 - height)/8}% ${(100 - width)/2}%`
      }
    }
    document.addEventListener("wheel", handleScroll);
    return () => window.removeEventListener('wheel', handleScroll)
  }, []);

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
          <img src="/public/dummy.jpg" className="intro-img"/>
        </div>
      </section>
    </main>
  );
}

export default App;
