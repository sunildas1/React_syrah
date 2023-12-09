import React from 'react'
import '../home/style.css'

const Home = () => {
  return (
    <>
    
{/*----------banner-part-start-------- */}
    <section id="banner">
        <div className="pata">
            <img src="psd-img/pata.png" alt="pata.png"/>
        </div>
        <div className="container">
            <div className="main">
                <div className="details">
                    <div className="since">
                        <img src="psd-img/since.png" alt="since.png"/>
                    </div>
                    <h2>Syrah</h2>
                    <h4>A Brand of Taste</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p>
                    <div className="button">
                        <a href="#">Explore More</a>
                    </div>
                </div>
                <div className="image">
                    <div className="wine">
                        <img src="psd-img/wine.png" alt="wine.png"/>
                    </div>
                    <div className="main">
                        <div className="angur">
                            <img src="psd-img/angur-1.png" alt="angur-1.png"/>
                        </div>
                        <div className="angur-two">
                            <img src="psd-img/angur-2.png" alt="angur-2.png"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
{/*--------banner-part-end-------- */}
{/*----------story-part-start-------- */}
    <section id="story-part">
        <div className="container">
            <div className="main">
                <div className="image">
                    <img src="psd-img/story-img.png" alt="story-img.png"/>
                </div>
                <div className="details">
                    <h3>Our Story</h3>
                    <p>This article is about wine produced from grapes. For other types, see Non-grape wine.Hellenistic mosaics discovered close to the city of Paphos depicting Dionysos, god of wine.</p>
                    <p>Wine boy at a Greek symposium
                        The earliest archaeological evidence of wine produced from grapes has been found at sites in China (c. 7000 BC), Georgia (c. 6000 BC), Lebanon (c. 5000 BC), Iran (c. 5000 BC), Greece (c. 4500 BC), and Sicily (c. 4000 BC). The oldest extant evidence of wine production has been found in Armenia (c. 4100 BC).</p>
                        <div className="button">
                            <a href="#">Explore More</a>
                        </div>
                </div>
            </div>
        </div>
    </section>
{/*----------story-part-end-------- */}
{/*----------product-part-start-------- */}
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
{/*----------product-part-end-------- */}
{/*----------events-part-start-------- */}
    <section id="events">
        <div className="container">
            <div className="heading">
                <h3>Upcoming Events</h3>
            </div>
            <div className="main">
                <div className="upcoming">
                    <div className="pata">
                        <img src="psd-img/degsin.png" alt="degsin.png"/>
                        <img className="degsin" src="psd-img/degsin-3.png" alt="degsin-3.png"/>
                        <div className="details">
                            <h2>26</h2>
                            <h3>October</h3>
                            <h4>09:00 A.M - 08:00 P.M</h4>
                            <p>International Victory</p>
                            <p className="day">Day</p>
                            <h4 className="price">$99.33</h4>
                        </div>
                    </div>
                </div>
                <div className="upcoming">
                    <div className="pata">
                        <img src="psd-img/degsin.png" alt="degsin.png"/>
                        <img className="degsin" src="psd-img/degsin-3.png" alt="degsin-3.png"/>
                        <div className="details">
                            <h2>17</h2>
                            <h3 className="month">November</h3>
                            <h4>09:00 A.M - 08:00 P.M</h4>
                            <p className="i">International Occasion</p>
                            <p className="day">Day</p>
                            <h4 className="price">$89.33</h4>
                        </div>
                    </div>
                </div>
                <div className="upcoming">
                    <div className="pata">
                        <img src="psd-img/degsin.png" alt="degsin.png"/>
                        <img className="degsin" src="psd-img/degsin-3.png" alt="degsin-3.png"/>
                        <div className="details">
                            <h2>26</h2>
                            <h3 className="d">December</h3>
                            <h4>09:00 A.M - 08:00 P.M</h4>
                            <p className="w">International Wine</p>
                            <p className="day">Day</p>
                            <h4 className="price">$79.33</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
{/*----------events-part-end-------- */}
{/*----------deal-part-start-------- */}
    <section id="deal-part">
        <div className="container">
            <div className="main">
                <div className="left">
                    <img src="psd-img/deal-part.png" alt="deal-part"/>
                </div>
                <div className="right">
                    <h3>Deal of the Week</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</p>
                    <div className="time">
                        <div className="main">
                            <div className="timmer">
                                <h2 className="counter">06</h2>
                                <h4>Days</h4>
                            </div>
                            <div className="timmer">
                                <h2 className="counter">23</h2>
                                <h4>Hours</h4>
                            </div>
                        </div>
                        <div className="main">
                            <div className="timmer t-one">
                                <h2 className="counter">59</h2>
                                <h4>Minutes</h4>
                            </div>
                            <div className="timmer">
                                <h2 className="counter">59</h2>
                                <h4>Seconds</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
{/*----------deal-part-end-------- */}
{/*----------latest-part-start-------- */}
    <section id="latest">
        <div className="container">
            <div className="main">
                <div className="updates">
                    <div className="heading">
                        <h3>Latest Updates</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisig elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        <div className="main">
                            <div className="arrow">
                                <i className="fas fa-long-arrow-alt-left"></i>
                            </div>
                            <div className="arrow i">
                                <i className="fas fa-long-arrow-alt-right"></i>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="post">
                    <div className="image">
                        <img src="psd-img/upcoming-img-1.png" alt="upcoming-img-1.png"/>
                        <div className="admin">
                            <div className="main">
                                <h5>Posted by : Admin</h5>
                            <h5 className="date">Date : 26 October 2019</h5>
                            </div>
                        </div>
                        <h3>Lorem ipsum dolor sitvctetur adipisicing eled doeiusmod.</h3>
                        <p>Lorem ipsum dolor sitvctetur adipisicing eled doeiusmod. Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                        <a href='#'>Read More</a>
                    </div>
                </div>
                <div className="post">
                    <div className="image">
                        <img src="psd-img/upcoming-img-2.png" alt="upcoming-img-2.png"/>
                        <div className="admin p">
                            <div className="main">
                                <h5 className="one">Posted by : Admin</h5>
                            <h5 className="date two">Date : 26 October 2019</h5>
                            </div>
                        </div>
                        <h3>Lorem ipsum dolor sitvctetur adipisicing eled doeiusmod.</h3>
                        <p>Lorem ipsum dolor sitvctetur adipisicing eled doeiusmod. Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                        <a href='#'>Read More</a>
                    </div>
                </div>
            </div>
        </div>
    </section>
{/*----------latest-part-end-------- */}
    </>
  )
}

export default Home