import React from 'react'

const ResultPage = ({setLocation}) => {
  return (
    <div>
      ResultPage
      <button onClick={()=>setLocation("MainPage")}>Return To MainPage</button>
    </div>
  )
}

export default ResultPage
