import Card from "../components/Card";
function About() {
  const cardText = [
    {
      id: 0,
      head: "Codepolitan",
      text: "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta,minus voluptatem quaerat assumenda totam natus beatae quod eveniet? Esse, quos?",
      src: "/img/codepolitan-logo.png",
    },
    {
      id: 1,
      head: "Freecodecamp",
      text: "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta,minus voluptatem quaerat assumenda totam natus beatae quod eveniet? Esse, quos?",
      src: "/img/fcp.png",
    },
    {
      id: 2,
      head: "Mengenal Pemrograman Komputer",
      text: "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta,minus voluptatem quaerat assumenda totam natus beatae quod eveniet? Esse, quos?",
      src: "/img/6SMW2KK - Mengenal Pemrograman Komputer.jpg",
    },
    {
      id: 3,
      head: "Mahir menggunakan Text Editor buat Pemula",
      text: "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta,minus voluptatem quaerat assumenda totam natus beatae quod eveniet? Esse, quos?",
      src: "/img/XQ2SI5M - Mahir menggunakan Text Editor buat Pemula.jpg",
    },
  ];
  return (
    <>
      <section className="about" id="about">
        <h2>Tentang saya</h2>
        <div className="cards">
          {cardText.map((item) => (
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
