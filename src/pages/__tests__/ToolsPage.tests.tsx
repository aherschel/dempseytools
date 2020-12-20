import React from "react";
import ReactDOM from "react-dom";
import ToolsPage from "../ToolsPage";

describe("AboutPage", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<ToolsPage />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
