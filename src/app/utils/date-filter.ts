const leapYearsEx: string[] = []
for (let i = 0; i < 10; i++) {
    leapYearsEx.push(`20${i}-02-29`)
    leapYearsEx.push(`19${i}-02-29`)
    leapYearsEx.push(`20${i}-2-29`)
    leapYearsEx.push(`19${i}-2-29`)
}

export function validateDate(input: string): string {
    if (input[0]?.match(/[\/.,]/)){
        return ''
    }
    const value = input.replace(/[^.,\-/0-9]/g, '')
    const curDate = value.replace(/[\/.,]/g, '-')
    const curLength = curDate.length;


    function isValid(generatedDate: string, format:string) {
        if (leapYearsEx.includes(generatedDate)&&format==='dmy') {
            return true
        }
        const year = generatedDate.split('-')[0]
        if (year.length !== 4) {
            return false
        }
        const date = new Date(generatedDate);
        const month = generatedDate.split('-')[1];
        const dateYear = date.getFullYear();
        const monthFromObj = date.getMonth() + 1;
        const expireYear = (new Date().getFullYear()) + 21;
        return ((+month === monthFromObj) && (1989 < dateYear) && (dateYear < expireYear) && (!isNaN(date.getTime())));
    }

    function dmy(curDate: string) {
        const validDates = ["01-01-2020", "10-01-2020", "1-1-2020", "10-1-2020",
            "01-01-1990", "10-01-1990", "1-1-1990", "10-1-1990"];
        for (let validDate of validDates) {
            let generatedDate = curDate + validDate.substr(curLength);
            const splitDate = generatedDate.split('-');
            generatedDate = `${splitDate[2]}-${splitDate[1]}-${splitDate[0]}`;
            if (isValid(generatedDate, 'dmy')) {
                return true;
            }
        }
        return false;
    }

    function ymd(curDate: string) {
        const validDates = ["2020-01-10", "2020-01-01", "2020-1-10", "2020-1-1"];
        for (let validDate of validDates) {
            let generatedDate = curDate + validDate.substr(curLength);
            if (isValid(generatedDate, 'ymd')) {
                return true;
            }
        }
        return false;
    }

    if (ymd(curDate) || dmy(curDate)) {
        const splitter = value.match(/[,.\-\/]/g)
        if ((splitter && splitter.length > 2)
            || (splitter && value.slice(0, 1) === splitter[0])) {
            return validateDate(value.slice(0, -1));
        }
        return splitter ? value.split(/[,.\-\/]/).join(splitter[0]) : value
    }
    return validateDate(value.slice(0, -1));
}