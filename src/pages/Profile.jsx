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
      className="py-[3rem] px-[7%] font-montserrat pt-[2rem]  h-screen flex justify-around items-center"
      id="profile"
    >
      <HeroSection />
      <div className="w-full max-w-sm">
        <User className="rounded-full bg-gray-100 w-full max-w-[400px] h-full" />
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
