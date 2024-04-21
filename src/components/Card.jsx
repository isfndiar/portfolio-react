function Card({ src, head, text }) {
  return (
    <div
      className={`w-full max-w-[300px]  p-4 border-[1px] border-black rounded-xl bg-white  hover:-translate-y-[20px] transition-all duration-300`}
    >
      <div className="w-full h-[10rem]  flex items-center border border-black overflow-hidden">
        <img
          className="w-full h-full object-contain object-center"
          src={src}
          alt=""
        />
      </div>
      <div className="">
        <h3 className="mt-3">{head}</h3>
        <p className="text-sm font-light ">{text}</p>
      </div>
    </div>
  );
}

export default Card;
