/* eslint-disable no-unused-vars */
import React from "react";

function ClickHandler() {
  const clickHandler = (event, count = 1) => {
    console.log("Button Clicked", count, event);
  };
  return (
    <div>
      <button onClick={clickHandler}>Click</button>
      <button onClick={(event) => clickHandler(event, 5)}>Click 5</button>
    </div>
  );
}

export default ClickHandler;
