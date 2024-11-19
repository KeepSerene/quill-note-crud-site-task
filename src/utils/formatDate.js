import { formatDistanceToNow } from "date-fns";

export function formatTimestamp(date) {
  return formatDistanceToNow(new Date(date), { addSuffix: true });
}
