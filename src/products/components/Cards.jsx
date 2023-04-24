
export const Cards = (product) => {

  const {
    id,
    title,
    photo,
    price
  } = product

  return (

    <article id={id} className="grid-container">
      <div className="grid-container">
        <h3>{title}</h3>
        <div className="articulos">
          <img src={photo} alt={title} title={title} />
        </div>
        <p>{price} $</p>
      </div>
    </article>

  );

};
