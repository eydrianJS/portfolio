import React, { useState } from "react";

const AddTask = props => {
  const minDate = new Date().toISOString().slice(0, 10);
  let maxDate = minDate.slice(0, 4) * 1 + 2;
  maxDate = maxDate + minDate.slice(4,10)
  const [text, setText] = useState("");
  const [checked, setChecked] = useState(false);
  const [date, setDate] = useState(minDate);
  const handleClick = () => {
    const obj = {
        text: text,
        date: date,
        important: checked,
    }
    const addTask = props.add(obj)
    if(addTask) {
        setText("")
        setChecked("")
        setDate(minDate)
    }
  }

  return (
    <div className="form">
      <input
        type="text"
        placeholder="Dodaj zadanie"
        value={text}
        onChange={e => setText(e.target.value)}
      />
      <input
        type="checkbox"
        checked={checked}
        onChange={() => setChecked(!checked)}
        id="important"
      />
      <label htmlFor="important">Priorytet</label> <br />
      <label htmlFor="duedate">Do kiedy zrobić</label>
      <input
        type="date"
        value={date}
        min={minDate}
        max={maxDate}
        onChange={e => setDate(e.target.value)}
      />
      <br />
      <button onClick={handleClick}>DODAJ</button>
    </div>
  );
};

export default AddTask;
