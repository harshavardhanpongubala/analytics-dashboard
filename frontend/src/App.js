import React, { useState } from 'react';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div>
      {isLoggedIn ? (
        <Dashboard onLogout={setIsLoggedIn} />
      ) : (
        <Login onLogin={setIsLoggedIn} />
      )}
    </div>
  );
}

export default App;