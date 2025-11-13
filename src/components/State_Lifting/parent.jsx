import React from "react";
import Child from "./child";

export default function Parent() {
  // child থেকে ডেটা পাওয়ার জন্য callback function
  const handleChildData = (data) => {
    console.log("Data received from Child:", data);
    alert("Data received from Child:", data);
  };

  return (
    <div>
      <h2>Parent Component</h2>
      <Child onChildSend={handleChildData} />
    </div>
  );
}
