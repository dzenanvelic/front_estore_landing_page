import React from 'react'
import Menu from './Menu'
import Nav from './Nav'
import './topheader.css'
import Topmenu from './Topmenu'
function Topheader({ manageSidebar }) {
    return (
        <div className='topheader '>
            <Topmenu />
            <Menu manageSidebar={manageSidebar} />
            <Nav />
        </div>
    )
}

export default Topheader