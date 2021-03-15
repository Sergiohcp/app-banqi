import React from "react";
import renderer from "react-test-renderer";

import Header from "./Header";

describe("Header test", () => {
  it("should take snapshot of component", () => {
    const tree = renderer.create(<Header />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
