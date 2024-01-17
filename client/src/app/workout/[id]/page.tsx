"use client"

import AddExercise from "@/components/AddExercise";
import WorkoutList from "@/components/WorkoutList";
import { useRouter } from "next/navigation";

async function Page({ params }: { params: { id: string }}) {

  const router = useRouter();
  const res = await fetch(`http://server:4000/api/workout/${params.id}`);
  const data = await res.json();
  
  function saveWorkout() {
    console.log("asdf");
    router.push("/history");
  }
  
  return (
    <div>
      <h1 className="p-4 font-bold text-3xl pb-0">Workout name: {data[0].workout_name}</h1>
      <p className="p-4 text-gray-500 italic">{data[0].datetime}</p>
      <WorkoutList id={ params.id } />
      <AddExercise id={ params.id } />
      <button onClick={saveWorkout} className="p-2 bg-slate-300 rounded-md text-lg font-bold m-4">Save</button>
    </div>
  )
}

export default Page;