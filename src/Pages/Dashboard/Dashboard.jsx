import React, { useEffect, useState } from "react";
import Sidebar from "../../Components/Sidebar/Sidebar";
import DashboardHome from "./DashboardHome";
import TaskManagement from "./TaskManagement";
import "./DashboardStyles.css";
import { getCurrentUser } from "../../API/apiCalls";

const Dashboard = () => {
  const [selectedTab, setSelectedTab] = useState("Home");
  const [user, setUser] = useState();

  const handleTabClick = (tabName) => {
    setSelectedTab(tabName);
  };

  useEffect(()=> {
    getCurrentUser(setUser)
  }, [user])

  return (
    <>
      <div className="div">
        <div className="div-2">
          {/* Sidebar goes here */}
          <Sidebar onTabClick={handleTabClick} />

          {/* Render component based on the selected tab */}
          {selectedTab === "Home" && <DashboardHome user={user}/> }
          {selectedTab === "Tasks" && <TaskManagement user={user}/>}
          {/* More tabs to be continue */}
        </div>
      </div>
    </>
  );
}

export default Dashboard
