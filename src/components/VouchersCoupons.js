import React from 'react'
import './vouchercoupons.css'

import Slider from 'react-slick'
import { voucherCoupons } from '../data'



function VouchersCoupons() {
    const user = false
    function SampleNextArrow(props) {
        const { className, style, onClick } = props;
        return (
            <div
                className={"right-slide"}
                style={{ ...style, display: "block", fontSize: '32px', position: "absolute", top: "50%", right: '-30px' }}
                onClick={onClick}
            >
                <i class="fa-solid fa-chevron-right "></i>
            </div >
        );
    }

    function SamplePrevArrow(props) {
        const { className, style, onClick } = props;
        return (
            <div
                className={"left-slide"}
                style={{ ...style, display: "block", fontSize: '32px', position: "absolute", top: "50%", left: '-30px', }}
                onClick={onClick}
            >
                <i class="fa-solid fa-chevron-left "></i>
            </div>
        );
    }
    const settings = {
        dots: false,
        infinite: true,
        speed: 1000,
        slidesToShow: 4,
        slidesToScroll: 4,
        swipeToSlide: true,
        initialSlide: 0,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]

    };
    return (
        <div className=' section vouchers-coupons'>
            <div className="container">
                <h2 class="title is-3 has-text-centered">Vaučeri i kuponi</h2>
                <div className="home-tabs">
                    <div className="tabs">
                        <ul>
                            <li className="coupon is-active"><a className='voucher-title'>Kuponi <i class="fa-solid fa-circle-info"></i></a></li>
                            <li className="coupon "><a className='voucher-title'>Specijalni Kuponi <span><i class="fa-solid fa-circle-info"></i></span></a></li>
                        </ul>
                    </div>
                </div>
                <div className=" box-light">

                    <Slider {...settings}>

                        {voucherCoupons.map((voucher) => {
                            {/* onecard */ }
                            return <div key={voucher.id} class="card card-vouchers">
                                {!user && <div className="locked">
                                    <div className="coupon-card-lock">
                                        <span><i class="fa-solid fa-lock"></i></span>
                                        <span>ZAKLJUČANO</span>
                                    </div>
                                    <div className="lock-description">
                                        <span className='span-1'><i class="fa-solid fa-circle-info"></i></span>
                                        <span className='span-2'>Morate biti prijavljeni</span>
                                        <button class="button is-ghost open-button"><a>Otvori kupon</a></button>
                                    </div>
                                </div>}

                                <div class="card-image vouchers-image">
                                    <figure class=" image is-4by3">
                                        <img className='voucher-image' src={process.env.PUBLIC_URL + "/images/TENIS.jpg"} alt="Placeholder image" />
                                    </figure>
                                </div>



                                <div class="card-content">
                                    <h2 class="subtitle is-4 product-title">{voucher.title}</h2>
                                    <div class="content">
                                        <div className="price price-coupon">
                                            <div className="discount">
                                                {voucher.discount}
                                            </div>
                                        </div>
                                        <div className="add-to-cart">
                                            <div className="add-to-cart-button">
                                                <button class="button is-ghost p-0"><p className='add-to-cart'>{voucher.addToCart}<span><i class="fa-solid fa-right-long"></i></span> </p></button>
                                            </div>
                                        </div>
                                    </div>
                                </div>



                            </div>
                            {/* end of onecard */ }
                        })}
                    </Slider>





                </div>

            </div>

        </div>




    )
}

export default VouchersCoupons