import { Link, NavLink, Outlet } from "react-router-dom";
import * as Icon from "react-feather";
import { useEffect, useState } from "react";
import LinkNav from "../components/ui/LinkNavbar";

function Navbar() {
  const [isActive, setIsActive] = useState(false);
  const [visible, setVisible] = useState(true);

  const handleScroll = () => {
    if (window.scrollY >= 200) {
      setVisible(false);
    } else {
      setIsActive(false);
      setVisible(true);
    }
  };

  const handleClick = () => {
    setIsActive(!isActive);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <nav
        className={`fixed w-full top-0 right-0 left-0 flex justify-between md:justify-around text-black font-bold py-[1.5rem] px-[5%] z-[9999]  transition-all duration-300`}
      >
        <header
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
        </header>
        <NavbarDesktop isActive={isActive} visible={visible} />
        {isActive ? <NavbarMobile isActive={isActive} /> : null}
      </nav>

      <Icon.Menu
        color="black"
        className={` fixed top-5 right-5 z-[99999]   ${
          window.scrollY == 200 || window.scrollY > 200 ? "block" : "md:hidden "
        }`}
        onClick={handleClick}
      />

      <Outlet />
    </>
  );
}

const NavbarMobile = ({ isActive }) => {
  return (
    <Navigation
      isActive={isActive}
      className={
        "w-[200px] fixed sm:hidden  top-11  right-6 flex flex-col items-center justify-center border bg-[whitesmoke] transition-all ease-in-out duration-300"
      }
    />
  );
};

const NavbarDesktop = ({ visible, isActive }) => {
  return (
    <Navigation
      className={`${
        visible ? "" : isActive ? "" : "translate-y-[-100px]"
      } hidden md:flex ml-[20px]  gap-[50px]  border border-[rgb(126,122,122)] backdrop:blur-[39px] bg-[rgba(255,255,255,0.658)] px-[30px] py-[10px] rounded-[20px] cursor-pointer transition-all  duration-300 backdrop--filter `}
    />
  );
};

const Navigation = ({ isActive, className }) => {
  return (
    <div className={`${className} group `}>
      <LinkNav isActive={isActive} label={"Profile"} href={"#profile"} />
      <LinkNav isActive={isActive} label={`About`} href={`#about`} />
      <LinkNav isActive={isActive} label={`Projects`} href={`#projects`} />
      <LinkNav isActive={isActive} label={`Contacts`} href={`#contacts`} />
    </div>
  );
};

export default Navbar;
