import React, { useState } from "react";
import { Container, _ReactPixi } from "@inlet/react-pixi";
import { Rectangle } from "pixi.js";

import Pomegranate from "./Pomegranate";
import Button from "./Button";

const hitArea = new Rectangle(0, 0, 500, 500);

const Drawing: React.FC = (props) => {
  const [positions, setPositions] = useState<_ReactPixi.PointLike[]>([]);
  return (
    <>
      <Container
        hitArea={hitArea}
        interactive
        pointertap={(e) => setPositions([...positions, e.data.global])}
      >
        {positions.map((x, i) => (
          <Pomegranate position={x} opacity={1} key={i} />
        ))}
      </Container>
      <Button location="/" />
    </>
  );
};

export default Drawing;
