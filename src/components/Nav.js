import React, { useState } from 'react'
import './nav.css'
function Nav() {
    const [openDrop, setOpenDrop] = useState(false)
    const handleDrop = () => {
        setOpenDrop(!openDrop)
        //console.log("opendrop", openDrop)
    }
    return (
        <div className='nav'>


            <div className="container">
                <div className="nav_dropdown_btns">

                    {/* one dropdown button */}
                    <div className={` button-drop dropdown `} onClick={handleDrop}>
                        <div className="dropdown-trigger">
                            <button className="button is-white" aria-haspopup="true" aria-controls="dropdown-menu2">
                                <span className="nav-title">SKI & SNOWBOARD</span>
                                <span className="icon is-small">
                                    <i className="fa-solid fa-chevron-down" aria-hidden="true"></i>
                                </span>
                            </button>
                        </div>


                    </div>

                    {/*end of one dropdown button */}
                    {/* one dropdown button */}
                    <div className={` button-drop dropdown `} onClick={handleDrop}>
                        <div className="dropdown-trigger">
                            <button className="button is-white" aria-haspopup="true" aria-controls="dropdown-menu2">
                                <span className="nav-title">TENIS</span>
                                <span className="icon is-small">
                                    <i className="fa-solid fa-chevron-down" aria-hidden="true"></i>
                                </span>
                            </button>
                        </div>


                    </div>

                    {/*end of one dropdown button */}
                    {/* one dropdown button */}
                    <div className={` button-drop dropdown `} onClick={handleDrop}>
                        <div className="dropdown-trigger">
                            <button className="button is-white" aria-haspopup="true" aria-controls="dropdown-menu2">
                                <span className="nav-title">VODENI SPORTOVI</span>
                                <span className="icon is-small">
                                    <i className="fa-solid fa-chevron-down" aria-hidden="true"></i>
                                </span>
                            </button>
                        </div>


                    </div>

                    {/*end of one dropdown button */}
                    {/* one dropdown button */}
                    <div className={` button-drop dropdown `} onClick={handleDrop}>
                        <div className="dropdown-trigger">
                            <button className="button is-white" aria-haspopup="true" aria-controls="dropdown-menu2">
                                <span className="nav-title">TRČANJE I PLANINARENJE</span>
                                <span className="icon is-small">
                                    <i className="fa-solid fa-chevron-down" aria-hidden="true"></i>
                                </span>
                            </button>
                        </div>


                    </div>

                    {/*end of one dropdown button */}
                    {/* one dropdown button */}
                    <div className={` button-drop dropdown `} onClick={handleDrop}>
                        <div className="dropdown-trigger">
                            <button className="button is-white" aria-haspopup="true" aria-controls="dropdown-menu2">
                                <span className="nav-title">BICIKLIZAM</span>
                                <span className="icon is-small">
                                    <i className="fa-solid fa-chevron-down" aria-hidden="true"></i>
                                </span>
                            </button>
                        </div>


                    </div>

                    {/*end of one dropdown button */}
                    {/* one dropdown button */}
                    <div className={` button-drop dropdown `} onClick={handleDrop}>
                        <div className="dropdown-trigger">
                            <button className="button is-white" aria-haspopup="true" aria-controls="dropdown-menu2">
                                <span className="nav-title">OSTALO</span>
                                <span className="icon is-small">
                                    <i className="fa-solid fa-chevron-down" aria-hidden="true"></i>
                                </span>
                            </button>
                        </div>


                    </div>

                    {/*end of one dropdown button */}
                    {/* one dropdown button */}
                    <div className={` button-drop dropdown `} onClick={handleDrop}>
                        <div className="dropdown-trigger">
                            <button className="button is-white" aria-haspopup="true" aria-controls="dropdown-menu2">
                                <span className="nav-title">DOGO</span>
                                <span className="icon is-small">
                                    <i className="fa-solid fa-chevron-down" aria-hidden="true"></i>
                                </span>
                            </button>
                        </div>


                    </div>

                    {/*end of one dropdown button */}
                    {/* one dropdown button */}
                    <div className={` button-drop dropdown `} onClick={handleDrop}>
                        <div className="dropdown-trigger">
                            <button className="button is-white" aria-haspopup="true" aria-controls="dropdown-menu2">
                                <span className="nav-title">ŽENSKI KUTAK</span>
                                <span className="icon is-small">
                                    <i className="fa-solid fa-chevron-down" aria-hidden="true"></i>
                                </span>
                            </button>
                        </div>


                    </div>

                    {/*end of one dropdown button */}


                </div>
            </div>
            {/* dropdown menu */}
            <div className={`menu_down ${openDrop ? "show-menu" : ''}`} id="dropdown-menu1" role="menu">

                <div className="container small-menu-flex-column">
                    {/* inside start */}
                    <ul className="dropdown-nav columns small-menu-flex-column">
                        {/* one item */}
                        <li className='dropdown-class column is-one-fifth'><a>VEZOVI ZA BORD</a>
                            <ul className='dropdown-items'>
                                <li className='dropdown-item'>Djeca</li>
                                <li className='dropdown-item'>Odrasli</li>
                            </ul>
                        </li>
                        {/* end one item */}
                        {/* one item */}
                        <li className='dropdown-class column is-one-fifth'><a>VEZOVI ZA BORD</a>
                            <ul className='dropdown-items'>
                                <li className='dropdown-item'>Djeca</li>
                                <li className='dropdown-item'>Odrasli</li>
                            </ul>
                        </li>
                        {/* end one item */}
                        {/* one item */}
                        <li className='dropdown-class column is-one-fifth'><a>VEZOVI ZA BORD</a>
                            <ul className='dropdown-items'>
                                <li className='dropdown-item'>Djeca</li>
                                <li className='dropdown-item'>Odrasli</li>
                            </ul>
                        </li>
                        {/* end one item */}
                        {/* one item */}
                        <li className='dropdown-class column is-one-fifth'><a>VEZOVI ZA BORD</a>
                            <ul className='dropdown-items'>
                                <li className='dropdown-item'>Djeca</li>
                                <li className='dropdown-item'>Odrasli</li>
                            </ul>
                        </li>
                        {/* end one item */}
                        {/* one item */}
                        <li className='dropdown-class column is-one-fifth'><a>VEZOVI ZA BORD</a>
                            <ul className='dropdown-items'>
                                <li className='dropdown-item'>Djeca</li>
                                <li className='dropdown-item'>Odrasli</li>
                            </ul>
                        </li>
                        {/* end one item */}
                        <li className="divider"></li>
                        {/* one item */}
                        <li className='dropdown-class column is-one-fifth'><a>VEZOVI ZA BORD</a>
                            <ul className='dropdown-items'>
                                <li className='dropdown-item'>Djeca</li>
                                <li className='dropdown-item'>Odrasli</li>
                            </ul>
                        </li>
                        {/* end one item */}
                        {/* one item */}
                        <li className='dropdown-class column is-one-fifth'><a>VEZOVI ZA BORD</a>
                            <ul className='dropdown-items'>
                                <li className='dropdown-item'>Djeca</li>
                                <li className='dropdown-item'>Odrasli</li>
                            </ul>
                        </li>
                        {/* end one item */}
                        {/* one item */}
                        <li className='dropdown-class column is-one-fifth'><a>VEZOVI ZA BORD</a>
                            <ul className='dropdown-items'>
                                <li className='dropdown-item'>Djeca</li>
                                <li className='dropdown-item'>Odrasli</li>
                            </ul>
                        </li>
                        {/* end one item */}
                        {/* one item */}
                        <li className='dropdown-class column is-one-fifth'><a>VEZOVI ZA BORD</a>
                            <ul className='dropdown-items'>
                                <li className='dropdown-item'>Djeca</li>
                                <li className='dropdown-item'>Odrasli</li>
                            </ul>
                        </li>
                        {/* end one item */}
                        {/* one item */}
                        <li className='dropdown-class column is-one-fifth'><a>VEZOVI ZA BORD</a>
                            <ul className='dropdown-items'>
                                <li className='dropdown-item'>Djeca</li>
                                <li className='dropdown-item'>Odrasli</li>
                            </ul>
                        </li>
                        {/* end one item */}
                    </ul>
                    {/* inside end */}
                </div>
            </div>

        </div >
    )
}

export default Nav