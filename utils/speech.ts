// utils/speech.ts

// Importing necessary libraries
import Speech from 'speak-tts';

// Initializing the speech synthesis
const speech = new Speech();

if (speech.hasBrowserSupport()) {
  speech.init({
    volume: 1,
    lang: 'en-GB',
    rate: 1,
    pitch: 1,
    voice: 'Google UK English Male',
    splitSentences: true,
    listeners: {
      onvoiceschanged: (voices) => {
        console.log('Voice changed', voices);
      },
    },
  });
}

// Function to announce the time left
export const announceTimeLeft = (timeLeft: number) => {
  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;
  const announcement = `There are ${minutes} minutes and ${seconds} seconds left.`;

  speech.speak({
    text: announcement,
  });
};

// Function to announce the task
export const announceTask = (taskName: string) => {
  const announcement = `It's time to work on ${taskName}.`;

  speech.speak({
    text: announcement,
  });
};

// Function to handle the announcement choice
export const handleAnnouncementChoice = (announcementChoice: string, timeLeft: number, taskName: string) => {
  if (announcementChoice === 'time') {
    announceTimeLeft(timeLeft);
  } else if (announcementChoice === 'task') {
    announceTask(taskName);
  }
};
