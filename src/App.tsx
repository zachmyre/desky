import React, { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Topbar from './components/Topbar'; 
import Sidebar from './components/Sidebar'; 
import MainWindow from './components/MainWindow';


const App: React.FC = () => {
  const [selectedRoute, setSelectedRoute] = useState<string | null>(null);

  return (
    <div className="App">
      <header className="TopBarContainer">
        <Topbar />
      </header>
      <Router>
      <div className="DisplayContainer">
        <Sidebar setSelectedRoute={setSelectedRoute} />
        <MainWindow selectedRoute={selectedRoute} />
      </div>
      </Router>
    </div>
  );
}

export default App;
