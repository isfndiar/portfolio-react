import Card2 from "../components/ImageText";
import { useEffect, useState } from "react";

function Projects() {
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    setIsScrolled(window.scrollY >= 1200);
  };

  const contents = [
    {
      id: 0,
      head: "Create Table",
      title: "lorem ipsum bang udah bang",
      src: "/img-pj/table-pricing.png",
      language: "html, css",
    },
    {
      id: 1,
      head: "Create Table",
      title: "lorem ipsum bang udah bang",
      src: "/img-pj/table-pricing.png",
      language: "html, css",
    },
    {
      id: 2,
      head: "Create Table",
      title: "lorem ipsum bang udah bang",
      src: "/img-pj/table-pricing.png",
      language: "html, css",
    },
    {
      id: 3,
      head: "Create Table",
      title: "lorem ipsum bang udah bang",
      src: "/img-pj/table-pricing.png",
      language: "html, css",
    },
    {
      id: 4,
      head: "Create Table",
      title: "lorem ipsum bang udah bang",
      src: "/img-pj/table-pricing.png",
      language: "html, css",
    },
    {
      id: 5,
      head: "Create Table",
      title: "lorem ipsum bang udah bang",
      src: "/img-pj/table-pricing.png",
      language: "html, css",
    },
    
  ];

  


  useEffect(()=> {
    window.addEventListener('scroll', handleScroll)
    
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  },[])

  return (
    <>
      <section className={` projects ${
            isScrolled
              ? "opacity-100 "
              : "opacity-0 -translate-x-6"
          } ease-in-out duration-1000 delay-300 `}>
        <h2>Projects</h2>
        <div className="main-projects">
          {contents.map((item) => (
            <Card2
              key={item.id}
              head={item.head}
              title={item.title}
              src={item.src}
              language={item.language}
            />
          ))}
        </div>
      </section>
    </>
  );
}

export default Projects;
