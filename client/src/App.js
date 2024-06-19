// En App.js
import React from 'react';
import Home from './pages/Home'; // Importa el componente Home
import './App.css'; // Importa estilos globales si los tienes

function App() {
  return (
      <div className="App">
        <Home /> {/* Renderiza el componente Home */}
      </div>
  );
}

export default App;
