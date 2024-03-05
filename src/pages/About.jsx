import { useEffect, useState } from "react";
import Card from "../components/Card";
import { dataAbout } from "../services/data.service";
function About() {
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    setIsScrolled(window.scrollY >= 300);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <section className={`about `} id="about">
        <h2
          className={` ${
            isScrolled ? "opacity-100" : "opacity-0 -translate-x-6"
          } ease-in-out duration-1000 delay-300 `}
        >
          About Me
        </h2>
        <div
          className={`cards ${
            isScrolled
              ? "opacity-100 translate-x-6"
              : "opacity-0 -translate-x-6"
          } ease-in-out duration-1000`}
        >
          {dataAbout.map((item) => (
            <Card
              key={item.id}
              head={item.head}
              src={item.src}
              text={item.text}
            />
          ))}
        </div>
      </section>
    </>
  );
}

export default About;
