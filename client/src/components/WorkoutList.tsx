async function WorkoutList(props: any) {

  const res = await fetch(`http://server:4000/api/workout/${props.id}/exercises`, { cache: "no-cache" });
  const data = await res.json();
  console.log(data);

  async function getName(id: number) {
    const res = await fetch(`http://server:4000/api/exercise/${id}`);
    const data = await res.json();
    return data.exercise_name;
  }

  return (
    <ol className="flex-col">
      {data.map((exercise: any) => (
        <li key={exercise.exercise_id} className="bg-slate-200 rounded-md m-4 w-2/4 p-4 flex">
          <p className="font-bold text-lg">{getName(exercise.exercise_id)}</p>
          {/* <p className="text-gray-500 italic">{exercise.position_in_sequence}</p> */}
        </li>
      ))}
    </ol>
  );
}

export default WorkoutList;
