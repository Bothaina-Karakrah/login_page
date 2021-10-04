import React, { useState } from "react";

function App() {
  const [HeadingText, setHeadingText] = useState("Hello");
  const [isMouseOver, setMouseOver] = useState(false);
  const [contact, setContact] = useState({
    fName: "",
    lName: "",
    email: ""
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setContact((prevValue) => {
      return {
        ...prevValue,
        [name]: value
      };
    });
  }

  function handleClick() {
    setHeadingText("Submitted");
    setContact({
      fName: "",
      lName: "",
      email: ""
    });
  }

  function handleMouseOver() {
    setMouseOver(true);
  }

  function handleMouseOut() {
    setMouseOver(false);
  }

  return (
    <div className="container">
      <h1>
        {HeadingText} {contact.fName} {contact.lName}{" "}
      </h1>
      <input
        name="fName"
        onChange={handleChange}
        placeholder="First Name"
        value={contact.fName}
      />
      <input
        name="lName"
        onChange={handleChange}
        placeholder="Last Name"
        value={contact.lName}
      />
      <input
        onChange={handleChange}
        name="email"
        value={contact.email}
        placeholder="Email"
      />

      <button
        onClick={handleClick}
        style={{ backgroundColor: isMouseOver ? "black" : "white" }}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
      >
        Submit
      </button>
    </div>
  );
}

export default App;
