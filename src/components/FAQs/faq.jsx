import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid'

const Faq = ({ title, desc }) => {
  const [toggle, setToggle] = useState(false);
  return (
    <div className='card mb-3 toggle-card'>
      <div onClick={() => { setToggle(!toggle) }} className='d-flex align-items-center justify-content-between p-0 mb-2'>
        <h6 className='mb-0'>{title}</h6>
        <button className='btn btn-info d-flex justify-content-center align-items-center' style={{ width: "30px", height: "30px" }}>{toggle ? "-" : "+"}</button>
      </div>
      {toggle && (
        <div className={toggle ? "show" : ""}>
          <p>{desc.para}</p>
          <ul className='mt-2'>
            {desc.list && desc.list.map(data => (
              <li className='mb-2' key={uuidv4()}>{data.listdata}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}

export default Faq