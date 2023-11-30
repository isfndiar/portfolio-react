import Logo from "../components/Logo";

export default function Footer() {
  return (
    <>
      <footer>
        <div className="social">
          <Logo />
        </div>
        <div className="copyright">
          <p className="bold">
            &copy; 2023 <span>ISFANDIAR</span>. ALL RIGHT RESERVED
          </p>
        </div>
        <div className="developer">
          <p>DEVELOPED BY ISFANDIAR</p>
        </div>
      </footer>
    </>
  );
}
