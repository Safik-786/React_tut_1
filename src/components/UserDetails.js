import React from 'react'
import { useParams } from 'react-router-dom'

function UserDetails() {
    // const userId= useParams()
    // const id = userId.id;

    //      shortCut
    const {id}= useParams();

  return (
    <div>
      <h2>User Details Page . <br />
        
         hii i am user- {id}</h2>
    </div>
  )
}

export default UserDetails
