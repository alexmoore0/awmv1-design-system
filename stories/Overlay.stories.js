import { ICON, esc } from './_icons.js';

export default {
  title: 'Overlays/Menu',
  tags: ['autodocs'],
  argTypes: {
    active: { control: 'boolean' },
    danger: { control: 'boolean' }
  },
  args: { active: true, danger: true },
  render: (a) =>
    `<div style="display:flex;align-items:flex-start;gap:16px">
      <button class="awm-btn awm-btn--secondary awm-icon-btn" type="button" aria-haspopup="menu" aria-expanded="true" aria-label="Project actions">${ICON.dots}</button>
      <div class="awm-menu" role="menu" aria-label="Project actions">
        <button class="awm-menu__item${a.active ? ' is-active' : ''}" type="button" role="menuitem"><span class="awm-menu__icon">${ICON.info}</span>View details<span class="awm-menu__meta">D</span></button>
        <button class="awm-menu__item" type="button" role="menuitem"><span class="awm-menu__icon">${ICON.plus}</span>Duplicate</button>
        <button class="awm-menu__item" type="button" role="menuitem"><span class="awm-menu__icon">${ICON.folder}</span>Archive</button>
        <div class="awm-menu__sep" role="separator"></div>
        <button class="awm-menu__item${a.danger ? ' is-danger' : ''}" type="button" role="menuitem"><span class="awm-menu__icon">${ICON.warn}</span>Delete project</button>
      </div>
    </div>`
};

export const Open = {};

export const Tooltip = {
  title: 'Overlays/Tooltip',
  argTypes: {
    label: { control: 'text' },
    placement: { control: 'inline-radio', options: ['top', 'bottom', 'left', 'right'] }
  },
  args: { label: 'Copy preview URL', placement: 'top' },
  render: (a) =>
    `<div style="padding:42px">
      <span class="awm-tooltip awm-tooltip--${a.placement}" role="tooltip">${esc(a.label)}</span>
    </div>`
};
