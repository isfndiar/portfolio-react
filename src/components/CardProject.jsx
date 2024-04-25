import { Link } from "react-router-dom";
import * as Icon from "react-feather";
function CardProject({ show, src, head, title, language }) {
  return (
    <>
      <div className="w-[300px]  border border-black rounded-xl overflow-hidden bg-white p-1 pb-10 shadow-xl ">
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
          <b className="flex gap-1 cursor-pointer border-opacity-0 hover:border-opacity-100 border border-black w-max px-3 py-1 rounded-full">
            {head} <Icon.ArrowUpRight size={15} />
          </b>
          <p className="mt-2">{title}</p>
          <p>Tech : {language} </p>
        </div>
      </div>
    </>
  );
}

export default CardProject;
