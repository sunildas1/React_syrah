import React from 'react'
import '../layout/footer.css'

const Footer = () => {
  return (
    <footer>
        <div className="container">
            <div className="image">
                <img src="psd-img/syrah.png" alt="syrah.png"/>
            </div>
            <div className="main">
                <div className="contact">
                    <div className="icon">
                        <div className="main">
                            <i className="fas fa-phone-alt"></i>
                           <div className="text">
                            <p>+880 1245 6987 123
                                +880 9876 5489 215</p>
                           </div>
                        </div>
                    </div>
                    <div className="icon">
                        <div className="main">
                            <i className="fas fa-envelope"></i>
                           <div className="text">
                            <p>syrah@wineshop.com
                                wineshop@syrah.com</p>
                           </div>
                        </div>
                    </div>
                    <div className="icon">
                        <div className="main">
                            <i className="fas fa-globe-americas"></i>
                           <div className="last">
                            <p>www.syrah-wineshop.com</p>
                           </div>
                        </div>
                    </div>
                    <div className="copy-right">
                        <p><span>Copyright</span> 2019. All rights are reserved</p>
                        <i className="far fa-copyright"></i>
                    </div>
                </div>
                <div className="details">
                    <div className="text">
                        <ul>
                            <li>Home</li>
                            <li>About us</li>
                            <li>Deal of the Week</li>
                            <li>Latest News</li>
                            <li>Upcoming Events</li>
                            <li>Contact us</li>
                        </ul>
                    </div>
                </div>
                <div className="subscribe">
                    <div className="newsletter">
                        <p>Subscribe for Newsletter</p>
                        <div className="button">
                            <h3>Subscribe</h3>
                        </div>
                    </div>
                    <div className="map">
                        <img src="psd-img/map.png" alt="map.png"/>
                    </div>
                        <div className="social-media">
                            <div className="main">
                                <div className="icon">
                                    <i className="fab fa-facebook-f"></i>
                                </div>
                                <div className="icon">
                                    <i className="fab fa-twitter"></i>
                                </div>
                                <div className="icon">
                                    <i className="fab fa-linkedin-in"></i>
                                </div>
                                <div className="icon">
                                    <i className="fab fa-pinterest-p"></i>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer