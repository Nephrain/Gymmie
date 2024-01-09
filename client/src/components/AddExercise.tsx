"use client"

function AddExercise(props: any) {
    
    async function handleSubmit(e: any) {
        e.preventDefault(); 
        
        const exercise = e.target.elements.exercise.value;
        
        try {
            const res_id = await fetch(`http://localhost:4000/api/exercise/${exercise}/get_id`);
            const data_id = await res_id.json();

            const res = await fetch("http://localhost:4000/api/workout/add_exercise", {
                method: "POST",
                mode: "cors",
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': '*/*'
                },
                body: JSON.stringify({ position_in_sequence: 1, exercise_id: data_id.id, workout_id: props.id })
            });
            const data = await res.json();
            console.log(data);
            
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <div className="mt-8 p-6 bg-slate-300 rounded-3xl w-2/4 m-auto">
            <form className="grid grid-rows-2 grid-flow-col gap-x-4" onSubmit={handleSubmit}>
                <label className="font-bold text-lg" htmlFor="exercise">Exercise name:</label>
                <input className="bg-slate-200 rounded-md border border-black p-1" type="text" id="exercise"></input>
                <button className="bg-slate-100 rounded-md p-1 border-2 border-black row-span-2" type="submit">Add</button>
            </form>
        </div>
    );
}

export default AddExercise