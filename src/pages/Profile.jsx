import { User } from "react-feather";
import Aos from "aos";
import { useEffect, useState } from "react";
import Logo from "../components/Logo";
import { dataTech } from "../services/data.service";
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
        <div className="w-72 h-72 md:inline-block hidden rounded-full overflow-hidden">
          <img
            className="w-full max-w-[300px] mx-auto -translate-y-20   rounded-full"
            src="/img/firefly.png"
            alt="owner-website"
          />
        </div>
      </div>
    </header>
  );
}

const HeroSection = () => {
  const [visible, setVisible] = useState(false);
  const handleHover = (e) => {
    setVisible(true);
  };
  const handleMouseLeave = (e) => {
    setVisible(false);
  };
  return (
    <div className=" w-full max-w-sm  ">
      <div className="mt-10 px-3">
        <h2 className="text-3xl text-center md:text-left">HELLO 👋</h2>
        <p className="text-center">MY NAME IS</p>
        <h2 className="text-3xl text-center font-semibold">ISFANDIAR ADI</h2>
        <p className="leading-[2] text-sm md:text-md my-4">
          I am a frontend junior developer with a passion for creating beautiful
          and responsive web applications. I believe in the power of continuous
          learning and improvement. My journey in the world of web development
          has just begun, and I am excited to explore new technologies, tackle
          challenges, and grow as a developer. {`Let's`} connect and learn
          together!
        </p>
      </div>
      <div className="flex gap-3 justify-center md:justify-start">
        <Logo />
      </div>
      <div className="mt-3">
        <h1 className="font-bold">currently used technology</h1>

        <div className="flex w-full relative">
          {dataTech.map((item) => (
            <div key={item?.id} className="group">
              <img className="w-10" src={item?.src} alt={`${item}`} />
              <div
                className={`group-hover:opacity-100 opacity-0  bg-black text-white text-center py-2 px-3 rounded-[6px] absolute -top-10 -translate-x-4 z-10 after:content-[''] after:absolute after:top-full after:left-1/2 after:border-t-8 after:border-black after:ml-[-5px] transition-opacity   delay-500 `}
              >
                {`${item?.name}`}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Profile;
