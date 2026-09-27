const MONTHS: Record<string, string> = {
  janvier: "01",
  février: "02",
  mars: "03",
  avril: "04",
  mai: "05",
  juin: "06",
  juillet: "07",
  août: "08",
  septembre: "09",
  octobre: "10",
  novembre: "11",
  décembre: "12",
};

/** Converts a "18 août 2026" style French date into "2026-08-18". */
export function frenchDateToISO(value: string): string {
  const [day, month, year] = value.split(" ");
  const monthNumber = MONTHS[month.toLowerCase()];
  return `${year}-${monthNumber}-${day.padStart(2, "0")}`;
}
