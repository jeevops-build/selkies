// src/main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import PlayerGamepadButton from './components/PlayerGamepadButton.jsx';
import './index.css';
import './selkies-core.js';

const currentHash = window.location.hash;
const noDashboardModes = ['#shared', '#player2', '#player3', '#player4'];
const playerClientModes = ['#player2', '#player3', '#player4'];

if (!noDashboardModes.includes(currentHash)) {
  const dashboardRootElement = document.createElement('div');
  dashboardRootElement.id = 'dashboard-root';
  document.body.appendChild(dashboardRootElement);
  const appMountPoint = document.getElementById('root');
  if (appMountPoint) {
    ReactDOM.createRoot(appMountPoint).render(
      <React.StrictMode>
        <App dashboardRoot={dashboardRootElement} />
      </React.StrictMode>,
    );
  } else {
    console.error("CRITICAL: Dashboard mount point #root not found. Primary dashboard will not render.");
  }
} else {
  console.log(`Dashboard UI rendering skipped for mode: ${currentHash}`);
  if (playerClientModes.includes(currentHash)) {
    console.log(`Player client mode detected. Initializing gamepad button UI for ${currentHash}.`);
    const playerUIRootElement = document.createElement('div');
    playerUIRootElement.id = 'player-ui-root';
    document.body.appendChild(playerUIRootElement);
    ReactDOM.createRoot(playerUIRootElement).render(
      <React.StrictMode>
        <PlayerGamepadButton />
      </React.StrictMode>,
    );
  }
}
