import { ICON } from './_icons.js';

export default {
  title: 'Surfaces/Card',
  tags: ['autodocs'],
  argTypes: {
    eyebrow: { control: 'text' },
    title:   { control: 'text' },
    body:    { control: 'text' },
    serif:   { control: 'boolean', description: 'Editorial serif title' },
    hover:   { control: 'boolean' }
  },
  args: {
    eyebrow: 'Project · v1.4.0',
    title: 'Deploy pipeline',
    body: 'Continuous builds from main, with preview URLs on every pull request.',
    serif: false, hover: true
  },
  render: (a) =>
    `<div class="awm-card${a.hover ? ' awm-card--hover' : ''}" style="width:340px">
      <p class="awm-card__eyebrow">${a.eyebrow}</p>
      <h3 class="awm-card__title${a.serif ? ' awm-card__title--serif' : ''}">${a.title}</h3>
      <p class="awm-card__body">${a.body}</p>
    </div>`
};

export const Default    = {};
export const Editorial  = { args: { serif: true, eyebrow: 'Essay · 12 min read', title: 'On quiet interfaces', body: 'A short argument for tools that recede.' } };

export const Badge = {
  argTypes: {
    label:   { control: 'text' },
    variant: { control: 'select', options: ['default', 'accent', 'success', 'warning', 'danger', 'ink'] },
    dot:     { control: 'boolean' }
  },
  args: { label: 'Live', variant: 'success', dot: true },
  render: (a) =>
    `<span class="awm-badge${a.variant !== 'default' ? ' awm-badge--' + a.variant : ''}">${a.dot ? '<span class="awm-badge__dot"></span> ' : ''}${a.label}</span>`
};

export const Tag = {
  argTypes: {
    label:     { control: 'text' },
    accent:    { control: 'boolean' },
    removable: { control: 'boolean' }
  },
  args: { label: 'design systems', accent: false, removable: true },
  render: (a) =>
    `<span class="awm-tag${a.accent ? ' awm-tag--accent' : ''}">${a.label}${a.removable ? ` <span class="awm-tag__x">${ICON.x}</span>` : ''}</span>`
};
