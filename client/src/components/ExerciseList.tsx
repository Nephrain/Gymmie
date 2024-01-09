async function ExerciseList() {

  const res = await fetch('http://server:4000/api/exercise/list', { next: { revalidate: 5 } } );
  const data = await res.json();

  return (
    <ul className="px-8">
      {data.map((exercise: any) => (
        <li key={exercise.exercise_name} className="p-2 border m-2">
          {exercise.exercise_name}
        </li>
      ))}
    </ul>
  );
}

export default ExerciseList;