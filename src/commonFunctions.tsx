import { OpeningType } from "./commonTypes";

export function getTimeSinceDate(dateStr: string): string {
    const [day, month, year] = dateStr.split('.').map((str) => parseInt(str, 10));
  
    const now = new Date();
    const then = new Date(year, month - 1, day);
  
    const diffTime = now.getTime() - then.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  
    if (diffDays >= 30) {
        const months = Math.floor(diffDays / 30);
        return `${months} ${months === 1 ? 'month' : 'months'}`;
    } else if (diffDays >= 7) {
        const weeks = Math.floor(diffDays / 7);
        return `${weeks} ${weeks === 1 ? 'week' : 'weeks'}`;
    } else {
        return `${diffDays} ${diffDays === 1 ? 'day' : 'days'}`;
    }
}

export function capitalizeFirstLetter(string: string): string {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

export function capitalizeWords(full: string): string {
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
    const nextOpening = openings.find(opening => opening.date >= currentDate && opening.active !== "0");
    return nextOpening ? nextOpening : null;
}
  

  