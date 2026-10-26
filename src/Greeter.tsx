interface FilmProps{
    plakat:string;
    tytul:string;
    rok:number;
    rating:number;
}

function Film(props: FilmProps){
  const {tytul, plakat, rok, rating} = props;

  return(
    <div style={{ width: "33%" }}>
        <img src={plakat} style={{ width: "20vw" }}/>
        <p>{tytul}</p>
        <p>{rok}</p>
        <p>{rating}/10</p>
    </div>
  );
}

export default Film;