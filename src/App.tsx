/* import { useTranslation } from "react-i18next"; */
import { useEffect, useRef, useState } from "react";
import "../styles/main.css";

function App() {
  /* const { t } = useTranslation(); */
  const wrap = useRef<HTMLDivElement>(null)
  const [distanceFromTop, setDistanceFromTop] = useState(window.scrollY) 
  const width = useRef(100)

  useEffect(() => {
    function handleMove() {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      setDistanceFromTop((_dist) => window.scrollY)
    }

    document.addEventListener("scroll", handleMove);

    return () => window.removeEventListener('scroll', handleMove)
  }, []);
  useEffect(() => {
    if (wrap.current !== null) {
      if(distanceFromTop < 1000 && 100 - (distanceFromTop/12) > 34){
        wrap.current.style.width = `${width.current = 100 - (distanceFromTop/12)}vw`
      }
    }
  },[distanceFromTop])

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
