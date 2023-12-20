import React from 'react'
import ProgressBar from '../components/ProgressBar/ProgressBar'
import Success from '../components/Success/Success'

const ResultPage = ({setLocation}) => {
  return (
    <>
      
      <Success setLocation={ setLocation} />
      <ProgressBar/>
    </>
  )
}

export default ResultPage
