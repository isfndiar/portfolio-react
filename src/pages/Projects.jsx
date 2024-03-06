import Card2 from "../components/ImageText";
import { useEffect, useState } from "react";
import { dataProject } from "../services/data.service";
function Projects() {
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    setIsScrolled(window.scrollY >= 1200);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <section
        className={` projects ${
          isScrolled ? "opacity-100 " : "opacity-0 -translate-x-6"
        } ease-in-out duration-1000 delay-300 `}
      >
        <h2 id="projects">Projects</h2>
        <div className="flex flex-wrap gap-10 justify-center">
          {dataProject.map((item) => (
            <Card2
              key={item.id}
              head={item.head}
              title={item.title}
              src={item.src}
              language={item.language}
              show={item.show}
            />
          ))}
        </div>
      </section>
    </>
  );
}

export default Projects;
