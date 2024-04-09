import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const updateHistoryAndDispatchEvent = (newHash: string) => {
  window.history.pushState(null, '', newHash);
  window.dispatchEvent(new CustomEvent('customHashChange', { detail: newHash }));
};

export function scrollToSection(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
  event.preventDefault();

  const href = event.currentTarget.getAttribute('href');
  const id = href?.substring(2) as string;
  const element = document.getElementById(id);

  // Handling the "main" or non-existent section in a unified way
  if (!id || !element) {
    updateHistoryAndDispatchEvent('/');
    window.scrollTo({ top: 0, behavior: 'smooth' });
    return;
  }

  const navbarHeight = document.querySelector('header')?.offsetHeight ?? 0;
  const additionalOffset = 10; // Additional offset (e.g., for spacing)
  const startPosition = element.getBoundingClientRect().top + window.scrollY;
  const offsetPosition = startPosition - navbarHeight - additionalOffset;

  updateHistoryAndDispatchEvent(`#${id}`);
  window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
}
