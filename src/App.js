import './App.css';
import Header from './Header'
import Posts from './Posts'
import { useEffect, useState } from 'react';
import React from 'react';
import getPostsApi from './getPosts';
import Login from './Login'
import { BrowserRouter, Route, Link} from "react-router-dom";
import Register from './Register'
import CreatePost from './CreatePost'
import MyPosts from './MyPosts';

function App(props) {
  const [posts, setPosts] = useState()
  const [username, setUsername] = useState()
  const [token, setToken] = useState()
  const [myPosts, setMyPosts] = useState()

  const getMyPosts = async (token) => {
    await fetch('https://strangers-things.herokuapp.com/api/2202-ftb-et-web-pt/posts', {
        method:"POST",
        headers:{
            'Content-Type': 'application/json',
            'Authorization':`Bearer ${token}`
        },
    }).then(response=>response.json())
    .then(result=>{ return(result.data.posts)
    })
}

  useEffect(()=>{
    getMyPosts(token)
    getPostsApi(setPosts)
    setMyPosts()
  }, [])

    return (
        <BrowserRouter>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/register">Register</Link></li>
            <li><Link to="/createpost">Post</Link></li>
            <li><Link to="/myposts">My Posts</Link></li>
          </ul>
          <Route exact path="/">
            <Header username={username}/>
            <Posts posts={posts} setPosts={setPosts}/>
          </Route>
          <Route exact path= "/login">
            <Login setToken={setToken} token={token}/>
          </Route>
          <Route exact path='/register'>
            <Register setToken={setToken} token={token}/>
          </Route>
          <Route exact path='/createpost'>
            <CreatePost token={token}/>
          </Route>
          <Route exact path='/myposts'>
            <MyPosts token={token} myPosts={myPosts} setMyPosts={setMyPosts}/>
          </Route>
        </BrowserRouter>
    );
  }
export default App;
