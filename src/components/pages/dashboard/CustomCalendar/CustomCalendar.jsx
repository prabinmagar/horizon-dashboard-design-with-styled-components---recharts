import { useState } from "react";
import { CustomCalendarWrap } from "./CustomCalendar.styles";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const CustomCalendar = () => {
  const [date, setDate] = useState(new Date());
  return (
    <CustomCalendarWrap>
      <Calendar onChange={setDate} value={date} />
    </CustomCalendarWrap>
  );
};

export default CustomCalendar;
