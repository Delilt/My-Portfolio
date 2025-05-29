import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useTheme } from '../../contexts/ThemeContext';
import * as THREE from 'three';

function AnimatedWave({ width = 20, height = 20, segments = 50 }) {
  const meshRef = useRef();
  const { isDarkMode } = useTheme();

  // Mesh geometrisi oluştur
  const geometry = useMemo(() => {
    const geo = new THREE.PlaneGeometry(width, height, segments, segments);
    return geo;
  }, [width, height, segments]);

  // Vertex shader
  const vertexShader = `
    uniform float time;
    uniform float amplitude;
    varying vec2 vUv;
    varying float vElevation;
    
    void main() {
      vUv = uv;
      
      vec4 modelPosition = modelMatrix * vec4(position, 1.0);
      
      float elevation = sin(modelPosition.x * 0.3 + time) * 
                       sin(modelPosition.z * 0.2 + time * 0.5) * 
                       amplitude;
      
      elevation += sin(modelPosition.x * 0.5 + time * 2.0) * 
                   sin(modelPosition.z * 0.3 + time * 1.5) * 
                   amplitude * 0.5;
      
      modelPosition.y += elevation;
      vElevation = elevation;
      
      vec4 viewPosition = viewMatrix * modelPosition;
      vec4 projectedPosition = projectionMatrix * viewPosition;
      
      gl_Position = projectedPosition;
    }
  `;

  // Fragment shader
  const fragmentShader = `
    uniform float time;
    uniform vec3 color1;
    uniform vec3 color2;
    uniform vec3 color3;
    varying vec2 vUv;
    varying float vElevation;
    
    void main() {
      float mixStrength = (vElevation + 1.0) * 0.5;
      
      vec3 color = mix(color1, color2, mixStrength);
      color = mix(color, color3, sin(time + vUv.x * 10.0) * 0.5 + 0.5);
      
      float alpha = 0.6 + mixStrength * 0.4;
      
      gl_FragColor = vec4(color, alpha);
    }
  `;

  // Shader materyali
  const material = useMemo(() => {
    return new THREE.ShaderMaterial({
      vertexShader,
      fragmentShader,
      uniforms: {
        time: { value: 0 },
        amplitude: { value: 2.0 },
        color1: { value: new THREE.Color(isDarkMode ? '#8b5cf6' : '#6366f1') },
        color2: { value: new THREE.Color(isDarkMode ? '#06b6d4' : '#3b82f6') },
        color3: { value: new THREE.Color(isDarkMode ? '#f59e0b' : '#f97316') }
      },
      transparent: true,
      side: THREE.DoubleSide,
      wireframe: false
    });
  }, [isDarkMode, vertexShader, fragmentShader]);

  useFrame((state) => {
    if (meshRef.current && material.uniforms) {
      material.uniforms.time.value = state.clock.getElapsedTime();
      
      // Tema değişikliğinde renkleri güncelle
      material.uniforms.color1.value.set(isDarkMode ? '#8b5cf6' : '#6366f1');
      material.uniforms.color2.value.set(isDarkMode ? '#06b6d4' : '#3b82f6');
      material.uniforms.color3.value.set(isDarkMode ? '#f59e0b' : '#f97316');
      
      // Mesh rotasyonu
      meshRef.current.rotation.x = -Math.PI / 2 + Math.sin(state.clock.getElapsedTime() * 0.5) * 0.1;
      meshRef.current.rotation.z = state.clock.getElapsedTime() * 0.1;
    }
  });

  return (
    <mesh ref={meshRef} geometry={geometry} material={material} />
  );
}

function WaveScene() {
  return (
    <>
      <ambientLight intensity={0.3} />
      <directionalLight position={[5, 5, 5]} intensity={0.8} />
      <pointLight position={[0, 10, 0]} intensity={0.5} color="#8b5cf6" />
      
      <AnimatedWave />
      
      {/* Ek dalga katmanları */}
      <group position={[0, -1, 0]} rotation={[0, Math.PI / 4, 0]}>
        <AnimatedWave width={15} height={15} segments={40} />
      </group>
      
      <group position={[0, -2, 0]} rotation={[0, -Math.PI / 4, 0]}>
        <AnimatedWave width={10} height={10} segments={30} />
      </group>
    </>
  );
}

const WaveEffect = ({ className = "" }) => {
  return (
    <div className={`wave-effect ${className}`}>
      <Canvas camera={{ position: [0, 8, 12], fov: 60 }}>
        <WaveScene />
      </Canvas>
    </div>
  );
};

export default WaveEffect; 