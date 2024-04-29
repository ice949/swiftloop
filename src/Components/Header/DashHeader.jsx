import React from "react";

const DashHeader = ({user}) => {
  return (
    <div className="div-19">
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/8f7db48bd3558d7280078ed72f9286f51e55c50d40b48ab4881396d24b66aeaf?"
        className="img-7"
        alt = ""
      />
      <div className="div-20">
        <div className="div-21">
          <div className="div-22">{user}</div>
          <div className="div-23">Team Member</div>
        </div>
        <div className="div-24">A</div>
      </div>
    </div>
  )
}

export default DashHeader
