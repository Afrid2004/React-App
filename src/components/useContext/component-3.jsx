import React, { useContext } from 'react'
import { Context } from './useContext'

const Component3 = () => {
  const {name ,id} = useContext(Context)
  return (
    <div className='card'>
      <p>User Name: {name}</p>
      <p>User Id: {id}</p>
    </div>
  )
}

export default Component3