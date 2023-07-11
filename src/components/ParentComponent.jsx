/* eslint-disable no-unused-vars */
import React from "react";
import ChildComponent from "./ChildComponent";

function ParentComponent() {
  const firstComponentParent = (childname) => {
    alert(`Hello Parent ${childname}`);
  };
  return <ChildComponent firstComponentParent={firstComponentParent} />;
}

export default ParentComponent;
