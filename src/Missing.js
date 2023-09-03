import React from 'react'
import { Link } from 'react-router-dom'

const Missing = () => {
  return (
    <main className='Missing'>
        <h3>404 Page Not Found</h3>
        <p>Visit Out <Link to="/">Home Page</Link></p>
    </main>
  )
}

export default Missing