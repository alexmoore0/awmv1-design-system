/** Shared inline-SVG icons for stories (kept tiny and stroke-based). */
export const ICON = {
  plus:  '<svg width="15" height="15" viewBox="0 0 16 16" fill="none"><path d="M8 3v10M3 8h10" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/></svg>',
  check: '<svg viewBox="0 0 12 12" fill="none"><path d="M2.5 6.5 5 9l4.5-5" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  x:     '<svg width="9" height="9" viewBox="0 0 10 10" fill="none"><path d="M2 2l6 6M8 2l-6 6" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/></svg>',
  close: '<svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M3 3l8 8M11 3l-8 8" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>',
  ok:    '<svg viewBox="0 0 18 18" fill="none"><circle cx="9" cy="9" r="8" stroke="currentColor" stroke-width="1.4"/><path d="M5.5 9.2 8 11.5l4.5-5" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  warn:  '<svg viewBox="0 0 18 18" fill="none"><circle cx="9" cy="9" r="8" stroke="currentColor" stroke-width="1.4"/><path d="M9 5v4.5M9 12h.01" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>',
  info:  '<svg viewBox="0 0 18 18" fill="none"><circle cx="9" cy="9" r="8" stroke="currentColor" stroke-width="1.4"/><path d="M9 8v5M9 5h.01" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>',
  dots:  '<svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M4 8h.01M8 8h.01M12 8h.01" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>',
  folder:'<svg viewBox="0 0 18 18" fill="none"><path d="M2.5 5.5h5l1.2 1.5h6.8v6.5a1 1 0 0 1-1 1h-11a1 1 0 0 1-1-1v-8Z" stroke="currentColor" stroke-width="1.4" stroke-linejoin="round"/></svg>'
};

export const sizeMod = (s) => (s && s !== 'md') ? ` awm-btn--${s}` : '';

export const esc = (value) => String(value ?? '')
  .replace(/&/g, '&amp;')
  .replace(/</g, '&lt;')
  .replace(/>/g, '&gt;')
  .replace(/"/g, '&quot;')
  .replace(/'/g, '&#39;');
