import React from "react";
import Album from "../Albumc";

interface TrackProps{
    index:number;
    title:string;
    time:number;
}

handleSongClick = (event: React.MouseEvent<HTMLElement>) => {
  alert("Wybrałeś " + event.currentTarget.textContent + " z albumu " + );
}

function Track(props: TrackProps){
  const {index, title, time} = props;

  return (
    <tr>
      <td>{index}</td>
      <td>{title}</td>
      <td className="text-end" >{time}</td>
    </tr>
  );
}

export default Track;