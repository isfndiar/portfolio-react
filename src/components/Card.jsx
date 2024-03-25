function Card({ src, head, text }) {
  return (
    <>
      <div className={`card `}>
        <div className="image">
          <img src={src} alt="" />
        </div>
        <h3>{head}</h3>
        <p className="text-sm font-medium">{text}</p>
      </div>
    </>
  );
}

export default Card;
