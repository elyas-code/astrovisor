const plotExoplanetData = () => {
  try {
    // Example mock data for star systems with x, y, z coordinates
    const mockCoordinates = [
      { name: 'PlanetA', x: Math.random() * 50 - 25, y: Math.random() * 50 - 25, z: Math.random() * 50 - 25 },
      { name: 'PlanetB', x: Math.random() * 50 - 25, y: Math.random() * 50 - 25, z: Math.random() * 50 - 25 },
      { name: 'PlanetC', x: Math.random() * 50 - 25, y: Math.random() * 50 - 25, z: Math.random() * 50 - 25 },
      { name: 'PlanetD', x: Math.random() * 50 - 25, y: Math.random() * 50 - 25, z: Math.random() * 50 - 25 },
      { name: 'PlanetD', x: Math.random() * 50 - 25, y: Math.random() * 50 - 25, z: Math.random() * 50 - 25 },
      { name: 'PlanetD', x: Math.random() * 50 - 25, y: Math.random() * 50 - 25, z: Math.random() * 50 - 25 },
      { name: 'PlanetD', x: Math.random() * 50 - 25, y: Math.random() * 50 - 25, z: Math.random() * 50 - 25 },
      { name: 'PlanetD', x: Math.random() * 50 - 25, y: Math.random() * 50 - 25, z: Math.random() * 50 - 25 },
      { name: 'PlanetD', x: Math.random() * 50 - 25, y: Math.random() * 50 - 25, z: Math.random() * 50 - 25 },
      { name: 'PlanetD', x: Math.random() * 50 - 25, y: Math.random() * 50 - 25, z: Math.random() * 50 - 25 },
      { name: 'PlanetD', x: Math.random() * 50 - 25, y: Math.random() * 50 - 25, z: Math.random() * 50 - 25 },
      { name: 'PlanetD', x: Math.random() * 50 - 25, y: Math.random() * 50 - 25, z: Math.random() * 50 - 25 },
      { name: 'PlanetD', x: Math.random() * 50 - 25, y: Math.random() * 50 - 25, z: Math.random() * 50 - 25 },
      { name: 'PlanetD', x: Math.random() * 50 - 25, y: Math.random() * 50 - 25, z: Math.random() * 50 - 25 },
      { name: 'PlanetD', x: Math.random() * 50 - 25, y: Math.random() * 50 - 25, z: Math.random() * 50 - 25 },
      { name: 'PlanetD', x: Math.random() * 50 - 25, y: Math.random() * 50 - 25, z: Math.random() * 50 - 25 },
      { name: 'PlanetD', x: Math.random() * 50 - 25, y: Math.random() * 50 - 25, z: Math.random() * 50 - 25 },
      { name: 'PlanetD', x: Math.random() * 50 - 25, y: Math.random() * 50 - 25, z: Math.random() * 50 - 25 },
      { name: 'PlanetD', x: Math.random() * 50 - 25, y: Math.random() * 50 - 25, z: Math.random() * 50 - 25 },
      { name: 'PlanetD', x: Math.random() * 50 - 25, y: Math.random() * 50 - 25, z: Math.random() * 50 - 25 },
      { name: 'PlanetD', x: Math.random() * 50 - 25, y: Math.random() * 50 - 25, z: Math.random() * 50 - 25 },
      { name: 'PlanetD', x: Math.random() * 50 - 25, y: Math.random() * 50 - 25, z: Math.random() * 50 - 25 },
      { name: 'PlanetD', x: Math.random() * 50 - 25, y: Math.random() * 50 - 25, z: Math.random() * 50 - 25 },
      { name: 'PlanetD', x: Math.random() * 50 - 25, y: Math.random() * 50 - 25, z: Math.random() * 50 - 25 },
      { name: 'PlanetD', x: Math.random() * 50 - 25, y: Math.random() * 50 - 25, z: Math.random() * 50 - 25 },
      { name: 'PlanetD', x: Math.random() * 50 - 25, y: Math.random() * 50 - 25, z: Math.random() * 50 - 25 },
      { name: 'PlanetD', x: Math.random() * 50 - 25, y: Math.random() * 50 - 25, z: Math.random() * 50 - 25 },
      { name: 'PlanetD', x: Math.random() * 50 - 25, y: Math.random() * 50 - 25, z: Math.random() * 50 - 25 },
      { name: 'PlanetD', x: Math.random() * 50 - 25, y: Math.random() * 50 - 25, z: Math.random() * 50 - 25 },
      { name: 'PlanetD', x: Math.random() * 50 - 25, y: Math.random() * 50 - 25, z: Math.random() * 50 - 25 },
      { name: 'PlanetD', x: Math.random() * 50 - 25, y: Math.random() * 50 - 25, z: Math.random() * 50 - 25 },
      { name: 'PlanetD', x: Math.random() * 50 - 25, y: Math.random() * 50 - 25, z: Math.random() * 50 - 25 },
      { name: 'PlanetD', x: Math.random() * 50 - 25, y: Math.random() * 50 - 25, z: Math.random() * 50 - 25 },
      { name: 'PlanetD', x: Math.random() * 50 - 25, y: Math.random() * 50 - 25, z: Math.random() * 50 - 25 },
      { name: 'PlanetD', x: Math.random() * 50 - 25, y: Math.random() * 50 - 25, z: Math.random() * 50 - 25 },
      { name: 'PlanetD', x: Math.random() * 50 - 25, y: Math.random() * 50 - 25, z: Math.random() * 50 - 25 },
      { name: 'PlanetD', x: Math.random() * 50 - 25, y: Math.random() * 50 - 25, z: Math.random() * 50 - 25 },
      { name: 'PlanetD', x: Math.random() * 50 - 25, y: Math.random() * 50 - 25, z: Math.random() * 50 - 25 },
      { name: 'PlanetD', x: Math.random() * 50 - 25, y: Math.random() * 50 - 25, z: Math.random() * 50 - 25 },
      { name: 'PlanetD', x: Math.random() * 50 - 25, y: Math.random() * 50 - 25, z: Math.random() * 50 - 25 },
      { name: 'PlanetD', x: Math.random() * 50 - 25, y: Math.random() * 50 - 25, z: Math.random() * 50 - 25 },
      { name: 'PlanetD', x: Math.random() * 50 - 25, y: Math.random() * 50 - 25, z: Math.random() * 50 - 25 },
      { name: 'PlanetD', x: Math.random() * 50 - 25, y: Math.random() * 50 - 25, z: Math.random() * 50 - 25 },
      { name: 'PlanetD', x: Math.random() * 50 - 25, y: Math.random() * 50 - 25, z: Math.random() * 50 - 25 },
      { name: 'PlanetD', x: Math.random() * 50 - 25, y: Math.random() * 50 - 25, z: Math.random() * 50 - 25 },
      { name: 'PlanetD', x: Math.random() * 50 - 25, y: Math.random() * 50 - 25, z: Math.random() * 50 - 25 },
      { name: 'PlanetD', x: Math.random() * 50 - 25, y: Math.random() * 50 - 25, z: Math.random() * 50 - 25 },
      { name: 'PlanetD', x: Math.random() * 50 - 25, y: Math.random() * 50 - 25, z: Math.random() * 50 - 25 },
      { name: 'PlanetD', x: Math.random() * 50 - 25, y: Math.random() * 50 - 25, z: Math.random() * 50 - 25 },
      { name: 'PlanetD', x: Math.random() * 50 - 25, y: Math.random() * 50 - 25, z: Math.random() * 50 - 25 },
      { name: 'PlanetD', x: Math.random() * 50 - 25, y: Math.random() * 50 - 25, z: Math.random() * 50 - 25 },
      { name: 'PlanetD', x: Math.random() * 50 - 25, y: Math.random() * 50 - 25, z: Math.random() * 50 - 25 },
      { name: 'PlanetD', x: Math.random() * 50 - 25, y: Math.random() * 50 - 25, z: Math.random() * 50 - 25 },
      { name: 'PlanetD', x: Math.random() * 50 - 25, y: Math.random() * 50 - 25, z: Math.random() * 50 - 25 },
      { name: 'PlanetD', x: Math.random() * 50 - 25, y: Math.random() * 50 - 25, z: Math.random() * 50 - 25 },
      { name: 'PlanetD', x: Math.random() * 50 - 25, y: Math.random() * 50 - 25, z: Math.random() * 50 - 25 },
      { name: 'PlanetD', x: Math.random() * 50 - 25, y: Math.random() * 50 - 25, z: Math.random() * 50 - 25 },
      { name: 'PlanetD', x: Math.random() * 50 - 25, y: Math.random() * 50 - 25, z: Math.random() * 50 - 25 },
      { name: 'PlanetD', x: Math.random() * 50 - 25, y: Math.random() * 50 - 25, z: Math.random() * 50 - 25 },
      { name: 'PlanetD', x: Math.random() * 50 - 25, y: Math.random() * 50 - 25, z: Math.random() * 50 - 25 },
      { name: 'PlanetD', x: Math.random() * 50 - 25, y: Math.random() * 50 - 25, z: Math.random() * 50 - 25 },
      { name: 'PlanetD', x: Math.random() * 50 - 25, y: Math.random() * 50 - 25, z: Math.random() * 50 - 25 },
      { name: 'PlanetD', x: Math.random() * 50 - 25, y: Math.random() * 50 - 25, z: Math.random() * 50 - 25 },
      { name: 'PlanetD', x: Math.random() * 50 - 25, y: Math.random() * 50 - 25, z: Math.random() * 50 - 25 },
      { name: 'PlanetD', x: Math.random() * 50 - 25, y: Math.random() * 50 - 25, z: Math.random() * 50 - 25 },
      { name: 'PlanetD', x: Math.random() * 50 - 25, y: Math.random() * 50 - 25, z: Math.random() * 50 - 25 },
      { name: 'PlanetD', x: Math.random() * 50 - 25, y: Math.random() * 50 - 25, z: Math.random() * 50 - 25 },
      { name: 'PlanetD', x: Math.random() * 50 - 25, y: Math.random() * 50 - 25, z: Math.random() * 50 - 25 },
      { name: 'PlanetD', x: Math.random() * 50 - 25, y: Math.random() * 50 - 25, z: Math.random() * 50 - 25 },
      { name: 'PlanetD', x: Math.random() * 50 - 25, y: Math.random() * 50 - 25, z: Math.random() * 50 - 25 },
      { name: 'PlanetD', x: Math.random() * 50 - 25, y: Math.random() * 50 - 25, z: Math.random() * 50 - 25 },
      { name: 'PlanetD', x: Math.random() * 50 - 25, y: Math.random() * 50 - 25, z: Math.random() * 50 - 25 },
      { name: 'PlanetD', x: Math.random() * 50 - 25, y: Math.random() * 50 - 25, z: Math.random() * 50 - 25 },
      { name: 'PlanetD', x: Math.random() * 50 - 25, y: Math.random() * 50 - 25, z: Math.random() * 50 - 25 },
      { name: 'PlanetD', x: Math.random() * 50 - 25, y: Math.random() * 50 - 25, z: Math.random() * 50 - 25 },
      { name: 'PlanetD', x: Math.random() * 50 - 25, y: Math.random() * 50 - 25, z: Math.random() * 50 - 25 },
      { name: 'PlanetD', x: Math.random() * 50 - 25, y: Math.random() * 50 - 25, z: Math.random() * 50 - 25 },
      { name: 'PlanetD', x: Math.random() * 50 - 25, y: Math.random() * 50 - 25, z: Math.random() * 50 - 25 },
      { name: 'PlanetD', x: Math.random() * 50 - 25, y: Math.random() * 50 - 25, z: Math.random() * 50 - 25 },
      { name: 'PlanetD', x: Math.random() * 50 - 25, y: Math.random() * 50 - 25, z: Math.random() * 50 - 25 },
      { name: 'PlanetD', x: Math.random() * 50 - 25, y: Math.random() * 50 - 25, z: Math.random() * 50 - 25 },
      { name: 'PlanetD', x: Math.random() * 50 - 25, y: Math.random() * 50 - 25, z: Math.random() * 50 - 25 },
      { name: 'PlanetD', x: Math.random() * 50 - 25, y: Math.random() * 50 - 25, z: Math.random() * 50 - 25 },
      { name: 'PlanetD', x: Math.random() * 50 - 25, y: Math.random() * 50 - 25, z: Math.random() * 50 - 25 },
      { name: 'PlanetD', x: Math.random() * 50 - 25, y: Math.random() * 50 - 25, z: Math.random() * 50 - 25 },
      { name: 'PlanetD', x: Math.random() * 50 - 25, y: Math.random() * 50 - 25, z: Math.random() * 50 - 25 },
      { name: 'PlanetD', x: Math.random() * 50 - 25, y: Math.random() * 50 - 25, z: Math.random() * 50 - 25 },
      { name: 'PlanetD', x: Math.random() * 50 - 25, y: Math.random() * 50 - 25, z: Math.random() * 50 - 25 },
      { name: 'PlanetD', x: Math.random() * 50 - 25, y: Math.random() * 50 - 25, z: Math.random() * 50 - 25 },
      { name: 'PlanetD', x: Math.random() * 50 - 25, y: Math.random() * 50 - 25, z: Math.random() * 50 - 25 },
      { name: 'PlanetD', x: Math.random() * 50 - 25, y: Math.random() * 50 - 25, z: Math.random() * 50 - 25 },
      { name: 'PlanetD', x: Math.random() * 50 - 25, y: Math.random() * 50 - 25, z: Math.random() * 50 - 25 },
      { name: 'PlanetD', x: Math.random() * 50 - 25, y: Math.random() * 50 - 25, z: Math.random() * 50 - 25 },
      { name: 'PlanetD', x: Math.random() * 50 - 25, y: Math.random() * 50 - 25, z: Math.random() * 50 - 25 },
      { name: 'PlanetD', x: Math.random() * 50 - 25, y: Math.random() * 50 - 25, z: Math.random() * 50 - 25 },
      { name: 'PlanetD', x: Math.random() * 50 - 25, y: Math.random() * 50 - 25, z: Math.random() * 50 - 25 },
      { name: 'PlanetD', x: Math.random() * 50 - 25, y: Math.random() * 50 - 25, z: Math.random() * 50 - 25 },
      { name: 'PlanetD', x: Math.random() * 50 - 25, y: Math.random() * 50 - 25, z: Math.random() * 50 - 25 },
      { name: 'PlanetD', x: Math.random() * 50 - 25, y: Math.random() * 50 - 25, z: Math.random() * 50 - 25 },
      { name: 'PlanetD', x: Math.random() * 50 - 25, y: Math.random() * 50 - 25, z: Math.random() * 50 - 25 },
      { name: 'PlanetD', x: Math.random() * 50 - 25, y: Math.random() * 50 - 25, z: Math.random() * 50 - 25 },
      { name: 'PlanetD', x: Math.random() * 50 - 25, y: Math.random() * 50 - 25, z: Math.random() * 50 - 25 },
      { name: 'PlanetD', x: Math.random() * 50 - 25, y: Math.random() * 50 - 25, z: Math.random() * 50 - 25 },
      { name: 'PlanetD', x: Math.random() * 50 - 25, y: Math.random() * 50 - 25, z: Math.random() * 50 - 25 },

    ];

    // Returning mock data
    return { starSystems: mockCoordinates };
  } catch (error) {
    console.error('Error plotting exoplanet data:', error);
    return { starSystems: [] };
  }
};

