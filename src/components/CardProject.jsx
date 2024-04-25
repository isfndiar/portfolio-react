import { Link } from "react-router-dom";

function CardProject({ show, src, head, title, language }) {
  return (
    <>
      <div className="w-[300px]  border border-black rounded-xl overflow-hidden bg-white p-1 pb-10 ">
        <div className="overflow-hidden rounded-xl">
          <Link to={show}>
            <img
              src={src}
              alt="Project-Photo "
              className="border-1 border-black w-full h-[170px] object-contain hover:scale-125 transition-all duration-300"
            />
          </Link>
        </div>
        <div className="mt-2 px-2">
          <b className="">{head}</b>
          <p className="mt-2">{title}</p>
          <p>Tech : {language} </p>
        </div>
      </div>
    </>
  );
}

export default CardProject;
