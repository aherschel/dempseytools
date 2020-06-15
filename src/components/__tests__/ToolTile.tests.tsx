import React from "react";
import ReactDOM from "react-dom";
import { ToolTile } from "..";

describe("ToolTile", () => {
    it("renders without crashing", () => {
        const div = document.createElement("div");
        ReactDOM.render(<ToolTile name="" description="" logoUrl="" />, div);
        ReactDOM.unmountComponentAtNode(div);
    });
});
