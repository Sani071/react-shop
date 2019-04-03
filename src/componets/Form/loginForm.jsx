import React, { Component } from 'react'
import "./log.css"
import { Link } from "react-router-dom";
export default class Loginform extends Component {
  state = {
    userName: "",
    password: ""
  }
  logchangeHandler = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }
  render() {

    console.log(this.state)
    return (
      <div className="logWrapper pb-3 mt-4 shadow-lg">
        <div className="box-form">
          <div className="row">
            <div className="col-6 col-md-6 col-sm-12 col-xs-12">
              <div className="left">
                <div className="overlay">
                  <h1>Home Market</h1>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Curabitur et est sed felis aliquet sollicitudin</p>
                  <span>
                    <p>login with social media</p>
                    <a className="pointer"><i className="fa fa-facebook" aria-hidden="true"></i>Login with facebook</a>
                    <a className="pointer"><i className="fa fa-twitter" aria-hidden="true"></i> Login with Twitter</a>
                  </span>
                </div>
              </div>
            </div>
            <div className="col-6 col-md-6 col-sm-12 col-xs-12">
              <div className="right rightHover">
                <h4 className="text-bold">Login</h4>

                <div className="inputs">
                  <input type="text" className="form-control" placeholder="user name" />
                  <br></br>
                  <input type="password" className="form-control" placeholder="password" />
                </div>

                <br></br><br></br>

                <div className="remember-me--forget-password">

                  <label>
                    <input type="checkbox" />
                    <span className="text-checkbox">Remember me</span>
                  </label>
                  <Link to="/auth/forgetPass"><p>forget password?</p></Link>
                </div>

                <br></br>
                <Link to="/"><button className="logHover">Login</button></Link>
                <br></br><br></br>
                <small>Don't have an account? <a><Link to="/register"><br></br>Creat Your Account</Link></a> </small>
                <br></br><br></br>

              </div>

            </div>
          </div>
        </div>
      </div>
    )
  }
}
