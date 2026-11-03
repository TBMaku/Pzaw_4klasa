import { useState } from "react";

interface ToDoProps{
    tytul:string;
    tresc:string;
    aktywnosc:boolean;
}

function ToDo(props: ToDoProps){
  const {tytul, tresc, aktywnosc} = props;
  const [task, setTask] = useState(false);


  return(
      <div className="card w-100 ">
        <div className="card-body d-flex">
            <p className="card-title">{tytul}</p>
            <p className="card-text ms-auto">{tresc}</p>
            <input className="ms-auto" type = "checkbox" onClick={() =>  setTask(!task)} checked={task}/>
        </div>
      </div>

  );
}

export default ToDo;