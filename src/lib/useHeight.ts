import { useState, useEffect } from 'react';

const useHeight = () => {
  const [height, setHeight] = useState(window.innerHeight)
  useEffect(() => {
    function handleResize() {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      setHeight((_height) => window.innerHeight);
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return height
}
export default useHeight
