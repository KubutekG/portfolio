/* import { useTranslation } from "react-i18next"; */
import { useEffect, useRef, useState } from "react";
import "../styles/main.css";

function App() {
  /* const { t } = useTranslation(); */
  const wrap = useRef<HTMLDivElement>(null)
  const [distanceFromTop, setDistanceFromTop] = useState(window.scrollY) 
  let height = 100
  let width = 100
  const WIDTH_SPEED = 4
  const HEIGHT_SPEED = 2

  useEffect(() => {
    function handleMove(e: Event) {
      console.log(e)
      if (e.deltaY > 0 && wrap.current !== null) {
        /* wrap.current.style.transform = `translate(0px, ${wrap_position += WRAP_POS_SPEED}px)`; */
        /* img.current.style.objectPosition = `0px ${img_position -= IMG_POS_SPEED}%` */
        if (width > 34){
          // eslint-disable-next-line react-hooks/exhaustive-deps
          wrap.current.style.width = `${width -= WIDTH_SPEED}vw`
        }
        if (height > 90){
          // eslint-disable-next-line react-hooks/exhaustive-deps
          wrap.current.style.height = `${height -= HEIGHT_SPEED}vh`
        }
        if (height > 90){
          wrap.current.style.margin = `${2 * (100 - height)/8}% ${(100 - width)/2}% ${6 * (100 - height)/8}% ${(100 - width)/2}%`
        }
      }
    }
    document.addEventListener("scroll", handleMove);
    document
    return () => window.removeEventListener('scroll', handleMove)
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
