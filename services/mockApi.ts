import { NewsletterResponse } from '../types';

export const subscribeToNewsletter = async (email: string): Promise<NewsletterResponse> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      if (email.includes('error')) {
        resolve({ success: false, message: 'Server error. Please try again.' });
      } else {
        resolve({ success: true, message: 'Welcome to the Nexus! You are now subscribed.' });
      }
    }, 1500);
  });
};

export const fetchLiveStats = async () => {
  // Simulate fetching dynamic stats
  return new Promise<{ activePlayers: number }>((resolve) => {
    setTimeout(() => {
      resolve({ activePlayers: Math.floor(Math.random() * 5000) + 12000 });
    }, 1000);
  });
};
