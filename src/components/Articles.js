import React, { useEffect, useState } from 'react'
import './articles.css'
import axios from 'axios'

import Article from './Article'
function Articles() {
    const [articles, setArticles] = useState([])


    useEffect(() => {
        const getdata = async () => {
            const res = await axios.get('https://bracom-api.economico.ba/api/v1/loyalty/public/8265e2ee-d9a3-48d8-a209-99779c8509b3/supplies?WebShopFilterModel.Count=12&WebShopFilterModel.Index=0')
            setArticles(res.data.payload)
        }
        getdata()
    }, [])
    /*   console.log("articles", articles) */
    return (
        <div className='articles'>
            <div className="container">
                <div className="is-flex is-justify-content-space-between is-align-items-flex-end mb5">
                    <h2>Artikli</h2>
                </div>
                <div className="columns products is-mobile is-multiline">

                    {articles?.map((article) => {
                        //console.log("article", article)

                        return <Article key={article.articleId} article={article} />

                    })}
                    <div class="has-text-centered mt-5 see-all-btn-div">
                        <button className="button is-primary see-all-button is-outlined">Vidi sve</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Articles