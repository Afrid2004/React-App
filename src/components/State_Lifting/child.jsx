import React from "react";

export default function Child(props) {
  const message = "Hello from Child Component!";

  return (
    <div>
      <h5>Child Component</h5>
      <button className="btn btn-info" onClick={() => props.onChildSend(message)}>
        Send Data to Parent
      </button>
    </div>
  );
}
