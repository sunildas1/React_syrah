import React from 'react'
import '../layout/navbar.css'
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
        <div className="container">
            <div className="main">
                <div className="logo">
                    <img src="psd-img/syrah.png" alt="syrah.png"/>
                </div>
                <div className="nav-item">
                    <ul>
                        <li>
                            <NavLink to="/">Home</NavLink>
                        </li>
                        <li>
                           <NavLink to="ourstory">Our story</NavLink>
                        </li>
                        <li>
                            <NavLink to="our_product">Our Products</NavLink>
                        </li>
                        <li>
                            <NavLink to="latest_news">Latest News</NavLink>
                        </li>
                        <li>
                           <NavLink to="contact">Contact</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </nav>
  )
}

export default Navbar