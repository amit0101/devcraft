import { useEffect } from 'react';
import config from '../config';

declare global {
  interface Window {
    Intercom: any;
    intercomSettings: any;
  }
}

export function Chat() {
  useEffect(() => {
    if (!config.intercom.enabled) {
      console.warn('Intercom is not configured. Chat functionality will be disabled.');
      return;
    }

    // Initialize Intercom
    window.intercomSettings = {
      api_base: "https://api-iam.intercom.io",
      app_id: config.intercom.appId,
      name: "AI Fusion Labs",
      email: "support@aifusionlabs.com",
      hide_default_launcher: false,
      alignment: "right",
      horizontal_padding: 20,
      vertical_padding: 20,
    };

    // Load Intercom script
    const loadIntercom = () => {
      const script = document.createElement('script');
      script.type = 'text/javascript';
      script.async = true;
      script.src = `https://widget.intercom.io/widget/${config.intercom.appId}`;
      
      const firstScript = document.getElementsByTagName('script')[0];
      if (firstScript && firstScript.parentNode) {
        firstScript.parentNode.insertBefore(script, firstScript);
      }
    };

    if (document.readyState === 'complete') {
      loadIntercom();
    } else {
      window.addEventListener('load', loadIntercom);
    }

    // Cleanup on unmount
    return () => {
      if (window.Intercom) {
        window.Intercom('shutdown');
      }
      window.removeEventListener('load', loadIntercom);
    };
  }, []);

  return null;
} 