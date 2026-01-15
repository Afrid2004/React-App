import { v4 as uuidv4 } from 'uuid';

const data = [
  {
    userProfileImg: "/images/user.png",
    userName: "Omar Faroque",
    userDept: "Computer Science & Engineering (CSE)",
    userUuid: "cse-" + uuidv4(),
    userBlood: "A+",
    userDistrict: "Feni, Bangladesh",
    userPosition: "1",
  },
  {
    userProfileImg: "/images/user.png",
    userName: "Ahmad Zubair",
    userDept: "Electrical & Electronics Engineering (EEE)",
    userUuid: "eee-" + uuidv4(),
    userBlood: "AB+",
    userDistrict: "Gulshan, Dhaka, Bangladesh",
    userPosition: "2",
  },
  {
    userProfileImg: "/images/user.png",
    userName: "Nur Hassan",
    userDept: "Civil Engineering (CE)",
    userUuid: "ce-" + uuidv4(),
    userBlood: "B+",
    userDistrict: "Chattagram, Bangladesh",
    userPosition: "3",
  },
  {
    userProfileImg: "/images/user.png",
    userName: "Khalid Bin Walid",
    userDept: "Mechanical Engineering (ME)",
    userUuid: "me-" + uuidv4(),
    userBlood: "O+",
    userDistrict: "Rajshahi, Bangladesh",
    userPosition: "4",
  }
]

function UserInfo() {
  return <div className="usercard">
    {data.map((data, index) =>
      <div key={index} className='user'>
        <div className="userProfile">
          <img src={data.userProfileImg} alt={data.userName} />
        </div>
        <div className="userData">
          <h2>{data.userName}</h2>
          <p><i className="fi fi-tr-department-structure"></i> {data.userDept}</p>
          <p><i className="fi fi-tr-id-badge"></i> {data.userUuid}</p>
          <p><i className="fi fi-tr-syringe-injection-blood"></i> {data.userBlood}</p>
          <p><i className="fi fi-tr-house-building"></i> {data.userDistrict}</p>
        </div>
        <div className="user-position">
          <p>Position : {data.userPosition}</p>
        </div>
      </div>
    )}
  </div>
}

export default UserInfo;