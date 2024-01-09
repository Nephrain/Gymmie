"use client"
import { usePathname } from "next/navigation";

function Header() {
    const id = 1;
    
    return(
        <div>
            <nav className="bg-slate-400">
                <ul className="flex-row flex font-bold text-xl justify-end content-center">
                    <li className={"hover:bg-slate-300 p-2 " + (usePathname() === "/home" ? "bg-slate-500" : "")}>
                        <a href="/home">Home</a>
                    </li>
                    <li className={"hover:bg-slate-300 p-2 " + (usePathname() === `/user/${id}/profile` ? "bg-slate-500" : "")} >
                        <a href="/profile">Profile</a>
                    </li>
                    <li className={"hover:bg-slate-300 p-2 " + (usePathname() === "/history" ? "bg-slate-500" : "")} >
                        <a href="/history">History</a>
                    </li>
                    <li className={"hover:bg-slate-300 p-2 " + (usePathname() === "/exercises" ? "bg-slate-500" : "")} >
                        <a href="/exercises">Exercises</a>
                    </li>
                    <li className="hover:bg-slate-100 bg-slate-300 p-2 px-4 rounded-md" ><a href="/workout">New</a></li>
                </ul>
            </nav>
        </div>
    );
}

export default Header;