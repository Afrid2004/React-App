var heading, cardbody;

heading = {
  fontWeight: "500",
  marginBottom: "1rem",
};
cardbody = {
  padding: "1.5rem",
  maxWidth: "370px",
  border: "1px solid rgba(211, 211, 211, 0.053)",
  background: "#11171fff",
  boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px",
};

function Card(props) {
  const { authorName, cardHeading, cardDesc } = props;
  return <div style={cardbody}>
    <h1 style={heading}>
      Hello I'm {authorName}, {cardHeading}
    </h1>
    <h3>{cardDesc}</h3>
  </div>
}

export default Card;