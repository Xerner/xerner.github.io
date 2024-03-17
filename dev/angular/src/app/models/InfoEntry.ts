import { DateTime } from "luxon"

export interface InfoEntry {
  title: string
  startDate: DateTime,
  endDate: DateTime | null,
}
