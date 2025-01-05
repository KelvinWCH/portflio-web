import React, { useRef, useState, useEffect } from "react";
import { useLoader, useFrame } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { useAnimations } from "@react-three/drei";
import { useThree } from "@react-three/fiber";

function FishModel() {
  const gltf = useLoader(GLTFLoader, "/assets/goose.glb"); // Load the GLB model
  const { animations, scene } = gltf; // Extract animations and scene from gltf
  const { actions } = useAnimations(animations, scene); // Bind animations to the scene
  
  const { size, viewport } = useThree();
  const scale = Math.min(viewport.height * 2);
  const bounds = {
    left: -size.width / 200,
    right: size.width / 200,
  };

  const animate = useRef();

  // Play animation on component mount
  useEffect(() => {
    console.log(actions);
    if (actions["Take 001"]) {
      actions["Take 001"].play();
    }
  }, [actions]);

  useFrame(() => {
    if (animate.current) {
      // Update position
      animate.current.rotation.y += 0.005;
    }
  });

  return (
    <primitive
      ref={animate} // Pass the ref to the object
      object={scene} // Use the scene from the GLTF model
      scale={scale}
      
      position={[0,-1,0]}
    />
  );
}

export default FishModel;
