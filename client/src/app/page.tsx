"use client";
import AddExercise from "@/components/AddExercise";
import React, { useEffect, useState } from "react";

function page() {  

  // const [exercise, setExercise] = useState("Loading");
  // const [sets, setSets] = useState(0);

  // useEffect(() => {
  //   fetch("http://localhost:4000").then(
  //     response => response.json()
  //   ).then(
  //     data => {
  //       setExercise(data.name);
  //       setSets(data.sets);
  //     }
  //   )
  // }, [])

  return (
    <div className="bg-black">
      <AddExercise />
    </div>
  )
}

export default page;