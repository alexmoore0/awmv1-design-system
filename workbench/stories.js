/* AWMv1 Workbench — story definitions
   Each story = { id, name, group, knobs, render(args) -> html string }.
   Knob types: text | select | boolean | number.
   The same component.css classes the rest of the system uses are rendered here,
   so the workbench is a true mirror of the library. */

const ICON = {
  plus: '<svg width="15" height="15" viewBox="0 0 16 16" fill="none"><path d="M8 3v10M3 8h10" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/></svg>',
  check: '<svg viewBox="0 0 12 12" fill="none"><path d="M2.5 6.5 5 9l4.5-5" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  x: '<svg width="9" height="9" viewBox="0 0 10 10" fill="none"><path d="M2 2l6 6M8 2l-6 6" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/></svg>',
  close: '<svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M3 3l8 8M11 3l-8 8" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>',
  ok: '<svg viewBox="0 0 18 18" fill="none"><circle cx="9" cy="9" r="8" stroke="currentColor" stroke-width="1.4"/><path d="M5.5 9.2 8 11.5l4.5-5" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  warn: '<svg viewBox="0 0 18 18" fill="none"><circle cx="9" cy="9" r="8" stroke="currentColor" stroke-width="1.4"/><path d="M9 5v4.5M9 12h.01" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>',
  info: '<svg viewBox="0 0 18 18" fill="none"><circle cx="9" cy="9" r="8" stroke="currentColor" stroke-width="1.4"/><path d="M9 8v5M9 5h.01" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>',
  dots: '<svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M4 8h.01M8 8h.01M12 8h.01" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>',
  folder: '<svg viewBox="0 0 18 18" fill="none"><path d="M2.5 5.5h5l1.2 1.5h6.8v6.5a1 1 0 0 1-1 1h-11a1 1 0 0 1-1-1v-8Z" stroke="currentColor" stroke-width="1.4" stroke-linejoin="round"/></svg>'
};

