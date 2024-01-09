import AddExercise from "@/components/AddExercise";
import WorkoutList from "@/components/WorkoutList";

async function Page({ params }: { params: { id: string }}) {
  const res = await fetch(`http://server:4000/api/workout/${params.id}`);
  const data = await res.json();

  return (
    <div>
      <h1 className=" p-4 font-bold text-3xl pb-0">Workout name: {data[0].workout_name}</h1>
      <p className="p-4 text-gray-500 italic">{data[0].datetime}</p>
      <WorkoutList id={ params.id } />
      <AddExercise id={ params.id } />
    </div>
  )
}

export default Page;