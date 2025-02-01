import React from 'react';
import * as THREE from 'three';
import { useGLTF } from '@react-three/drei';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function ThreeDGame(props: any) {
  const { nodes, materials } = useGLTF('/tetris.glb');
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes.Object_4 as THREE.Mesh).geometry}
        material={materials.Atlas_color}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes.Object_6 as THREE.Mesh).geometry}
        material={materials.Atlas_color}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes.Object_7 as THREE.Mesh).geometry}
        material={materials.Atlas_color_llum}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes.Object_9 as THREE.Mesh).geometry}
        material={materials.Atlas_color}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes.Object_11 as THREE.Mesh).geometry}
        material={materials.Atlas_color}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes.Object_13 as THREE.Mesh).geometry}
        material={materials.Atlas_color}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes.Object_15 as THREE.Mesh).geometry}
        material={materials.Atlas_color}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes.Object_16 as THREE.Mesh).geometry}
        material={materials.Atlas_color_llum}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes.Object_18 as THREE.Mesh).geometry}
        material={materials.Atlas_color}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes.Object_19 as THREE.Mesh).geometry}
        material={materials.Atlas_color_llum}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes.Object_21 as THREE.Mesh).geometry}
        material={materials.Atlas_color}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes.Object_23 as THREE.Mesh).geometry}
        material={materials.Atlas_color}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes.Object_25 as THREE.Mesh).geometry}
        material={materials.Atlas_color}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes.Object_27 as THREE.Mesh).geometry}
        material={materials.Atlas_color_llum}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes.Object_29 as THREE.Mesh).geometry}
        material={materials.Atlas_color}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes.Object_31 as THREE.Mesh).geometry}
        material={materials.Atlas_color}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes.Object_32 as THREE.Mesh).geometry}
        material={materials.Atlas_color_llum}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes.Object_34 as THREE.Mesh).geometry}
        material={materials.Atlas_color_llum}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes.Object_36 as THREE.Mesh).geometry}
        material={materials.Atlas_color}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes.Object_37 as THREE.Mesh).geometry}
        material={materials.Atlas_color_llum}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes.Object_39 as THREE.Mesh).geometry}
        material={materials.Atlas_color}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes.Object_40 as THREE.Mesh).geometry}
        material={materials.Atlas_color_llum}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes.Object_42 as THREE.Mesh).geometry}
        material={materials.Atlas_color}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes.Object_43 as THREE.Mesh).geometry}
        material={materials.Atlas_color_llum}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes.Object_45 as THREE.Mesh).geometry}
        material={materials.Atlas_color}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes.Object_46 as THREE.Mesh).geometry}
        material={materials.Atlas_color_llum}
      />
    </group>
  );
}

useGLTF.preload('/tetris.glb');
