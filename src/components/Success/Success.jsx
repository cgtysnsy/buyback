import React from 'react'

const Success = ({setLocation}) => {
  return (
      <div>
          <button className="btn-back" onClick={() => setLocation("MainPage")}>R</button>
      Success
    </div>
  )
}

export default Success
