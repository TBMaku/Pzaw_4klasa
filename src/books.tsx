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
    <div style={{ width: "33%" }}>
        {JestKlasykiem(rok)}
        <img src={plakat} style={{ width: "20vw" }}/>
        <p>{tytul}</p>
        <p>{rok}</p>
        <p>{liczbastron}</p>
    </div>
  );
}

export default Book;