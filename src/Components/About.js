import React from 'react'

const About = () => {

  const pictures = new URL("./watch3.jpg",import.meta.url)

  return (
    <div>
      <div className="detail">
    <img src={pictures} width="400px" />
    <p className="para">This is what our Parachrom hairspring looks like. It is an essential guardian of the watch’s chronometric precision. Unveiled in 2005, entirely designed and manufactured in house, it nears the apex of what metal alloy hairsprings can offer. The scale of the image might throw you off, though.

Its edge is thinner than a single strand of hair and its weight is merely a fraction of a pearl’s. Moreover, once coiled, its diameter does not exceed a few millimeters. It is shielded from outside aggressions by a case so hermetic it was aptly named “Oyster”. Needless to say, it is a rare occurrence for any eyes to be laid on the Parachrom. So why would we be concerned by its colour? Because this hue of blue is true to our tradition of watchmaking excellence. It is the exact colour taken by our unique alloy of niobium, zirconium and oxygen when it has been anodized to stop the process of oxidation. This blue is essential to us, because it symbolizes the long-lasting performances which we hold ourselves to. This hairspring is insensitive to magnetic fields, unwavering in the face of temperature variations, and resistant to shocks as to corrosion. Therefore, each Rolex equipped with a Parachrom hairspring will tick at a most regular and perpetual beat.
</p>
    </div></div>
  )
}

export default About