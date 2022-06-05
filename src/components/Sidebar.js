import React from 'react'
import { Link } from 'react-router-dom'
import './sidebar.css'
function Sidebar({ openSidebar, manageSidebar }) {
    return (
        <div className={`sidebar ${openSidebar ? 'active' : ''}`}>
            <div class="control has-icons-left has-icons-right">
                <input class="input is-medium" type="text" placeholder="Pretraživanje" />
                <span class="icon is-right">
                    <i class="fa-solid fa-magnifying-glass"></i>
                </span>

            </div>

            <button onClick={manageSidebar} className="button is-primary is-outlined button-login"><Link to="/login">Prijavi se</Link></button>
            <ul className='sidebar-nav-links'>
                <li onClick={manageSidebar} className='sidebar-nav-link'><Link to="/shop">Shop</Link></li>
                <li onClick={manageSidebar} className='sidebar-nav-link'><Link to="/kontakt">Kontakt</Link></li>
                <li onClick={manageSidebar} className='sidebar-nav-link'><Link to="/onama">O nama</Link></li>
                <li onClick={manageSidebar} className='sidebar-nav-link'><Link to="/ski/bike/rental">Ski/bike rental</Link></li>
                <li onClick={manageSidebar} className='sidebar-nav-link'><Link to="/qbl/sistemi">QBL sistemip</Link></li>
                <li onClick={manageSidebar} className='sidebar-nav-link'><Link to="/vitabri">Vitabri šatori</Link></li>
                <li onClick={manageSidebar} className='sidebar-nav-link'><Link to="/lokacije">Nase lokacije</Link></li>
                <li onClick={manageSidebar} className='sidebar-nav-link'><Link to="/servis/bicikala">Servis bicikala</Link></li>
            </ul>
        </div>

    )
}

export default Sidebar