import { useState } from "react";

export const DateInput = () => {
  const [date, setDate] = useState("");

  const handleDateChange = (e) => {
    setDate(e.target.value);
    console.log("Selected date:", e.target.value);
  };

  return (
    <form>
      <label htmlFor="event-date">Select a date:</label>
      <input
        type="date"
        id="event-date"
        name="event-date"
        value={date}
        onChange={handleDateChange}
      />
    </form>
  );
};
