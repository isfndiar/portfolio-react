import Card2 from "../components/ImageText";

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

function Projects() {
  return (
    <>
      <section className="projects">
        <h2>Projects</h2>
        <div className="main-projects">
          {contents.map((props) => (
            <Card2
              key={props.id}
              head={props.head}
              title={props.title}
              src={props.src}
              language={props.language}
            />
          ))}
        </div>
      </section>
    </>
  );
}

export default Projects;
