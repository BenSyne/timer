import { useState } from 'react';

interface SettingsProps {
  settings: {
    duration: number;
    reminderInterval: number;
    soundChoice: string;
  };
  setSettings: (settings: {
    duration: number;
    reminderInterval: number;
    soundChoice: string;
  }) => void;
  onChange: (settings: {
    duration: number;
    reminderInterval: number;
    soundChoice: string;
  }) => void;
}

const Settings: React.FC<SettingsProps> = ({ settings, setSettings, onChange }) => {
  const [duration, setDuration] = useState(settings.duration);
  const [reminderInterval, setReminderInterval] = useState(settings.reminderInterval);
  const [soundChoice, setSoundChoice] = useState(settings.soundChoice);

  const handleSave = () => {
    const newSettings = { duration, reminderInterval, soundChoice };
    setSettings(newSettings);
    onChange(newSettings);
  };

  return (
    <div>
      <h2>Settings</h2>
      <div>
        <label>
          Duration (minutes):
          <input
            type="number"
            value={duration}
            onChange={(e) => setDuration(Number(e.target.value))}
          />
        </label>
      </div>
      <div>
        <label>
          Reminder Interval (minutes):
          <input
            type="number"
            value={reminderInterval}
            onChange={(e) => setReminderInterval(Number(e.target.value))}
          />
        </label>
      </div>
      <div>
        <label>
          Sound Choice:
          <select
            value={soundChoice}
            onChange={(e) => setSoundChoice(e.target.value)}
          >
            <option value="default">Default</option>
            <option value="custom">Custom</option>
          </select>
        </label>
      </div>
      <button onClick={handleSave}>Save Settings</button>
    </div>
  );
};

export default Settings;