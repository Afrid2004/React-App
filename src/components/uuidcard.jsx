import { v4 as uuidv4 } from 'uuid';

const data = [
  {
    userProfileImg: "/images/user.png",
    userName: "User Name 1",
    userDept: "Computer Science & Engineering (CSE)",
    userUuid: uuidv4(),
  },
  {
    userProfileImg: "/images/user.png",
    userName: "User Name 2",
    userDept: "Electrical & Electronics Engineering (EEE)",
    userUuid: uuidv4(),
  },
  {
    userProfileImg: "/images/user.png",
    userName: "User Name 3",
    userDept: "Civil Engineering (CE)",
    userUuid: uuidv4(),
  }
]

function UserInfo() {
  return <div className="usercard">
    {data.map((data) =>
      <div>
        <div className="userProfile">
          <img src={data.userProfileImg} alt={data.userName} />
        </div>
        <div className="userData">
          <h2>Name : {data.userName}</h2>
          <p>Department : {data.userDept}</p>
          <p>User Id : {data.userUuid}</p>
        </div>
      </div>
    )}
  </div>
}

export default UserInfo;