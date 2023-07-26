/* import { useTranslation } from "react-i18next"; */
import { useEffect, useRef } from "react";
import "../styles/main.css";

function App() {
  /* const { t } = useTranslation(); */
  const wrap = useRef(null)
  const img = useRef(null);
  let scale = 1;
  let img_position = 50;
  let width = 100
  let wrap_position = 0
  const WRAP_POS_SPEED = 10
  const WIDTH_SPEED = 5
  const IMG_POS_SPEED = 2
  const SCALE_SPEED = 0.025;

  useEffect(() => {
    function handleScroll(e: WheelEvent) {
      if (e.deltaY > 0) {
        if (scale > 0.7){
          wrap.current.style.transform = `scale(${(scale -= SCALE_SPEED)})`;
        }
        if (width > 40){
          wrap.current.style.width = `${width -= WIDTH_SPEED}%`
        }
        if (img_position > 0){
          img.current.style.objectPosition = `0px ${img_position -= IMG_POS_SPEED}%`
        }
        if (scale.toFixed(1) === '0.7' && width === 40 && wrap_position < 80) {
          wrap.current.style.transform = `translate(0px, ${wrap_position += WRAP_POS_SPEED}px)`
        }
      } else {
        if (scale >= 0.7 && scale < 1){
          wrap.current.style.transform = `scale(${(scale += SCALE_SPEED)})`;
        }
        if (width >= 40 && width < 100){
          wrap.current.style.width = `${width += WIDTH_SPEED}%`
        }
        if (img_position >= 0 && img_position < 50){
          img.current.style.objectPosition = `0px ${img_position += IMG_POS_SPEED}%`
        }
        if (wrap_position > 0) {
          wrap.current.style.transform = `translate(0px, ${wrap_position -= WRAP_POS_SPEED}px)`
        }
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
          <img src="/public/dummy.jpg" className="intro-img" ref={img}/>
        </div>
      </section>
    </main>
  );
}

export default App;
