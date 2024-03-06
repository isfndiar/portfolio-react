import { Link } from "react-router-dom";

function Card2(props) {
  return (
    <>
      <div className="w-[300px]  border border-black rounded-xl overflow-hidden bg-white p-1 pb-10 ">
        <div className="overflow-hidden rounded-xl">
          <Link to={props.show}>
            <img
              src={props.src}
              alt="Project-Photo "
              className="border-1 border-black w-full h-[170px] object-contain hover:scale-125 transition-all duration-300"
            />
          </Link>
        </div>
        <div className="mt-2 px-2">
          <b className="">{props.head}</b>
          <p className="mt-2">{props.title}</p>
          <p>Technology : {props.language} </p>
        </div>
      </div>
    </>
  );
}

export default Card2;
