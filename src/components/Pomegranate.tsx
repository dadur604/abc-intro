import { useRef, useState, useEffect } from "react";
import * as PIXI from 'pixi.js';
import Pom from '../images/pom.png';

// let createSprite;
let randomSprite;
let opacitySprite;


const app = new PIXI.Application();

export default function Pomegranate() {
  const ref = useRef(null);

  const [randomPosition] = useState({x: 100, y: 100})
  const [opacityPosition] = useState({x: 300, y: 250});
  
  const setup = () => {
    app.loader
    .add("pomegranate", Pom)
    .load(initialize);
  };

  
  const initialize = () => {
    //We will create a sprite and then add it to stage and (0,0) position
    const sprite_H = 100;
    const sprite_W = 100;

    const pinkGraphic = new PIXI.Graphics();
    pinkGraphic.interactive = true;
    pinkGraphic.beginFill(0xFFC2CB);
    pinkGraphic.drawRect(0, 0, app.renderer.width, app.renderer.height);
    app.stage.addChild(pinkGraphic);

    const PomegranateContainer = new PIXI.Container();
    app.stage.addChild(PomegranateContainer)


    function createSpriteFunction (parent: any) {
      const pomegranate = new PIXI.Sprite(app.loader.resources["pomegranate"].texture);
      pomegranate.scale.set(0.1);
      parent.addChild(pomegranate);

      return pomegranate;

    }

    const PomStorage = []

    pinkGraphic.on('pointerdown', pointerDown)
    pinkGraphic.on('pointermove', pointerMove)
    pinkGraphic.on('pointerup', pointerUp)


    let dragging = false;

    function pointerMove (event: any) {
      if (dragging) {
        const { x, y } = event.data.global
        const pom = createSpriteFunction(PomegranateContainer)

        pom.x = x;
        pom.y = y;

        PomStorage.push(pom)
      }
    }

    function pointerDown (event: any) {
      dragging = true;
      pointerMove(event);
    }


    function pointerUp() {
      dragging = false;
  }
    
    randomSprite = randomSpriteFunction(randomPosition.x, randomPosition.y, sprite_W, sprite_H, 'random');
    opacitySprite = OpacitySpriteFunction(opacityPosition.x, opacityPosition.y, sprite_W, sprite_H, 'opaque');

    


    function randomSpriteFunction (x: number, y: number, w: number, h: number, name: string) {
      const pomegranate = new PIXI.Sprite(app.loader.resources["pomegranate"].texture);

      pomegranate.x = x;
      pomegranate.y = y;

      pomegranate.width = w;
      pomegranate.height = h;

      pomegranate.interactive = true;
      pomegranate.buttonMode = true;

      pomegranate.on("pointerdown", () => {
        console.log('hello random')
        // change currentPosition
        let newX = [100, 200, 250, 400, 500, 505,50];
        let newY = [100, 200, 300, 400, 500, 505];

        pomegranate.x = newX[Math.floor(Math.random() * newX.length)]
        pomegranate.y = newY[Math.floor(Math.random() * newY.length)]
      })

      pomegranate.name = name

      return pomegranate;


    }

    function OpacitySpriteFunction (x: number, y: number, w: number, h: number, name: string) {
      const pomegranate = new PIXI.Sprite(app.loader.resources["pomegranate"].texture);

      pomegranate.x = x;
      pomegranate.y = y;

      pomegranate.width = w;
      pomegranate.height = h;

      pomegranate.interactive = true;
      pomegranate.buttonMode = true;

      pomegranate.on("pointerdown", () => {
        console.log('hello opacity')
        pomegranate.alpha = 1.4 - pomegranate.alpha
      })
      
      pomegranate.name = name;

      return pomegranate;
    }

    app.stage.addChild(randomSprite, opacitySprite);

  };

  useEffect(() => {
    // On first render add app to DOM
    if (ref.current) {
      // @ts-ignore: Object is possibly 'null'.
      ref.current.appendChild(app.view); 

      // the setup is for the image
      setup()
    }
    // Start the PixiJS app


    app.start();

    return () => {
      // On unload stop the application
      app.stop();
    };
    // eslint-disable-next-line
  }, []);
 
  return <div ref={ref} />

}
