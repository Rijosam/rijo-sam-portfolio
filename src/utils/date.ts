import type { TalkDate } from "@/types/talks";
import { format } from "date-fns";

/**
 * Formats a TalkDate object into a human-readable string.
 *
 * @param talkDate - The TalkDate object containing the start and end dates.
 * @returns A string representation of the date or date range, e.g.,
 * "January 1, 2024" or "January 1-3, 2024".
 */
export const formatTalkDate = (talkDate: TalkDate): string => {
  const startDate = new Date(talkDate.year, talkDate.month - 1, talkDate.startDay);

  if (talkDate.endDay) {
    const endDate = new Date(talkDate.year, talkDate.month - 1, talkDate.endDay);
    return `${format(startDate, "MMMM d")}-${format(endDate, "d, yyyy")}`;
  }

  return format(startDate, "MMMM d, yyyy");
};
