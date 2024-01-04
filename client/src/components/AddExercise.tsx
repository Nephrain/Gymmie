function AddExercise() {
    return (
        <div>
            <form>
                <label htmlFor="name">Exercise name:</label>
                <input type="text" name="name"></input>
                <label htmlFor="sets">Sets</label>
                <input className="text-gray-50" type="text" name="sets"></input>
                <input className="bg-slate-400" type="submit" value="Submit"></input>
            </form>
            <h1 className="text-3xl font-bold underline">
                Hello world!
            </h1>
        </div>
    )
}

export default AddExercise