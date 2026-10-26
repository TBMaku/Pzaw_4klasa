
import type { ReactNode } from "react";

interface AlbumProps{
    plakat:string;
    tytul:string;
    rok:number;
    zespol:string;
    gatunek:string;
    children:ReactNode;
}

function Album(props: AlbumProps){
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
          <tr>
            <th>L.p.</th>
            <th>Tytuł</th>
            <th>Czas trwania</th>
          </tr>
        </thead>
        <tbody>{props.children}</tbody>
      </table>
    </div>
  );
}

export default Album;