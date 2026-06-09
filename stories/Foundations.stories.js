/** Read-only token galleries so the foundations live in Storybook too. */
export default {
  title: 'Foundations/Tokens',
  parameters: { layout: 'fullscreen', controls: { disable: true } }
};

const swatch = (varName, label) =>
  `<div style="border:1px solid var(--border-default)">
     <div style="height:64px;background:var(${varName})"></div>
     <div style="font-family:var(--font-mono);font-size:11px;color:var(--text-subtle);padding:6px 8px">${label}</div>
   </div>`;

export const Neutrals = {
  render: () =>
    `<div style="padding:32px;font-family:var(--font-sans)">
       <div style="display:grid;grid-template-columns:repeat(6,1fr);gap:0;border:1px solid var(--border-default)">
         ${['0','50','100','200','300','400','500','600','700','800','900'].map((n) =>
           `<div style="background:var(--neutral-${n});height:72px;display:flex;align-items:flex-end;padding:6px">
              <span style="font-family:var(--font-mono);font-size:11px;color:${(+n) >= 500 ? '#fff' : '#555'}">${n}</span>
            </div>`).join('')}
       </div>
     </div>`
};

export const Accent = {
  render: () =>
    `<div style="padding:32px;display:grid;grid-template-columns:repeat(7,1fr);gap:12px">
       ${['50','100','200','400','500','600','700'].map((n) => swatch(`--blue-${n}`, `blue ${n}`)).join('')}
     </div>`
};

export const Typography = {
  render: () =>
    `<div style="padding:40px;max-width:760px">
       <p style="font-family:var(--font-mono);font-size:11px;letter-spacing:.12em;text-transform:uppercase;color:var(--text-subtle);margin:0 0 16px">Serif · Newsreader</p>
       <div style="font-family:var(--font-serif);font-size:48px;line-height:1.05;letter-spacing:-.02em;color:var(--text-strong);margin-bottom:28px">The quiet confidence of set type.</div>
       <p style="font-family:var(--font-mono);font-size:11px;letter-spacing:.12em;text-transform:uppercase;color:var(--text-subtle);margin:0 0 12px">Sans · Hanken Grotesk</p>
       <p style="font-family:var(--font-sans);font-size:16px;line-height:1.6;color:var(--text-body);margin:0 0 28px;max-width:60ch">The neutral grotesque that powers every interface surface — labels, buttons, table data, and app-context body copy.</p>
       <p style="font-family:var(--font-mono);font-size:13px;color:var(--text-muted)">Mono · JetBrains Mono · 12 MIN READ · v1.4.0 · MAR 2026</p>
     </div>`
};
