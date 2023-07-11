/* eslint-disable no-unused-vars */
import React, { useState } from "react";

export default function Message(props) {
  const [message, setMessage] = useState("Welcome Visitor");
  return (
    <div>
      <div>{message}</div>
      <button
        onClick={() => {
          setMessage("Thank You");
        }}
      >
        Subscribe
      </button>
    </div>
  );
}
