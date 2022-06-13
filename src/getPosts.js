const getPostsApi = async (setPosts) =>{
    const baseUrl = 'https://strangers-things.herokuapp.com/api/2202-ftb-et-web-pt'
      try{
          await fetch(baseUrl + '/posts')
          .then(posts => posts.json())
          .then(result => {
            setPosts(result.data.posts)
            return result.data.posts
          })
      } catch(error){
        console.log("Oh no, getPosts failed with error: ",error)
      }
    }
    export default getPostsApi