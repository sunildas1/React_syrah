import React from 'react'
import '../error_page/error.css'
import { Link } from 'react-router-dom';

const Error = () => {
  return (
    <>
        <section id='error'>
            <h1>404</h1>
            <p>Oops! Something is wrong.</p>
            <a class="button" href="#"><i class="icon-home"></i><Link to="/"> Go back in initial page, is better.</Link></a>
        </section>
    </>
  )
}

export default Error