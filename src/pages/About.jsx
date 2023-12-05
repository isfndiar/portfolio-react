import { useEffect, useState } from "react";
import Card from "../components/Card";
function About() {
  const [isScrolled, setIsScrolled] = useState(false);

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
            isScrolled
              ? "opacity-100"
              : "opacity-0 -translate-x-6"
          } ease-in-out duration-1000 delay-300 `}
        >
          Tentang saya
        </h2>
        <div
          className={`cards ${
            isScrolled
              ? "opacity-100 translate-x-6"
              : "opacity-0 -translate-x-6"
          } ease-in-out duration-1000`}
        >
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
