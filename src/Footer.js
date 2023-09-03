import React from 'react'

const Footer = () => {

    const year = new Date();

  return (
    <footer className='Footer'>
        <p>copyright &copy; {year.getFullYear()}</p>
    </footer>
  )
}

export default Footer