/* eslint-disable import/extensions */
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./navBar.css";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import "../../public/style.css";
import { withCookies, Cookies } from "react-cookie";
import $ from "jquery";
import { white } from "material-ui/styles/colors";
class Navbar1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
      showBreadCrumb: this.props.showBreadCrumb,
      token: ""
      // email: this.props.email,
      // pic: this.props.pic
    };
    this.token = "";
    this.handleLogout = this.handleLogout.bind(this);
    // this.updateContent = this.updateContent.bind(this);
  }

  componentDidMount() {
    // this.updateContent();

    var cookie = new Cookies();
    var token = cookie.get("x-access-token");
    this.setState({
      token: token
    });
    this.token = token;
    this.getUserFromServer();
  }

  getUserFromServer() {
    // console.log(this.token)
    var that = this;
    $.ajax({
      method: "get",
      url: "http://localhost:3000/users/user",
      headers: { "x-access-token": that.token },
      success: data => {
        console.log(data);
        this.setState({
          data: data
        });
      },
      error: err => {
        console.log(err);
      }
    });
  }

  handleLogout() {
    var cookie = new Cookies();
    cookie.set("x-access-token", "");
    this.setState({
      token: ""
    });
  }
  // componentDidMount() {
  //   this.updateContent();
  // }

  // updateContent() {
  //   const that = this;
  //   this.eventSource = new EventSource(
  //     'https://young-hamlet-30035.herokuapp.com/stream'
  //   );
  //   this.eventSource.onopen = () => {
  //     console.log('es open');
  //   };
  //   this.eventSource.onerror = () => {
  //     console.log('no response');
  //   };
  //   this.eventSource.onmessage = (result) => {
  //     console.log(result);
  //     console.log(JSON.parse(result.data));
  //     // example
  //     const { email } = JSON.parse(result.data)[0];
  //     console.log(email);
  //     that.setState({ text: email });
  //   };
  // }

  render() {
    return (
      //  <div>
      //    <div className="container" >

      <Navbar bg="light" expand="md">
        {/* <Navbar.Brand href="#">
              <svg width="35" height="35" viewBox="5 5 35 35" className="q">
                {" "}
                <path d="M5 40V5h35v35H5zm8.56-12.63c0 .56-.03.69-.32 1.03L10.8 31.4v.4h6.97v-.4L15.3 28.4c-.29-.34-.34-.5-.34-1.03v-8.95l6.13 13.36h.71l5.26-13.36v10.64c0 .3 0 .35-.19.53l-1.85 1.8v.4h9.2v-.4l-1.83-1.8c-.18-.18-.2-.24-.2-.53V15.94c0-.3.02-.35.2-.53l1.82-1.8v-.4h-6.47l-4.62 11.55-5.2-11.54h-6.8v.4l2.15 2.63c.24.3.29.37.29.77v10.35z" />{" "}
              </svg>{" "}
            </Navbar.Brand> */}
        <Navbar bg="light">
          <Navbar.Brand className="brandImg" href="https://medium.com/">
            <svg
              class="svgIcon-use"
              height="22"
              width="112"
              viewBox="0 0 111.5 22"
            >
              <path d="M56.3 19.5c0 .4 0 .5.3.7l1.5 1.4v.1h-6.5V19c-.7 1.8-2.4 3-4.3 3-3.3 0-5.8-2.6-5.8-7.5 0-4.5 2.6-7.6 6.3-7.6 1.6-.1 3.1.8 3.8 2.4V3.2c0-.3-.1-.6-.3-.7l-1.4-1.4V1l6.5-.8v19.3zm-4.8-.8V9.5c-.5-.6-1.2-.9-1.9-.9-1.6 0-3.1 1.4-3.1 5.7 0 4 1.3 5.4 3 5.4.8.1 1.6-.3 2-1zm9.1 3.1V9.4c0-.3-.1-.6-.3-.7l-1.4-1.5v-.1h6.5v12.5c0 .4 0 .5.3.7l1.4 1.4v.1h-6.5zm-.2-19.2C60.4 1.2 61.5 0 63 0c1.4 0 2.6 1.2 2.6 2.6S64.4 5.3 63 5.3c-1.5 0-2.6-1.2-2.6-2.7zm22.5 16.9c0 .4 0 .5.3.7l1.5 1.4v.1h-6.5v-3.2c-.6 2-2.4 3.4-4.5 3.4-2.9 0-4.4-2.1-4.4-6.2 0-1.9 0-4.1.1-6.5 0-.3-.1-.5-.3-.7L67.7 7v.1H74v8c0 2.6.4 4.4 2 4.4.9-.1 1.7-.6 2.1-1.3V9.5c0-.3-.1-.6-.3-.7l-1.4-1.5v-.2h6.5v12.4zm22 2.3c0-.5.1-6.5.1-7.9 0-2.6-.4-4.5-2.2-4.5-.9 0-1.8.5-2.3 1.3.2.8.3 1.7.3 2.5 0 1.8-.1 4.2-.1 6.5 0 .3.1.5.3.7l1.5 1.4v.1H96c0-.4.1-6.5.1-7.9 0-2.7-.4-4.5-2.2-4.5-.9 0-1.7.5-2.2 1.3v9c0 .4 0 .5.3.7l1.4 1.4v.1h-6.5V9.5c0-.3-.1-.6-.3-.7l-1.4-1.5v-.2h6.5v3.1c.6-2.1 2.5-3.5 4.6-3.4 2.2 0 3.6 1.2 4.2 3.5.7-2.1 2.7-3.6 4.9-3.5 2.9 0 4.5 2.2 4.5 6.2 0 1.9-.1 4.2-.1 6.5-.1.3.1.6.3.7l1.4 1.4v.1h-6.6zm-81.4-2l1.9 1.9v.1h-9.8v-.1l2-1.9c.2-.2.3-.4.3-.7V7.3c0-.5 0-1.2.1-1.8L11.4 22h-.1L4.5 6.8c-.1-.4-.2-.4-.3-.6v10c-.1.7 0 1.3.3 1.9l2.7 3.6v.1H0v-.1L2.7 18c.3-.6.4-1.3.3-1.9v-11c0-.5-.1-1.1-.5-1.5L.7 1.1V1h7l5.8 12.9L18.6 1h6.8v.1l-1.9 2.2c-.2.2-.3.5-.3.7v15.2c0 .2.1.5.3.6zm7.6-5.9c0 3.8 1.9 5.3 4.2 5.3 1.9.1 3.6-1 4.4-2.7h.1c-.8 3.7-3.1 5.5-6.5 5.5-3.7 0-7.2-2.2-7.2-7.4 0-5.5 3.5-7.6 7.3-7.6 3.1 0 6.4 1.5 6.4 6.2v.8h-8.7zm0-.8h4.3v-.8c0-3.9-.8-4.9-2-4.9-1.4.1-2.3 1.6-2.3 5.7z"></path>
            </svg>
          </Navbar.Brand>
        </Navbar>
        {this.state.showBreadCrumb ? (
          <Navbar bg="light">
            <Navbar.Brand className="brandFeatured">
              {" "}
              Featured stories
            </Navbar.Brand>
          </Navbar>
        ) : (
          ""
        )}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Item>
              <svg
                width="30"
                height="30"
                viewBox="0 0 25 25"
                className="navBarIcon"
              >
                <path d="M20.07 18.93l-4.16-4.15a6 6 0 1 0-.88.88l4.15 4.16a.62.62 0 1 0 .89-.89zM6.5 11a4.75 4.75 0 1 1 9.5 0 4.75 4.75 0 0 1-9.5 0z" />
              </svg>
            </Nav.Item>
            <Nav.Item>
              <svg
                width="30"
                height="30"
                viewBox="-293 409 25 25"
                className="navBarIcon"
              >
                <path d="M-273.33 423.67l-1.67-1.52v-3.65a5.5 5.5 0 0 0-6.04-5.47 5.66 5.66 0 0 0-4.96 5.71v3.41l-1.68 1.55a1 1 0 0 0-.32.74V427a1 1 0 0 0 1 1h3.49a3.08 3.08 0 0 0 3.01 2.45 3.08 3.08 0 0 0 3.01-2.45h3.49a1 1 0 0 0 1-1v-2.59a1 1 0 0 0-.33-.74zm-7.17 5.63c-.84 0-1.55-.55-1.81-1.3h3.62a1.92 1.92 0 0 1-1.81 1.3zm6.35-2.45h-12.7v-2.35l1.63-1.5c.24-.22.37-.53.37-.85v-3.41a4.51 4.51 0 0 1 3.92-4.57 4.35 4.35 0 0 1 4.78 4.33v3.65c0 .32.14.63.38.85l1.62 1.48v2.37z" />
              </svg>
            </Nav.Item>

            <button
              style={{
                backgroundColor: "white",
                color: "rgba(3, 168, 124, 1)",
                border: "1px solid rgba(3, 168, 124, 1)",
                borderRadius: "8px",
                fontSize: "12px",
                display: this.state.token.length !== 0 ? "none" : "block"
              }}
            >
              Get started
            </button>
            <NavDropdown
              style={{
                display:
                  this.state.showBreadCrumb || this.state.token.length === 0
                    ? "none"
                    : "block"
              }}
              title={
                <div>
                  <img
                    className="navbar-img"
                    src={this.state.data.pic}
                    alt="user picture"
                  />
                </div>
              }
              id="basic-nav-dropdown"
            >
              <NavDropdown.Item className="nav-dropdown-item active" href="#">
                <div className="nameWithPhoto">
                  <img
                    id="dropdown-img"
                    width="35px"
                    src={this.state.data.pic}
                  />
                  <span className="nameAndUsername">
                    <span id="dropdown-name"> {this.state.data.name} </span>
                    <span id="dropdown-email">{this.state.data.email} </span>
                  </span>
                  <br />
                </div>
                <span id="member">Become a member</span>
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item className="nav-dropdown-item active" href="#">
                New Story
              </NavDropdown.Item>
              <NavDropdown.Item className="nav-dropdown-item active" href="#">
                Stories
              </NavDropdown.Item>
              <NavDropdown.Item className="nav-dropdown-item active" href="#">
                Series
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item className="nav-dropdown-item active" href="#">
                Medium Partner Program
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item className="nav-dropdown-item active" href="#">
                Bookmarks
              </NavDropdown.Item>
              <NavDropdown.Item className="nav-dropdown-item active" href="#">
                Publications
              </NavDropdown.Item>
              <NavDropdown.Item className="nav-dropdown-item active" href="#">
                Customize your interests
              </NavDropdown.Item>

              <NavDropdown.Divider />
              <NavDropdown.Item className="nav-dropdown-item active" href="#">
                Profile
              </NavDropdown.Item>
              <NavDropdown.Item className="nav-dropdown-item active" href="#">
                Setting
              </NavDropdown.Item>
              <NavDropdown.Item className="nav-dropdown-item active" href="#">
                Help
              </NavDropdown.Item>
              <NavDropdown.Item
                onClick={this.handleLogout}
                className="nav-dropdown-item active"
                href="#"
              >
                Sign out
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      //   </div>
      // </div>
    );
  }
}

export default Navbar1;
