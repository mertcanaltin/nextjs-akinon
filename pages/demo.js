import React, { Component } from 'react';
import Navbar from "../components/users/Navbar";
import User from "../components/users/User";
import 'bootstrap/dist/css/bootstrap.min.css'

export class demo extends Component {
    render() {
        return (
            <div className="container">
  <Navbar title ="Props"/>
  <hr/>
  <User />
  <User name ="Deneme" departman="" maas="" izingun=""/>
  <User name ="Can" departman="" maas="" izingun=""/>
  <User name ="Mert" departman="" maas="" izingun=""/>

    </div>
        )
    }
}

export default demo
