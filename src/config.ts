interface Config {
  intercom: {
    enabled: boolean;
    appId: string;
  };
  analytics: {
    enabled: boolean;
    trackingId: string;
  };
}

const config: Config = {
  intercom: {
    enabled: Boolean(import.meta.env.VITE_INTERCOM_APP_ID),
    appId: import.meta.env.VITE_INTERCOM_APP_ID || '',
  },
  analytics: {
    enabled: Boolean(import.meta.env.VITE_GA_TRACKING_ID),
    trackingId: import.meta.env.VITE_GA_TRACKING_ID || '',
  },
};

export default config; 