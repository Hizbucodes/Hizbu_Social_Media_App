import React from 'react'

const NewPost = ({postTitle, setPostTitle, postBody, setPostBody, handleSubmit}) => {
  return (
    <main className='NewPost'>
        <h1>Create a Post</h1>
        <form className='newPostForm' onSubmit={handleSubmit}>
            <label htmlFor="title">Title: </label>
            <input
             type="text"
             placeholder='eg:- Learning ReactJS'
             value={postTitle}
             onChange={(e)=> setPostTitle(e.target.value)}
             />

            <label htmlFor="title">Body: </label>
            <textarea
                placeholder='eg:- React makes it painless'
                value={postBody}
                onChange={(e)=>setPostBody(e.target.value)}
            >
            </textarea>

            <button type='submit'>Post</button>
        </form>
    </main>
  )
}

export default NewPost