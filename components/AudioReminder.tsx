import { useEffect, useState } from 'react';

interface AudioReminderProps {
  task: string;
  settings: {
    reminderInterval: number;
    soundChoice: string;
  };
  isActive: boolean;
}

const AudioReminder: React.FC<AudioReminderProps> = ({ task, settings, isActive }) => {
  const [timeLeft, setTimeLeft] = useState(settings.reminderInterval * 60);

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;

    if (isActive && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft(timeLeft - 1);
        if (timeLeft === 0) {
          playSound(settings.soundChoice);
          setTimeLeft(settings.reminderInterval * 60);
        }
      }, 1000);
    } else if (!isActive && timeLeft !== 0) {
      clearInterval(interval!);
    }

    return () => clearInterval(interval!);
  }, [isActive, timeLeft, settings]);

  const playSound = (soundChoice: string) => {
    // This function will play the sound based on the user's choice
    // You will need to implement this function based on your sound library
  };

  return null;
};

export default AudioReminder;