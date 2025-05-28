export interface Talk {
  title: string;
  event: string;
  date: string;
  status: "Upcoming" | "Past";
  type: "Conference" | "Workshop" | "Meetup";
  location: string;
  description?: string;
  primaryLink: string;
  primaryLinkText: string;
  primaryLinkAriaLabel: string;
}

export const talks: Talk[] = [
  {
    title: "Tulips to Turmeric: Lessons Learned from a Global Team",
    event: "RotterdamJUG",
    date: "June 3, 2025",
    status: "Upcoming",
    type: "Meetup",
    location: "Rijswijk, Netherlands",
    description: "",
    primaryLink: "https://www.meetup.com/rotterdamjug/events/307818817/?utm_medium=referral&utm_campaign=share-btn_savedevents_share_modal&utm_source=link",
    primaryLinkText: "View Event Details",
    primaryLinkAriaLabel: "View event details for RotterdamJUG",
  },
  {
    title: "Tulips to Turmeric: Lessons Learned from a Global Team",
    event: "Devoxx Poland 2025",
    date: "June 11-13, 2025",
    status: "Upcoming",
    type: "Conference",
    location: "Krakow, Poland",
    description: "",
    primaryLink: "https://devoxx.pl/",
    primaryLinkText: "View Event Details",
    primaryLinkAriaLabel: "View event details for Devoxx Poland 2025 talk",
  },
  {
    title: "Java Beyond Frameworks: Avoiding Lock-In with Agnostic Design",
    event: "Devoxx Poland 2025",
    date: "June 11-13, 2025",
    status: "Upcoming",
    type: "Conference",
    location: "Krakow, Poland",
    description: "",
    primaryLink: "https://devoxx.pl/",
    primaryLinkText: "View Event Details",
    primaryLinkAriaLabel: "View event details for Devoxx Poland 2025 talk",
  },
  {
    title: "Java Beyond Frameworks: Avoiding Lock-In with Agnostic Design",
    event: "DevBcn Barcelona",
    date: "July 08-11, 2025",
    status: "Upcoming",
    type: "Conference",
    location: "Barcelona, Spain",
    description: "",
    primaryLink: "https://www.devbcn.com/",
    primaryLinkText: "View Event Details",
    primaryLinkAriaLabel: "View event details for DevBcn",
  },
  {
    title: "Java Beyond Frameworks: Avoiding Lock-In with Agnostic Design",
    event: "JavaCro'25",
    date: "October 12-15, 2025",
    status: "Upcoming",
    type: "Conference",
    location: "Rovinj, Croatia",
    description: "",
    primaryLink: "https://2025.javacro.hr/eng/",
    primaryLinkText: "View Event Details",
    primaryLinkAriaLabel: "View event details for JavaCro",
  },
  {
    title: "Tulips to Turmeric: Lessons Learned from a Global Team",
    event: "JavaCro'25",
    date: "October 12-15, 2025",
    status: "Upcoming",
    type: "Conference",
    location: "Rovinj, Croatia",
    description: "",
    primaryLink: "https://2025.javacro.hr/eng/",
    primaryLinkText: "View Event Details",
    primaryLinkAriaLabel: "View event details for JavaCro",
  },
];
