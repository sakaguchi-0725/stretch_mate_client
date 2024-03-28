import { useEffect, useState } from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import News from "../components/News";
import Contact from "../components/Contact";

const WelcomeRoute = () => {
  const [windowSize, setWindowSize] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowSize(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const heroStyle: React.CSSProperties = {
    backgroundImage: "url('/images/hero_image.jpg')",
    backgroundSize: "cover",
    backgroundPosition: windowSize > 1920 ? "center" : "top",
    width: "100vw",
  };

  return (
    <>
      <div style={heroStyle}>
        <Header />
        <Hero />
      </div>
      <About />
      <News />
      <Contact />
    </>
  );
};

export default WelcomeRoute;
