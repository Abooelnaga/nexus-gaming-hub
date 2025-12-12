export interface Game {
  id: string;
  title: string;
  category: 'Action' | 'RPG' | 'Strategy' | 'Racing' | 'Sci-Fi';
  image: string;
  rating: number;
  players: string;
}

export interface Stat {
  id: string;
  label: string;
  value: number;
  suffix?: string;
  icon: 'users' | 'trophy' | 'gamepad' | 'server';
}

export interface Testimonial {
  id: string;
  user: string;
  avatar: string;
  comment: string;
  rank: string;
}

export interface NewsletterResponse {
  success: boolean;
  message: string;
}
