import React, { useState } from "react";
import "./AddTask.css";
import { createTask } from "../../API/apiCalls";

const AddTask = ({ onClose }) => {
  const [isClosed, setIsClosed] = useState(false);
  const [taskName, setTaskName] = useState("");
  const [dateTime, setDateTime] = useState("");
  const [priority, setPriority] = useState("Critical");
  const [assignedTo, setAssignedTo] = useState("");

  const handleCloseClick = () => {
    setIsClosed(true);
    onClose();
  };

  const handleSaveClick = async (e) => {
    e.preventDefault();
    try {
      // Call the function to create a task in Firestore
      // await createTask(teamId, taskName, dateTime, priority, assignedTo);
      await createTask(taskName, dateTime, priority, assignedTo);

      // Close the modal
      handleCloseClick();
    } catch (error) {
      console.error("Error creating task:", error.message);
    }
  };

  if (isClosed) {
    return null; // Render nothing if the component is closed
  }

  return (
    <div className="AddMain">
      <div className="content">
        <div className="close-x">
          <p className="close" onClick={handleCloseClick}>
            <span className="close-now">X</span>
          </p>
          <div className="heads">
            <h1 className="main-head">Add Task</h1>
            <small className="date-today">Today 02/02/2024</small>
          </div>
        </div>

        <form className="form-content" onSubmit={(e) => {handleSaveClick(e)}}>
          <div className="taskname">
            <label className="lableName">Name the task</label>
            <input
              type="text"
              name="taskName"
              value={taskName}
              onChange={(e) => setTaskName(e.target.value)}
              className="name-input"
            />
          </div>

          <div className="timing">
            <div className="date">
              <label className="dateName">Date</label>
              <input
                type="text"
                name="dateTime"
                value={dateTime}
                onChange={(e) => setDateTime(e.target.value)}
                placeholder="12/02/2022"
                className="date-input"
              />
            </div>
            <div className="start">
              <label className="startName">Start</label>
              <input
                type="text"
                placeholder="11:00 AM"
                className="start-input"
              />
            </div>
            <div className="end">
              <label className="endName">End</label>
              <input
                type="text"
                placeholder="13:00 AM"
                className="end-input"
              />
            </div>
          </div>

          <div className="task-assign">
            <div className="prior">
              <label className="priorName">Task Priority</label>
              <select
                name="priority"
                value={priority}
                onChange={(e) => setPriority(e.target.value)}
                className="selection"
              >
                <option value="---">Select</option>
                <option value="Number 1">Number 1</option>
                <option value="Number 2">Number 2</option>
                <option value="Number 3">Number 3</option>
              </select>
            </div>
            <div className="Assign">
              <label className="startName">Assigned to</label>
              <select
                name="assignedTo"
                value={assignedTo}
                onChange={(e) => setAssignedTo(e.target.value)}
                className="selection"
              >
                <option value={assignedTo}>Roy</option>
              </select>
            </div>
          </div>

          <div className="buttons">
            <button className="save-btn" type="submit">
              Save
            </button>
            <button className="cancel-btn" onClick={handleCloseClick}>
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddTask;
