import type { TalkDate } from "@/types/talks";
import { format } from "date-fns";

export const formatTalkDate = (talkDate: TalkDate): string => {
	const startDate = new Date(
		talkDate.year,
		talkDate.month - 1,
		talkDate.startDay,
	);

	if (talkDate.endDay) {
		const endDate = new Date(
			talkDate.year,
			talkDate.month - 1,
			talkDate.endDay,
		);
		return `${format(startDate, "MMMM d")}-${format(endDate, "d, yyyy")}`;
	}

	return format(startDate, "MMMM d, yyyy");
};
