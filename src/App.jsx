import React, { useState, useEffect, useRef } from 'react';
import ParticleSystem from './components/ParticleSystem';
import ControlPanel from './components/ControlPanel';
import './App.css';

function App() {
  const [settings, setSettings] = useState({
    particleCount: 50,
    particleSize: 3,
    trailLength: 20,
    speed: 2,
    gravity: 0.1,
    friction: 0.95,
    style: 'fire',
    color1: '#ff6b6b',
    color2: '#4ecdc4',
    opacity: 0.8,
    spread: 5,
    life: 60
  });

  const [isPlaying, setIsPlaying] = useState(true);
  const [showControls, setShowControls] = useState(true);

  const updateSetting = (key, value) => {
    setSettings(prev => ({ ...prev, [key]: value }));
  };

  return (
    <div className="app">
      <header className="app-header">
        <h1>✨ Particle Trail Generator</h1>
        <p>Move your mouse to create beautiful particle trails</p>
        <button 
          className="toggle-controls"
          onClick={() => setShowControls(!showControls)}
        >
          {showControls ? 'Hide Controls' : 'Show Controls'}
        </button>
      </header>

      <ParticleSystem 
        settings={settings} 
        isPlaying={isPlaying}
      />

      {showControls && (
        <ControlPanel
          settings={settings}
          updateSetting={updateSetting}
          isPlaying={isPlaying}
          setIsPlaying={setIsPlaying}
        />
      )}
    </div>
  );
}

export default App;

