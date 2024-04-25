import { useEffect } from "react";
import { dataProject } from "../services/data.service";
import Aos from "aos";
import "aos/dist/aos.css";
import CardProject from "../components/CardProject";
function Projects() {
  useEffect(() => {
    Aos.init();
    return () => {
      Aos.refresh();
    };
  }, []);

  return (
    <>
      <section
        data-aos="fade-right"
        data-aos-duration="1000"
        className={` projects `}
      >
        <h2 className="text-[2rem] p-4 text-center mb-20 " id="projects">
          Projects
        </h2>
        <div className="flex flex-wrap gap-10 justify-center">
          {dataProject.map((item, i) => (
            <CardProject
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
