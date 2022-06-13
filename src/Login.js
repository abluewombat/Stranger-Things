import './App.css'

const Login = (props) =>{
    return(
    <div id="log-in-page">
        <h1>Log in</h1>
        {props.token ? <div>You are logged in! <button name="logout" onClick={(event) => {
          event.preventDefault()
          props.setToken("")
        }}>Logout</button></div> : null}
        <form name="login" id="log-in" onSubmit={(event) => {
          event.preventDefault()
            console.log("attempting")
            fetch('https://strangers-things.herokuapp.com/api/2202-ftb-et-web-pt/users/login', {
                method: "POST",
                headers: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                  user: {
                    username: document.login.elements['username'].value,
                    password: document.login.elements['password'].value
                  }
                })
              }).then(response => response.json())
                .then(result => {
                  props.setToken(result.data.token);
                })
                .catch(console.error);
                document.getElementById('input4').value = ""
                document.getElementById('input5').value = ""
        }}>
            <label id="username">
                Username:
                <input minLength={8} type="text" name="username" required className="input" id='input4'></input>
            </label>
            <label id="password">
                Password:
                <input minLength={8} type="text" name="password" required className="input" id='input5'></input>
            </label>
            <button id="submit-button" type="submit">Submit</button>

        </form>
        </div>
    )
}

export default Login