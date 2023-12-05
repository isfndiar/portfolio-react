import Logo from "./Logo";

function HeroSection() {
  return (
    <>
    <div className="description">
      <h2>
        HELLO :D <span>MY NAME IS</span>
      </h2>
      <h2>
        <span>ISFANDIAR</span> ADI
      </h2>
      <p>
        frontend developer With low skill Lorem ipsum, dolor sit amet
        consectetur adipisicing elit. Aperiam nam minus ut deserunt maxime
        maiores sit exercitationem ullam aspernatur laborum?
      </p>
      <div className="logo">
        <Logo />
      </div>
    </div>
    </>
  );
}

export default HeroSection;
