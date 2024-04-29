import React, { useState } from "react";
import './StandUp.css';
import { createTask } from "../../API/apiCalls";

// function StandUp() {
const StandUp = ({ onClose }) => {

 const [sendNotification, setSendNotification] = useState(false);
  const [isClosed, setIsClosed] = useState(false);
  const [taskName, setTaskName] = useState("");
  const [dateTime, setDateTime] = useState("");
  const [priority, setPriority] = useState("Critical");
  const [assignedTo, setAssignedTo] = useState("");

  const handleCloseClick = () => {
    setIsClosed(true);
    onClose();
  };

  const handleSaveClick = async () => {
    try {
      // Call the function to create a task in Firestore
      // await createTask(teamId, taskName, dateTime, priority, assignedTo);
      await createTask(taskName, dateTime, priority, assignedTo);

      // Close the modal
    //   handleCloseClick();
    } catch (error) {
      console.error("Error creating task:", error.message);
    }
  };

  if (isClosed) {
    return null; // Render nothing if the component is closed
  }


  
  const handleToggleNotification = () => {
    setSendNotification(!sendNotification);
  };


  return (
    <div className="standup-container">
      <div className="standup-content">

      

      <div className="header-container" >
        <div className="heading" > Quick Standup </div>
        <div className="close-button" onClick={handleCloseClick} > X </div>
      </div>



        <form className="form-content">

          <div className="taskname">
            <label className="lableName">Description</label>
            <input
              type="text"
              name="taskName"
              value={taskName}
              onChange={(e) => setTaskName(e.target.value)}
              className="name-input"
            />
          </div>


          <div className="task-assign">

            <div className="prior">
              <label className="priorName">Choose Project</label>
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
              <label className="startName">Attendees</label>
              <input
                type="text"
                name="assignedTo"
                value={assignedTo}
                onChange={(e) => setAssignedTo(e.target.value)}
                placeholder="Name surname"
                className="assin-input"
              />
            </div>

          </div>

          <div className="timing">

            
            <div className="date">
              <label className="dateName">Date</label> <br/>
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
              <label className="startName">Time</label> <br/>
              <input
                type="text"
                placeholder="11:00 AM"
                className="start-input"
              />
            </div>
            <div className="end"> 
              <label className="endName">  . </label> <br/>
              <input
                type="text"
                placeholder="13:00 AM"
                className="end-input"
              />
            </div>
          </div>

<div className="notifications">
    <div className="notification" >
        <p className="notification-title" > Activate Notifications </p>
        <p className="notification-desc" > Standup reminder will be sent to standup attendees </p>
     </div>
    <div className="notification-button" > 
     <input
            type="checkbox"
            checked={sendNotification}
            onChange={handleToggleNotification}
          />
           </div>  
</div>



          <div className="buttons">
            <button className="save-btn" onClick={handleSaveClick}>
              Save
            </button>
            <button className="cancel-btn" 
            onClick={handleCloseClick}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default StandUp;
