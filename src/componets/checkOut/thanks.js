import React from 'react'
import {Link as Linkk} from "react-router-dom";
const ThankPage = () => {
    return (
        <div className="text-center">
            <div className="jumbotron text-xs-center">
                <h1 className="display-3">Thank You!</h1>
                <p className="lead">Please check your Email for upcoming news and <strong>confirmation message.</strong></p>
                <hr/>
                    <p>
                        Having query? <a href="">Contact us</a>
                    </p>
                    <p className="lead">
                       <Linkk to="/"> <button className="btn btn-primary">Go to Shopping.</button></Linkk>
                    </p>
                </div>
            </div>
            )
          }
export default ThankPage