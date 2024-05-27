import * as Icon from "react-feather";
import Aos from "aos";
import { useEffect, useState } from "react";
import Logo from "../components/Logo";
import { dataTech } from "../services/tech.service";
import { profileData as profile } from "../services/profile.service";
import { Link } from "react-router-dom";
function Profile() {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <header
      className="w-full mt-20 md:mt-20  px-[7] font-montserrat  flex flex-col md:flex-row justify-around items-center"
      id="profile"
    >
      <HeroSection />
      <div className="w-1/2 flex justify-center   ">
        <div className="w-72 h-72 mb-20 md:inline-block hidden rounded-full overflow-hidden">
          <img
            className="inset-0 -translate-y-20"
            src={profile.img}
            alt={profile.name}
          />
        </div>
      </div>
    </header>
  );
}

const HeroSection = () => {
  return (
    <div className=" w-full max-w-sm  ">
      <div className="mt-10 px-3">
        <h2 className="text-3xl text-center md:text-left">HELLO 👋</h2>
        <p className="text-center">MY NAME IS</p>
        <h2 className="text-3xl text-center font-semibold">{profile.name}</h2>
        <p className="leading-[2] text-md md:text-md my-4">
          {profile.description}
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
      {/* <Link
        target="_blank"
        to={
          "https://drive.google.com/file/d/1xlKT9OHKxssDlbSs1zyB3xwn2KIjtAj1/view?usp=sharing"
        }
        className={`group inline-block text-center w-full py-3 border mt-3 border-black rounded-xl relative`}
      >
        MY CV
        <Icon.ArrowUpRight
          size={20}
          className="absolute right-1 top-0 hidden group-hover:block "
        />
      </Link> */}
    </div>
  );
};

export default Profile;
