import React from 'react'
import './footer.css'
function Footer() {
    return (
        <div className='footer'>
            <div className="columns footer-container is-gapless">
                <div className="column is-7">
                    <div className="white-col">
                        <div className="columns">
                            <div className="column is-8-desktop is-offset-4-desktop">
                                <div className="columns is-mobile">
                                    <div className="column footer-titles">
                                        <h2 class="title is-5">Kompanija</h2>
                                        <p><a href="/o-nama">O nama</a></p>
                                        <p><a href="/o-nama">Kontakt</a></p>
                                        <p><a href="/o-nama">Aplikacija</a></p>
                                        <p><a href="/o-nama">Uslovi korištenja</a></p>
                                    </div>
                                    <div className="column footer-titles">
                                        <h2 class="title is-5">Info</h2>
                                        <p >Alipašina bb - plato Olimpijskog kompleksa Zetra</p>
                                        <p>+387 33 426 666</p>
                                        <p>info@bracom.ba</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="column is-5">
                    <div className="black-col ">
                        <div className="columns black-column-marg">
                            <div className="column is-8">
                                <h2 class=" follow-us title is-5">Pratite nas</h2>
                                <a class="mr-5" href="https://www.facebook.com/BRACOM" target="_blank"><i class="fa-brands fa-facebook follow-icons"></i></a>
                                <a class="mr-5" href="https://www.facebook.com/BRACOM" target="_blank"><i class="fa-brands fa-instagram follow-icons"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer