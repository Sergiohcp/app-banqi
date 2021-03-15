import React from "react";
import renderer from "react-test-renderer";

import Pix from "@svg/Pix";
import ArrowDown from "@svg/ArrowDown";

import Card from "./Card";

describe("Card test", () => {
  it("should take snapshot of component", () => {
    const tree = renderer
      .create(<Card Icon={Pix} title={"PIX"} onPress={() => {}} />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it("should find title prop in component", () => {
    const testRenderer = renderer.create(
      <Card Icon={ArrowDown} title={"Depósito"} onPress={() => {}} />
    );

    expect(testRenderer.root.findByType(Card).props.title).toEqual("Depósito");
  });
});
