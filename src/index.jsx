/* eslint-disable import/extensions */
import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar1 from "./components/Navbar1.jsx";
import "../public/style.css";
import $ from "jquery";

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        name: "",
        email: "",
        pic: ""
      }
    };
    // this.updateContent = this.updateContent.bind(this);
  }

  // componentDidMount() {
  //   this.updateContent();
  // }

  // updateContent() {
  //   const that = this;
  //   this.eventSource = new EventSource(
  //     'https://young-hamlet-30035.herokuapp.com/stream'
  //     // `http://localhost:3001/stream`
  //   );
  //   this.eventSource.onopen = () => {
  //     console.log('es open');
  //   };
  //   this.eventSource.onerror = () => {
  //     console.log('no response');
  //   };
  //   this.eventSource.onmessage = (result) => {
  //     console.log(JSON.parse(result.data)[0].name);
  //     const { name, pic, email } = JSON.parse(result.data)[0];
  //     that.setState({ data: { name, pic, email } });
  //   };
  // }
  // getId() {
  //   var path = window.location.href;
  //   if (path.indexOf("id") >= 0) {
  //     var startIndex = path.indexOf("=");
  //     this.id = path.substring(startIndex + 1);
  //     this.setState({
  //       id: path.substring(startIndex + 1)
  //     });
  //     // console.log("ss", path.substring(startIndex + 1));
  //     this.getNavBar();
  //   }
  // }

  getNavBar() {
    var that = this;
    $.ajax({
      url: `https://navbar-module.herokuapp.com/navbar`,
      type: "GET",
      success: data => {
        const { name, pic, email } = data[0];
        that.setState({ data: { name, pic, email } });
      },
      error: err => {
        console.log(err);
      }
    });
  }

  componentDidMount() {
    this.getNavBar();
  }
  render() {
    var url = window.location.href.split("/");
    console.log(url);
    var showBreadCrumb = 0;
    for (var i = 0; i < url.length; i++) {
      if (url[i] === "featured") {
        showBreadCrumb = 1;
        break;
      }
    }

    return this.state.data.name.length === 0 ? null : (
      <Navbar1 data={this.state.data} showBreadCrumb={showBreadCrumb} />
    );
  }
}
ReactDOM.render(<Navbar />, document.getElementById("navbar"));
