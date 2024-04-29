import React, { useState } from 'react';
import DashHeader from "../../Components/Header/DashHeader";
import Board from "../../Components/Board/Board";
import SearchBar from "../../Components/Searchbar/SearchBar";
// import { createTask } from "../../API/apiCalls";
import AddTask from "./AddTask";
import AddStandup  from "./StandUp";

function TaskManagement({ teamId, taskName, dateTime, priority, assignedTo, user }) {
  const [isAddTaskVisible, setAddTaskVisible] = useState(false);
  const [isAddStandupVisible, setAddStandupVisible] = useState(false);

  const handleAddTaskClick = () => {
    setAddTaskVisible(!isAddTaskVisible);
  };

  const handleAddTaskClose = () => {
    setAddTaskVisible(false);
  };

  const handleAddStandupClick = () => {
    setAddStandupVisible(!isAddStandupVisible);
  };

  const handleAddStandupClose = () => {
    setAddStandupVisible(false);
  };

  return (
    <div className="column-2">
      <div className="div-17">
        <div className="div-18">
          {/* Header goes here */}
          <DashHeader user={user} />
          <div className="head-wrapper">
            <div className="div-25">Manage Tasks</div>
            <div className="task-buttons">
              <button className="standUp" onClick={handleAddStandupClick} >+ Standup</button>
              <button className='create-task' onClick={handleAddTaskClick}>+ New Task</button>
            </div>
          </div>
        </div>
        <div className="div-27">
          <div className="div-28">
            <div className="div-29">
              <div className="div-30">
                <div className="div-31">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/879d0d1f402932bec209cb7311bc97459d9ff48e1d8f8054f35dac6b0e102b54?"
                    className="img-8"
                    alt=""
                  />
                  <div className="div-32">Board</div>
                </div>
                <div className="div-33" />
              </div>
            </div>
            <div className="div-38">
              {/* Searchbar component goes here */}
              <SearchBar />
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/66efcc25bcaaede2e458f7df8559149a7875f4727721376a9c62b303f5996e2b?"
                className="img-12"
                alt=""
              />
            </div>
          </div>
          <div className="div-41" />
        </div>
        {/* Board Goes here */}
        <Board />
      </div>

      {/* Conditional rendering of AddTask component */}
      {isAddTaskVisible && <AddTask onClose={handleAddTaskClose} teamId={teamId} />}
      {isAddStandupVisible && <AddStandup onClose={handleAddStandupClose} teamId={teamId} />}
    </div>
  );
}

export default TaskManagement;
