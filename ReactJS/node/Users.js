import React, { Component } from "react";
import "./table.css";

export default class Users extends Component {
  render() {
    return (
      <div>
        <table className="table">
          <thead>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Website</th>
          </thead>
          <tbody>
            {this.props.users.map((user) => (
              <tr key={user.id}>
                <td>{user.name} </td>
                <td>{user.email}</td>
                <td>{user.phone}</td>
                <td>{user.website}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}
