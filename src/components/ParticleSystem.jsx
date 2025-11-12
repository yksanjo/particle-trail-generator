import React, { useRef, useEffect } from 'react';
import ParticleEngine from '../utils/ParticleEngine';
import './ParticleSystem.css';

function ParticleSystem({ settings, isPlaying }) {
  const canvasRef = useRef(null);
  const engineRef = useRef(null);
  const animationFrameRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    
    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Initialize particle engine
    engineRef.current = new ParticleEngine(canvas, ctx, settings);

    // Mouse/touch event handlers
    let mouseX = canvas.width / 2;
    let mouseY = canvas.height / 2;

    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const handleTouchMove = (e) => {
      e.preventDefault();
      const touch = e.touches[0];
      mouseX = touch.clientX;
      mouseY = touch.clientY;
    };

    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('touchmove', handleTouchMove, { passive: false });

    // Animation loop
    const animate = () => {
      if (isPlaying) {
        ctx.fillStyle = 'rgba(10, 10, 10, 0.1)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        engineRef.current.update(mouseX, mouseY);
        engineRef.current.draw();
      }
      
      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      canvas.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('touchmove', handleTouchMove);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  // Update engine settings when they change
  useEffect(() => {
    if (engineRef.current) {
      engineRef.current.updateSettings(settings);
    }
  }, [settings]);

  return (
    <canvas
      ref={canvasRef}
      className="particle-canvas"
      style={{ cursor: 'none' }}
    />
  );
}

export default ParticleSystem;

