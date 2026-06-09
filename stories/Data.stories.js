import { ICON, esc } from './_icons.js';

export default {
  title: 'Data/Table',
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
  render: () =>
    `<div class="awm-table-wrap" style="width:720px">
      <table class="awm-table">
        <thead>
          <tr><th>Project</th><th>Status</th><th>Updated</th><th class="awm-table__numeric">Builds</th></tr>
        </thead>
        <tbody>
          <tr>
            <td><span class="awm-table__cell-main">deploy-pipeline</span><span class="awm-table__cell-meta">main · edge</span></td>
            <td><span class="awm-badge awm-badge--success"><span class="awm-badge__dot"></span> Live</span></td>
            <td>2m ago</td>
            <td class="awm-table__numeric">248</td>
          </tr>
          <tr>
            <td><span class="awm-table__cell-main">awm-studio-site</span><span class="awm-table__cell-meta">main · static</span></td>
            <td><span class="awm-badge awm-badge--warning">Building</span></td>
            <td>14m ago</td>
            <td class="awm-table__numeric">62</td>
          </tr>
          <tr>
            <td><span class="awm-table__cell-main">notes-api</span><span class="awm-table__cell-meta">main · node</span></td>
            <td><span class="awm-badge awm-badge--danger">Failed</span></td>
            <td>1h ago</td>
            <td class="awm-table__numeric">17</td>
          </tr>
        </tbody>
      </table>
    </div>`
};

export const Default = {};

export const EmptyState = {
  title: 'Data/Empty state',
  argTypes: {
    title: { control: 'text' },
    body: { control: 'text' },
    action: { control: 'text' }
  },
  args: {
    title: 'No projects yet',
    body: 'Create a project to start tracking builds, preview URLs, and deploy history.',
    action: 'New project'
  },
  render: (a) =>
    `<div class="awm-empty" style="width:460px">
      <div class="awm-empty__icon">${ICON.folder}</div>
      <h3 class="awm-empty__title">${esc(a.title)}</h3>
      <p class="awm-empty__body">${esc(a.body)}</p>
      <div class="awm-empty__actions">
        <button class="awm-btn awm-btn--primary">${esc(a.action)}</button>
        <button class="awm-btn awm-btn--secondary">Import</button>
      </div>
    </div>`
};
