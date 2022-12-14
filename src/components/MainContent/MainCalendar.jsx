import React, { useState } from "react";
import Calendar from "react-calendar";
import "./Calendar.css";

const MainCalendar = () => {
  const [date, setDate] = useState(new Date());

  return (
    <div className="2xl:p-7 lg:p-2 p-7">
      <Calendar
        onChange={setDate}
        value={date}
        locale="en"
        next2Label={null}
        prev2Label={null}
      />
    </div>
  );
};

export default MainCalendar;
