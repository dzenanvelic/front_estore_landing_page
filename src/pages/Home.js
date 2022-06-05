import React from 'react'
import Articles from '../components/Articles'
import Copyright from '../components/Copyright'
import FeaturedCategories from '../components/FeaturedCategories'
import Footer from '../components/Footer'
import HeadingCategories from '../components/HeadingCategories'
import HeroSlider from '../components/HeroSlider'
import MobileAppDownload from '../components/MobileAppDownload'

import VouchersCoupons from '../components/VouchersCoupons'
import './home.css'
function Home() {
    return (
        <div className="home">

            <HeroSlider />
            <HeadingCategories />
            <Articles />
            <VouchersCoupons />
            <FeaturedCategories />
            <MobileAppDownload />
            <Footer />
            <Copyright />
        </div>
    )
}

export default Home