import React from 'react';
import './AddTeam.css';

const AddTeam = ({email, setEmail, handleAddTeamMember}) => {
  return (
    <form className="AddTeam">
          <input type="email" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} />
          <button type="button" onClick={() => {handleAddTeamMember(email, setEmail)}}>Add Member</button>
    </form>
  )
}

export default AddTeam;