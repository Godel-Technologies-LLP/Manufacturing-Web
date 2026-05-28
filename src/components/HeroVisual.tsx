"use client";

import React, { useRef, useEffect } from "react";
import * as THREE from "three";

export default function HeroVisual() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    const width = container.clientWidth;
    const height = container.clientHeight || 500;

    // 1. Scene Setup
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0xffffff, 0.015);

    // 2. Camera Setup
    const camera = new THREE.PerspectiveCamera(60, width / height, 0.1, 1000);
    camera.position.set(0, 5, 12);
    camera.lookAt(0, 0, 0);

    // 3. Renderer Setup
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // 4. Objects Setup

    // A. Factory Floor Grid
    const gridHelper = new THREE.GridHelper(30, 30, 0x0a0a0a, 0xd4d4d4);
    gridHelper.position.y = -2;
    // Set material opacity for grid lines
    if (Array.isArray(gridHelper.material)) {
      gridHelper.material.forEach((mat) => {
        mat.opacity = 0.25;
        mat.transparent = true;
      });
    } else {
      gridHelper.material.opacity = 0.25;
      gridHelper.material.transparent = true;
    }
    scene.add(gridHelper);

    // B. Complex Cylinder Wireframe (Mechanical Core)
    const geometry = new THREE.CylinderGeometry(3.5, 3.5, 5, 24, 6, true);
    const wireframe = new THREE.WireframeGeometry(geometry);
    const lineMat = new THREE.LineBasicMaterial({
      color: 0x9a9a9a,
      linewidth: 1,
      transparent: true,
      opacity: 0.35,
    });
    const cylinderLine = new THREE.LineSegments(wireframe, lineMat);
    cylinderLine.position.y = 1;
    scene.add(cylinderLine);

    // C. Outer Floating Orbit Ring
    const ringGeom = new THREE.RingGeometry(4.8, 5, 64);
    const ringWire = new THREE.WireframeGeometry(ringGeom);
    const ringMat = new THREE.LineBasicMaterial({
      color: 0x0a0a0a,
      transparent: true,
      opacity: 0.15,
    });
    const ringLines = new THREE.LineSegments(ringWire, ringMat);
    ringLines.rotation.x = Math.PI / 2;
    ringLines.position.y = 1;
    scene.add(ringLines);

    // D. Moving "Sensor Packets" (Particles)
    const particleCount = 120;
    const particleGeometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const speeds = new Float32Array(particleCount);

    for (let i = 0; i < particleCount; i++) {
      // Position particles inside/around the cylinder
      const angle = Math.random() * Math.PI * 2;
      const radius = 1.5 + Math.random() * 2.2;
      positions[i * 3] = Math.cos(angle) * radius;
      positions[i * 3 + 1] = -2 + Math.random() * 6; // height
      positions[i * 3 + 2] = Math.sin(angle) * radius;
      speeds[i] = 0.01 + Math.random() * 0.02; // speed
    }

    particleGeometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    
    // Minimal circular particles
    const particleMaterial = new THREE.PointsMaterial({
      color: 0x0a0a0a,
      size: 0.08,
      transparent: true,
      opacity: 0.6,
    });

    const particles = new THREE.Points(particleGeometry, particleMaterial);
    scene.add(particles);

    // 5. Interactive Mouse Parallax
    let targetX = 0;
    let targetY = 0;
    let mouseX = 0;
    let mouseY = 0;

    const handleMouseMove = (event: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      mouseX = ((event.clientX - rect.left) / width) * 2 - 1;
      mouseY = -((event.clientY - rect.top) / height) * 2 + 1;
    };

    window.addEventListener("mousemove", handleMouseMove);

    // 6. Responsive Resize
    const handleResize = () => {
      if (!container) return;
      const newWidth = container.clientWidth;
      const newHeight = container.clientHeight || 500;
      
      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      
      renderer.setSize(newWidth, newHeight);
    };

    window.addEventListener("resize", handleResize);

    // 7. Scroll interaction (slow rotation modifier)
    let scrollY = 0;
    const handleScroll = () => {
      scrollY = window.scrollY;
    };
    window.addEventListener("scroll", handleScroll);

    // 8. Animation Loop
    let animationFrameId: number;
    const clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      const elapsedTime = clock.getElapsedTime();

      // Smooth mouse lerping for camera
      targetX += (mouseX - targetX) * 0.05;
      targetY += (mouseY - targetY) * 0.05;

      camera.position.x = targetX * 3.5;
      camera.position.y = 5 + targetY * 2.5;
      camera.lookAt(0, 0.5, 0);

      // Rotate models
      const rotationSpeed = 0.08 + (scrollY * 0.0003); // scroll accelerates rotation slightly
      cylinderLine.rotation.y = elapsedTime * rotationSpeed;
      cylinderLine.rotation.x = Math.sin(elapsedTime * 0.1) * 0.15;

      ringLines.rotation.z = -elapsedTime * (rotationSpeed * 0.5);
      ringLines.position.y = 1 + Math.sin(elapsedTime * 0.5) * 0.25; // hovering ring effect

      // Update and animate particle heights (upward data flow)
      const positionsAttr = particles.geometry.attributes.position as THREE.BufferAttribute;
      const array = positionsAttr.array as Float32Array;

      for (let i = 0; i < particleCount; i++) {
        array[i * 3 + 1] += speeds[i]; // move up

        // Reset particle to bottom when escaping the top
        if (array[i * 3 + 1] > 4) {
          array[i * 3 + 1] = -2;
          // Re-randomize horizontal distribution slightly
          const angle = Math.random() * Math.PI * 2;
          const radius = 1.5 + Math.random() * 2.2;
          array[i * 3] = Math.cos(angle) * radius;
          array[i * 3 + 2] = Math.sin(angle) * radius;
        }
      }
      positionsAttr.needsUpdate = true;

      renderer.render(scene, camera);
    };

    animate();

    // 9. Cleanup & Garbage Collection
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
      
      if (container && renderer.domElement.parentNode === container) {
        container.removeChild(renderer.domElement);
      }

      // Dispose resources
      geometry.dispose();
      wireframe.dispose();
      lineMat.dispose();
      
      ringGeom.dispose();
      ringWire.dispose();
      ringMat.dispose();

      particleGeometry.dispose();
      particleMaterial.dispose();
      
      renderer.dispose();
    };
  }, []);

  return (
    <div 
      ref={containerRef} 
      className="relative w-full h-[350px] sm:h-[450px] md:h-[600px] overflow-hidden rounded-2xl flex items-center justify-center bg-gradient-to-tr from-neutral-50 via-white to-neutral-50/50 border border-wireframe/40 select-none shadow-[inset_0_0_40px_rgba(0,0,0,0.015)]"
    >
      {/* Decorative Minimal Corner Markers representing technical draft grid */}
      <div className="absolute top-4 left-4 w-3.5 h-3.5 border-t border-l border-nearblack/20" />
      <div className="absolute top-4 right-4 w-3.5 h-3.5 border-t border-r border-nearblack/20" />
      <div className="absolute bottom-4 left-4 w-3.5 h-3.5 border-b border-l border-nearblack/20" />
      <div className="absolute bottom-4 right-4 w-3.5 h-3.5 border-b border-r border-nearblack/20" />
      
      {/* Small design coordinates info label */}
      <div className="absolute bottom-4 left-10 flex gap-4 text-[9px] font-mono text-mutedlabel tracking-wider uppercase select-none pointer-events-none">
        <span>G-NODE // GRID_SYS.01</span>
        <span className="hidden sm:inline">SCALE: 1:1.0e-3</span>
      </div>
      
      <div className="absolute top-4 right-10 flex items-center gap-1.5 text-[9px] font-mono text-mutedlabel tracking-wider uppercase select-none pointer-events-none">
        <span className="w-1.5 h-1.5 bg-nearblack rounded-full animate-ping" />
        <span>REAL_TIME_FEED</span>
      </div>
    </div>
  );
}
