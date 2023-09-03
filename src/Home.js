import React from 'react'
import Feed from './Feed'

const Home = ({posts}) => {
  return (
    <main className='Home'>
        {posts.length ?(

            <Feed posts={posts}/>

        ):(
            <h5>No Posts to Display..</h5>
        )}
    </main>
  )
}

export default Home