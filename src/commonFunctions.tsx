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
  