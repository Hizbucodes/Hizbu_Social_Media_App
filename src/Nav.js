import React from 'react'
import {Link} from "react-router-dom";

const Nav = ({search, setSearch, total}) => {
  return (
    <>
    <nav className='Nav'>
        <form className='searchForm' onSubmit={(e)=>e.preventDefault()}>
            <input
             id='search'
             type="text"
             placeholder='Search Posts'
             value={search}
             onChange={(e)=>setSearch(e.target.value)}
             />
        </form>

        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/post">Post</Link></li>
            <li><Link to="/about">About</Link></li>
        </ul>
        
    </nav>
   
   <span style={{fontSize: '0.7rem', display: 'flex', gap: '0.4rem'}}>Total Posts: <p style={{fontWeight: 'bold'}}>{total}</p></span>

  </>
  )
}

export default Nav