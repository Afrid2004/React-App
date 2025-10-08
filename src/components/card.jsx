var name, heading, cardbody;
name = "Afrid";
heading = {
  fontWeight: "500",
  marginBottom: "1rem",
};
cardbody = {
  padding: "1.5rem",
  maxWidth: "370px",
  borderRadius: "1rem",
  background: "#11171fff",
  boxShadow: " rgba(0, 0, 0, 0.16) 0px 1px 4px",
};

function Card() {
  return <div style={cardbody}>
    <h1 style={heading}>
      Hello, I'm {name}. From today, we will learn about React JS
    </h1>
    <h3>The library for web and native user interfaces.</h3>
  </div>
}

export default Card;