import React, { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useTheme } from '../../contexts/ThemeContext';
import * as THREE from 'three';

function AnimatedShape({ geometry, position, color, speed = 1, scale = 1 }) {
  const meshRef = useRef();
  const [hovered, setHovered] = useState(false);
  const { isDarkMode } = useTheme();

  useFrame((state) => {
    if (meshRef.current) {
      const time = state.clock.getElapsedTime();
      
      // Rotasyon animasyonu
      meshRef.current.rotation.x = time * speed * 0.5;
      meshRef.current.rotation.y = time * speed * 0.3;
      meshRef.current.rotation.z = time * speed * 0.2;
      
      // Yüzen hareket
      meshRef.current.position.y = position[1] + Math.sin(time * speed) * 0.5;
      meshRef.current.position.x = position[0] + Math.cos(time * speed * 0.7) * 0.3;
      
      // Hover efekti
      const targetScale = hovered ? scale * 1.2 : scale;
      meshRef.current.scale.lerp(new THREE.Vector3(targetScale, targetScale, targetScale), 0.1);
    }
  });

  const shapeColor = isDarkMode ? 
    new THREE.Color(color).multiplyScalar(1.2) : 
    new THREE.Color(color).multiplyScalar(0.8);

  return (
    <mesh
      ref={meshRef}
      position={position}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      {geometry}
      <meshStandardMaterial
        color={shapeColor}
        transparent
        opacity={hovered ? 0.9 : 0.7}
        wireframe={!hovered}
        emissive={shapeColor}
        emissiveIntensity={hovered ? 0.3 : 0.1}
      />
    </mesh>
  );
}

function GeometryScene() {
  const shapes = [
    {
      geometry: <icosahedronGeometry args={[1, 1]} />,
      position: [-3, 0, 0],
      color: '#8b5cf6',
      speed: 1,
      scale: 0.8
    },
    {
      geometry: <octahedronGeometry args={[1.2]} />,
      position: [3, 1, -1],
      color: '#06b6d4',
      speed: 0.8,
      scale: 0.9
    },
    {
      geometry: <tetrahedronGeometry args={[1.5]} />,
      position: [0, -2, 1],
      color: '#f59e0b',
      speed: 1.2,
      scale: 0.7
    },
    {
      geometry: <dodecahedronGeometry args={[1]} />,
      position: [-2, 2, -2],
      color: '#ef4444',
      speed: 0.9,
      scale: 0.6
    },
    {
      geometry: <torusGeometry args={[1, 0.4, 16, 100]} />,
      position: [2, -1, 2],
      color: '#10b981',
      speed: 1.1,
      scale: 0.8
    }
  ];

  return (
    <>
      <ambientLight intensity={0.4} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#8b5cf6" />
      
      {shapes.map((shape, index) => (
        <AnimatedShape
          key={index}
          geometry={shape.geometry}
          position={shape.position}
          color={shape.color}
          speed={shape.speed}
          scale={shape.scale}
        />
      ))}
    </>
  );
}

const FloatingGeometry = ({ className = "" }) => {
  return (
    <div className={`floating-geometry ${className}`}>
      <Canvas camera={{ position: [0, 0, 8], fov: 60 }}>
        <GeometryScene />
      </Canvas>
    </div>
  );
};

export default FloatingGeometry; 