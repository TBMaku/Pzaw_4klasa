interface props{
    plakat:string;
    tytul:string;
    rok:number;
    zespol:string;
    gatunek:string
}

function Album(props: any){
  const {tytul, plakat, rok, gatunek, zespol} = props;

  return(
    <div style={{ width: "33%"}}>
        <img src={plakat} style={{ width: "20vw" }} />
        <p>{tytul}</p>
        <p>{zespol}</p>
        <p>{rok}</p>
        <p>{gatunek}</p>
        <table style={{ width: "100%" }}>
        <thead>
          <th>L.p.</th>
          <th>Tytuł</th>
          <th>Czas trwania</th>
        </thead>
        <tbody>{props.children}</tbody>
      </table>
    </div>
  );
}

export default Album;