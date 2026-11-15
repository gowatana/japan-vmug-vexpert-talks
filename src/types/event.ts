export interface Speaker {
  name: string;
  link?: string;
  title: string;
  recordingLink?: string;
}

export interface Moderator {
  name: string;
  link?: string;
}

export interface Organizer {
  name: string;
  link?: string;
}

export interface Event {
  number: number;
  year: number;
  date: string;
  time: string;
  title: string;
  eventLink?: string;
  recordingLink?: string;
  speakers: Speaker[];
  moderators: Moderator[];
  organizers: Organizer[];
}
