import React from "react";
import ToolTile from "../components/ToolTile";

const ToolsPage = () => {
  return (
    <>
      <br />
      <ToolTile
        name="Koffie"
        description="A tool which helps you manage your rotation of long-tail friends."
        linkUrl="https://koffie.link"
        logoUrl="/coffee-logo.png"
      />
      <ToolTile
        name="Tacomaroke"
        description="A tool which provides utilities to support a variety of karaoke."
        linkUrl="https://tacomaroke.com"
        logoUrl="/mic-logo.png"
      />
      <ToolTile
        name="Dempsey Tools"
        description="This site! Mainly just an index of other projects."
        logoUrl="/tool-logo.png"
      />
    </>
  );
};

export default ToolsPage;
