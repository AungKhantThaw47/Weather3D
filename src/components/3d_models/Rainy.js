/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef , useEffect } from 'react'
import { useFrame } from "@react-three/fiber";
import { useGLTF } from '@react-three/drei'
import { Vector3 } from 'three';

export default function Model({ ...props }) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/Rainy.glb')

  useFrame(({clock})=>{
    // group.current.rotation.y = clock.getElapsedTime();
  })

  useFrame((state,delta)=>{
    // console.log(state);
    // state.camera.lookAt(new Vector3(0,0,0));
    // console.log(delta);
  })

  useEffect(()=>{
    group.current.rotation.y = 90;
    group.current.position.x = 0;
    group.current.position.y = 0;
    group.current.position.z = 0;
  },[])

  return (
      <group ref={group} {...props} dispose={null}>
        <mesh geometry={nodes.RainyCloud.geometry} material={materials.Cloud} position={[0, -0.45, -0.06]} scale={0.53} />
        <mesh geometry={nodes.RainyRainDrop.geometry} material={materials.Rain} position={[0, -2.11, 1.08]} />
      </group>
  )
}
