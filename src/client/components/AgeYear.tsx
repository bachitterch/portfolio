import dayjs from "dayjs";
import { useState } from "react";

export function AgeYear() {
  const currentYear = dayjs().year();
  const birthYear = dayjs().year(2000).month(4).date(17);

  const [year, setYear] = useState(currentYear - birthYear.year());

  setInterval(() => setYear(currentYear - birthYear.year()), 3600000000);
  return <span>{year}</span>;
}
