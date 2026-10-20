interface props{
    plakat:string;
    tytul:string;
    rok:number;
    liczbastron:number;
}

function Book(props: any){
  const {tytul, plakat, rok, liczbastron} = props;

  return(
    <div>
        <img src={plakat} />
        <p>{tytul}</p>
        <p>{rok}</p>
        <p>{liczbastron}</p>
    </div>
  );
}

export default Book;