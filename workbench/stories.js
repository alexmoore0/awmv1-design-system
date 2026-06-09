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
  warn: '<svg viewBox="0 0 18 18" fill="none"><circle cx="9" cy="9" r="8" stroke="currentColor" stroke-width="1.4"/><path d="M9 5v4.5M9 12h.01" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>'
};

const sizeMod = (s) => (s && s !== 'md') ? ` awm-btn--${s}` : '';

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
    render: (a) => `<button class="awm-btn awm-btn--${a.variant}${sizeMod(a.size)}${a.block ? ' awm-btn--block' : ''}"${a.disabled ? ' disabled' : ''}>${a.icon ? ICON.plus + ' ' : ''}${a.label}</button>`
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
    render: (a) => `<span style="font-family:var(--font-sans);font-size:var(--text-base);color:var(--text-body)">Read the <a href="#" class="awm-link${a.muted ? ' awm-link--muted' : ''}">${a.label}</a>.</span>`
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
  <label class="awm-label">${a.label}${a.required ? ' <span class="awm-req">*</span>' : ''}</label>
  <input class="awm-input${a.error ? ' is-error' : ''}" type="text" placeholder="${a.placeholder}" value="${a.value}"${a.disabled ? ' disabled' : ''}>
  ${a.error ? '<span class="awm-error-text">Please enter a valid email.</span>' : (a.hint ? `<span class="awm-hint">${a.hint}</span>` : '')}
</div>`
  },
  {
    id: 'input-group', name: 'Input + affix', group: 'Forms',
    knobs: {
      affix:       { type: 'text', default: 'awm.studio/' },
      placeholder: { type: 'text', default: 'handle' }
    },
    render: (a) => `<div class="awm-field" style="max-width:360px">
  <label class="awm-label">Username</label>
  <div class="awm-input-group">
    <span class="awm-affix">${a.affix}</span>
    <input class="awm-input" type="text" placeholder="${a.placeholder}">
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
  <label class="awm-label">${a.label}</label>
  <textarea class="awm-textarea" placeholder="${a.placeholder}"${a.disabled ? ' disabled' : ''}></textarea>
</div>`
  },
  {
    id: 'select', name: 'Select', group: 'Forms',
    knobs: {
      label:    { type: 'text',    default: 'Visibility' },
      disabled: { type: 'boolean', default: false }
    },
    render: (a) => `<div class="awm-field" style="max-width:360px">
  <label class="awm-label">${a.label}</label>
  <select class="awm-select"${a.disabled ? ' disabled' : ''}>
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
    render: (a) => `<label class="awm-check"><input type="checkbox"${a.checked ? ' checked' : ''}><span class="awm-box">${ICON.check}</span> ${a.label}</label>`
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
    render: (a) => `<label class="awm-switch"><input type="checkbox"${a.on ? ' checked' : ''}><span class="awm-track"><span class="awm-thumb"></span></span> ${a.label}</label>`
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
  <p class="awm-card__eyebrow">${a.eyebrow}</p>
  <h3 class="awm-card__title${a.serif ? ' awm-card__title--serif' : ''}">${a.title}</h3>
  <p class="awm-card__body">${a.body}</p>
</div>`
  },
  {
    id: 'badge', name: 'Badge', group: 'Surfaces',
    knobs: {
      label:   { type: 'text',    default: 'Live' },
      variant: { type: 'select',  options: ['default','accent','success','warning','danger','ink'], default: 'success' },
      dot:     { type: 'boolean', default: true }
    },
    render: (a) => `<span class="awm-badge${a.variant !== 'default' ? ' awm-badge--' + a.variant : ''}">${a.dot ? '<span class="awm-badge__dot"></span> ' : ''}${a.label}</span>`
  },
  {
    id: 'tag', name: 'Tag', group: 'Surfaces',
    knobs: {
      label:     { type: 'text',    default: 'design systems' },
      accent:    { type: 'boolean', default: false },
      removable: { type: 'boolean', default: true }
    },
    render: (a) => `<span class="awm-tag${a.accent ? ' awm-tag--accent' : ''}">${a.label}${a.removable ? ` <span class="awm-tag__x">${ICON.x}</span>` : ''}</span>`
  },

  /* ---------------------------------------------------- NAVIGATION */
  {
    id: 'tabs', name: 'Tabs', group: 'Navigation',
    knobs: {
      active: { type: 'select', options: ['Overview','Activity','Settings','Members'], default: 'Overview' }
    },
    render: (a) => {
      const items = ['Overview','Activity','Settings','Members'];
      return `<div class="awm-tabs" style="min-width:420px"><div class="awm-tabs__list">
  ${items.map(t => `<button class="awm-tab${t === a.active ? ' is-active' : ''}">${t}</button>`).join('\n  ')}
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
      return `<div class="awm-segmented">
  ${items.map(t => `<button class="awm-segmented__item${t === a.active ? ' is-active' : ''}">${t}</button>`).join('\n  ')}
</div>`;
    }
  },

  /* ---------------------------------------------------- FEEDBACK */
  {
    id: 'modal', name: 'Modal', group: 'Feedback',
    knobs: {
      title:   { type: 'text', default: 'Delete this project?' },
      body:    { type: 'text', default: "This removes deploy-pipeline and all of its build history. This action can't be undone." },
      confirm: { type: 'text', default: 'Delete project' },
      danger:  { type: 'boolean', default: true }
    },
    render: (a) => `<div class="awm-modal" style="animation:none">
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
  },
  {
    id: 'toast', name: 'Toast', group: 'Feedback',
    knobs: {
      title:  { type: 'text',   default: 'Deployed to production' },
      msg:    { type: 'text',   default: 'v1.4.0 is live · 1m 12s' },
      status: { type: 'select', options: ['success','danger'], default: 'success' }
    },
    render: (a) => `<div class="awm-toast">
  <span class="awm-toast__icon awm-toast__icon--${a.status}">${a.status === 'success' ? ICON.ok : ICON.warn}</span>
  <div class="awm-toast__body"><span class="awm-toast__title">${a.title}</span><span class="awm-toast__msg">${a.msg}</span></div>
  <button class="awm-toast__close" aria-label="Dismiss">${ICON.close}</button>
</div>`
  }
];

window.AWM_STORIES = AWM_STORIES;
