export function getTime(date = new Date()): string {
    return `${date.getHours().toString()}:${date.getMinutes().toString().padStart(2, "0")}`
}
