import React from 'react'

const CardMenu = ({ menuData }) => {
    return (
        <>
            <section className="main-card-container">
                {
                    menuData.map((curElem) => {
                        const { id, category, name, image, price, description } = curElem;
                        return (
                            <>
                                <div className="card-container" key={id}>
                                    <div className="card-number">{id}</div>
                                    <div className="card-category">{category}</div>
                                    <div className="card-name">{name}</div>
                                    <div className="card-price">{price}</div>
                                    <div className="card-description">
                                        {description}
                                    </div>
                                    <div className="readmore">Readmore</div>
                                    <div className="card-image">
                                        <img src={image} alt='card-item' />
                                    </div>
                                    <div className="order-btn"><button className="btn-order">Order Now</button></div>
                                </div>
                            </>
                        )
                    })
                }

            </section>
        </>
    )
}

export default CardMenu