import React from 'react'
import { UserProvider } from './contextApi'
import Users from './users'
import NewUser from './newUser'

const UseReducerwithContextApi = () => {
  return (
    <div>
      <UserProvider>
        <NewUser />
        <Users />
      </UserProvider>
    </div>
  )
}

export default UseReducerwithContextApi