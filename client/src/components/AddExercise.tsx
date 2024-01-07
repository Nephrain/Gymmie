import { useState } from "react";

function AddExercise() {
    
    const handleSubmit = (e: any) => {
        e.preventDefault(); 
        
        const exercise = e.target.elements.exercise.value;
        const sets = e.target.elements.sets.value;

        // fetch("http://localhost:4000",{
        //         method: "POST",
        //         body: JSON.stringify({ exercise, sets })
        //     }).then((response) => {
        //         if (response.status !== 200) {
        //           throw new Error(response.statusText);
        //         }
        //         return response.json();
        //     }
        // )
    }

    return (
        <div className="mt-8 p-6 bg-slate-300 rounded-3xl w-2/4 m-auto">
            <form className="grid grid-rows-2 grid-flow-col gap-x-4" onSubmit={handleSubmit}>
                <label className="font-bold text-lg" htmlFor="exercise">Exercise name:</label>
                <input className="bg-slate-200 rounded-md border border-black" type="text" id="exercise"></input>
                <label className="font-bold text-lg" htmlFor="sets">Sets</label>
                <input className="bg-slate-200 rounded-md border border-black p-1" type="text" id="sets"></input>
                <button className="bg-slate-100 rounded-md p-1 border-2 border-black row-span-2" type="submit">Add</button>
            </form>
        </div>
    );
}

export default AddExercise