"use client";

import { useRef } from "react";
import {  useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

const modelUrl = "/high_poly_smooth_cube.glb"; // Correct path

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function RotatingCube(props?: any) {
  const { nodes, materials } = useGLTF(modelUrl);
  const group = useRef<THREE.Group>(null);
  useFrame(() => {
    if (group.current) {
      group.current.rotation.x += 0.01; // Adjust the rotation speed as needed
      group.current.rotation.y += 0.01; // Adjust the rotation speed as needed
    }
  });

  return (
    <group ref={group} {...props} dispose={null}>
      <group scale={0.01}>
        <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh
            castShadow
            receiveShadow
            geometry={(nodes.Cube_Material_0 as THREE.Mesh).geometry}
            material={materials.Material}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={(nodes.Cube_Material_0_1 as THREE.Mesh).geometry}
            material={materials.Material}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={(nodes.Cube_Material_0_2 as THREE.Mesh).geometry}
            material={materials.Material}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={(nodes.Cube_Material_0_3 as THREE.Mesh).geometry}
            material={materials.Material}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={(nodes.Cube_Material_0_4 as THREE.Mesh).geometry}
            material={materials.Material}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={(nodes.Cube_Material_0_5 as THREE.Mesh).geometry}
            material={materials.Material}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={(nodes.Cube_Material_0_6 as THREE.Mesh).geometry}
            material={materials.Material}
          />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload(modelUrl);


