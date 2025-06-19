import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { PerspectiveCamera, Float, OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

type SectionSceneProps = {
  type: 'gypsum' | 'pvc' | 'grid' | 'services';
  position?: [number, number, number];
  className?: string;
};

// Gypsum Ceiling Scene
function GypsumModel() {
  const group = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    if (group.current) {
      group.current.rotation.y = Math.sin(state.clock.getElapsedTime() * 0.2) * 0.2;
      group.current.rotation.x = Math.sin(state.clock.getElapsedTime() * 0.1) * 0.1;
    }
  });

  return (
    <group ref={group}>
      {/* Gypsum ceiling design with curves */}
      <mesh position={[0, 0, 0]} receiveShadow castShadow>
        <planeGeometry args={[4, 4, 32, 32]} />
        <meshStandardMaterial 
          color="#f5f5f5" 
          metalness={0.1} 
          roughness={0.2}
          side={THREE.DoubleSide}
        />
      </mesh>
      
      {/* Decorative elements */}
      <mesh position={[0, 0.1, 0]} receiveShadow castShadow>
        <ringGeometry args={[1, 1.4, 32]} />
        <meshStandardMaterial 
          color="#ffffff" 
          metalness={0.2}
          roughness={0.1}
        />
      </mesh>
      
      <mesh position={[0, 0.15, 0]} receiveShadow castShadow>
        <ringGeometry args={[0.6, 0.8, 32]} />
        <meshStandardMaterial 
          color="#f0f0f0" 
          metalness={0.2}
          roughness={0.1}
        />
      </mesh>
    </group>
  );
}

// PVC Ceiling Scene
function PVCModel() {
  const group = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    if (group.current) {
      group.current.rotation.y = Math.sin(state.clock.getElapsedTime() * 0.2) * 0.2;
      group.current.rotation.x = Math.sin(state.clock.getElapsedTime() * 0.1) * 0.1;
    }
  });

  return (
    <group ref={group}>
      {/* PVC panel base */}
      <mesh position={[0, 0, 0]} receiveShadow castShadow>
        <boxGeometry args={[4, 0.1, 4]} />
        <meshStandardMaterial 
          color="#e8e8e8" 
          metalness={0.3} 
          roughness={0.1}
        />
      </mesh>
      
      {/* PVC strips */}
      {Array.from({ length: 8 }).map((_, i) => (
        <mesh 
          key={i} 
          position={[-1.75 + i * 0.5, 0.1, 0]} 
          receiveShadow 
          castShadow
        >
          <boxGeometry args={[0.1, 0.1, 4]} />
          <meshStandardMaterial 
            color="#ffffff" 
            metalness={0.2}
            roughness={0.1}
          />
        </mesh>
      ))}
    </group>
  );
}

// Grid Ceiling Scene
function GridModel() {
  const group = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    if (group.current) {
      group.current.rotation.y = Math.sin(state.clock.getElapsedTime() * 0.2) * 0.2;
      group.current.rotation.x = Math.sin(state.clock.getElapsedTime() * 0.1) * 0.1;
    }
  });

  return (
    <group ref={group}>
      {/* Grid base */}
      <mesh position={[0, 0, 0]} receiveShadow castShadow>
        <boxGeometry args={[4, 0.05, 4]} />
        <meshStandardMaterial 
          color="#f0f0f0" 
          metalness={0.4} 
          roughness={0.2}
        />
      </mesh>
      
      {/* Grid lines - horizontal */}
      {Array.from({ length: 5 }).map((_, i) => (
        <mesh 
          key={`h-${i}`} 
          position={[0, 0.05, -2 + i]} 
          receiveShadow 
          castShadow
        >
          <boxGeometry args={[4, 0.1, 0.05]} />
          <meshStandardMaterial 
            color="#d0d0d0" 
            metalness={0.5}
            roughness={0.2}
          />
        </mesh>
      ))}
      
      {/* Grid lines - vertical */}
      {Array.from({ length: 5 }).map((_, i) => (
        <mesh 
          key={`v-${i}`} 
          position={[-2 + i, 0.05, 0]} 
          receiveShadow 
          castShadow
        >
          <boxGeometry args={[0.05, 0.1, 4]} />
          <meshStandardMaterial 
            color="#d0d0d0" 
            metalness={0.5}
            roughness={0.2}
          />
        </mesh>
      ))}
    </group>
  );
}

// Services Model
function ServicesModel() {
  const group = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    if (group.current) {
      group.current.rotation.y = state.clock.getElapsedTime() * 0.2;
    }
  });

  return (
    <group ref={group}>
      {/* Base */}
      <mesh position={[0, -0.5, 0]} receiveShadow castShadow>
        <boxGeometry args={[2, 0.2, 2]} />
        <meshStandardMaterial 
          color="#2a2a2a" 
          metalness={0.5} 
          roughness={0.2}
        />
      </mesh>
      
      {/* Ceiling panels */}
      <Float speed={2} rotationIntensity={0.2} floatIntensity={0.5}>
        <mesh position={[0, 0, 0]} receiveShadow castShadow>
          <boxGeometry args={[1.5, 0.05, 1.5]} />
          <meshStandardMaterial 
            color="#ffffff" 
            metalness={0.6} 
            roughness={0.2} 
          />
        </mesh>
      </Float>
      
      <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.3}>
        <mesh position={[0.4, 0.2, 0.4]} receiveShadow castShadow>
          <boxGeometry args={[0.8, 0.05, 0.8]} />
          <meshStandardMaterial 
            color="#f0f0f0" 
            metalness={0.6} 
            roughness={0.2} 
          />
        </mesh>
      </Float>
      
      <Float speed={2.2} rotationIntensity={0.2} floatIntensity={0.4}>
        <mesh position={[-0.3, 0.4, -0.3]} receiveShadow castShadow>
          <boxGeometry args={[0.6, 0.05, 0.6]} />
          <meshStandardMaterial 
            color="#e0e0e0" 
            metalness={0.6} 
            roughness={0.2} 
          />
        </mesh>
      </Float>
    </group>
  );
}

export default function SectionScene({ type, className = '' }: SectionSceneProps) {
  let Model;
  
  switch (type) {
    case 'gypsum':
      Model = GypsumModel;
      break;
    case 'pvc':
      Model = PVCModel;
      break;
    case 'grid':
      Model = GridModel;
      break;
    case 'services':
    default:
      Model = ServicesModel;
  }
  
  return (
    <div className={`w-full h-[200px] sm:h-[300px] ${className}`}>
      <Canvas shadows>
        <ambientLight intensity={0.5} />
        <spotLight 
          position={[10, 10, 10]} 
          angle={0.15} 
          penumbra={1} 
          intensity={1} 
          castShadow 
        />
        <PerspectiveCamera makeDefault position={[0, 2, 5]} />
        <Model />
        <OrbitControls 
          enableZoom={false} 
          enablePan={false} 
          minPolarAngle={Math.PI / 4} 
          maxPolarAngle={Math.PI / 2.2} 
        />
      </Canvas>
    </div>
  );
}
