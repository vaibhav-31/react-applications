import React from "react";

class Login extends React.Component {
  state = {
    username: "",
    password: ""
  }  
  clickHand = this.clickHand.bind(this)  
 
  clickHand(e) {
    this.setState({
        [e.target.name] : e.target.value
    })
  }

    render() {
        return (
            <div>
                <h1>Login Page</h1>
                <form acceptCharset="utf-8">
                    username: <input type="text" name="username" onChange={this.clickHand} value={this.state.username}></input><br />
                    password: <input type="password" name="password" onChange={this.clickHand} value={this.state.password}></input><br /><br />
                    <input type="submit" name="" id="" value="submit"></input>
                </form>
            </div>
        )
    }
}

export default Login;