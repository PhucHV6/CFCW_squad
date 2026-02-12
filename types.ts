export enum ViewName {
  HOME = 'Home',
  FIXTURES = 'Fixtures & Results',
  TICKET_GUIDE = 'Ticket Guide',
  BUY_TICKETS = 'Buy Tickets',
  SQUAD = 'Teams',
  ABOUT = 'About',
}

export interface Match {
  id: string;
  opponent: string;
  date: string;
  time: string;
  venue: string;
  competition: string;
  isHome: boolean;
  score?: string; // If played
  status: 'UPCOMING' | 'PLAYED';
}

export interface PlayerStats {
  appearances: number;
  goals: number;
  assists: number;
  // EA FC style stats (0-99)
  pace: number;
  shooting: number;
  passing: number;
  dribbling: number;
  defending: number;
  physical: number;
}

export interface Player {
  id: string;
  name: string;
  number?: number;
  position: string;
  imageUrl: string;
  country: string;
  stats?: PlayerStats;
  bio: string;
  videoThumbnail?: string;
  squadType: 'Senior' | 'U21' | 'Loan' | 'Staff';
}

export interface TicketInfo {
  category: string;
  price: string;
  availability: 'High' | 'Low' | 'Sold Out';
}