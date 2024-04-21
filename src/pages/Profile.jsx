import { User } from "react-feather";
import Aos from "aos";
import { useEffect } from "react";
import Logo from "../components/Logo";
function Profile() {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <header
      className="w-full mt-20 md:mt-24  px-[7] font-montserrat  flex flex-col md:flex-row justify-around items-center"
      id="profile"
    >
      <HeroSection />
      <div className="w-full flex justify-center max-w-sm">
        <div className="w-72 h-72 rounded-full overflow-hidden">
          <img
            className="w-full md:inline-block hidden max-w-[300px] mx-auto -translate-y-20   rounded-full"
            src="/img/firefly.png"
            alt="owner-website"
          />
        </div>
      </div>
    </header>
  );
}

const HeroSection = () => {
  return (
    <div className=" w-full max-w-sm  ">
      <h2 className="text-[2rem]">
        HELLO <span>MY NAME IS</span>
      </h2>
      <h2 className="text-[2rem]">
        <span>ISFANDIAR</span> ADI
      </h2>
      <p className="leading-[2] my-4">
        I am a frontend junior developer with a passion for creating beautiful
        and responsive web applications. I believe in the power of continuous
        learning and improvement. My journey in the world of web development has
        just begun, and I am excited to explore new technologies, tackle
        challenges, and grow as a developer. Let's connect and learn together!
      </p>
      <div className="flex gap-[1.5rem]">
        <Logo />
      </div>
    </div>
  );
};

export default Profile;
