import React from 'react'
import propTypes from 'prop-types'

const PropTypes = () => {
  const name = "Muhammed Faisal Yousuf Afrid";
  const id = 585433;
  return (
    <div className='card'>
      <p>Name: {name}</p>
      <p>Id: {id}</p>
    </div>
  )
}

PropTypes.propTypes = {
  name : propTypes.string,
  id: propTypes.number
}

PropTypes.defaultProps = {
  name: "Null",
  id: 0
}

export default PropTypes