// React component to visualize the sky from the exoplanet's perspective
import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { useParams } from 'react-router-dom';

const ExoplanetSky = ({ planetName }) => {
  const mountRef = useRef(null);

  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth - (window.innerWidth * (5/100)), window.innerHeight - (window.innerWidth * (5/100)));
    mountRef.current.appendChild(renderer.domElement);

    camera.position.z = 0;  // The camera is stationary (as the observer)
    camera.position.y = 0;

    // Plot exoplanet data and visualize nearby systems as stars
    const data = plotExoplanetData();
    const stars = [];

    data.starSystems.forEach(system => {
      const starGeometry = new THREE.SphereGeometry(0.2, 8, 8);
      const starMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff });
      const star = new THREE.Mesh(starGeometry, starMaterial);

      // Using x, y, z directly from the mock data to place the stars
      star.position.set(system.x, system.y, system.z);
      scene.add(star);
      stars.push(star); // Keep a reference to each star for rotation
    });

    // Create a basic animation loop to rotate the stars around the camera (sky rotation)
    const animate = () => {
      requestAnimationFrame(animate);

      // Rotate each star around the camera, simulating a sky moving around a planet
      stars.forEach(star => {
        star.position.applyAxisAngle(new THREE.Vector3(0, 1, 0), 0.001);  // Rotate stars around Y-axis
      });

      renderer.render(scene, camera);
    };
    animate();

    return () => {
      mountRef.current.removeChild(renderer.domElement);
    };
  }, [planetName]);

  return <div ref={mountRef} style={{ width: '100%', height: '500px' }} />;
};

// Main component for the planet detail page
const PlanetDetail = () => {
  const { planetName } = useParams();

  return (
    <div className="container p-4">
      <h1 className="text-3xl font-bold mb-4">{planetName}</h1>
      <div className="w-full h-64 bg-gray-200">
        <ExoplanetSky planetName={planetName} />
      </div>
    </div>
  );
};

export default PlanetDetail;
