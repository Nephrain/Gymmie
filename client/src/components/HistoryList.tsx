async function HistoryList() {
  const id = 1;
  const res = await fetch(`http://server:4000/api/user/1/workouts`, {
    headers: {
      "Content-Type": "application/json",
      "Accept": "*/*"
    }
  });
  const data = await res.json();
  
  return (<ul className="px-8">
    {data.reverse().map((workout: any) => (
      <li key={workout.workout_id} className="p-2 border m-2">
        {workout.workout_name}, {workout.datetime}
      </li>
    ))}
  </ul>);
}

export default HistoryList;