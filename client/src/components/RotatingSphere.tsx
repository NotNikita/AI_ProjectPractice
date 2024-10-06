'use client';

import React, {useRef, useEffect, CSSProperties} from 'react';
import * as THREE from 'three';

const sphereStyles: CSSProperties = {
  width: 100,
  height: 100,
  overflow: 'hidden',
  position: 'fixed',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};

const RotatingSphere: React.FC = () => {
  const mountRef = useRef<HTMLDivElement | null>(null);
  let mesh: THREE.Mesh,
    mesh2: THREE.Mesh,
    camera: THREE.OrthographicCamera,
    scene: THREE.Scene,
    renderer: THREE.WebGLRenderer;

  useEffect(() => {
    // Initialize Three.js scene
    const width = 100;
    const height = 100;

    // Renderer
    renderer = new THREE.WebGLRenderer({alpha: true});
    renderer.setSize(width, height);
    renderer.setPixelRatio(2);
    if (mountRef.current) {
      mountRef.current.appendChild(renderer.domElement);
    }

    // Scene & Camera
    scene = new THREE.Scene();
    camera = new THREE.OrthographicCamera(-10, 10, 10, -10, -10, 10);

    // Load Textures
    const texture = new THREE.TextureLoader().load('https://s33.postimg.cc/zaty10vot/out.png');
    const texture2 = new THREE.TextureLoader().load('https://s33.postimg.cc/x69kzy9hp/middle.png');

    const material = new THREE.MeshBasicMaterial({map: texture, transparent: true});
    const material2 = new THREE.MeshBasicMaterial({map: texture2, transparent: true});

    // Geometry
    const geometry = new THREE.SphereGeometry(9.98, 50, 50);
    mesh = new THREE.Mesh(geometry, material);

    const geometry2 = new THREE.SphereGeometry(10, 50, 50);
    mesh2 = new THREE.Mesh(geometry2, material2);

    // Adjust initial rotation
    mesh.rotation.y = -Math.PI / 2;
    mesh2.rotation.y = -Math.PI / 2;

    // Add to Scene
    scene.add(mesh);
    scene.add(mesh2);

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      mesh2.rotation.y -= 0.0009;
      mesh.rotation.y += 0.0009;
      renderer.render(scene, camera);
    };

    animate();

    // Mouse move and touch move event handlers (native events)
    const handleMouseMove = (e: MouseEvent) => {
      const pageX = e.pageX;
      const pageY = e.pageY;

      const pos = (((360 * (pageX - window.innerWidth / 2)) / window.innerWidth) * (Math.PI / 180)) / 2 - Math.PI / 2;
      const pos2 = ((360 * (pageY - window.innerHeight / 8)) / window.innerHeight) * (Math.PI / 180) - Math.PI / 2;

      mesh2.rotation.y = -pos - Math.PI;
      mesh.rotation.y = pos;
      mesh2.rotation.x = pos2 / 10;
      mesh.rotation.x = pos2 / 10;
    };

    const handleTouchMove = (e: TouchEvent) => {
      const touch = e.touches[0]; // First touch point
      const pageX = touch.pageX;
      const pageY = touch.pageY;

      const pos = (((360 * (pageX - window.innerWidth / 2)) / window.innerWidth) * (Math.PI / 180)) / 2 - Math.PI / 2;
      const pos2 = ((360 * (pageY - window.innerHeight / 8)) / window.innerHeight) * (Math.PI / 180) - Math.PI / 2;

      mesh2.rotation.y = -pos - Math.PI;
      mesh.rotation.y = pos;
      mesh2.rotation.x = pos2 / 10;
      mesh.rotation.x = pos2 / 10;
    };

    // Attach the event listener to the window for full-screen interaction
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('touchmove', handleTouchMove);

    // Clean up on component unmount
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchmove', handleTouchMove);
      renderer.dispose();
      scene.clear();
    };
  }, []);

  return <div ref={mountRef} style={sphereStyles} />;
};

export default RotatingSphere;
