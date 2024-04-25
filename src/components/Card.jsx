function Card({ src, head, text, year }) {
  return (
    <div
      className={`w-full max-w-[300px]  p-4 pb-20 border-[1px] border-black rounded-xl bg-white  hover:-translate-y-[20px] transition-all duration-300 hover:shadow-[5px_5px_rgb(0,0,0),10px_10px_rgba(70,64,68,0.3)]`}
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
