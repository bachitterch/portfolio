import dayjs from "dayjs";
import { useState } from "react";

export function AgeYear() {
  const birthYear = dayjs().year(2000).month(4).date(17);

  const ageNumber = dayjs().diff(birthYear, "years");
  const [year, setYear] = useState(ageNumber);

  setInterval(() => setYear(ageNumber), 3600000000);
  return <span>{year}</span>;
}
