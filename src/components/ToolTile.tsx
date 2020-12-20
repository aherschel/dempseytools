import React from "react";
import Button from "react-bootstrap/Button";
import Jumbotron from "react-bootstrap/Jumbotron";

interface ToolTileProps {
  name: string;
  description: string;
  linkUrl?: string;
  logoUrl: string;
}

const ToolTile = (props: ToolTileProps) => {
  const { name, description, linkUrl, logoUrl } = props;
  return (
    <Jumbotron>
      <h3>
        <img src={logoUrl} alt={name} width={24} height={24} /> {name}
      </h3>
      <p>{description}</p>
      {linkUrl && (
        <Button variant="primary" href={linkUrl}>
          Check it out!
        </Button>
      )}
    </Jumbotron>
  );
};

ToolTile.defaultProps = {
  linkUrl: undefined,
};

export default ToolTile;
