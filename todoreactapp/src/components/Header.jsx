import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Header extends Component {
  render() {
    return (
      <div>
            <h2>Todo List</h2>
            <Link to="/">Home</Link> | <Link to="/about">About</Link>
      </div>
    )
  }
}

export default Header
