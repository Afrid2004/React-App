
const userData = [
  {
    Name: "MD Faisal Yousuf Afrid",
    Education: "Diploma in Engineering (Computer Science & Technology)",
    Moreinfo: [
      {
        Institute: "Feni Polytechnic Institute",
        Cgpa: "3.67",
        Session: "20-21",
        From: "Feni, Chattagram, Bangladesh."
      }
    ]
  },
  {
    Name: "MD Shahedul Islam",
    Education: "Diploma in Engineering (Civil Technology)",
    Moreinfo: [
      {
        Institute: "Feni Polytechnic Institute",
        Cgpa: "3.55",
        Session: "20-21",
        From: "Feni, Chattagram, Bangladesh."
      }
    ]
  },
  {
    Name: "MD Osman Goni Shuvo",
    Education: "Diploma in Engineering (Computer Science & Technology)",
    Moreinfo: [
      {
        Institute: "Feni Polytechnic Institute",
        Cgpa: "3.50",
        Session: "20-21",
        From: "Feni, Chattagram, Bangladesh."
      }
    ]
  },
  {
    Name: "MD Faruk Ahmed",
    Education: "Diploma in Engineering (Computer Science & Technology)",
    Moreinfo: [
      {
        Institute: "Feni Polytechnic Institute",
        Cgpa: "3.60",
        Session: "20-21",
        From: "Feni, Chattagram, Bangladesh."
      }
    ]
  }
]

function NestedUser() {
  return userData.map((data, index) =>
    <div className="user nested" key={index}>
      <h2> {data.Name}</h2>
      <p><i className="fi fi-tr-microchip"></i> {data.Education}</p>
      {data.Moreinfo.map((moreData, index) =>
        <div key={index}>
          <p><i className="fi fi-tr-school"></i> {moreData.Institute}</p>
          <p><i className="fi fi-tr-diploma"></i> {moreData.Cgpa}</p>
          <p><i className="fi fi-tr-calendar-clock"></i> Session {moreData.Session}</p>
          <p><i className="fi fi-tr-house-building"></i> {moreData.From}</p>
        </div>
      )}
    </div>
  )
}
export default NestedUser;