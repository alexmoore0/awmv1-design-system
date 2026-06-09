import { ICON } from './_icons.js';

export default {
  title: 'Forms/Field',
  tags: ['autodocs'],
  argTypes: {
    label:       { control: 'text' },
    placeholder: { control: 'text' },
    value:       { control: 'text' },
    hint:        { control: 'text' },
    required:    { control: 'boolean' },
    error:       { control: 'boolean' },
    disabled:    { control: 'boolean' }
  },
  args: {
    label: 'Email address', placeholder: 'you@example.com', value: '',
    hint: "We'll only use this to send build notifications.",
    required: true, error: false, disabled: false
  },
  render: (a) =>
    `<div class="awm-field" style="width:340px">
      <label class="awm-label">${a.label}${a.required ? ' <span class="awm-req">*</span>' : ''}</label>
      <input class="awm-input${a.error ? ' is-error' : ''}" type="text" placeholder="${a.placeholder}" value="${a.value}"${a.disabled ? ' disabled' : ''}>
      ${a.error ? '<span class="awm-error-text">Please enter a valid email.</span>'
                : (a.hint ? `<span class="awm-hint">${a.hint}</span>` : '')}
    </div>`
};

export const Default  = {};
export const Error     = { args: { error: true, value: 'not-an-email' } };
export const Disabled  = { args: { disabled: true, value: 'locked@awm.studio' } };

export const Select = {
  argTypes: { label: { control: 'text' }, disabled: { control: 'boolean' } },
  args: { label: 'Visibility', disabled: false },
  render: (a) =>
    `<div class="awm-field" style="width:340px">
      <label class="awm-label">${a.label}</label>
      <select class="awm-select"${a.disabled ? ' disabled' : ''}><option>Public</option><option>Unlisted</option><option>Private</option></select>
    </div>`
};

export const Textarea = {
  argTypes: { label: { control: 'text' }, placeholder: { control: 'text' } },
  args: { label: 'Notes', placeholder: 'Optional release notes…' },
  render: (a) =>
    `<div class="awm-field" style="width:340px">
      <label class="awm-label">${a.label}</label>
      <textarea class="awm-textarea" placeholder="${a.placeholder}"></textarea>
    </div>`
};

export const Checkbox = {
  argTypes: { label: { control: 'text' }, checked: { control: 'boolean' } },
  args: { label: 'Email me on deploy', checked: true },
  render: (a) =>
    `<label class="awm-check"><input type="checkbox"${a.checked ? ' checked' : ''}><span class="awm-box">${ICON.check}</span> ${a.label}</label>`
};

export const Switch = {
  argTypes: { label: { control: 'text' }, on: { control: 'boolean' } },
  args: { label: 'Auto-publish', on: true },
  render: (a) =>
    `<label class="awm-switch"><input type="checkbox"${a.on ? ' checked' : ''}><span class="awm-track"><span class="awm-thumb"></span></span> ${a.label}</label>`
};
