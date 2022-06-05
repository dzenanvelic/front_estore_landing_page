import React from 'react'
import './topmenu.css'
function Topmenu() {
    return (
        <div id='top-menu' className='is-hidden-touch'>
            <div className="container">
                <ul className="top-menu-main">
                    <li><a>Shop</a></li>
                    <li><a>Kontakt</a></li>
                    <li><a>O nama</a></li>
                    <li><a>Ski/bike rental</a></li>
                    <li><a>QBL sistemi</a></li>
                    <li><a>Vitabri šatori</a></li>
                    <li><a>Naše lokacije</a></li>
                    <li><a>Servis bicikala</a></li>
                </ul>
            </div>

        </div>
    )
}

export default Topmenu