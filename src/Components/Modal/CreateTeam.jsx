import React from "react";

const CreateTeam = ({teamName, setTeamName, handleCreateTeam}) => {
  return (
    <>
      <p>Create your team now!</p>
      <div className="invite-team">
        <form className="AddTeam">
          <input
            type="email"
            placeholder="Enter Team Name"
            value={teamName}
            onChange={(e) => setTeamName(e.target.value)}
          />
          <button
            type="button"
            onClick={() => {
              handleCreateTeam(teamName);
            }}
          >
            Create Team
          </button>
        </form>
      </div>
    </>
  );
};

export default CreateTeam;
