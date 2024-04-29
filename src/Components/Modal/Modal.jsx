import React, { useState } from "react";
import Modal from "react-modal";
import "./Modal.css";
import Subscribe from "../Subscribe/Subscribe";
import { FaGoogle } from "react-icons/fa";
import AddTeamMember from "./CreateTeam";
import CreateTeam from "./CreateTeam";

const customStyles = {
  content: {
    right: "auto",
    bottom: "auto",
    width: "90%",
    height: "90%",
    backgroundColor: "#171616",
    color: "#fff",
    borderRadius: "15px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    inset: "5% auto auto 5%",
  },
};

const ModalView = ({
  afterOpenModal,
  closeModal,
  modalIsOpen,
  email,
  setEmail,
  handleSubscribe,
  isAccount,
  hasTeam,
  handleCreateTeam,
  email1,
  setEmail1,
  handleAddTeamMember,
  teamName,
  setTeamName,
}) => {

  const [status, setStatus] = useState("signingIn");
  const [password, setPassword] = useState("");
  return (
    <Modal
      isOpen={modalIsOpen}
      onAfterOpen={afterOpenModal}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Example Modal"
    >
      <div className="modal-content">
        
  
        {!isAccount ? (
          <div className="modal-body">
            <p>
              Welcome to SwiftLoop. Your team collaboration and management tool.
              Sign up to get started
            </p>
            <Subscribe
              email={email}
              setEmail={setEmail}
              handleSubscribe={handleSubscribe}
              btnTxt="Continue"
            />
            <div className="signup-with-g">
              <span>
                <p>Or Signup with Google</p>
              </span>
              <div className="google-icon">
                <FaGoogle />
              </div>
            </div>
          </div>
        ) : (
          <div className="modal-body">
            {hasTeam ? (
              <AddTeamMember email1={email1} setEmail1={setEmail1} handleAddTeamMember={handleAddTeamMember} />
            ) : (
              <CreateTeam teamName={teamName} setTeamName={setTeamName} handleAddTeamMember={handleAddTeamMember} />  
            )}
            <button
              className="btn"
              onClick={() => {
                closeModal();
                setTeamName("");
                setEmail("");
              }}
            >
              Done
            </button>
          </div>
        )}
      </div>
    </Modal>
  );
};

export default ModalView;
