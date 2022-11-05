import React from "react";
import "./research.css";

const Research = ({
  backgroundImg,
  titleString,
  onClickMusic,
  titleValue,
  numberValue,
  onChangeTitle,
  onChangeNumber,
  enabledButton,
}) => {
  const addStyle = {
    backgroundImage: `url(${backgroundImg})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };
  return (
    <div className="research" id="research">
      <div className="boxResearch formResearch" style={addStyle}>
        <div className="searchForm">
          <div className="searchForm-group">
            <div className="searchForm-div">
              <input
                type="text"
                value={titleValue}
                className="searchForm-input"
                placeholder={titleString}
                onChange={onChangeTitle}
              />
            </div>

            <div className="searchForm-div">
              <input
                type="number"
                min={3}
                max={12}
                value={numberValue}
                className="searchForm-input"
                placeholder="Generate number..."
                onChange={onChangeNumber}
              />
            </div>
          </div>
          <button
            className="btnGenerate"
            onClick={onClickMusic}
            disabled={!enabledButton}
          >
            Generate
          </button>
        </div>
      </div>
    </div>
  );
};

export default Research;
