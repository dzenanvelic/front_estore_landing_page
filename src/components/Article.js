import React from 'react'
import './article.css'
import { Link } from 'react-router-dom'
function Article({ article }) {
    return (
        <div key={article.articleId} className="column product is-12-mobile is-6-tablet is-3-desktop">
            <div class="card" >
                <div class="card-image">
                    <figure class="image is-4by3">
                        <img className='product-image ' src={article.imageUrl} />
                    </figure>
                    <div className="product-points">
                        {article.points.toFixed(2)} bodova
                        <span><i class="bi bi-info-circle info-product"></i></span></div>
                    {article.coupon && <div className="card-coupon">
                        {article.coupon && " Kupon"}
                    </div>}
                </div>
                <div class="card-content">
                    <div class="media media-product">

                        <div class="media-content">
                            <p class="title is-4 card-title">{article.name}</p>

                        </div>
                    </div>

                    <div class="content all-content">
                        <div className="price has-discount">
                            <span>{article.price} {article.currency}<span className='span-kind'> /    {article.unit.name}</span></span>



                        </div>
                        <div className="info-div">
                            <span className="icon-info">info</span>
                        </div>
                        <Link className='article-link' to={`/single/product/${article.articleId}`}> <button className="button look-button is-ghost">Pogledaj</button></Link>
                        <div className="add-to-cart"></div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Article