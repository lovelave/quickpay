import dayjs from "dayjs";

export function getOverdue(returnDate: string) {
    return dayjs().startOf("day").diff(returnDate, "day");
}
