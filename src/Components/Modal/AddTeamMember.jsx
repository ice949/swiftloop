import React from "react";

const AddTeamMember = ({email1, setEmail1, handleAddTeamMember}) => {
  return (
    <>
      <h3>{teamName}</h3>
      <p>Add your team members now!</p>
      <div className="invite-team">
        <AddTeam
          email={email1}
          setEmail={setEmail1}
          handleAddTeamMember={handleAddTeamMember}
        />
      </div>
      <p>Invite more</p>
    </>
  );
};

export default AddTeamMember;
