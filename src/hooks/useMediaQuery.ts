import { useEffect, useState } from 'react';
/** Query media */
export default function useMediaQuery(query: string): boolean | undefined {
  const [matches, setMatches] = useState<boolean>();
  useEffect(() => {
    const media = window.matchMedia(query);
    if (media.matches !== matches) {
      setMatches(media.matches);
    }
    const listener = () => setMatches(media.matches);
    window.addEventListener('resize', listener);
    return () => window.removeEventListener('resize', listener);
  }, [matches, query]);
  return matches;
}

// Example  const smallScreen = useMediaQuery('(max-width: 767px)');
