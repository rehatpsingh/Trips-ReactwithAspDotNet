import React, { Component } from 'react';

export class Home extends Component {
  static displayName = Home.name;

  render () {
    return (
      <div>
        <h1>Hello, world!</h1>
        <p>Welcome to your new single-page application, built with:</p>
        <ul>
                <li>Add a new trip</li>
                <li>Update a Trip</li>
                <li>Delete a Trip</li>
                <li>Show all Trips</li>
        </ul>
      </div>
    );
  }
}
