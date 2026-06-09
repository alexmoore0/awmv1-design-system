export default {
  title: 'Navigation/Tabs',
  tags: ['autodocs'],
  argTypes: {
    active: { control: 'inline-radio', options: ['Overview', 'Activity', 'Settings', 'Members'] }
  },
  args: { active: 'Overview' },
  render: (a) => {
    const items = ['Overview', 'Activity', 'Settings', 'Members'];
    return `<div class="awm-tabs" style="min-width:420px"><div class="awm-tabs__list">` +
      items.map((t) => `<button class="awm-tab${t === a.active ? ' is-active' : ''}">${t}</button>`).join('') +
      `</div></div>`;
  }
};

export const Underline = {};

export const Segmented = {
  argTypes: { active: { control: 'inline-radio', options: ['Day', 'Week', 'Month'] } },
  args: { active: 'Week' },
  render: (a) => {
    const items = ['Day', 'Week', 'Month'];
    return `<div class="awm-segmented">` +
      items.map((t) => `<button class="awm-segmented__item${t === a.active ? ' is-active' : ''}">${t}</button>`).join('') +
      `</div>`;
  }
};
