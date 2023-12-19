import React from 'react'

const MainPage = ({setLocation}) => {
  return (
    <div>
      Main
      <button onClick={()=>setLocation("AboutPage")}>Go to about</button>
    </div>
  )
}

export default MainPage
