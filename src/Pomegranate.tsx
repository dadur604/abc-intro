import { Sprite, _ReactPixi } from "@inlet/react-pixi";
import React from "react";
import pom from "./images/pom.png";

interface IPomegranate {
  opacity: number;
  position: _ReactPixi.PointLike;
  onClick?: () => void;
}

const Pomegranate: React.FC<IPomegranate> = (props) => {
  return (
    <Sprite
      image={pom}
      width={100}
      height={100}
      position={props.position}
      anchor={0.5}
      alpha={props.opacity}
      pointertap={props.onClick}
      interactive
      buttonMode
    />
  );
};

export default Pomegranate;
