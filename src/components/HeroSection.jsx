import Logo from "./Logo";

function HeroSection() {
  return (
    <>
      <div className="description">
        <h2>
          HELLO <span>MY NAME IS</span>
        </h2>
        <h2>
          <span>ISFANDIAR</span> ADI
        </h2>
        <p>
          I am a frontend junior developer with a passion for creating beautiful
          and responsive web applications. I believe in the power of continuous
          learning and improvement. My journey in the world of web development
          has just begun, and I am excited to explore new technologies, tackle
          challenges, and grow as a developer. Let's connect and learn together!
        </p>
        <div className="logo">
          <Logo />
        </div>
      </div>
    </>
  );
}

export default HeroSection;
