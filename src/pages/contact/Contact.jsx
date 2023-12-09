import React from 'react'
import '../contact/contact.css'

const Contact = () => {
  return (
     <>
       <div className="container">
       <header>
          <h3>Contact Us</h3>
        </header>

            <form id="form" class="topBefore">
                <input id="name" type="text" placeholder="NAME"/>
                <input id="email" type="text" placeholder="E-MAIL"/>
                <textarea id="message" type="text" placeholder="MESSAGE"></textarea>
                <input id="submit" type="submit" value="SEND"/>
            </form>
       </div>
     </>
  )
}

export default Contact