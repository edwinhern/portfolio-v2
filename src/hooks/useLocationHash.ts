import { useEffect, useState } from 'react';

export function useLocationHash() {
  const [hash, setHash] = useState<string>('/');

  useEffect(() => {
    const handleHashChange = () => setHash(window.location.hash);
    const handleCustomHashChange = (event: CustomEvent) => setHash(event.detail);

    window.addEventListener('hashchange', handleHashChange);
    window.addEventListener('customHashChange', handleCustomHashChange as EventListener);

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
      window.removeEventListener('customHashChange', handleCustomHashChange as EventListener);
    };
  }, []);

  return hash;
}
