import './App.css';
import './components/Sidebar';
import Topbar from './components/Topbar';
import Sidebar from './components/Sidebar';
import MainWindow from './components/MainWindow';

const App = () => {
  return (
    <div className="App">
      <header className="TopBarContainer">
        <Topbar />
      </header>
      <div className="DisplayContainer">
        <Sidebar />
        <MainWindow />
      </div>
    </div>
  );
}

export default App;
