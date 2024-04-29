import React from "react";

const Sidebar = ({ onTabClick }) => {

  return (
    <div className="column">
      <div className="div-3">
        <div className="div-4"> SwiftLoop </div>
        <div className="div-5" onClick={() => onTabClick("Home")}>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/468750738a09df696070d578ea06c295070c6ecf92cc12f7176ce4b1a6da98f7?"
            className="img"
            alt = ""
          />
          <div className="div-6">Home</div>
        </div>
        <div className="div-7" onClick={() => onTabClick("Tasks")}>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/4f7b9dce5199f9a7d2e7978a3d0e9ca0cc291b5446b3aa7390055e34479762a5?"
            className="img-2"
            alt = ""
          />
          <div className="div-8">Tasks and events</div>
        </div>
        <div className="div-9">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/0f8be4b2d62066a8824d2161254fb86eeca49a5ced01d5491b36579101ace936?"
            className="img-3"
            alt = ""
          />
          <div className="div-10">Messages</div>
        </div>
        <div className="div-11">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/0b210f7583c9dbacb1a0b1c330064db434933c86e5dc2f887acff97e41556b0c?"
            className="img-4"
            alt = ""
          />
          <div className="div-12">My Teams</div>
        </div>
        <div className="div-13">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/2e1285df9e3d0fcc24198a6077629238fa39c891f02dcf885a3cf7ddb5a08f30?"
            className="img-5"
            alt = ""
          />
          <div className="div-14">Settings and Preferences</div>
        </div>
        <div className="div-15">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/0b210f7583c9dbacb1a0b1c330064db434933c86e5dc2f887acff97e41556b0c?"
            className="img-6"
            alt = ""
          />
          <div className="div-16">Team MVP1</div>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
