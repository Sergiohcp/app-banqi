import React from "react";
import renderer from "react-test-renderer";

import Container from "./Container";

describe("Container test", () => {
  it("should take snapshot of component", () => {
    const tree = renderer
      .create(<Container width={25} height={25} bgColor={"pink"} />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
