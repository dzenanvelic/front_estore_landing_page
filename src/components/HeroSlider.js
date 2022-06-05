import React, { useRef, useState } from 'react'
import './heroslider.css'
function HeroSlider() {
    const [moveSlide, setMoveSlide] = useState(true)
    const sliderRef = useRef()
    const handleClick = () => {
        setMoveSlide(!moveSlide)
    }


    return (
        <div className="slider">
            {/* arrows */}
            <div className="arrow-left" onClick={handleClick}>
                <i className="fa-solid fa-chevron-left"></i>
            </div>
            <div className="arrow-right" direction="right" onClick={handleClick}>
                <i class="fa-solid fa-chevron-right"></i>
            </div>
            {/* end arrows */}
            <div className={`sliders ${moveSlide ? "slide-down" : "slide-up"}`}>
                {/* slider 1 */}
                <div className='hero-slider-1 '>

                    <div className="container">
                        <div className="columns">
                            <div className="left-column-hero column is-6">
                                <div className="category-card">
                                    <div className="category-card-content">
                                        <h2 className='category-card-title'>DOGO</h2>
                                        <p className='category-card-desc'>Odlični popusti čak i do 30% na sportske asortimane. Sve što vam je potrebno za fudbal, košarki, tenis, skijanje, plivanje i mnoge druge sportove!</p>
                                        <div className="button is-primary is-medium">
                                            <a href="#" className='category-card-link'>Pogedaj sve <i class=" 
                                            fa-solid fa-right-long button-dart"></i></a>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div className="column is-6"></div>

                        </div>
                    </div>
                </div>
                {/* end of slider 1 */}
                {/* slider 2 */}
                <div className='hero-slider-2 '>

                    <div className="container">
                        <div className="columns">
                            <div className="right-column column is-6">
                                <div className="category-card">
                                    <div className="category-card-content">
                                        <h2 className='category-card-title'>Mobilna aplikacija</h2>
                                        <p className='category-card-desc'>Bracom Loyalty App je mobilna aplikacija koju smo kreirali sa ciljem da lojalnim kupcima pored redovnih popusta pružimo i dodatne benefite u vidu dodatnih popusta, poklona i drugih pogodnosti.<a>Procitaj više.</a></p>

                                        <div className="columns is-mobile">
                                            <div className="column is-5">
                                                <a href="#" className='category-card-link'><img className='app-store' src={process.env.PUBLIC_URL + '/images/app-store.png'} alt="" /> </a>
                                            </div>
                                            <div className="column is-5">
                                                <a href="#" className='category-card-link'><img className='google-play' src={process.env.PUBLIC_URL + '/images/google-play.png'} alt="" /> </a>
                                            </div>

                                        </div>



                                    </div>
                                </div>
                            </div>
                            <div className="column is-6"></div>

                        </div>
                    </div>
                </div>
                {/* end of slider 2 */}
            </div>

        </div>
    )
}

export default HeroSlider