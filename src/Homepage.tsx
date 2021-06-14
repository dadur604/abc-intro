import React, { useState } from "react";
import { Sprite } from "@inlet/react-pixi";

import pom from "./images/pom.png";
import Pomegranate from "./Pomegranate";
import Button from "./Button";

const getRandomPosition = () => {
  return [Math.random() * 500, Math.random() * 500] as [number, number];
};

const Homepage: React.FC = (props) => {
  const [position, setPosition] = useState<[number, number]>(
    getRandomPosition()
  );

  const [opacity, setOpacity] = useState<number>(1);
  return (
    <>
      <Sprite
        image={pom}
        width={100}
        height={100}
        position={position}
        interactive
        buttonMode
        pointertap={() => setPosition(getRandomPosition())}
      />

      <Pomegranate
        opacity={opacity}
        position={[250, 250]}
        onClick={() => setOpacity(opacity * 0.9)}
      />
      <Button location="/draw" />
    </>
  );
};

export default Homepage;
