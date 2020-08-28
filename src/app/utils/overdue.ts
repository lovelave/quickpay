import dayjs from "dayjs";

export function getOverdue(returnDate: string) {
    return dayjs(new Date().setHours(0,0,0, 0)).diff(returnDate, "day");
}
