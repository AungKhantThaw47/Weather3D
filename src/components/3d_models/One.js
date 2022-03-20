import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

export default function()
{
    const mesh = useRef();
    useFrame(({clock})=>{
        mesh.current.rotation.x = clock.getElapsedTime();
    })
    return(
        <mesh ref={mesh}>
            <boxGeometry></boxGeometry>
        </mesh>
    )
}