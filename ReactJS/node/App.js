import React from "react";

import axios from "axios";
import Users from "./Users";
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      usersdata: [],
    };
  }
  componentDidMount() {
    axios.get("http://localhost:8788/users").then((response) => {
      console.log(response.data);
      this.setState({
        users: response.data,
      });
    });
  }

  render() {
    return (
      <div>
        <Users users={this.state.users} />
      </div>
    );
  }
}
export default App;
