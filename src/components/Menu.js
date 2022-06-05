import React, { useEffect } from 'react'
import './menu.css'
import axios from 'axios'
function Menu({ manageSidebar }) {
    /*  useEffect(() => {
         const getdata = async () => {
             const res = await axios.get('https://bracom-api.economico.ba/api/v1/loyalty/public/8265e2ee-d9a3-48d8-a209-99779c8509b3/supplies?WebShopFilterModel.Count=12&WebShopFilterModel.Index=0')
             console.log("shop", res.data.payload)
         }
         getdata()
     }, []) */


    return (
        <div id='menu'>
            <div className="container menu-container">
                <div className="centering-div">
                    <nav className="navbar" role="navigation" aria-label="main navigation">

                        <div className="navbar-brand">
                            <a href="/" className="navbar-item">
                                <img src={process.env.PUBLIC_URL + '/images/logo.png'} alt="brandimage" />
                            </a>
                        </div>

                    </nav>
                    <div className="navbar-search is-hidden-touch">
                        <div className="form">
                            <p className=" control-inpt control has-icons-right">
                                <input className="input  input-search" type="text" placeholder="Pretrazivanje" />
                                <span className="icon is-small is-right">
                                    <i className=" fa-solid fa-magnifying-glass"></i>
                                </span>
                            </p>
                        </div>
                    </div>
                    <div className="nav-burger" onClick={manageSidebar}>
                        <div className="nav-cart">
                            <div className="cart-count">0</div>
                            <span>
                                <a href="#">
                                    <i class="bi bi-bag shopping-bag"></i>

                                </a>
                            </span>
                            <div className="nav-login is-hidden-touch">
                                <button className="button is-primary is-outlined button-login">Prijavi se</button>
                            </div>
                        </div>

                        <div className=" nav-cart-mobile is-hidden-desktop">


                            <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                                <span aria-hidden="true"></span>
                                <span aria-hidden="true"></span>
                                <span aria-hidden="true"></span>
                            </a>
                        </div>
                    </div>
                </div>




            </div>







        </div>



    )
}

export default Menu