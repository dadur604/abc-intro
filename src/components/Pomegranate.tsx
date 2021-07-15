import { useRef, useState, useEffect } from "react";
import * as PIXI from 'pixi.js';
import Pom from '../images/pom.png';

// let createSprite;
let randomSprite: any;
let opacitySprite: any;


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

    const Background = new PIXI.Graphics();
    Background.interactive = true;
    Background.beginFill(0xADD8E6);
    Background.drawRect(0, 0, app.renderer.width, app.renderer.height);

    const PomegranateContainer = new PIXI.Container();


    const button = new PIXI.Graphics();
    button.interactive = true;
    button.buttonMode = true;
    button
      .beginFill(0xffb6c1, 1)
      .drawRoundedRect(10, 10, 80, 30, 20)
      .endFill()

    let home = new PIXI.Text('/');
    home.x = 45
    home.y = 10;

    let homeDraw = new PIXI.Text('/draw');
    homeDraw.x = 15
    homeDraw.y = 10;

    let welcome = new PIXI.Text('Welcome To My First Pixi Page')
    welcome.x = 150
    welcome.y = 250
    Background.addChild(welcome)




    function createSpriteFunction (parent: any) {
      const pomegranate = new PIXI.Sprite(app.loader.resources["pomegranate"].texture);
      pomegranate.scale.set(0.1);
      parent.addChild(pomegranate);

      return pomegranate;

    }

    const PomStorage = []

    Background.on('pointerdown', pointerDown)
    Background.on('pointermove', pointerMove)
    Background.on('pointerup', pointerUp)


    let dragging = false;

    function pointerMove (event: any) {
      if (dragging) {
        const { x, y } = event.data.global
        const pom = createSpriteFunction(PomegranateContainer)

        pom.x = x - 50;
        pom.y = y - 50;

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
        // change currentPosition

        // create range value for x and y
        const randomFromRange = (start: number, end: number) => {
          const range = end - start;
          const random = Math.random() * range;
          return start + random

        }

        pomegranate.x = randomFromRange(100, 500)
        pomegranate.y = randomFromRange(100, 500)
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

    let success = true

    button.on('pointerdown', () => {
      console.log('bang')
      if (success) {
        app.stage.removeChild(PomegranateContainer)
        button.removeChild(homeDraw)
        button.addChild(home)
        app.stage.addChild(randomSprite, opacitySprite);
        Background.removeChild(welcome)

        success = false
      } else {
        app.stage.removeChild(randomSprite, opacitySprite)
        button.removeChild(home)
        button.addChild(homeDraw)
        app.stage.addChild(PomegranateContainer)
        success = true
      }
    })

    app.stage.addChild(Background);
    app.stage.addChild(button)

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
