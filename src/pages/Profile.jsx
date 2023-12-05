import HeroSection from "../components/HeroSection";
import photoimage from "../assets/react.svg";
function Profile() {
  return (
    <>
      <header className="profile" id="profile">
          <HeroSection />
        <div className="photo-profile">
          <img src="img1.png" className="rounded-full  duration-1000 transition-opacity" alt="" />
        </div>
      </header>
    </>
  );
}

export default Profile;
