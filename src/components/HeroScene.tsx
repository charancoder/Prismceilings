import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { PerspectiveCamera, Float } from '@react-three/drei';
import * as THREE from 'three';

function CeilingPanel({ position, rotation, scale, color }) {
  const mesh = useRef();
  
  useFrame((state) => {
    mesh.current.rotation.x = Math.sin(state.clock.getElapsedTime() * 0.2) * 0.05;
    mesh.current.rotation.y = Math.sin(state.clock.getElapsedTime() * 0.1) * 0.05;
  });

  return (
    <Float speed={5} rotationIntensity={0.2} floatIntensity={0.5}>
      <mesh 
        ref={mesh}
        position={position}
        rotation={rotation}
        scale={scale}
      >
        <boxGeometry args={[1, 0.05, 1]} />
        <meshStandardMaterial color={color} metalness={0.6} roughness={0.2} />
      </mesh>
    </Float>
  );
}

function PrismLogo() {
  const group = useRef();
  
  useFrame((state) => {
    group.current.rotation.y = Math.sin(state.clock.getElapsedTime() * 0.3) * 0.2;
  });

  return (
    <group ref={group}>
      <CeilingPanel 
        position={[0, 0, 0]} 
        rotation={[0, 0, 0]} 
        scale={[2, 1, 2]} 
        color="DB8DD0" 
      />
      <CeilingPanel 
        position={[1.2, 0.2, 0]} 
        rotation={[0, 0.2, 0]} 
        scale={[1.5, 1, 1.5]} 
        color="DB8DD0" 
      />
      <CeilingPanel 
        position={[-1.2, 0.4, 0]} 
        rotation={[0, -0.2, 0]} 
        scale={[1.5, 1, 1.5]} 
        color="#d0d0d0" 
      />
      <CeilingPanel 
        position={[0, 0.6, 1]} 
        rotation={[0.1, 0, 0]} 
        scale={[1.8, 1, 1.3]} 
        color="#f0f0f0" 
      />
      <CeilingPanel 
        position={[0, 0.8, -1]} 
        rotation={[-0.1, 0, 0]} 
        scale={[1.8, 1, 1.3]} 
        color="#e8e8e8" 
      />
    </group>
  );
}

export default function HeroScene() {
  return (
    <div className="absolute right-10 bottom-20 w-[300px] h-[300px] md:w-[400px] md:h-[400px] z-10 opacity-80">
      <Canvas>
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} />
        <PerspectiveCamera makeDefault position={[0, 0, 5]} />
        <PrismLogo />
      </Canvas>
    </div>
  );
}
