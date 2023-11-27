import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function Users() {
    return (
        <div>
            <h3>User details Page................</h3>
            <h4>
                <Link to="/users/1">User-1</Link>
            </h4>
            <h4>
                <Link to="/users/2">User-2</Link>
            </h4>
            <h4>
                <Link to="/users/3">User-3</Link>
            </h4>

            <div style={{textAlign:"center", height:"200px",border:"2px solid black", lineHeight:"400px", }}>
                <Outlet/>
            </div>
        </div>
    )
}

export default Users
