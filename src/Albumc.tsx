
import type { ReactNode } from "react";

interface AlbumProps{
    plakat:string;
    tytul:string;
    rok:number;
    zespol:string;
    gatunek:string;
    children:ReactNode;
}

function JestPusty(children:ReactNode){
  if(!children){
    return <div  className="alert alert-warning" role="alert">brak utworów</div>;
  }
  return null;
}


function Album(props: AlbumProps){
  const {tytul, plakat, rok, gatunek, zespol} = props;

  return(
    <div className="col-12 col-sm-6 col-lg-4 d-flex">
      <div className="card w-100">
       {JestPusty(props.children)}
        <img src={plakat} className="card-img-top"/>
        <div className="card-body">
            <p className="card-title">{tytul}</p>
            <p className="card-text">{zespol}</p>
            <p className="card-text">{rok}</p>
            <p className="card-text">{gatunek}</p>
        </div>
        <table className="table table-dark table-striped table-hover">
        <thead>
          <tr>
            <th scope="col">L.p.</th>
            <th scope="col">Tytuł</th>
            <th scope="col" className="text-end">Czas trwania</th>
          </tr>
        </thead>
        <tbody>{props.children}</tbody>
      </table>
    </div>
    </div>
  );
}

export default Album;