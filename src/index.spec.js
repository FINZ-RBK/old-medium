import React from "react";
import renderer from "react-test-renderer";
import Navbar from "./index";
import Navbar1 from "./components/Navbar1.jsx";

describe("testing navbar snapshot from index", () => {
  test("navbar snapshot renders", () => {

    var comp = renderer.create(<Navbar1 />);
    var tree = comp.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
