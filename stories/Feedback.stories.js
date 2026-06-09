import { ICON } from './_icons.js';

export default {
  title: 'Feedback/Modal',
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
  argTypes: {
    title:   { control: 'text' },
    body:    { control: 'text' },
    confirm: { control: 'text' },
    danger:  { control: 'boolean' }
  },
  args: {
    title: 'Delete this project?',
    body: "This removes deploy-pipeline and all of its build history. This action can't be undone.",
    confirm: 'Delete project', danger: true
  },
  render: (a) =>
    `<div class="awm-modal" style="animation:none">
      <div class="awm-modal__header">
        <h3 class="awm-modal__title">${a.title}</h3>
        <button class="awm-btn awm-btn--ghost awm-icon-btn awm-btn--sm" aria-label="Close">${ICON.close}</button>
      </div>
      <div class="awm-modal__body">${a.body}</div>
      <div class="awm-modal__footer">
        <button class="awm-btn awm-btn--secondary">Cancel</button>
        <button class="awm-btn awm-btn--${a.danger ? 'danger' : 'primary'}">${a.confirm}</button>
      </div>
    </div>`
};

export const Confirm = {};
export const Neutral = { args: { danger: false, title: 'Rename project', body: 'Choose a new name for this project.', confirm: 'Save name' } };

export const Toast = {
  parameters: { backgrounds: { default: 'paper' } },
  argTypes: {
    title:  { control: 'text' },
    msg:    { control: 'text' },
    status: { control: 'inline-radio', options: ['success', 'danger'] }
  },
  args: { title: 'Deployed to production', msg: 'v1.4.0 is live · 1m 12s', status: 'success' },
  render: (a) =>
    `<div class="awm-toast">
      <span class="awm-toast__icon awm-toast__icon--${a.status}">${a.status === 'success' ? ICON.ok : ICON.warn}</span>
      <div class="awm-toast__body"><span class="awm-toast__title">${a.title}</span><span class="awm-toast__msg">${a.msg}</span></div>
      <button class="awm-toast__close" aria-label="Dismiss">${ICON.close}</button>
    </div>`
};
