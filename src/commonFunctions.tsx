import { OpeningType } from "./commonTypes";

export function getTimeSinceDate(dateString: string): string {
    const currentDate = new Date();
    const hireDate = new Date(dateString);
  
    const yearDiff = currentDate.getFullYear() - hireDate.getFullYear();
    const monthDiff = currentDate.getMonth() - hireDate.getMonth();
    const weekDiff = Math.floor((currentDate.getTime() - hireDate.getTime()) / (1000 * 60 * 60 * 24 * 7));
  
    if (yearDiff > 1) {
      if (monthDiff < 0) {
        return `${yearDiff - 1} year${yearDiff > 2 ? 's' : ''}`;
      } else {
        return `${yearDiff} year${yearDiff > 1 ? 's' : ''} and ${monthDiff} month${monthDiff !== 1 ? 's' : ''}`;
      }
    } else if (yearDiff === 1) {
      if (monthDiff < 0) {
        const monthsRemaining = 12 - hireDate.getMonth() + currentDate.getMonth();
        return `${monthsRemaining} month${monthsRemaining !== 1 ? 's' : ''}`;
      } else if (monthDiff === 0) {
        return '1 year';
      } else {
        return `1 year and ${monthDiff} month${monthDiff !== 1 ? 's' : ''}`;
      }
    } else {
      if (monthDiff === 0 && weekDiff > 0) {
        return `${weekDiff} week${weekDiff !== 1 ? 's' : ''}`;
      } else {
        return `${monthDiff} month${monthDiff !== 1 ? 's' : ''}`;
      }
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
  

  