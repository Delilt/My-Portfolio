import React, { useRef, useMemo, useState } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';
import { useTheme } from '../../contexts/ThemeContext';

function InteractiveParticleSystem({ count = 3000 }) {
  const mesh = useRef();
  const { mouse, viewport } = useThree();
  const { isDarkMode } = useTheme();
  const [hovered, setHovered] = useState(false);

  // Parçacık pozisyonları ve özelliklerini oluştur
  const [positions, colors] = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    

    for (let i = 0; i < count; i++) {
      // Pozisyonlar - küre şeklinde dağıtım
      const radius = Math.random() * 5 + 2;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);
      
      positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = radius * Math.cos(phi);

      // Renkler - tema göre
      const baseColor = isDarkMode ? 
        new THREE.Color(0.5 + Math.random() * 0.5, 0.3 + Math.random() * 0.7, 1) :
        new THREE.Color(0.2 + Math.random() * 0.8, 0.5 + Math.random() * 0.5, 1);
      
      colors[i * 3] = baseColor.r;
      colors[i * 3 + 1] = baseColor.g;
      colors[i * 3 + 2] = baseColor.b;
    }

    return [positions, colors];
  }, [count, isDarkMode]);

  useFrame((state) => {
    if (mesh.current) {
      const time = state.clock.getElapsedTime();
      
      // Fare etkileşimi
      const mouseX = (mouse.x * viewport.width) / 2;
      const mouseY = (mouse.y * viewport.height) / 2;
      
      // Parçacıkları güncelle
      const positions = mesh.current.geometry.attributes.position.array;
      const colors = mesh.current.geometry.attributes.color.array;
      
      for (let i = 0; i < count; i++) {
        const i3 = i * 3;
        
        // Orijinal pozisyon
        const originalX = positions[i3];
        const originalY = positions[i3 + 1];
        const originalZ = positions[i3 + 2];
        
        // Fare mesafesi
        const mouseDistance = Math.sqrt(
          Math.pow(originalX - mouseX, 2) + 
          Math.pow(originalY - mouseY, 2)
        );
        
        // Fare etkisi
        const mouseEffect = Math.max(0, 1 - mouseDistance / 3);
        
        // Dalga efekti
        const wave = Math.sin(time * 2 + originalX * 0.5) * 0.1;
        const wave2 = Math.cos(time * 1.5 + originalY * 0.3) * 0.1;
        
        // Pozisyon güncellemesi
        positions[i3] = originalX + wave + mouseEffect * (mouseX - originalX) * 0.1;
        positions[i3 + 1] = originalY + wave2 + mouseEffect * (mouseY - originalY) * 0.1;
        positions[i3 + 2] = originalZ + Math.sin(time + i * 0.01) * 0.2;
        
        // Renk animasyonu
        const colorIntensity = 0.5 + mouseEffect * 0.5 + Math.sin(time * 3 + i * 0.1) * 0.2;
        colors[i3] *= colorIntensity;
        colors[i3 + 1] *= colorIntensity;
        colors[i3 + 2] *= colorIntensity;
      }
      
      mesh.current.geometry.attributes.position.needsUpdate = true;
      mesh.current.geometry.attributes.color.needsUpdate = true;
      
      // Genel rotasyon
      mesh.current.rotation.x = time * 0.1;
      mesh.current.rotation.y = time * 0.15;
    }
  });

  return (
    <Points
      ref={mesh}
      positions={positions}
      colors={colors}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      <PointMaterial
        transparent
        size={hovered ? 0.008 : 0.005}
        sizeAttenuation={true}
        depthWrite={false}
        vertexColors
        blending={THREE.AdditiveBlending}
      />
    </Points>
  );
}

const InteractiveParticles = ({ className = "" }) => {
  return (
    <div className={`interactive-particles ${className}`}>
      <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <InteractiveParticleSystem />
      </Canvas>
    </div>
  );
};

export default InteractiveParticles; 
