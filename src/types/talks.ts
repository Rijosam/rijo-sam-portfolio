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
