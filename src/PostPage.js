import React from 'react'
import { useParams } from 'react-router'
import { Link } from 'react-router-dom';

const PostPage = ({posts, deletePosts}) => {

    const { id } = useParams();
    const post = posts.find(post=> (post.id).toString() === id);

  return (
    <main className='PostPage'>
        {post&&(
            <>
                <form className='newPostForm'>
                    <h1>{post.title}</h1>
                    <p>{post.body}</p>
                </form>

                <button className='deleteButton' onClick={()=>deletePosts(post.id)} >Delete</button>
                <Link to={`/edit/${post.id}`}>
                    <button className='editButton'>Edit</button>
                </Link>
            </>
        )}
        {!post &&(
             <h5>No Posts to Display..</h5>
        )}
    </main>
  )
}

export default PostPage