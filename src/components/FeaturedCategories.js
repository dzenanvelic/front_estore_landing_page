import React from 'react'
import './featuredcategories.css'
function FeaturedCategories() {
    return (
        <div className='section featured-categories'>

            <div className="container featured-container">
                <h2 class="title is-2 has-text-centered">Odabrane kategorije</h2>
                <div className="columns is-multiline all-featured-col">

                    <div className="column is-6 featured-cat-column">
                        <div className="heading-category-card">
                            <div className="heading-category-overlay">
                                <h2 class="featured-title title is-2">TENIS</h2>
                                <button class="featuredbutton button is-ghost">Pogledaj<i className="fa-solid fa-chevron-right left-card-chev"></i></button>
                            </div>
                        </div>
                    </div>
                    <div className="column is-6 featured-cat-column">
                        <div className="heading-category-card">
                            <div className="heading-category-overlay">
                                <h2 class="featured-title title is-2">TENIS</h2>
                                <button class="featuredbutton button is-ghost">Pogledaj<i className="fa-solid fa-chevron-right left-card-chev"></i></button>
                            </div>
                        </div>
                    </div>
                    <div className="column is-6 featured-cat-column">
                        <div className="heading-category-card">
                            <div className="heading-category-overlay">
                                <h2 class="featured-title title is-2">TENIS</h2>
                                <button class="featuredbutton button is-ghost">Pogledaj<i className="fa-solid fa-chevron-right left-card-chev"></i></button>
                            </div>
                        </div>
                    </div>
                    <div className="column is-6 featured-cat-column">
                        <div className="heading-category-card">
                            <div className="heading-category-overlay">
                                <h2 class="featured-title title is-2">TENIS</h2>
                                <button class="featuredbutton button is-ghost">Pogledaj<i className="fa-solid fa-chevron-right left-card-chev"></i></button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default FeaturedCategories