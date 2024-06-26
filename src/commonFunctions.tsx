import { OpeningType } from "./commonTypes";

export function getTimeSinceDate(dateString: string): string {
    const currentDate = new Date();
    const pastDate = new Date(dateString);
  
    let yearDiff = currentDate.getFullYear() - pastDate.getFullYear();
    let monthDiff = currentDate.getMonth() - pastDate.getMonth();
    let dayDiff = currentDate.getDate() - pastDate.getDate();
  
    // Adjust for month and day differences
    if (dayDiff < 0) {
      monthDiff--;
      const daysInMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 0).getDate();
      dayDiff += daysInMonth;
    }
  
    if (monthDiff < 0) {
      yearDiff--;
      monthDiff += 12;
    }
  
    // Pluralization helper
    const pluralize = (count: number, noun: string) => `${count} ${noun}${count !== 1 ? 's' : ''}`;
  
    // Construct the time difference string with only two values
    let timeDiffParts = [];
    if (yearDiff > 0) timeDiffParts.push(pluralize(yearDiff, 'year'));
    if (monthDiff > 0) timeDiffParts.push(pluralize(monthDiff, 'month'));
    if (dayDiff > 0 && timeDiffParts.length < 2) timeDiffParts.push(pluralize(dayDiff, 'day'));
  
    // Ensure only two components are included
    return timeDiffParts.slice(0, 2).join(' ') || '0 days';
}

export function capitalizeFirstLetter(string: string): string {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

export function capitalizeWords(full?: string): string {

    if (full === undefined) return '';

    return full
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
}

export function formatStringAsPrice(str: string): string {
    const reversedStr = str.split('').reverse().join(''); // reverse the input string
    const regex = /(\d{3})(?=\d)/g; // use regex to match every three digits
    const withCommas = reversedStr.replace(regex, '$1,'); // insert commas after every three digits
    return withCommas.split('').reverse().join(''); // reverse the string again and return
}

export function getCurrentDateTimeGMT(): string {
    const now = new Date();
    const isoString = now.toISOString();
    return isoString.slice(0, 19).replace('T', ' ');
}

export function getCurrentDateGMT(): string {
    const now = new Date();
    const isoString = now.toISOString();
    return isoString.slice(0, 10);
}

export function getCurrentDate(): string {
    const date = new Date();

    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    
    return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
}

export function getNextOpening(openings: OpeningType[]): OpeningType | null {
    const currentDate = getCurrentDateGMT();

    const sortedOpenings = [...openings].sort((a, b) => {
        const dateA = new Date(a.date).getTime();
        const dateB = new Date(b.date).getTime();
        return dateA - dateB;
      });

    const nextOpening = sortedOpenings.find(opening => opening.date >= currentDate && opening.active !== "0");
    return nextOpening ? nextOpening : null;
}
  

  