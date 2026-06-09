import { ICON, sizeMod } from './_icons.js';

export default {
  title: 'Actions/Button',
  tags: ['autodocs'],
  argTypes: {
    label:    { control: 'text', description: 'Button text' },
    variant:  { control: 'select', options: ['primary', 'secondary', 'ink', 'ghost', 'danger'] },
    size:     { control: 'inline-radio', options: ['sm', 'md', 'lg'] },
    icon:     { control: 'boolean', description: 'Show a leading icon' },
    block:    { control: 'boolean', description: 'Full-width' },
    disabled: { control: 'boolean' }
  },
  args: { label: 'Save changes', variant: 'primary', size: 'md', icon: false, block: false, disabled: false },
  render: (a) =>
    `<button class="awm-btn awm-btn--${a.variant}${sizeMod(a.size)}${a.block ? ' awm-btn--block' : ''}"${a.disabled ? ' disabled' : ''}>` +
    `${a.icon ? ICON.plus + ' ' : ''}${a.label}</button>`
};

export const Primary   = { args: { variant: 'primary' } };
export const Secondary = { args: { variant: 'secondary', label: 'Cancel' } };
export const Ink       = { args: { variant: 'ink', label: 'Publish' } };
export const Ghost     = { args: { variant: 'ghost', label: 'Skip' } };
export const Danger    = { args: { variant: 'danger', label: 'Delete' } };
export const WithIcon  = { args: { icon: true, label: 'Add tag' } };
export const Large     = { args: { size: 'lg' } };
export const Disabled  = { args: { disabled: true, variant: 'secondary', label: 'Disabled' } };
