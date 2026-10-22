declare global {
  interface Window {
    dataLayer?: unknown[];
  }
}

let initialized = false;

function gtag(..._args: unknown[]) {
  window.dataLayer = window.dataLayer || [];
  // Google expects an Arguments object rather than an array.
  // eslint-disable-next-line prefer-rest-params
  window.dataLayer.push(arguments);
}

export function initializeAnalytics(measurementId: string | undefined): boolean {
  const id = measurementId?.trim();
  if (!id || !/^G-[A-Z0-9]+$/.test(id)) return false;
  if (initialized) return true;

  window.dataLayer = window.dataLayer || [];
  gtag('set', 'developer_id.dZjgwMW', true);
  gtag('js', new Date());
  gtag('config', id, { send_page_view: false });

  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(id)}`;
  document.head.appendChild(script);
  initialized = true;
  return true;
}

export function trackPageView(path: string) {
  if (!initialized) return;
  gtag('event', 'page_view', {
    page_path: path,
    page_location: window.location.href,
  });
}