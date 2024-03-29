import { format } from "date-fns";

export default function useFormattedDate(
  str,
  outputFormat = "yyyy-MM-dd HH:mm:ss"
) {
  if (!str) {
    return "";
  }
  return format(new Date(str), outputFormat);
}
