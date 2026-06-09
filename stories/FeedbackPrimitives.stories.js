import { ICON, esc } from './_icons.js';

const alertIcon = (variant) => {
  if (variant === 'success') return ICON.ok;
  if (variant === 'warning' || variant === 'danger') return ICON.warn;
  return ICON.info;
};

export default {
  title: 'Feedback/Alert',
  tags: ['autodocs'],
  argTypes: {
    title: { control: 'text' },
    body: { control: 'text' },
    variant: { control: 'select', options: ['default', 'accent', 'success', 'warning', 'danger'] }
  },
  args: {
    title: 'Preview deploy ready',
    body: 'Review the generated URL before promoting this build to production.',
    variant: 'accent'
  },
  render: (a) =>
    `<div class="awm-alert${a.variant !== 'default' ? ' awm-alert--' + a.variant : ''}" role="status">
      <span class="awm-alert__icon">${alertIcon(a.variant)}</span>
      <div>
        <strong class="awm-alert__title">${esc(a.title)}</strong>
        <p class="awm-alert__body">${esc(a.body)}</p>
      </div>
    </div>`
};

export const Accent = {};
export const Success = { args: { variant: 'success', title: 'Settings saved', body: 'Your changes are now live across the workspace.' } };
export const Warning = { args: { variant: 'warning', title: 'Usage near limit', body: 'This workspace has used 86% of its monthly build minutes.' } };
export const Danger = { args: { variant: 'danger', title: 'Build failed', body: 'The deploy step exited with code 1. Check the logs before retrying.' } };
