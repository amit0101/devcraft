import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

declare global {
  interface Window {
    gtag: (
      command: 'js' | 'config' | 'event',
      targetId: string | Date,
      config?: {
        page_path?: string;
        page_title?: string;
        [key: string]: any;
      }
    ) => void;
  }
}

const GA_MEASUREMENT_ID = 'G-XXXXXXXXXX'; // Replace with your GA4 measurement ID

export function Analytics() {
  const location = useLocation();

  useEffect(() => {
    // Initialize GA4
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
    document.head.appendChild(script);

    window.gtag = function gtag() {
      // @ts-ignore
      window.dataLayer.push(arguments);
    };

    window.gtag('js', new Date());
    window.gtag('config', GA_MEASUREMENT_ID, {
      page_path: location.pathname + location.search,
      page_title: document.title
    });

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  useEffect(() => {
    // Track page views
    window.gtag('config', GA_MEASUREMENT_ID, {
      page_path: location.pathname + location.search,
      page_title: document.title
    });
  }, [location]);

  return null;
}

// Custom hook for tracking events
export function useAnalytics() {
  const trackEvent = (
    eventName: string,
    eventParams?: {
      [key: string]: any;
    }
  ) => {
    if (typeof window.gtag === 'function') {
      window.gtag('event', eventName, eventParams);
    }
  };

  return { trackEvent };
}

// Example usage:
// const { trackEvent } = useAnalytics();
// trackEvent('button_click', { button_name: 'contact_form_submit' }); 