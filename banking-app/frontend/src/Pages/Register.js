import React from "react";

class Register extends React.Component {




    render() {
        return (
            <div>
                <form acceptCharset="utf-8">
                    name: <input type="text" value=""></input><br />
                    address: <input type="text" value=""></input><br />
                    email: <input type="email" value=""></input><br />
                    username: <input type="text" value=""></input><br />
                    password: <input type="password" value=""></input><br />
                    <input type="submit" value="submit"></input>
                    <input type="reset" value="reset"></input>
                </form>
            </div>
        )
    }
}


export default Register;