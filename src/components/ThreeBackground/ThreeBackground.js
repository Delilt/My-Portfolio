import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as random from 'maath/random/dist/maath-random.esm';
import { useTheme } from '../../contexts/ThemeContext';
import './ThreeBackground.scss';

function Stars(props) {
  const ref = useRef();
  const { isDarkMode } = useTheme();
  const [sphere] = useMemo(() => [random.inSphere(new Float32Array(5000), { radius: 1.5 })], []);

  useFrame((state, delta) => {
    ref.current.rotation.x -= delta / 10;
    ref.current.rotation.y -= delta / 15;
    
    // Tema göre parlaklık animasyonu
    const intensity = isDarkMode ? 0.8 + Math.sin(state.clock.elapsedTime * 2) * 0.2 : 0.6;
    ref.current.material.opacity = intensity;
  });

  const starColor = isDarkMode ? "#8b5cf6" : "#6366f1";

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled={false} {...props}>
        <PointMaterial
          transparent
          color={starColor}
          size={isDarkMode ? 0.006 : 0.004}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
}

function FloatingGeometry() {
  const meshRef = useRef();
  const { isDarkMode } = useTheme();

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    meshRef.current.rotation.x = Math.cos(t / 4) / 2;
    meshRef.current.rotation.y = Math.sin(t / 4) / 2;
    meshRef.current.position.y = Math.sin(t / 1.5) / 10;
    
    // Tema göre renk değişimi
    meshRef.current.material.emissiveIntensity = isDarkMode ? 0.3 : 0.1;
  });

  const geometryColor = isDarkMode ? "#a855f7" : "#8b5cf6";

  return (
    <mesh ref={meshRef} position={[2, 0, 0]}>
      <icosahedronGeometry args={[1, 1]} />
      <meshStandardMaterial
        color={geometryColor}
        transparent
        opacity={isDarkMode ? 0.8 : 0.6}
        wireframe
        emissive={geometryColor}
        emissiveIntensity={isDarkMode ? 0.3 : 0.1}
      />
    </mesh>
  );
}

function AnimatedSphere() {
  const meshRef = useRef();
  const { isDarkMode } = useTheme();

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    meshRef.current.rotation.x = t / 2;
    meshRef.current.rotation.y = t / 3;
    meshRef.current.position.x = Math.sin(t / 2) * 2;
    
    // Tema göre parlaklık
    meshRef.current.material.emissiveIntensity = isDarkMode ? 0.2 : 0.05;
  });

  const sphereColor = isDarkMode ? "#22d3ee" : "#06b6d4";

  return (
    <mesh ref={meshRef} position={[-2, 1, 0]}>
      <sphereGeometry args={[0.5, 32, 32]} />
      <meshStandardMaterial
        color={sphereColor}
        transparent
        opacity={isDarkMode ? 0.9 : 0.7}
        wireframe
        emissive={sphereColor}
        emissiveIntensity={isDarkMode ? 0.2 : 0.05}
      />
    </mesh>
  );
}

const ThreeBackground = () => {
  return (
    <div className="three-background">
      <Canvas camera={{ position: [0, 0, 1] }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <Stars />
        <FloatingGeometry />
        <AnimatedSphere />
      </Canvas>
    </div>
  );
};

export default ThreeBackground; 