import React from "react";
import renderer from "react-test-renderer";

import { Text } from "./Text";

describe("Text test", () => {
  it("should take snapshot of component", () => {
    const tree = renderer.create(<Text>Snapshopt Test</Text>).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
