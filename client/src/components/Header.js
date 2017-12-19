import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Payments from "./Payments";

class Header extends Component {
  renderContent() {
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return (
          <li className="nav-item">
            <a className="nav-link" href="/auth/google">Login With Google</a>
          </li>
        );
      default:
        return [
          <li className="nav-item" key="1">
            <Payments />
          </li>,
          <li className="nav-item" key="3" style={{ margin: "0 10px" }}>
            Credits: {this.props.auth.credits}
          </li>,
          <li className="nav-item" key="2">
            <a className="logout" href="/api/logout">Logout</a>
          </li>
        ];
    }
  }
  render() {
    console.log(this.props);
    return (
      <nav className="navbar navbar-expand-sm bg-dark nav-wrapper navbar-dark fixed-top">
        <div className="container">
          <Link
            to={this.props.auth ? "/surveys" : "/"}
            href="#"
            className="navbar-brand "
          >
            EMAILY
          </Link>


            <ul className="navbar-nav ml-auto left ">
            {this.renderContent()}

            </ul>

          </div>
      </nav>
      // <nav style={{ margin: "0 0 1cm 0" }}>
      //   <div className="nav-wrapper teal lighten-2 row">
      //     <div className="col s2 offset-s1 ">
      //       <Link
      //         to={this.props.auth ? "/surveys" : "/"}
      //         href="#"
      //         className="left brand-logo"
      //       >
      //         Emaily
      //       </Link>
      //     </div>
      //     <div className="col s9 text">
      //       <ul id="nav-mobile" className="right">
      //         {this.renderContent()}
      //       </ul>
      //     </div>
      //   </div>
      // </nav>
    );
  }
}
function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Header);
