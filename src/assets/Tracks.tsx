interface TrackProps{
    index:number;
    title:string;
    time:number;
}

function Track(props: TrackProps){
  const {index, title, time} = props;

  return (
    <tr>
      <td>{index}</td>
      <td>{title}</td>
      <td className="text-end">{time}</td>
    </tr>
  );
}

export default Track;