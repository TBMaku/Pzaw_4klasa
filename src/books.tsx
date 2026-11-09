interface BookProps{
    plakat:string;
    tytul:string;
    rok:number;
    liczbastron:number;
}

function JestKlasykiem(rok:number){
  if(rok < 2000){
    return <p style={{ color: "green" }}>klasyka</p>;
  }
  return null;
}
function Book(props: BookProps){
  const {tytul, plakat, rok, liczbastron} = props;

  return(
    <div className="col-12 col-sm-6 col-lg-4 d-flex">
      <div className="card w-100">
        {JestKlasykiem(rok)}
        <img src={plakat} className="card-img-top"/>
        <div className="card-body">
            <p className="card-title">{tytul}</p>
            <p className="card-text">{rok}</p>
            <p className="card-text">{liczbastron}</p>
        </div>
      </div>
    </div>
  );
}

export default Book;