const sizeMod = (s) => (s && s !== 'md') ? ` awm-btn--${s}` : '';
const esc = (value) => String(value ?? '')
  .replace(/&/g, '&amp;')
  .replace(/</g, '&lt;')
  .replace(/>/g, '&gt;')
  .replace(/"/g, '&quot;')
  .replace(/'/g, '&#39;');
const alertIcon = (variant) => {
  if (variant === 'success') return ICON.ok;
  if (variant === 'warning' || variant === 'danger') return ICON.warn;
  return ICON.info;
};

const AWM_STORIES = [
  /* ---------------------------------------------------- ACTIONS */
  {
    id: 'button', name: 'Button', group: 'Actions',
    knobs: {
      label:   { type: 'text',    default: 'Save changes' },
      variant: { type: 'select',  options: ['primary','secondary','ink','ghost','danger'], default: 'primary' },
      size:    { type: 'select',  options: ['sm','md','lg'], default: 'md' },
      icon:    { type: 'boolean', default: false },
      block:   { type: 'boolean', default: false },
      disabled:{ type: 'boolean', default: false }
    },
    render: (a) => `<button class="awm-btn awm-btn--${a.variant}${sizeMod(a.size)}${a.block ? ' awm-btn--block' : ''}"${a.disabled ? ' disabled' : ''}>${a.icon ? ICON.plus + ' ' : ''}${esc(a.label)}</button>`
  },
  {
    id: 'icon-button', name: 'Icon button', group: 'Actions',
    knobs: {
      variant: { type: 'select', options: ['primary','secondary','ink','ghost'], default: 'secondary' },
      size:    { type: 'select', options: ['sm','md','lg'], default: 'md' }
    },
    render: (a) => `<button class="awm-btn awm-btn--${a.variant}${sizeMod(a.size)} awm-icon-btn" aria-label="Add">${ICON.plus}</button>`
  },
  {
    id: 'link', name: 'Link', group: 'Actions',
    knobs: {
      label: { type: 'text', default: 'full changelog' },
      muted: { type: 'boolean', default: false }
    },
    render: (a) => `<span style="font-family:var(--font-sans);font-size:var(--text-base);color:var(--text-body)">Read the <a href="#" class="awm-link${a.muted ? ' awm-link--muted' : ''}">${esc(a.label)}</a>.</span>`
  },

  /* ---------------------------------------------------- FORMS */
  {
    id: 'input', name: 'Text input', group: 'Forms',
    knobs: {
      label:       { type: 'text',    default: 'Email address' },
      placeholder: { type: 'text',    default: 'you@example.com' },
      value:       { type: 'text',    default: '' },
      hint:        { type: 'text',    default: "We'll only use this to send build notifications." },
      required:    { type: 'boolean', default: true },
      error:       { type: 'boolean', default: false },
      disabled:    { type: 'boolean', default: false }
    },
    render: (a) => `<div class="awm-field" style="max-width:360px">
  <label class="awm-label" for="wb-email">${esc(a.label)}${a.required ? ' <span class="awm-req">*</span>' : ''}</label>
  <input class="awm-input${a.error ? ' is-error' : ''}" id="wb-email" type="email" placeholder="${esc(a.placeholder)}" value="${esc(a.value)}"${a.disabled ? ' disabled' : ''}>
  ${a.error ? '<span class="awm-error-text">Please enter a valid email.</span>' : (a.hint ? `<span class="awm-hint">${esc(a.hint)}</span>` : '')}
</div>`
  },
  {
    id: 'input-group', name: 'Input + affix', group: 'Forms',
    knobs: {
      affix:       { type: 'text', default: 'awm.studio/' },
      placeholder: { type: 'text', default: 'handle' }
    },
    render: (a) => `<div class="awm-field" style="max-width:360px">
  <label class="awm-label" for="wb-username">Username</label>
  <div class="awm-input-group">
    <span class="awm-affix">${esc(a.affix)}</span>
    <input class="awm-input" id="wb-username" type="text" placeholder="${esc(a.placeholder)}">
  </div>
</div>`
  },
  {
    id: 'textarea', name: 'Textarea', group: 'Forms',
    knobs: {
      label:       { type: 'text',    default: 'Notes' },
      placeholder: { type: 'text',    default: 'Optional release notes…' },
      disabled:    { type: 'boolean', default: false }
    },
    render: (a) => `<div class="awm-field" style="max-width:360px">
  <label class="awm-label" for="wb-notes">${esc(a.label)}</label>
  <textarea class="awm-textarea" id="wb-notes" placeholder="${esc(a.placeholder)}"${a.disabled ? ' disabled' : ''}></textarea>
</div>`
  },
  {
    id: 'select', name: 'Select', group: 'Forms',
    knobs: {
      label:    { type: 'text',    default: 'Visibility' },
      disabled: { type: 'boolean', default: false }
    },
    render: (a) => `<div class="awm-field" style="max-width:360px">
  <label class="awm-label" for="wb-visibility">${esc(a.label)}</label>
  <select class="awm-select" id="wb-visibility"${a.disabled ? ' disabled' : ''}>
    <option>Public</option><option>Unlisted</option><option>Private</option>
  </select>
</div>`
  },
  {
    id: 'checkbox', name: 'Checkbox', group: 'Forms',
    knobs: {
      label:   { type: 'text',    default: 'Email me on deploy' },
      checked: { type: 'boolean', default: true }
    },
    render: (a) => `<label class="awm-check"><input type="checkbox"${a.checked ? ' checked' : ''}><span class="awm-box">${ICON.check}</span> ${esc(a.label)}</label>`
  },
  {
    id: 'radio', name: 'Radio', group: 'Forms',
    knobs: {
      checked: { type: 'boolean', default: true }
    },
    render: (a) => `<div style="display:flex;flex-direction:column;gap:12px">
  <label class="awm-check awm-check--radio"><input type="radio" name="wb-r"${a.checked ? ' checked' : ''}><span class="awm-box"><span class="awm-dot"></span></span> Production</label>
  <label class="awm-check awm-check--radio"><input type="radio" name="wb-r"${a.checked ? '' : ' checked'}><span class="awm-box"><span class="awm-dot"></span></span> Preview</label>
</div>`
  },
  {
    id: 'switch', name: 'Switch', group: 'Forms',
    knobs: {
      label: { type: 'text',    default: 'Auto-publish' },
      on:    { type: 'boolean', default: true }
    },
    render: (a) => `<label class="awm-switch"><input type="checkbox"${a.on ? ' checked' : ''}><span class="awm-track"><span class="awm-thumb"></span></span> ${esc(a.label)}</label>`
  },

  /* ---------------------------------------------------- SURFACES */
  {
    id: 'card', name: 'Card', group: 'Surfaces',
    knobs: {
      eyebrow: { type: 'text',    default: 'Project · v1.4.0' },
      title:   { type: 'text',    default: 'Deploy pipeline' },
      body:    { type: 'text',    default: 'Continuous builds from main, with preview URLs on every pull request.' },
      serif:   { type: 'boolean', default: false },
      hover:   { type: 'boolean', default: true }
    },
    render: (a) => `<div class="awm-card${a.hover ? ' awm-card--hover' : ''}" style="max-width:360px">
  <p class="awm-card__eyebrow">${esc(a.eyebrow)}</p>
  <h3 class="awm-card__title${a.serif ? ' awm-card__title--serif' : ''}">${esc(a.title)}</h3>
  <p class="awm-card__body">${esc(a.body)}</p>
</div>`
  },
  {
    id: 'badge', name: 'Badge', group: 'Surfaces',
    knobs: {
      label:   { type: 'text',    default: 'Live' },
      variant: { type: 'select',  options: ['default','accent','success','warning','danger','ink'], default: 'success' },
      dot:     { type: 'boolean', default: true }
    },
    render: (a) => `<span class="awm-badge${a.variant !== 'default' ? ' awm-badge--' + a.variant : ''}">${a.dot ? '<span class="awm-badge__dot"></span> ' : ''}${esc(a.label)}</span>`
  },
  {
    id: 'tag', name: 'Tag', group: 'Surfaces',
    knobs: {
      label:     { type: 'text',    default: 'design systems' },
      accent:    { type: 'boolean', default: false },
      removable: { type: 'boolean', default: true }
    },
    render: (a) => `<span class="awm-tag${a.accent ? ' awm-tag--accent' : ''}">${esc(a.label)}${a.removable ? ` <span class="awm-tag__x">${ICON.x}</span>` : ''}</span>`
  },

  /* ---------------------------------------------------- NAVIGATION */
  {
    id: 'tabs', name: 'Tabs', group: 'Navigation',
    knobs: {
      active: { type: 'select', options: ['Overview','Activity','Settings','Members'], default: 'Overview' }
    },
    render: (a) => {
      const items = ['Overview','Activity','Settings','Members'];
      return `<div class="awm-tabs" style="min-width:420px"><div class="awm-tabs__list" role="tablist" aria-label="Project sections">
  ${items.map((t, i) => `<button class="awm-tab${t === a.active ? ' is-active' : ''}" id="wb-tab-${i}" type="button" role="tab" aria-selected="${t === a.active}" aria-controls="wb-panel-${i}"${t === a.active ? '' : ' tabindex="-1"'}>${t}</button>`).join('\n  ')}
</div></div>`;
    }
  },
  {
    id: 'segmented', name: 'Segmented', group: 'Navigation',
    knobs: {
      active: { type: 'select', options: ['Day','Week','Month'], default: 'Week' }
    },
    render: (a) => {
      const items = ['Day','Week','Month'];
      return `<div class="awm-segmented" role="group" aria-label="Date range">
  ${items.map(t => `<button class="awm-segmented__item${t === a.active ? ' is-active' : ''}" type="button" aria-pressed="${t === a.active}">${t}</button>`).join('\n  ')}
</div>`;
    }
  },
  {
    id: 'breadcrumbs', name: 'Breadcrumbs', group: 'Navigation',
    knobs: {
      current: { type: 'text', default: 'deploy-pipeline' }
    },
    render: (a) => `<nav class="awm-breadcrumbs" aria-label="Breadcrumb">
  <a href="#">Workspace</a>
  <span class="awm-breadcrumbs__sep">/</span>
  <a href="#">Projects</a>
  <span class="awm-breadcrumbs__sep">/</span>
  <span aria-current="page">${esc(a.current)}</span>
</nav>`
  },

  /* ---------------------------------------------------- OVERLAYS */
  {
    id: 'menu', name: 'Dropdown menu', group: 'Overlays',
    knobs: {
      active: { type: 'boolean', default: true },
      danger: { type: 'boolean', default: true }
    },
    render: (a) => `<div style="display:flex;align-items:flex-start;gap:16px">
  <button class="awm-btn awm-btn--secondary awm-icon-btn" type="button" aria-haspopup="menu" aria-expanded="true" aria-label="Project actions">${ICON.dots}</button>
  <div class="awm-menu" role="menu" aria-label="Project actions">
    <button class="awm-menu__item${a.active ? ' is-active' : ''}" type="button" role="menuitem"><span class="awm-menu__icon">${ICON.info}</span>View details<span class="awm-menu__meta">D</span></button>
    <button class="awm-menu__item" type="button" role="menuitem"><span class="awm-menu__icon">${ICON.plus}</span>Duplicate</button>
    <button class="awm-menu__item" type="button" role="menuitem"><span class="awm-menu__icon">${ICON.folder}</span>Archive</button>
    <div class="awm-menu__sep" role="separator"></div>
    <button class="awm-menu__item${a.danger ? ' is-danger' : ''}" type="button" role="menuitem"><span class="awm-menu__icon">${ICON.warn}</span>Delete project</button>
  </div>
</div>`
  },
  {
    id: 'tooltip', name: 'Tooltip', group: 'Overlays',
    knobs: {
      label: { type: 'text', default: 'Copy preview URL' },
      placement: { type: 'select', options: ['top','bottom','left','right'], default: 'top' }
    },
    render: (a) => `<div style="padding:42px">
  <span class="awm-tooltip awm-tooltip--${a.placement}" role="tooltip">${esc(a.label)}</span>
</div>`
  },

  /* ---------------------------------------------------- DATA */
  {
    id: 'table', name: 'Table', group: 'Data',
    knobs: {},
    render: () => `<div class="awm-table-wrap" style="width:720px">
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
  },
  {
    id: 'empty', name: 'Empty state', group: 'Data',
    knobs: {
      title: { type: 'text', default: 'No projects yet' },
      body: { type: 'text', default: 'Create a project to start tracking builds, preview URLs, and deploy history.' },
      action: { type: 'text', default: 'New project' }
    },
    render: (a) => `<div class="awm-empty" style="width:460px">
  <div class="awm-empty__icon">${ICON.folder}</div>
  <h3 class="awm-empty__title">${esc(a.title)}</h3>
  <p class="awm-empty__body">${esc(a.body)}</p>
  <div class="awm-empty__actions">
    <button class="awm-btn awm-btn--primary">${esc(a.action)}</button>
    <button class="awm-btn awm-btn--secondary">Import</button>
  </div>
</div>`
  },

  /* ---------------------------------------------------- FEEDBACK */
  {
    id: 'alert', name: 'Alert', group: 'Feedback',
    knobs: {
      title: { type: 'text', default: 'Preview deploy ready' },
      body: { type: 'text', default: 'Review the generated URL before promoting this build to production.' },
      variant: { type: 'select', options: ['default','accent','success','warning','danger'], default: 'accent' }
    },
    render: (a) => `<div class="awm-alert${a.variant !== 'default' ? ' awm-alert--' + a.variant : ''}" role="status">
  <span class="awm-alert__icon">${alertIcon(a.variant)}</span>
  <div>
    <strong class="awm-alert__title">${esc(a.title)}</strong>
    <p class="awm-alert__body">${esc(a.body)}</p>
  </div>
</div>`
  },
  {
    id: 'modal', name: 'Modal', group: 'Feedback',
    knobs: {
      title:   { type: 'text', default: 'Delete this project?' },
      body:    { type: 'text', default: "This removes deploy-pipeline and all of its build history. This action can't be undone." },
      confirm: { type: 'text', default: 'Delete project' },
      danger:  { type: 'boolean', default: true }
    },
    render: (a) => `<div class="awm-modal" role="dialog" aria-modal="true" aria-labelledby="wb-modal-title" aria-describedby="wb-modal-body" style="animation:none">
  <div class="awm-modal__header">
    <h3 class="awm-modal__title" id="wb-modal-title">${esc(a.title)}</h3>
    <button class="awm-btn awm-btn--ghost awm-icon-btn awm-btn--sm" aria-label="Close">${ICON.close}</button>
  </div>
  <div class="awm-modal__body" id="wb-modal-body">${esc(a.body)}</div>
  <div class="awm-modal__footer">
    <button class="awm-btn awm-btn--secondary">Cancel</button>
    <button class="awm-btn awm-btn--${a.danger ? 'danger' : 'primary'}">${esc(a.confirm)}</button>
  </div>
</div>`
  },
  {
    id: 'toast', name: 'Toast', group: 'Feedback',
    knobs: {
      title:  { type: 'text',   default: 'Deployed to production' },
      msg:    { type: 'text',   default: 'v1.4.0 is live · 1m 12s' },
      status: { type: 'select', options: ['success','danger'], default: 'success' }
    },
    render: (a) => `<div class="awm-toast" role="status" aria-live="polite">
  <span class="awm-toast__icon awm-toast__icon--${a.status}">${a.status === 'success' ? ICON.ok : ICON.warn}</span>
  <div class="awm-toast__body"><span class="awm-toast__title">${esc(a.title)}</span><span class="awm-toast__msg">${esc(a.msg)}</span></div>
  <button class="awm-toast__close" aria-label="Dismiss">${ICON.close}</button>
</div>`
  }
];

window.AWM_STORIES = AWM_STORIES;
