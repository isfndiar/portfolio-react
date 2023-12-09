function Card(props) {
  return (
    <>
      <div className={`card ${props.cardSection}`}>
        <div className="image">
          <img src={props.src} alt="" />
        </div>
        <h3>{props.head}</h3>
        <p className="description">{props.text}</p>
      </div>
    </>
  );
}

export default Card;
