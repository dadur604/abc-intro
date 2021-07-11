import { useState,  } from 'react';
import { Stage, Sprite } from '@inlet/react-pixi';
import PomImage from '../../images/pom.png';
import './Pom.css';

// created a new function forr the pomegranate
const Pom = () => {

  // created a state for the position and setState to manipulate the setState
  // Note: redux/context api on the way.
  const [position, setPosition] = useState({x: 200, y: 150})
  const [alpha, setAlpha] = useState(1);

  // created an onClick function for the random click
  const randomOnClickEvent = () => {
    // declared a new variable for x and y position.
    let newX = [100, 200, 250, 400, 500, 505,50];
    let newY = [100, 150, 300, 400, 500, 505];
    
    // manipulated the state using the setState by adding the new declared positions randomly
    setPosition({
      x: newX[Math.floor(Math.random() * newX.length)],
      y: newY[Math.floor(Math.random() * newY.length)]
    })
  }

  // created another function for the fade event
  const fadeOnClickEvent = () => {
    // manipulated the state so the the opacity change onClick and revert back on another click
    // note: Alpha is equivalent to opacity in PIXI.JS. Note: my opinion.
    setAlpha(1.4 - alpha)
  }



  return (
    <div>
      <Stage 
      width={800} 
      height={600} 
      options={{ 
        backgroundColor: 0XFFC2CB, 
        antialias: true
        }}>
          <Sprite 
            image={PomImage} 
            x = {position.x}
            y = {position.y}
            width={100} 
            height={100}
            interactive={true} 
            buttonMode={true}
            pointerdown={() => randomOnClickEvent() }
            />

          <Sprite 
              image={PomImage} 
              x = {350}
              y = {250}
              width={100} 
              height={100} 
              interactive={true} 
              alpha={alpha}
              pointerdown={() => fadeOnClickEvent()}
            />
      </Stage> 
    </div>   
  )
};

export default Pom