import React from "react";
import './Posts.css'


const Posts = (props) => {
    const {posts} = props
      
    console.log("posts folder",posts)
    return (
        //const {active,author,createdAt,description,isAuthoer,price,title,updatedAt} = posts[i]
        <div id="feed">
            <h1>Feed</h1>
           {
               posts ? posts.map((post,index) => {
                   if(post.active) return (
                        <div id = "post-container">
                            <div id ="post-title">{post.title}</div>
                            <div id ="post-price"> Price: {post.price}</div>
                            <div id ="post-description">{post.description}</div>
                            <div id ="post-username">Posted by:  {post.author.username}</div>
                        </div>
                   )
               }): <div>Sorry, there is nothing to display!</div>
           }
        </div>
    )
}

export default Posts