interface props{
    plakat:string;
    tytul:string;
    rok:number;
}

function Film(props: any){
  const {tytul, plakat, rok} = props;

  return(
    <div>
        <img src={plakat} />
        <p>{tytul}</p>
        <p>{rok}</p>
    </div>
  );
}

export default Film;