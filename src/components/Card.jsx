import { useEffect, useRef, useState } from "react";

function Card({ src, head, text, year }) {
  const [isClick, setIsClick] = useState(false);
  function handleClick() {
    setIsClick(true);
    setTimeout(() => {
      setIsClick(false);
    }, 300);
  }
  const cardRef = useRef(null);

  useEffect(() => {
    if (isClick) {
      cardRef.current.style.boxShadow =
        "shadow-[0px_0px_rgb(0,0,0),10px_10px_rgba(70,64,68,0.3)]";
    } else {
      cardRef.current.style.boxShadow =
        "shadow-[5px_5px_rgb(0,0,0),10px_10px_rgba(70,64,68,0.3)]";
    }
  }, [isClick]);
  return (
    <div
      ref={cardRef}
      onClick={handleClick}
      className={`w-full max-w-[300px]  p-4 pb-20 border-[1px] border-black rounded-xl bg-white  hover:-translate-y-[20px] hover:shadow-card-on active:hover:shadow-card-off active:hover:-translate-y-0  transition-all duration-300`}
    >
      <div className="w-full h-[10rem]  flex items-center border border-black overflow-hidden">
        <img
          className="w-full h-full object-contain object-center"
          src={src}
          alt=""
        />
      </div>
      <div className="">
        <h3 className="mt-3">
          {head} {year}
        </h3>
        <p className="text-sm font-light ">{text}</p>
      </div>
    </div>
  );
}

export default Card;
