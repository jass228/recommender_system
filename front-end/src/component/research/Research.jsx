import React from "react";
import "./research.css";

const Research = ({ backgroundImg, titleString }) => {
  const addStyle = {
    backgroundImage: `url(${backgroundImg})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };
  return (
    <div className="research" id="research">
      <div className="boxResearch formResearch" style={addStyle}>
        <form action="" className="searchForm">
          <div className="searchForm-group">
            <div className="searchForm-div">
              <input
                type="text"
                className="searchForm-input"
                placeholder={titleString}
              />
            </div>

            <div className="searchForm-div">
              <input
                type="number"
                className="searchForm-input"
                placeholder="Generate number..."
              />
            </div>
          </div>
          <button className="btnGenerate">Generate</button>
        </form>
      </div>
    </div>
  );
};

export default Research;
