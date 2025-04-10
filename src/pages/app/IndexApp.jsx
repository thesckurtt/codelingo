import React from 'react'
import { useAuth } from '../../contexts/AuthContext'

const IndexApp = () => {
  const {user} = useAuth();
  return (
    <div>
      <h1>Hello {user.username}, from App</h1>
    </div>
  )
}

export default IndexApp
