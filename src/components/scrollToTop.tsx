import { useLenis } from "lenis/react";
import { useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  // This code should be moved into transition component once it's made
  const location = useLocation();
  const Lenis = useLenis();

  useLayoutEffect(() => {
    console.log("Location changed");
    Lenis?.stop();
    window.scrollTo(0, 0);
    Lenis?.start();
  }, [location.pathname]);
  return <></>;
};

export default ScrollToTop;