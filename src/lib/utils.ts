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
