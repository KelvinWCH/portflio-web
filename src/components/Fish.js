import React, { useRef, useState } from "react";
import { useLoader, useFrame } from "@react-three/fiber";
import { TDSLoader } from "three/examples/jsm/loaders/TDSLoader";
import { TextureLoader } from "three";
import { useThree } from "@react-three/fiber";

function FishModel() {
  // Load the 3D model and texture
  const model = useLoader(TDSLoader, "/assets/fish.3ds");
  const texture = useLoader(TextureLoader, "/assets/fish_texture.png");
  const [direction, setDirection] = useState(1); // 1 for moving right, -1 for moving left
  const { size, camera } = useThree();
  const bounds = {
    left: -size.width / 200, 
    right: size.width / 200,
  };

  const animate = useRef();

  useFrame(() => {
    if (animate.current) {
        // Update position
        animate.current.position.x += direction * 0.02;
        animate.current.rotation.y += 0.01;
        // Reverse direction when hitting bounds
        if (animate.current.position.x > bounds.right) {
          setDirection(-1); // Move left
        } else if (animate.current.position.x < bounds.left) {
          setDirection(1); // Move right
        }
      }
  });

  model.traverse((child) => {
    if (child.isMesh) {
      child.material.map = texture; // Assign the texture to the material
    }
  });

  return (
    <primitive
      ref={animate} // Pass the ref here
      object={model}
      scale={0.5}
      position={[0, 0, 0]}
      rotation = {[180, 0, 0]}
    />
  );
}

export default FishModel;
