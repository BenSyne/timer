import { useState } from 'react';
import Timer from '../components/Timer';
import AudioReminder from '../components/AudioReminder';
import Settings from '../components/Settings';
import Navigation from '../components/Navigation';
import Feedback from '../components/Feedback';

export default function Home() {
  const [timerSettings, setTimerSettings] = useState({
    duration: 25,
    reminderInterval: 5,
    soundChoice: 'default',
  });

  const [currentTask, setCurrentTask] = useState('');

  const handleSettingsChange = (newSettings) => {
    setTimerSettings(newSettings);
  };

  const handleTaskChange = (newTask) => {
    setCurrentTask(newTask);
  };

  return (
    <div>
      <Navigation />
      <main>
        <h1>Focus Timer</h1>
        {/* <Timer settings={timerSettings} /> */}
        {/* <AudioReminder task={currentTask} settings={timerSettings} isActive={true} /> */}
        {/* <Settings settings={timerSettings} setSettings={setTimerSettings} onChange={handleSettingsChange} /> */}
        {/* <Feedback /> */}
      </main>
    </div>
  );
}
