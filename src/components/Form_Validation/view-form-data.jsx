import React from 'react'

const ViewFormData = (props) => {
  const { data } = props;
  const { name, email } = data;

  console.log(data)
  return (
    <div className='card' style={{ minWidth: "450px" }}>
      <h2 className='mb-3'>User Details</h2>
      <h5 className='mb-3'>Hello, {name.split(" ")[0]}</h5>
      <div>
        <h6 className='mb-3'>User : {name}</h6>
        <p>Email : {email}</p>
      </div>
    </div>
  )
}

export default ViewFormData