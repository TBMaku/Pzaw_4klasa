interface props{
    plakat:string;
    tytul:string;
    rok:number;
}

function Film(props: any){
  const {tytul, plakat, rok} = props;

  return(
    <div style={{ width: "33%" }}>
        <img src={plakat} style={{ width: "20vw" }}/>
        <p>{tytul}</p>
        <p>{rok}</p>
    </div>
  );
}

export default Film;