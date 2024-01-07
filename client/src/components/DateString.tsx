"use client"

function DateString() {

  const date = new Date();

  return <div>
    {date.getMonth() + 1}/{date.getDate()}/{date.getFullYear()} {date.getHours()}:{date.getMinutes()}
  </div>
}

export default DateString;