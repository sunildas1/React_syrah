import React from 'react'
import '../ourstory/story.css'

const Ourstory = () => {
  return (
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
  )
}

export default Ourstory