import React from 'react'
import '../latest_news/news.css'

const News = () => {
  return (
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
  )
}

export default News