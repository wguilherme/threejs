"use client";

import { Canvas } from "@react-three/fiber";
import { useState } from "react";

export default function Home() {
  const [active, setActive] = useState(false)
  return (
    <main className="h-screen w-screen bg-slate-300">
      <Canvas
        camera={{
          position: [-6, 7, 7],
          fov: 15
        }}
      >
        <ambientLight intensity={0.1} />
        <directionalLight color="red" position={[0, 2, 4]} />
        <mesh
            onClick={(e) => console.log('click')}
            onContextMenu={(e) => console.log('context menu')}
            onDoubleClick={(e) => console.log('double click')}
            onWheel={(e) => console.log('wheel spins')}
            onPointerUp={(e) => console.log('up')}
            onPointerDown={(e) => console.log('down')}
            onPointerOver={(e) => console.log('over')}
            onPointerOut={(e) => console.log('out')}
            onPointerEnter={(e) => console.log('enter')}
            onPointerLeave={(e) => console.log('leave')}
            onPointerMove={(e) => console.log('move')}
            onPointerMissed={() => console.log('missed')}
            onUpdate={(self) => console.log('props have been updated')}
        >
          <boxGeometry />
          <meshStandardMaterial />
        </mesh>
      </Canvas> 
    </main>
  );
}
