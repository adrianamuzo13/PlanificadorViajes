export interface Activity {
  id: string;
  title: string;
  description?: string;
  time?: string;
}

export interface Day {
  id: string;
  date: string;
  activities: Activity[];
}

export interface Accommodation {
  name: string;
  address?: string;
  checkIn: string;
  checkOut: string;
}

export interface Trip {
  id: string;
  destination: string;
  startDate: string;
  endDate: string;
  description?: string;
  accommodation?: Accommodation;
  days: Day[];
}