/* eslint-disable no-unused-vars */
import React from "react";

function firstComponent(props) {
  return (
    <div>
      <div>Hello {props.name}</div>
      <div>{props.children}</div>
    </div>
  );
}

export default firstComponent;
