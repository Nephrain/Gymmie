function AddExercise() {
    return (
        <div>
            <form className="flex-col flex m-2 p-2 w-1/4">
                <label className="font-bold text-lg" htmlFor="name">Exercise name:</label>
                <input className="bg-slate-200 rounded-md border border-black p-1" type="text" name="name"></input><br></br>
                <label className="font-bold text-lg" htmlFor="sets">Sets</label>
                <input className="bg-slate-200 rounded-md border border-black p-1" type="text" name="sets"></input><br></br><br></br>
                <input className="bg-slate-100 rounded-md p-1 border-2 border-black" type="submit" value="Submit"></input>
            </form>
        </div>
    )
}

export default AddExercise