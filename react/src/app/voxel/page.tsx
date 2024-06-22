"use client";

import { Canvas } from "@react-three/fiber";
import { useRef, useState } from "react";
import { Mesh, Vector3 } from "three";

const handlePointerOver = () => {
  document.body.style.cursor = 'pointer';
};

const handlePointerOut = () => {
  document.body.style.cursor = 'default';
};

const initialVoxelData = [
  { x: 0, y: 0, z: 0, color: "#ff0000" },
  { x: 1, y: 0, z: 0, color: "#00ff00" },
  { x: 0, y: 1, z: 0, color: "#0000ff" },
  { x: 1, y: 1, z: 0, color: "#ffff00" },
];

interface VoxelComponentProps {
  position: Vector3;
  color: string;
  onClick: (e: any, position: number[]) => void;

}

function Voxel({ position, color, onClick }: VoxelComponentProps) {
  const meshRef = useRef<Mesh>(null);

  return (
    <mesh
      ref={meshRef}
      position={position}
      onClick={(e) => onClick(e, position as any as number[])}
      onPointerOver={handlePointerOver}
      onPointerOut={handlePointerOut}
    >
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={color} />
    </mesh>
  );
}

interface VoxelModelProps {
  data: { x: number, y: number, z: number, color: string }[];
  addVoxel: (e: any, position: number[]) => void;
}

function VoxelModel({ data, addVoxel }: VoxelModelProps) {
  return (
    <>
      {data.map((voxel, index) => (
        <Voxel
          key={index}
          position={[voxel.x, voxel.y, voxel.z] as any as Vector3}
          color={voxel.color}
          onClick={addVoxel}
        />
      ))}
    </>
  );
}

export default function Page() {
  const [voxels, setVoxels] = useState(initialVoxelData);

  const addVoxel = (e, position) => {
    e.stopPropagation();
    
    const normal = e.face.normal.clone();
    const newVoxel = {
      x: position[0] + normal.x,
      y: position[1] + normal.y,
      z: position[2] + normal.z,
      color: "#ffffff", // Default color for new voxel
    };
    
    setVoxels([...voxels, newVoxel]);
  };

  return (
    <main className="h-screen w-screen bg-slate-300">
      <Canvas
        camera={{
          position: [-6, 7, 7],
          fov: 30,
        }}
      >
        <ambientLight intensity={0.1} />
        <directionalLight color="red" position={[0, 2, 4]} />
        <VoxelModel data={voxels} addVoxel={addVoxel} />
      </Canvas>
    </main>
  );
}
