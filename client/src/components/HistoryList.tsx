async function History() {
  const id = 1;
  const res = await fetch(`http://server:4000/api/${id}/workouts`);
  const data = await res.json();
  
  return (<ul className="px-8">
    {data.map((history: any) => (<li key={history.workout_id} className="p-2 border m-2">
        {history.workout_id}
      </li>))}
  </ul>);
}

export default History;