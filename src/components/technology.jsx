
function Technology(props) {
  const { techImg, techTitle, techDesc } = props;
  return <div className="card">
    <div className="tech-img">
      <img src={techImg} alt={techTitle} />
    </div>
    <div className="tech-content">
      <h2>{techTitle}</h2>
      <p>{techDesc}</p>
    </div>
  </div>
}

export default Technology; 