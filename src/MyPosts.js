
const MyPosts = (props) => {
    
    return(
        <div id="feed">
            <h1>Feed</h1>
           {
               props.myPosts ? props.myPosts.map((post,index) => {
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

export default MyPosts