import React, { Component } from 'react'

export class Signed extends Component {
  render() {
    return (
     <div className="container">
      <div className="form-signin">
        <h2 className="form-signin-heading">Please sign in</h2>
        <div>
          <label htmlFor="inputEmail" className="sr-only">Email address</label>
          <input
                type="text"
                name="subject"
                id="inputEmail"
                required="required"
                class="form"
                placeholder="Username"
              />
        </div>
        <div>
          <label htmlFor="inputPassword" className="sr-only">Password</label>
          <input
                type="text"
                name="subject"
                id="inputPassword"
                required="required"
                class="form"
                placeholder="Password"
              />          
        </div>
        <div className="checkbox">
          <label>
            <input type="checkbox" value="remember-me" /> Remember me
          </label>
        </div>
        <button className="form-btn" type="submit">Sign in</button>
      </div>
    </div>
    )
  }
}

export default Signed
