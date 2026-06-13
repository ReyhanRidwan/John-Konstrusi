import { useEffect } from 'react';

interface ScrollToTopProps {
  page: string;
}

export default function ScrollToTop({ page }: ScrollToTopProps) {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
  }, [page]);

  return null;
}
