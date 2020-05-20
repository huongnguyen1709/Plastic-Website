import React from 'react'

const NewProducts = () => {
    return (
        <section className="section-new-products">
            <h2 className="heading-2">Sản Phẩm Mới</h2>
            <div className="new-products-list">
                <img src="../../../../Asset/img/new-products/93860350_1948515651949171_6053151294359601152_n.jpg" alt="Realtor 1" class="realtors__img" />
                <div class="realtors__details">
                    <h4 class="heading-4 heading-4--light">Erik Feiman</h4>
                    <p class="realtors__sold">245 houses sold</p>
                </div>
            </div>
        </section>
    );
}

export default NewProducts;