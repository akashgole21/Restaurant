import React, { Component } from 'react'
import NavBarManu from "./NavBarManu ";
import RestaurantList from './RestaurantList';

export default class Home extends Component {
  render() {
    return (
      <>
        <NavBarManu />
        <RestaurantList />
      </>
    )
  }
}
