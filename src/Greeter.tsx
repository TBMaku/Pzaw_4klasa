interface FilmProps{
    plakat:string;
    tytul:string;
    rok:number;
    rating:number;
}

function JestPolecany(rating:number){
  if(rating > 8){
    return <p style={{ color: "green" }}>polecane</p>;
  }
  return null;
}
function Film(props: FilmProps){
  const {tytul, plakat, rok, rating} = props;

  return(
    <div className="col-12 col-sm-6 col-lg-4 d-flex">
      <div className="card w-100"  onClick={() => console.log({tytul})}>
        {JestPolecany(rating)}
        <img src={plakat} className="card-img-top"/>
        <div className="card-body">
            <p className="card-title">{tytul}</p>
            <p className="card-text">{rok}</p>
            <p className="card-text">{rating}/10</p>
            <button className="btn btn-outline-primary btn-small"  onClick={() => console.log("przycisk kliknięty na " + {tytul})}>Pokaż Szczegóły</button>
        </div>
      </div>
    </div>
  );
}

export default Film;