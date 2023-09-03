import { useEffect, useState } from "react";
import Header from "./Header";
import Nav from "./Nav";
import Home from "./Home";
import Footer from "./Footer";
import About from "./About";
import { Route, Routes, useNavigate } from "react-router";
import Missing from "./Missing";
import NewPost from "./NewPost";
import {format} from 'date-fns';
import PostPage from "./PostPage";
import EditPost from "./EditPost";
import api from './api/posts';

function App() {

  //Posts Items in Home Page
  const [posts, setPosts] = useState([]);

  //useState rendering for searchBar
  const[search, setSearch] = useState('');
  const[searchResult, setSearchResult] = useState([]);
  const[postTitle, setPostTitle] = useState('');
  const[postBody, setPostBody] = useState('');
  const[editTitle, setEditTitle] = useState('');
  const[editBody, setEditBody] = useState('');
  const navigate = useNavigate('');

  //Display Posts Using API (Axios Api)
  useEffect(()=>{

    const fetchPosts = async () => {

      try{
        const response = await api.get('/posts');
        setPosts(response.data);
      }catch(err){
        if(err.response){
          console.log(err.response.data);
          console.log(err.response.status);
          console.log(err.response.headers);
        }
      }

    }

    fetchPosts();
    
  }, []);

  //Search posts Filter
  useEffect(()=>{
    const filterResult = posts.filter(post=> (post.title).toLowerCase().includes(search.toLowerCase()) || (post.body).toLowerCase().includes(search.toLowerCase()))

    //Setting the filteredPost to an newly created array
    setSearchResult(filterResult.reverse());
  },[search, posts]);


  //Add New Post Function
  const handleSubmit = async (e) => {
    e.preventDefault();
    const id = posts.length ? posts[posts.length-1].id + 1 : 1;
    const datetime = format(new Date(), 'MMMM dd, yyyy pp');
    const newPost = {id, title: postTitle, datetime, body: postBody};

    try{
      const response = await api.post('/posts', newPost);
      const allPost = [...posts, response.data];
      setPosts(allPost);
      setPostTitle('');
      setPostBody('');
      navigate('/');

    }catch(err){
      if(err.response){
        console.log(err.response.data);
        console.log(err.response.status);
        console.log(err.response.headers);
      }
    }

    

    
  };


  //Delete Post Function
  const deletePosts = async (id) => {
    try{
      await api.delete(`/posts/${id}`);
      const deletePost = posts.filter((post)=> post.id !== id);
      setPosts(deletePost);
      setPostTitle('');
      setPostBody('');
      navigate('/');

    }catch(err){
      if(err.response){
        console.log(err.response.data);
        console.log(err.response.status);
        console.log(err.response.headers);
      }
    }
    
  };

  // Edit post Function
  const handlEdit = async (id) => {
    const datetime = format(new Date(), 'MMMM dd, yyyy pp');
    const newPost = {id, title: editTitle, datetime, body: editBody};
    
    try{
      const response = await api.put(`/posts/${id}`, newPost);
      setPosts(posts.map((post)=> post.id===id ? {...response.data} : post));
      setEditTitle('');
      setEditBody('');
      navigate('/');

    }catch(err){
      console.log(err.response.data);
      console.log(err.response.headers);
      console.log(err.response.status);
    }


  };
  


  return (
   <div className="App">

    <Header title="Hizbu_Social"/>
    <Nav
      search={search}
      setSearch={setSearch}
      total={posts.length}
    />

  <Routes>

    <Route path="/" element={<Home
      posts={searchResult}
    />}/>
    <Route path="/post">
      <Route index element={<NewPost postTitle={postTitle}
        postBody={postBody} setPostTitle={setPostTitle} setPostBody={setPostBody} handleSubmit={handleSubmit}
      />}/>
      <Route path=":id" element={<PostPage posts={posts} deletePosts={deletePosts}/>}/>
    </Route>
    <Route path="/edit/:id" element={<EditPost
    posts={posts} editTitle={editTitle} setEditTitle={setEditTitle} editBody={editBody} setEditBody={setEditBody} handlEdit={handlEdit}
    />}/>
    <Route path="/about" element={<About/>}/>
    <Route path="*" element={<Missing/>}/>
    </Routes>
    
    <Footer/>

   </div>
  );
}

export default App;
