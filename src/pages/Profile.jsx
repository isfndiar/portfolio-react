import HeroSection from "../components/HeroSection";
import photoimage from "../assets/react.svg";
function Profile() {
  return (
    <>
      <header className="profile" id="profile">
        <div className="description">
          <HeroSection />
        </div>
        <div className="photo-profile">
          <img src="vite.svg" alt="" />
        </div>
      </header>
    </>
  );
}

export default Profile;
