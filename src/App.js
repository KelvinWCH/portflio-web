// App.js
import React from "react";
import { Canvas } from "@react-three/fiber";
import Box from "./components/cube";
import IntroCard from "./components/Intro.js";
import FishModel from "./components/Fish.js";
import NavBar from "./components/NavBar.js";

function App() {
  return (
    <>
      <NavBar />
      <div className="flex flex-col align-center justify-center h-screen w-screen">
        

        <div className="h-1/4 w-full">
          <Canvas className="">
            <ambientLight intensity={1} />
            <pointLight position={[5, 5, 5]} />
            <FishModel />
          </Canvas>
        </div>


        <IntroCard />
      </div>
    </>
  );
}

export default App;
