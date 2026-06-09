export default {
  title: 'Navigation/Tabs',
  tags: ['autodocs'],
  argTypes: {
    active: { control: 'inline-radio', options: ['Overview', 'Activity', 'Settings', 'Members'] }
  },
  args: { active: 'Overview' },
  render: (a) => {
    const items = ['Overview', 'Activity', 'Settings', 'Members'];
    return `<div class="awm-tabs" style="min-width:420px"><div class="awm-tabs__list" role="tablist" aria-label="Project sections">` +
      items.map((t, i) => `<button class="awm-tab${t === a.active ? ' is-active' : ''}" id="sb-tab-${i}" type="button" role="tab" aria-selected="${t === a.active}" aria-controls="sb-panel-${i}"${t === a.active ? '' : ' tabindex="-1"'}>${t}</button>`).join('') +
      `</div></div>`;
  }
};

export const Underline = {};

export const Segmented = {
  argTypes: { active: { control: 'inline-radio', options: ['Day', 'Week', 'Month'] } },
  args: { active: 'Week' },
  render: (a) => {
    const items = ['Day', 'Week', 'Month'];
    return `<div class="awm-segmented" role="group" aria-label="Date range">` +
      items.map((t) => `<button class="awm-segmented__item${t === a.active ? ' is-active' : ''}" type="button" aria-pressed="${t === a.active}">${t}</button>`).join('') +
      `</div>`;
  }
};

export const Breadcrumbs = {
  title: 'Navigation/Breadcrumbs',
  render: () =>
    `<nav class="awm-breadcrumbs" aria-label="Breadcrumb">
      <a href="#">Workspace</a>
      <span class="awm-breadcrumbs__sep">/</span>
      <a href="#">Projects</a>
      <span class="awm-breadcrumbs__sep">/</span>
      <span aria-current="page">deploy-pipeline</span>
    </nav>`
};
