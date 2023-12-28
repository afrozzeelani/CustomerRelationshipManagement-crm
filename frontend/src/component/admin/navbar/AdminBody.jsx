import React from 'react'
import { Outlet } from 'react-router-dom'

const AdminBody = () => {
  return (
    <div style={{height:'99vh', overflow:"hidden", maxWidth:'100%'}} className='d-flex row'>
        <div className='col-12'>
        <Outlet/>
        </div>
    </div>
  )
}

export default AdminBody