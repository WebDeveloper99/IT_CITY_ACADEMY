import React from 'react'
import { useLocation } from 'react-router-dom'
import Students from '../../components/bakalavr/students'

const Bakalavr = () => {
  const location = useLocation();
  return (
    <div>
      {location.pathname}
      <Students/>
    </div>
  )
}

export default Bakalavr