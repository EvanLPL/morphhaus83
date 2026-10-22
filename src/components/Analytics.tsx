import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { initializeAnalytics, trackPageView } from '@/lib/analytics';

export default function Analytics() {
  const { pathname, search } = useLocation();

  useEffect(() => {
    if (initializeAnalytics(import.meta.env.VITE_LOVABLE_CONNECTOR_GOOGLE_ANALYTICS_API_KEY)) {
      trackPageView(pathname + search);
    }
  }, [pathname, search]);

  return null;
}