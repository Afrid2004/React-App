import React, { useRef } from "react";

const UserData = () => {
    const userName = useRef();
    const userPass = useRef();

    const handleFormSubmit = (event) =>{
        event.preventDefault();
        alert(
          "User Name: " +
            userName.current.value +
          ", User Pass: " +
            userPass.current.value
        );
        userName.current.classList.add('success-border');
        userPass.current.classList.add("success-border");
    }

  return (
    <div className="card">
      <h4>User Registration</h4>
      <form onSubmit={handleFormSubmit}>
        <div>
          <input
            type="text"
            id="name"
            name="name"
            className="form-control mb-3"
            placeholder="Enter Your name"
            ref={userName}
          />
        </div>
        <div>
          <input
            type="password"
            id="password"
            name="password"
            className="form-control mb-3"
            placeholder="Enter Your password"
            ref={userPass}
          />
        </div>
        <button type="submit" className="btn btn-info">Register</button>
      </form>
    </div>
  );
};

export default UserData;
