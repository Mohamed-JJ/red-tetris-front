"use client"

import { useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";
// eslint-disable

const modelUrl = "/cube_cascade.glb"; // Correct path

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function CascadedCube(props: any) {
  const group = useRef<THREE.Group>(null);
  const { nodes, materials, animations } = useGLTF(modelUrl);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { actions } = useAnimations(animations, group);
  useFrame(() => {
    if (group.current) {
      group.current.rotation.x += 0.01; // Adjust the rotation speed as needed
      group.current.rotation.y += 0.01; // Adjust the rotation speed as needed
    }
  });
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group name="root">
            <group name="GLTF_SceneRootNode" rotation={[Math.PI / 2, 0, 0]}>
              <group name="Cube_0">
                <mesh
                  name="Object_4"
                  castShadow
                  receiveShadow
                  geometry={(nodes.Object_4 as THREE.Mesh).geometry}
                  material={materials.material}
                />
              </group>
              <group name="Cube001_1" scale={0.792}>
                <mesh
                  name="Object_6"
                  castShadow
                  receiveShadow
                  geometry={(nodes.Object_6 as THREE.Mesh).geometry}
                  material={materials.material_1}
                />
              </group>
              <group name="Cube002_2" scale={0.629}>
                <mesh
                  name="Object_8"
                  castShadow
                  receiveShadow
                  geometry={(nodes.Object_8 as THREE.Mesh).geometry}
                  material={materials.material_2}
                />
              </group>
              <group name="Cube003_3" scale={0.489}>
                <mesh
                  name="Object_10"
                  castShadow
                  receiveShadow
                  geometry={(nodes.Object_10 as THREE.Mesh).geometry}
                  material={materials.material_3}
                />
              </group>
              <group name="Cube004_4" scale={0.374}>
                <mesh
                  name="Object_12"
                  castShadow
                  receiveShadow
                  geometry={(nodes.Object_12 as THREE.Mesh).geometry}
                  material={materials.material_4}
                />
              </group>
              <group name="Cube005_5" scale={0.279}>
                <mesh
                  name="Object_14"
                  castShadow
                  receiveShadow
                  geometry={(nodes.Object_14 as THREE.Mesh).geometry}
                  material={materials.material_5}
                />
              </group>
              <group name="Cube006_6" scale={0.204}>
                <mesh
                  name="Object_16"
                  castShadow
                  receiveShadow
                  geometry={(nodes.Object_16 as THREE.Mesh).geometry}
                  material={materials.material_6}
                />
              </group>
              <group name="Cube007_7" scale={0.14}>
                <mesh
                  name="Object_18"
                  castShadow
                  receiveShadow
                  geometry={(nodes.Object_18 as THREE.Mesh).geometry}
                  material={materials.material_7}
                />
              </group>
              <group name="Cube008_8" scale={0.086}>
                <mesh
                  name="Object_20"
                  castShadow
                  receiveShadow
                  geometry={(nodes.Object_20 as THREE.Mesh).geometry}
                  material={materials.material_8}
                />
              </group>
              <group name="Cube009_9" scale={0.052}>
                <mesh
                  name="Object_22"
                  castShadow
                  receiveShadow
                  geometry={(nodes.Object_22 as THREE.Mesh).geometry}
                  material={materials.material_9}
                />
              </group>
              <group name="Cube010_10" scale={0.027}>
                <mesh
                  name="Object_24"
                  castShadow
                  receiveShadow
                  geometry={(nodes.Object_24 as THREE.Mesh).geometry}
                  material={materials.material_10}
                />
              </group>
              <group name="Circle_11" scale={1.849} />
            </group>
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload(modelUrl);
