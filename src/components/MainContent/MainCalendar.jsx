import React, { useState } from "react";
import Calendar from "react-calendar";
// import "react-calendar/dist/Calendar.css";
import "./Calendar.css";
import { CgSpinner } from "react-icons/cg";

const MainCalendar = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [date, setDate] = useState(new Date());

  if (error) {
    return <span>{error.message}</span>;
  }
  if (isLoading) {
    return (
      <span>
        <CgSpinner />
        Loading...
      </span>
    );
  }

  return (
    <div className="p-7">
      <Calendar
        onChange={setDate}
        value={date}
        locale="en"
        // tileContent={({ date, view }) =>
        //   view === "month" && date.getDay() === 0 ? <p>It's Sunday!</p> : null
        // }
        next2Label={null}
        prev2Label={null}
      />
    </div>
  );
};

export default MainCalendar;
