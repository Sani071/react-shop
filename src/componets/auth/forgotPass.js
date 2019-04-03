import React from 'react'
import {Link as myLink} from "react-router-dom"
export default function Forget() {
  return (
    <div className="mr-auto-auto mt-5">
  <div className="pageWrapper col-xs-12">
    <h1>Forgot Password</h1>
    <div className="form-group">
      <input type="email" className="form-control" placeholder="Email Address"/>
    </div>
    <div className="blockButtonWrapper">
      <button type="button" className="btn btn-primary btn-lg btn-block">
        <myLink to="/">Reset Password</myLink>
      </button>
    </div>
    <div className="blockButtonWrapper">
      <button type="button" className="btn btn-default btn-lg btn-block">
        <myLink to="/"><span>Cancel</span></myLink>
      </button>
    </div>
  </div>

    </div>
  )
}
