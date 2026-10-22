import { beforeEach, describe, expect, it, vi } from 'vitest';

beforeEach(() => {
  vi.resetModules();
  document.head.innerHTML = '';
  window.dataLayer = [];
});

describe('Google Analytics', () => {
  it('loads the tag only once and disables automatic initial page views', async () => {
    const { initializeAnalytics } = await import('./analytics');
    expect(initializeAnalytics(' G-TEST123 ')).toBe(true);
    initializeAnalytics('G-TEST123');
    expect(document.querySelectorAll('script')).toHaveLength(1);
    const commands = window.dataLayer?.map(item => Array.from(item as ArrayLike<unknown>));
    expect(commands).toContainEqual(['config', 'G-TEST123', { send_page_view: false }]);
  });

  it('tracks the initial page and subsequent page paths', async () => {
    const { initializeAnalytics, trackPageView } = await import('./analytics');
    initializeAnalytics('G-TEST123');
    trackPageView('/');
    trackPageView('/morph-sculpt-facial');
    const events = window.dataLayer?.map(item => Array.from(item as ArrayLike<unknown>))
      .filter(item => item[0] === 'event');
    expect(events).toEqual([
      ['event', 'page_view', { page_path: '/', page_location: window.location.href }],
      ['event', 'page_view', { page_path: '/morph-sculpt-facial', page_location: window.location.href }],
    ]);
  });

  it('leaves the site working when no valid ID is configured', async () => {
    const { initializeAnalytics, trackPageView } = await import('./analytics');
    expect(initializeAnalytics(undefined)).toBe(false);
    expect(initializeAnalytics('@secret:GOOGLE_ANALYTICS_MEASUREMENT_ID')).toBe(false);
    trackPageView('/');
    expect(document.querySelectorAll('script')).toHaveLength(0);
    expect(window.dataLayer).toEqual([]);
  });
});