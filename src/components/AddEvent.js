import { useState } from "react";
import { useHistory } from "react-router";

const AddEvent = () => {
  const [title, setTitle] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [description, setDescription] = useState("");
  const history = useHistory();

  const submit = (e) => {
    e.preventDefault();
    const event = {
      title,
      startDate,
      endDate,
      startTime,
      endTime,
      description,
    };
    fetch("http://localhost:8000/events", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(event),
    }).then(() => {
      history.push("/");
    });
  };

  return (
    <div className="list-container">
      <div className="title">Add Event</div>
      <form className="form-container" onSubmit={submit}>
        <div className="row">
          <label className="label">Event Title: </label>
          <input
            required
            type="text"
            className="input-field"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
        </div>
        <div className="row">
          <label className="label">Start Date: </label>
          <input
            required
            type="date"
            className="input-field"
            value={startDate}
            onChange={(e) => {
              setStartDate(e.target.value);
            }}
          />
          <label className="label">End Date: </label>
          <input
            required
            type="date"
            className="input-field"
            value={endDate}
            onChange={(e) => {
              setEndDate(e.target.value);
            }}
          />
        </div>
        <div className="row">
          <label className="label">Start Time: </label>
          <input
            required
            type="time"
            className="input-field"
            value={startTime}
            onChange={(e) => {
              setStartTime(e.target.value);
            }}
          />
          <label className="label">End Time: </label>
          <input
            required
            type="time"
            className="input-field"
            value={endTime}
            onChange={(e) => {
              setEndTime(e.target.value);
            }}
          />
        </div>
        <div className="row">
          <label className="label">Description: </label>
          <textarea
            className="text-field"
            value={description}
            onChange={(e) => {
              setDescription(e.target.value);
            }}
          ></textarea>
        </div>
        <button className="btn">Add</button>
      </form>
    </div>
  );
};

export default AddEvent;
