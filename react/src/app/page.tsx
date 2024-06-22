"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useRef, useState } from "react";
import { Mesh } from "three";
import { useSpring, animated } from '@react-spring/three'

const handlePointerOver = () => {
  document.body.style.cursor = 'pointer';
};

const handlePointerOut = () => {
  document.body.style.cursor = 'default';
};

export function RotatingCubeMesh() {
  const [active, setActive] = useState(false);
  const myMesh = useRef<Mesh>(null);


  useFrame(({ clock }) => {
    if (myMesh.current) {
      myMesh.current.rotation.x = clock.getElapsedTime();
    }
  });

  return (
    <mesh
      position={[0, -1, 0]}
      ref={myMesh}
      scale={active ? 1.5 : 1}
      onClick={() => setActive(!active)}
      onContextMenu={(e) => console.log('context menu')}
      onDoubleClick={(e) => console.log('double click')}
      onWheel={(e) => console.log('wheel spins')}
      onPointerUp={(e) => console.log('up')}
      onPointerDown={(e) => console.log('down')}
      onPointerOver={handlePointerOver}
      onPointerOut={handlePointerOut}
      onPointerEnter={(e) => console.log('enter')}
      onPointerLeave={(e) => console.log('leave')}
      onPointerMove={(e) => console.log('move')}
      onPointerMissed={() => console.log('missed')}
      onUpdate={(self) => console.log('props have been updated')}
    >
      <boxGeometry/>
      <meshStandardMaterial />
    </mesh>
  );
}

export function RotatingCubeMeshSpring() {
  const [active, setActive] = useState(false);
  const myMesh = useRef<Mesh>(null);
  const { scale } = useSpring({ scale: active ? 1.5 : 1 })

  useFrame(({ clock }) => {
    if (myMesh.current) {
      myMesh.current.rotation.x = clock.getElapsedTime();
    }
  });

  return (
    <animated.mesh 
      scale={scale} onClick={() => setActive(!active)} 
      ref={myMesh} 
      position={[0, 1, 0]}
      onPointerOver={handlePointerOver}
      onPointerOut={handlePointerOut}
    >
      <boxGeometry />
      <meshPhongMaterial color="royalblue" />
    </animated.mesh>
  );
}

export default function Home() {
  return (
    <main className="h-screen w-screen bg-slate-300">
      <Canvas
        camera={{
          position: [-6, 7, 7],
          fov: 20,
        }}
      >

        <ambientLight intensity={0.1} />
        <directionalLight color="red" position={[0, 2, 4]} />
        <RotatingCubeMesh/>
        <RotatingCubeMeshSpring />
      </Canvas>
    </main>
  );
}
