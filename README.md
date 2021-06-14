# ABC Gabig Frontend Project

At ABC Gabig, the frontend is comprised of the following technologies:

### React

We use react as the main rendering framework  
Docs: [reactjs.org](https://reactjs.org/docs/getting-started.html)

### Typescript

We program mainly in typescript for additional compile-time checking and safety.  
Docs: [typescriptlang.org](https://www.typescriptlang.org/docs/)

### Pixi.js (via React-Pixi)

We use Pixi.js as the canvas rendering framework (v5), and react-pixi to render pixi elements in a familiar reactive method.  
Pixi.js Docs: [pixijs.com](https://pixijs.download/release/docs/index.html)  
React-Pixi Docs: [reactpixi.org](https://reactpixi.org/)

### Redux, RTK (Redux Toolkit) + RTK Query

Use redux for state management (infrequently, starting to switch to React Context API), and RTK query for making queries to the backend  
Redux Docs: [redux.js.org](https://redux.js.org/introduction/getting-started)  
Redux Toolkip Docs: [redux-toolkit.js.org](https://redux-toolkit.js.org/introduction/getting-started)  
RTK Query Docs: [redux-toolkit.js.org/rtk-query/overview](https://redux-toolkit.js.org/rtk-query/overview)

### Other Packages

React-Spring (Animations), i18Next (translation), react-router (page routing)

## Getting Started

First, run `npm install` to get all the dependencies.  
You can then run `npm start` to start up the frontend server.

In order to get familiar with some of the technologies (mainly react + pixi), you should build on top of this template, and recreate the following scene.

- Feel free to make as many components, helper functions, etc that you need to try and make the code as clean as possible.
- Use functional components and react hooks when needed.
- Make sure you properly type everything rather than using `any`

0. Create a pixi stage
1. Display a pomegranate on the stage at a random position. Clicking the pomegranate should change the position randomly. (Pomegranate image at /images/pom.png)
2. Create a component called `Pomegranate` which displays a pomegranate at the center of the screen. This takes a prop for the opacity of the pomegranate. When clicking the pomegranate, the opacity should decrease. Make sure to properly type the new component and its props
3. Create a react-router switch, and add a route for the homepage, and another route for `/draw`. The drawing page should draw a `<Pomegranate>` at every location that you click. (Expand the Pomegranate component to take a position in addition)
4. Add a button on each page to go to the other page.
5. _Bonus_: Can you persist the state of each page (location of pomegranates, etc) while going between them (You can use React Context or redux if you'd like).

<img src="https://i.imgur.com/mafoeWl.gif" width="300" height="300" />

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.
