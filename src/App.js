import Timer from './components/Timer';
import Settings from './components/Settings';
import './App.css';
import {useState} from 'react';
import SettingsContext from './components/SettingsContext';

function App() {

  const [showSettings, setShowSettings] = useState(true);

  return (
    <main>
      <SettingsContext.Provider value={{
        workMinutes: 25,
        breakMinutes: 15,
      }}>

      {showSettings ? <Settings /> : <Timer />}
      </SettingsContext.Provider>
    </main>
  );
}

export default App;
