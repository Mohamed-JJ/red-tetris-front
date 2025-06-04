'use client';

import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

interface TetrisPieceProps {
  shape: string;
  color: string;
}

// Define the shapes of the Tetris pieces
const shapes = {
  I: [
    [0, 0, 0, 0],
    [1, 1, 1, 1],
    [0, 0, 0, 0],
    [0, 0, 0, 0]
  ],
  J: [
    [1, 0, 0],
    [1, 1, 1],
    [0, 0, 0]
  ],
  L: [
    [0, 0, 1],
    [1, 1, 1],
    [0, 0, 0]
  ],
  O: [
    [1, 1],
    [1, 1]
  ],
  S: [
    [0, 1, 1],
    [1, 1, 0],
    [0, 0, 0]
  ],
  T: [
    [0, 1, 0],
    [1, 1, 1],
    [0, 0, 0]
  ],
  Z: [
    [1, 1, 0],
    [0, 1, 1],
    [0, 0, 0]
  ]
};

export const TetrisPiece: React.FC<TetrisPieceProps> = ({ shape, color }) => {
  const group = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    if (group.current) {
      // Add a gentle floating animation
      group.current.position.y = Math.sin(state.clock.getElapsedTime()) * 0.1;
      // Slow rotation
      group.current.rotation.y += 0.005;
    }
  });

  // Get the shape matrix
  const matrix = shapes[shape as keyof typeof shapes];
  
  // Calculate the center of the piece for proper positioning
  const width = matrix[0].length;
  const height = matrix.length;
  const offsetX = -((width - 1) / 2);
  const offsetY = -((height - 1) / 2);

  return (
    <group ref={group} position={[0, 0, 0]}>
      {matrix.map((row, y) =>
        row.map((cell, x) => {
          if (cell === 1) {
            return (
              <mesh key={`${x}-${y}`} position={[x + offsetX, -y + offsetY, 0]}>
                <boxGeometry args={[0.9, 0.9, 0.9]} />
                <meshStandardMaterial 
                  color={color} 
                  roughness={0.3}
                  metalness={0.4}
                  emissive={color}
                  emissiveIntensity={0.2}
                />
              </mesh>
            );
          }
          return null;
        })
      )}
    </group>
  );
};