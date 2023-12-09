import React from 'react'
import '../product/product.css'

const Product = () => {
  return (
    <section id="products">
        <div className="container">
            <div className="heading">
                <h3>Our Products</h3>
            </div>
            <div className="main">
                <div className="botol">
                    <div className="pata">
                        <img src="psd-img/degsin.png" alt="degsin.png"/>
                        <img className="degsin" src="psd-img/degsin-2.png" alt="degsin-2.png"/>
                    </div>
                    <div className="wine">
                        <img src="psd-img/botol-1.png" alt="botol-1.png"/>
                    </div>
                      <div className="price">
                          <p>Golden Wine</p>
                          <h3>$99.33</h3>
                      </div>
                </div>
                <div className="botol">
                    <div className="pata">
                        <img src="psd-img/degsin.png" alt="degsin.png"/>
                        <img className="degsin" src="psd-img/degsin-2.png" alt="degsin-2.png"/>
                    </div>
                    <div className="wine-two">
                        <img src="psd-img/botol-2.png" alt="botol-2.png"/>
                    </div>
                      <div className="price">
                          <p>Vintage Wine</p>
                          <h3>$89.13</h3>
                      </div>
                </div>
                <div className="botol">
                    <div className="pata">
                        <img src="psd-img/degsin.png" alt="degsin.png"/>
                        <img className="degsin" src="psd-img/degsin-2.png" alt="degsin-2.png"/>
                    </div>
                    <div className="wine-three">
                        <img src="psd-img/botol-3.png" alt="botol-3.png"/>
                    </div>
                      <div className="price">
                          <p>Syrah Wine</p>
                          <h3>$59.13</h3>
                      </div>
                </div>
                <div className="botol">
                    <div className="pata">
                        <img src="psd-img/degsin.png" alt="degsin.png"/>
                        <img className="degsin" src="psd-img/degsin-2.png" alt="degsin-2.png"/>
                    </div>
                    <div className="wine-four">
                        <img src="psd-img/botol-4.png" alt="botol-4.png"/>
                    </div>
                      <div className="price">
                          <p>Grenich Wine</p>
                          <h3>$37.13</h3>
                      </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Product