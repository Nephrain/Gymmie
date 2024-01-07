import DateString from "./DateString";

function NewWorkout() {

  fetch("http://localhost:4000/setup", {
    method: "GET"
  }).then((response) => {
      if (response.status !== 200) {
        console.log(response.status);
        throw new Error(response.statusText);
      }
      return response.json();
    }
  )

  return (
    <div>
      <h1 className="font-bold text-3xl p-2">Workout</h1>
    </div>
  )
}

export default NewWorkout;