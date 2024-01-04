function Header() {
    return(
        <nav className="bg-slate-400">
            <ul className="flex-row flex font-bold space-x-7 text-xl">
                <li className="hover:bg-slate-300 p-2"><a href="/home">Home</a></li>
                <li className="hover:bg-slate-300 p-2"><a href="/profile">Profile</a></li>
                <li className="hover:bg-slate-300 p-2"><a href="/history">History</a></li>
                <li className="hover:bg-slate-300 p-2"><a href="/exercises">Exercises</a></li>
            </ul>
        </nav>
    )
}

export default Header;