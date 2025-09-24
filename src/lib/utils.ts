import Cookies from 'js-cookie';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const setCookie = (
  key: string,
  value: unknown,
  options: Cookies.CookieAttributes = {},
) => {
  Cookies.set(
    key,
    typeof value === 'string' ? value : JSON.stringify(value),
    options,
  );
};

export const getCookie = <T>(key: string): T | null => {
  const value = Cookies.get(key);
  return value ? (value as T) : null;
};

export const formatErrors = (error: any) => {
  const errorMessages = error?.response?.data?.errors;

  if (errorMessages) {
    return Object.entries(errorMessages)
      .map(
        ([field, messages]) =>
          `${field}: ${Array.isArray(messages) ? messages.join(',') : messages}`,
      )
      .join('\n');
  }

  return 'An unexpected error occurred.';
};

export const formatDateRange = (start: string | Date, end: string | Date) => {
  const dateOptions: Intl.DateTimeFormatOptions = {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  };

  const timeOptions: Intl.DateTimeFormatOptions = {
    hour: 'numeric',
    minute: '2-digit',
    hour12: true,
  };

  const startDate = new Date(start);
  const endDate = new Date(end);

  const startStr =
    new Intl.DateTimeFormat('en-US', dateOptions).format(startDate) +
    ' @ ' +
    new Intl.DateTimeFormat('en-US', timeOptions).format(startDate);
  const endStr =
    new Intl.DateTimeFormat('en-US', dateOptions).format(endDate) +
    ' @ ' +
    new Intl.DateTimeFormat('en-US', timeOptions).format(endDate);

  return `${startStr} - ${endStr}`;
};
