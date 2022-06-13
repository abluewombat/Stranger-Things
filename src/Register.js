
const Register = (props) => {
    return(
        <div id="log-in-page">
        <h1>Register</h1>
        <form name="login" id="log-in" onSubmit={async (event) => {
          event.preventDefault()
          /*username: event.target[0].value,
                    password: event.target[1].value*/
            await fetch('https://strangers-things.herokuapp.com/api/COHORT-NAME/users/register', {
              method: "POST",
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({
                user: {
                  username: event.target[0].value,
                  password: event.target[1].value
                }
              })
            }).then(response => response.json())
              .then(result => {
                console.log(result);

              })
              .catch(console.error);
              document.getElementById("input1").value =""
              document.getElementById("input2").value =""
              document.getElementById("input3").value =""
        }}>
            <label id="username">
                Username:
                <input minLength={8} type="text" name="username" required className="input" id="input1"></input>
            </label>
            <label id="password">
                Password:
                <input minLength={8} type="text" name="password" required className="input" id="input2"></input>
            </label>
            <label id="confirm-password">
                Confirm Password:
                <input minLength={8} type="text" name="confirm-password" required className="input" id="input3"></input>
            </label>
            {props.token ? <div>You are already logged in!</div> : <button type="submit">Submit</button>}

        </form>
        </div>
    )

}

export default Register