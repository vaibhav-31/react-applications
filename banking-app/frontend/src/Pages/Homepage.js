import React from "react";

class Homepage extends React.Component {
  state = {
    name: "Vaibhav",
    username: "vaibhav@javarnd",
    balance: 0
  }


  render() {
    return (
      <>
        <h2>Welcome {this.state.name}</h2>
        <div>Balance: <h1>{this.state.balance}</h1></div>
        <div>
          <button>Deposit</button>
          <button>Withdraw</button>
        </div>
        <br />
        <div>
          <button>Update</button><br /><br />
          <button>Logout</button>
        </div>

      </>
    )
  }
}

export default Homepage;