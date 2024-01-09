"use client"
import { useRouter } from 'next/navigation';

function Page() {
  const router = useRouter();

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const workout_name = e.target.elements.name.value;

    const name = workout_name === "" ? "Default" : workout_name;
    const date = new Date();
    const dateString = `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}`;

    const res = await fetch("http://localhost:4000/api/workout/new", {
      method: "POST",
      mode: "cors",
      headers: {
        'Content-Type': 'application/json',
        'Accept': '*/*'
      },
      body: JSON.stringify({ workout_name: name, datetime: dateString, user_id: 1 })
    });
    
    const data = await res.json();
    const id: number = data.id.rows[0]["id"];
    
    router.push(`/workout/${id}`);
  }

  return (
    <div>
      <h1 className="p-2 font-bold text-3xl">New Workout</h1>
      <div>
        <form onSubmit={handleSubmit}>
          <label className="p-2 font-bold text-lg" htmlFor="name">Name</label>
          <input className="p-2 m-4 border-2 border-black" type="text" id="name"/>
          <input className="p-2 m-4 border-2 border-black" type="submit" value="Submit"/>
        </form>
      </div>
    </div>
  )
}

export default Page;