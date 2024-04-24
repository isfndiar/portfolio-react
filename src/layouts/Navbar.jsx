import { Link, NavLink, Outlet } from "react-router-dom";
import * as Icon from "react-feather";
import { useEffect, useState } from "react";

function Navbar() {
  const [isActive, setIsActive] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);
  const [visible, setVisible] = useState(true);

  const handleScroll = () => {
    if (window.scrollY >= 200) {
      setVisible(false);
    } else if (window.scrollY < 200) {
      setIsActive(false);
      setVisible(true);
    }
  };

  const handleClick = () => {
    setIsActive(!isActive);
    console.log(isActive);
    console.log(visible);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);

  return (
    <>
      <nav
        className={` fixed w-full top-0 right-0 left-0 flex justify-between md:justify-around text-black font-bold py-[1.5rem] px-[5%] z-[9999]  transition-all duration-300`}
      >
        <div
          className={`${
            visible ? "" : "translate-y-[-100px]"
          } transition-all duration-300`}
        >
          <div className="block md:hidden w-10 h-10  rounded-full overflow-hidden">
            <img
              className="w-full  object-cover -translate-y-3 inline-block  mx-auto rounded-full"
              src="/img/firefly.png"
              alt="owner-website"
            />
          </div>
          <div className="text-[1.2rem]  uppercase flex me-20 md:me-0">
            <NavLink className={" text-black hidden md:inline-block"}>
              Isfandiar Adi
            </NavLink>
          </div>
        </div>
        <Navigation
          className={`${
            visible ? "" : isActive ? "" : "translate-y-[-100px]"
          } hidden md:flex ml-[20px]  gap-[50px]  border border-[rgb(126,122,122)] backdrop:blur-[39px] bg-[rgba(255,255,255,0.658)] px-[30px] py-[10px] rounded-[20px] cursor-pointer transition-all  duration-300 `}
        />
        {isActive ? <NavPhoneRes isActive={isActive} /> : null}
      </nav>

      <Icon.Menu
        color="black"
        className={` fixed top-5 right-5 z-[99999] ${isActive ? "" : ""}  ${
          window.scrollY == 200 || window.scrollY > 200 ? "block" : "md:hidden"
        }`}
        onClick={handleClick}
      />

      <Outlet />
    </>
  );
}

const NavPhoneRes = ({ isActive }) => {
  return (
    <Navigation
      isActive={isActive}
      className={
        "w-[200px] fixed sm:hidden  top-11  right-6 flex flex-col items-center justify-center border bg-[whitesmoke] transition-all ease-in-out duration-300"
      }
    />
  );
};

const Navigation = ({ isActive, isClick, isScroll, className }) => {
  const styles = {
    button: `hover:bg-green-300 w-full text-center py-2`,
  };
  return (
    <div className={`${className} group `}>
      <a
        className={`${isActive ? styles.button : ""}`}
        href={"#profile"}
        hrefLang="#profile"
      >
        Profile
      </a>
      <a className={`${isActive ? styles.button : ""}`} href={`#about`}>
        About
      </a>
      <a className={`${isActive ? styles.button : ""}`} href={`#projects`}>
        Projects
      </a>
      <a className={`${isActive ? styles.button : ""}`} href={`#contacts`}>
        Contacts
      </a>
    </div>
  );
};

export default Navbar;
