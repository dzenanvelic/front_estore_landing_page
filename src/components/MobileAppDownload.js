import React from 'react'
import './mobileappdownload.css'
function MobileAppDownload() {
    return (
        <div className='section'>
            <div className="container">
                <div className="columns is-vcentered is-6">
                    <div className="column">
                        <img className='download-app-hand ' src={process.env.PUBLIC_URL + '/images/loyalty-smartphone-mockup@2x.png'} alt="" />
                    </div>
                    <div className="column is-7">
                        <h2 class="title is-3">Preuzmite našu mobilnu aplikaciju</h2>
                        <div className="content"><p className='loyalty-app'>Bracom Loyalty App je mobilna aplikacija koju smo kreirali sa ciljem da lojalnim kupcima pored redovnih popusta pružimo i dodatne benefite u vidu dodatnih popusta, poklona i drugih pogodnosti.<a><a class="has-text-primary" href="/aplikacija"> Pročitaj više. </a></a></p></div>
                        <div className="columns is-mobile shotcurt-app-store">
                            <div className="column is-5">
                                <img src={process.env.PUBLIC_URL + '/images/app-store.png'} alt="" />
                            </div>
                            <div className="column is-5">
                                <img src={process.env.PUBLIC_URL + '/images/google-play.png'} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MobileAppDownload