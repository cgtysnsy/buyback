import React from 'react'

const AboutPage = ({setLocation}) => {
  return (
    <div>
      About
      <button onClick={()=>setLocation("MainPage")}>Return To MainPage</button>
    </div>
  )
}

export default AboutPage
