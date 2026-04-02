'use client';

import { useMemo, useRef, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

function NetworkNodes() {
  const groupRef = useRef<THREE.Group>(null);
  const [hovered, setHovered] = useState(false);
  const mouse = useRef({ x: 0, y: 0 });

  // Handle client-side mouse movement for parallax effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouse.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouse.current.y = -(e.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Generate random points on a sphere + lines connecting close points
  const { positions, linePositions } = useMemo(() => {
    const pointCount = 150;
    const positions = new Float32Array(pointCount * 3);
    const p3 = new THREE.Vector3();
    const pts: THREE.Vector3[] = [];

    // Distribute points in a rough sphere
    for (let i = 0; i < pointCount; i++) {
      const radius = 1.5 + Math.random() * 0.8;
      const theta = 2 * Math.PI * Math.random();
      const phi = Math.acos(2 * Math.random() - 1);
      
      const x = radius * Math.sin(phi) * Math.cos(theta);
      const y = radius * Math.sin(phi) * Math.sin(theta);
      const z = radius * Math.cos(phi);
      
      positions[i * 3] = x;
      positions[i * 3 + 1] = y;
      positions[i * 3 + 2] = z;
      
      pts.push(new THREE.Vector3(x, y, z));
    }

    // Connect points that are close
    const maxDist = 0.8;
    const linePts: number[] = [];
    for (let i = 0; i < pts.length; i++) {
      for (let j = i + 1; j < pts.length; j++) {
        const dist = pts[i].distanceTo(pts[j]);
        if (dist < maxDist) {
          linePts.push(pts[i].x, pts[i].y, pts[i].z);
          linePts.push(pts[j].x, pts[j].y, pts[j].z);
        }
      }
    }

    return { 
      positions, 
      linePositions: new Float32Array(linePts) 
    };
  }, []);

  // Animation loop
  useFrame((state, delta) => {
    if (groupRef.current) {
      // Slow constant rotation
      groupRef.current.rotation.y += delta * 0.05;
      groupRef.current.rotation.x += delta * 0.02;

      // Parallax target rotation based on mouse
      const targetX = mouse.current.y * 0.5;
      const targetY = mouse.current.x * 0.5;
      
      // Smooth interpolation towards mouse
      groupRef.current.rotation.x += (targetX - groupRef.current.rotation.x) * 0.05;
      groupRef.current.rotation.y += (targetY - groupRef.current.rotation.y) * 0.05;
      
      // Pulse scale softly on hover
      const targetScale = hovered ? 1.05 : 1;
      groupRef.current.scale.lerp(new THREE.Vector3(targetScale, targetScale, targetScale), 0.1);
    }
  });

  return (
    <group 
      ref={groupRef}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      <Points positions={positions} stride={3}>
        <PointMaterial
          transparent
          color="#a78bfa" /* Tailwind accent */
          size={0.05}
          sizeAttenuation={true}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </Points>
      <lineSegments>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={linePositions.length / 3}
            array={linePositions}
            itemSize={3}
          />
        </bufferGeometry>
        <lineBasicMaterial
          color="#8b5cf6"
          transparent
          opacity={0.15}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </lineSegments>
    </group>
  );
}

export default function NeuralNetwork3D() {
  const [mounted, setMounted] = useState(false);
  
  // Only render on client to avoid hydration mismatch and window errs
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <div className="w-full h-full opacity-0" />;

  return (
    <div className="w-full h-full relative" style={{ pointerEvents: 'none' }}>
      <Canvas 
        camera={{ position: [0, 0, 4.5], fov: 45 }}
        style={{ pointerEvents: 'auto' }} // Allow hover interactions on canvas only
      >
        <ambientLight intensity={0.5} />
        <NetworkNodes />
      </Canvas>
    </div>
  );
}
