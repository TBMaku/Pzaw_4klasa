interface TrackProps {
  index: number;
  title: string;
  time: number;
  albumTitle?: string;
}

function Track(props: TrackProps) {
  const { index, title, time, albumTitle } = props;

  return (
    <tr onClick={() => alert(`Wybrano utwór: ${title} z ${albumTitle}`)}>
      <td>{index}</td>
      <td>{title}</td>
      <td className="text-end">{time}</td>
    </tr>
  );
}

export default Track;