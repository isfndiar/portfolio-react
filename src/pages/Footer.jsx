import Logo from "../components/Logo";

export default function Footer() {
  return (
    <footer className="py-8 text-center">
      <div className="social flex justify-center gap-5 mb-4">
        <Logo />
      </div>
      <p className="">
        &copy; 2023 <span>ISFANDIAR</span>. ALL RIGHT RESERVED
      </p>
      <p>DEVELOPED BY ISFANDIAR</p>
    </footer>
  );
}
