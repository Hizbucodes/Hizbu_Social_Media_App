import React, { useEffect } from 'react'
import { useParams } from 'react-router';

const EditPost = ({handlEdit, editTitle, setEditTitle, editBody, setEditBody, posts}) => {

    const { id } = useParams();
    const post = posts.find((post)=> (post.id).toString() === id);

    useEffect(()=>{
        if(post){
            setEditTitle(post.title);
            setEditBody(post.body);
        }
    },[post, setEditTitle, setEditBody]);


  return (
    <main className='NewPost'>
        <h1>Edit Post</h1>

        <form className='newPostForm' onSubmit={(e)=>e.preventDefault()}>
            <label htmlFor="title">Title: </label>
            <input
             type="text"
             value={editTitle}
             onChange={(e)=> setEditTitle(e.target.value)}
             />

            <label htmlFor="title">Body: </label>
            <textarea
                value={editBody}
                onChange={(e)=>setEditBody(e.target.value)}
            >
            </textarea>

            <button type='submit' onClick={()=>handlEdit(post.id)}>Send</button>

        </form>
    </main>
  )
}

export default EditPost