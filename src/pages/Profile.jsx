import HeroSection from "../components/HeroSection";
import photoimage from "../assets/react.svg";
import { User } from "react-feather";
import Aos from "aos";
import { useEffect } from "react";
function Profile() {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <>
      <header className="profile" id="profile">
        <HeroSection />
        <div className="photo-profile">
          <User className="rounded-full bg-gray-100 w-full max-w-[400px] h-full" />
        </div>
      </header>
    </>
  );
}

export default Profile;
