export function formatDate (value:string) {
    const parts = value.split( /[,.\-\/]/)
    return (parts[2]?.length===4)
        ? parts.reverse().join('-')
        : parts.join('-');
}
           