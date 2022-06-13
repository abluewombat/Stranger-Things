import './App.css'
const CreatePost = (props) => {
    return(
        <div>
            <h1 id="create-post-title">Create post</h1>
            <form name='create-post-form' id="create-post-form" onSubmit={async (event) => {
                event.preventDefault()
                console.log(props.token)
                console.log(event.target[0].value)
                await fetch('https://strangers-things.herokuapp.com/api/COHORT-NAME/posts', {
                    method: "POST",
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${props.token}`
                    },
                    body: JSON.stringify({
                        post: {
                        title: event.target[0].value,
                        description: event.target[1].value,
                        price:event.target[2].value,
                        location:event.target[4].value
                        }
                    })
                    }).then(response => response.json())
                    .then(result => {
                        console.log(result, `Generated from Bearer ${props.token}`);
                    })
                    .catch(console.error);

            }}>
                <label className='post-label'>Post Title</label>
                <input name='post-title'></input>
                <label className='post-label'>Item Description</label>
                <textarea name='item-description'  size="50" id="description"></textarea>
                <label className='post-label'>Price</label>
                <input name='item-price' type="number"></input>
                <label className='post-label'>Location --optional--</label>
                <input name='item-location'></input>
                <button type="submit" id="submit-post">Submit post</button>
            </form>
        </div>
    )
}

export default CreatePost