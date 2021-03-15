import { Text } from "@components/Text";
import React from "react";
import renderer from "react-test-renderer";

import Touchable from "./Touchable";

describe("Touchable test", () => {
  it("should take snapshot of component", () => {
    const tree = renderer
      .create(
        <Touchable onPress={() => {}}>
          <Text>Snapshot Test</Text>
        </Touchable>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
