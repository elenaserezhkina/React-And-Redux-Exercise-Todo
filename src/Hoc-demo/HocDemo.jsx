import React from "react";
import { HeaderWithSecret, HeaderWithData, Gradient, HeaderUp } from "./Hoc";
import {
  HooksRecapClass,
  HooksRecapFunction,
  ComponentWithChilds
} from "./HooksRecap";
function HocDemo() {
  return (
    <div>
      {/* <HeaderWithSecret />
      <HooksRecapClass />
      <HooksRecapFunction /> */}

      {/* <HeaderWithData /> */}
      <Gradient />
      <HeaderUp>Hello World</HeaderUp>
      {/* <ComponentWithChilds>

        <h1>Hello</h1>
        <h2>Hello2</h2>
      </ComponentWithChilds> */}
    </div>
  );
}

export default HocDemo;
