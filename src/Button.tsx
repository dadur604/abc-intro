import { Graphics, Text } from "@inlet/react-pixi";
import React from "react";
import { useHistory } from "react-router";

interface IButton {
  location: string;
}

const Button: React.FC<IButton> = (props) => {
  const history = useHistory();
  return (
    <Graphics
      draw={(g) => {
        g.clear().beginFill(0xffaaaa).drawRoundedRect(0, 0, 150, 50, 25);
      }}
      buttonMode
      interactive
      pointertap={() => history.push(props.location)}
    >
      <Text text={props.location} anchor={0.5} position={[75, 25]} />
    </Graphics>
  );
};

export default Button;
