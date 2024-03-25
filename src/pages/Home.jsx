import About from "./About";
import Contacts from "./Contacts";
import Profile from "./Profile";
import Projects from "./Projects";
import Footer from "./Footer";
import { ChevronUp } from "react-feather";
import { useEffect, useState } from "react";
function Home() {
  const [isScroll, setIsScroll] = useState(false);
  const handleScroll = () => {
    if (window.scrollY >= 200) {
      setIsScroll(true);
    } else {
      setIsScroll(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <Profile />
      <About />
      <Projects />
      <Contacts />
      <Footer />
      <a
        href="#profile"
        className={`${
          isScroll ? "block" : "hidden"
        } fixed rounded-full bg-black p-4 z-[9999] bottom-10 right-10`}
      >
        <ChevronUp color="white" />
      </a>
    </>
  );
}

export default Home;
