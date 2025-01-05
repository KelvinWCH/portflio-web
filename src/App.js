// App.js
import React from "react";
import { Canvas } from "@react-three/fiber";
import Box from "./components/cube";
import IntroCard from "./components/Intro.js";
import FishModel from "./components/Fish.js";
import NavBar from "./components/NavBar.js";
import { OrbitControls } from "@react-three/drei";
import { useRef } from "react";
import ProjectCard from "./components/ProjectCard.js";
import { TypeAnimation } from "react-type-animation";

function App() {
    const bottom = useRef(null);

    function scrollTo(ref){
      ref.current.scrollIntoView({behavior : "smooth"})
    }
  return (
    <>
      <NavBar />
      <div className="flex flex-col align-center justify-center h-screen w-screen">
        

        <div className="h-1/2 w-full">
          <Canvas className="" camera={{ position: [6, 5, 0]}}>
            <ambientLight intensity={3} />
            <pointLight position={[0, 5, 0]} />
            <FishModel />
            <OrbitControls
            enableZoom = {false}
            />
          </Canvas>
        </div>


        <IntroCard />
        <img
          src = "/assets/arrow-down.png"
          className='absolute h-10 w-10 bottom-5 right-5 cursor-pointer'
          onClick={() => scrollTo(bottom)}
          
        />
      </div>

      <div ref = {bottom} className="flex flex-col align-center justify-center w-screen gap-10 py-5">
          <TypeAnimation
                sequence={[
                    '/projects',
                    1000
                ]}
                 className= 'font-mono text-4xl md:text-5xl px-5'
          />
          
          <div className='flex flex-col sm:flex-row gap-5 items-center p-5'>
            <ProjectCard
              title = "Book Recommender"
              description={"Generates a book based on user's input. Outputs are stored to Google FireBase"}
              tech = {["Reach.js", "Node.js", "FireBase", "oAuth", "RESTFul API", "Figma"]}
              link = {"https://github.com/KelvinWCH/book-recommender"}
            />

            <ProjectCard
              title = "Maze Solver & Generator"
              description={"Geneates unique mazes and solves them using Breadth-First-Search. Interface made with Tkinter library"}
              tech = {["Python", "Tkinter", "OOP"]}
              link = {"https://github.com/KelvinWCH/MazeSolver"}
            />



            <ProjectCard
              title = "AI BattleShips"
              description={"Designed the classic battleships game with a partner, where the player fights an 'AI' bot."}
              tech = {["Java", "JavaSwing", "OOP"]}
              link = {"https://github.com/KelvinWCH/portflio-web"}
            />

            <ProjectCard
              title = "Portfolio Website"
              description={"The current website you're viewing right now (there is also a legacy one under readme GitHub)"}
              tech = {["React.js", "Three.js", "CloudFlare"]}
              link = {"https://github.com/KelvinWCH/portflio-web"}
            />

          </div>


      </div>


    </>
  );
}

export default App;
