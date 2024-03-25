import { useEffect, useState } from "react";
import Card from "../components/Card";
import { dataAbout } from "../services/data.service";
import Aos from "aos";
import "aos/dist/aos.css";
function About() {
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    setIsScrolled(window.scrollY >= 300);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    Aos.init();
    return () => {
      window.removeEventListener("scroll", handleScroll);
      Aos.refresh();
    };
  }, []);

  return (
    <>
      <section className={`about `} id="about">
        <h2
          data-aos={"fade-right"}
          data-aos-duration="1000"
          data-aos-offset="300"
        >
          About Me
        </h2>

        <div
          data-aos="fade-left"
          data-aos-duration="1000"
          data-aos-offset="300"
          className={`cards`}
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
