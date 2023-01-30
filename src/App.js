import Timer from './components/Timer';
import Settings from './components/Settings';
import './App.css';
import {useState} from 'react';


function App() {

  const [showSettings, setShowSettings] = useState(true);

  return (
    <main>
      {showSettings ? <Settings /> : <Timer />}
    </main>
  );
}

export default App;
