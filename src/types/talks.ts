/**
 * Data structures for representing speaking engagements and presentations.
 *
 * TalkDate: Defines the date structure for events, supporting both single dates
 * and date ranges (e.g., multi-day conferences).
 *
 * Talk: Represents a complete speaking engagement with metadata including
 * event details, timing, links to resources, and categorization.
 */

export interface TalkDate {
  startDay: number;
  month: number; // 1-12 (January = 1, December = 12)
  year: number;
  endDay?: number; // For date ranges like conferences
}

export interface Talk {
  title: string;
  event: string;
  date: TalkDate;
  status: "Upcoming" | "Past";
  type: "Conference" | "Workshop" | "Meetup";
  location: string;
  description?: string;
  primaryLink: string;
  primaryLinkText: string;
  primaryLinkAriaLabel: string;
  videoLink?: string;
  videoLinkText?: string;
  presentationLink?: string;
  presentationLinkText?: string;
}
