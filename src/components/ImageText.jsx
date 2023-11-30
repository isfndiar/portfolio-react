function Card2(props) {
  return (
    <>
      <div className="container rounded-xl overflow-hidden bg-white p-1">
        <div className="row overflow-hidden rounded-xl">
          <img
            src={props.src}
            alt="Project-Photo "
            className="border-1 border-black"
          />
        </div>
        <div className="row">
          <div className="col">
            <b>{props.head}</b>
            <p>{props.title}</p>
          </div>
          <div className="col">
            <p>Technology : {props.language} </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card2;
