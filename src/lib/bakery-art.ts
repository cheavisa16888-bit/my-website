// BAKERY DRAWINGS — small SVG pictures for the menu page (no photos needed).
// Each drawing is 200×150. Call bakeryArt('doughnut') to get one.

const shadow = `<ellipse cx="100" cy="132" rx="78" ry="10" fill="#000" opacity="0.12"/>`;
const plate = `<ellipse cx="100" cy="124" rx="88" ry="20" fill="#fff" opacity="0.9"/><ellipse cx="100" cy="121" rx="70" ry="13" fill="#f3ece3"/>`;

// A sprinkle: a small rounded line.
const sprinkle = (x: number, y: number, r: number, c: string) =>
  `<rect x="${x}" y="${y}" width="9" height="3" rx="1.5" fill="${c}" transform="rotate(${r} ${x + 4} ${y + 1})"/>`;

// A paper muffin cup with stripes.
const cup = (c: string, dark: string) =>
  `<path d="M52 72 L148 72 L134 128 L66 128 Z" fill="${c}"/>` +
  [62, 78, 94, 110, 126, 140].map((x) => `<line x1="${x}" y1="72" x2="${66 + (x - 52) * 0.71}" y2="128" stroke="${dark}" stroke-width="3"/>`).join('');

// A soft round bun cut open, showing the filling inside.
const bun = (fill: string, fillDark: string) =>
  shadow +
  plate +
  // whole bun at the back
  `<path d="M28 112 C28 62 112 58 112 110 Z" fill="#d68a3c"/><path d="M38 84 C50 66 80 64 94 76" stroke="#f3c07a" stroke-width="6" fill="none" stroke-linecap="round" opacity="0.7"/>` +
  // cut half in front
  `<path d="M84 118 C84 70 176 68 176 118 Z" fill="#c97a2e"/>` +
  `<path d="M92 118 C94 82 166 80 168 118 Z" fill="#fbe7c4"/>` +
  `<path d="M108 118 C110 94 150 92 152 118 Z" fill="${fill}"/>` +
  `<path d="M116 108 C122 100 136 100 142 108" stroke="${fillDark}" stroke-width="3" fill="none" stroke-linecap="round" opacity="0.6"/>` +
  `<circle cx="100" cy="100" r="2" fill="#e9cfa2"/><circle cx="160" cy="104" r="2" fill="#e9cfa2"/>`;

const art: Record<string, string> = {
  doughnut:
    shadow +
    `<ellipse cx="100" cy="88" rx="72" ry="42" fill="#c9792f"/>` +
    `<path d="M34 82 C34 54 166 54 166 82 C166 100 150 98 146 106 C138 116 124 104 116 112 C104 122 92 108 82 114 C68 120 62 104 50 104 C38 102 34 94 34 82 Z" fill="#f48fb1"/>` +
    `<ellipse cx="100" cy="80" rx="20" ry="10" fill="#8a4b1c"/><ellipse cx="100" cy="78" rx="16" ry="7" fill="#f6efe6"/>` +
    `<path d="M52 70 C70 58 92 56 110 58" stroke="#fff" stroke-width="5" fill="none" stroke-linecap="round" opacity="0.6"/>` +
    sprinkle(60, 80, 30, '#fff59d') + sprinkle(130, 70, -20, '#80deea') + sprinkle(78, 96, -40, '#a5d6a7') +
    sprinkle(140, 90, 60, '#fff') + sprinkle(118, 98, 10, '#ffcc80') + sprinkle(70, 64, -10, '#80deea') + sprinkle(140, 60, 40, '#fff59d'),

  'banana-cake':
    shadow + plate +
    `<path d="M36 118 L36 70 C36 44 164 44 164 70 L164 118 Z" fill="#9a5b25"/>` +
    `<path d="M44 118 L44 74 C44 56 156 56 156 74 L156 118 Z" fill="#e8b46a"/>` +
    [[60, 90], [80, 104], [100, 84], [122, 100], [140, 86], [70, 76], [132, 110], [110, 112]].map(([x, y]) => `<circle cx="${x}" cy="${y}" r="2.6" fill="#6d3a14"/>`).join('') +
    [[70, 46], [100, 40], [130, 46]].map(([x, y]) => `<ellipse cx="${x}" cy="${y}" rx="15" ry="8" fill="#fff3b0" stroke="#e0b84a" stroke-width="3"/><circle cx="${x}" cy="${y}" r="2.5" fill="#c8a03a"/>`).join(''),

  'carrot-cake':
    shadow + plate +
    `<path d="M30 118 L30 72 L170 58 L170 104 Z" fill="#b8692c"/>` +
    `<path d="M30 86 L170 72 L170 80 L30 94 Z" fill="#fff6e8"/>` +
    `<path d="M30 104 L170 90 L170 96 L30 110 Z" fill="#fff6e8"/>` +
    `<path d="M30 72 L170 58 L150 46 L22 66 Z" fill="#fff6e8"/>` +
    [[60, 100], [100, 82], [140, 98], [80, 116], [126, 84]].map(([x, y]) => `<circle cx="${x}" cy="${y}" r="2.5" fill="#e67e22"/>`).join('') +
    `<path d="M92 56 L120 46 L112 58 Z" fill="#f57c00"/><path d="M118 46 l10 -10 M118 46 l12 -4 M118 46 l4 -12" stroke="#43a047" stroke-width="4" stroke-linecap="round"/>`,

  'butter-cake':
    shadow + plate +
    `<path d="M40 118 L40 58 Q40 50 48 50 L152 50 Q160 50 160 58 L160 118 Z" fill="#c98a2e"/>` +
    `<path d="M48 118 L48 62 L152 62 L152 118 Z" fill="#f7cf5a"/>` +
    `<path d="M48 62 L152 62" stroke="#a96f1f" stroke-width="5"/>` +
    [[64, 80], [92, 96], [120, 78], [138, 104], [78, 108], [108, 110]].map(([x, y]) => `<ellipse cx="${x}" cy="${y}" rx="3" ry="2" fill="#e8b23e"/>`).join('') +
    `<rect x="84" y="36" width="34" height="18" rx="4" fill="#fff59d" stroke="#f2c94c" stroke-width="2"/>`,

  muffin:
    shadow + cup('#e57373', '#c94f4f') +
    `<path d="M40 76 C30 30 170 30 160 76 C150 84 50 84 40 76 Z" fill="#d89040"/>` +
    `<path d="M60 52 C76 38 108 34 124 40" stroke="#f3c07a" stroke-width="7" fill="none" stroke-linecap="round" opacity="0.7"/>` +
    [[70, 62, '#3949ab'], [100, 50, '#3949ab'], [128, 64, '#3949ab'], [88, 70, '#5c6bc0'], [116, 46, '#5c6bc0']].map(([x, y, c]) => `<circle cx="${x}" cy="${y}" r="5" fill="${c}"/>`).join(''),

  'chocolate-muffin':
    shadow + cup('#8d6e63', '#6d4c41') +
    `<path d="M40 76 C30 30 170 30 160 76 C150 84 50 84 40 76 Z" fill="#5a3220"/>` +
    `<path d="M60 52 C76 38 108 34 124 40" stroke="#8a5a3c" stroke-width="7" fill="none" stroke-linecap="round" opacity="0.8"/>` +
    [[70, 62], [100, 48], [128, 62], [86, 72], [116, 72], [140, 52]].map(([x, y]) => `<path d="M${x - 5} ${y + 4} L${x} ${y - 5} L${x + 5} ${y + 4} Z" fill="#2b140a"/>`).join(''),

  'egg-bun': bun('#ffd54f', '#f9a825'),
  'pandan-bun': bun('#7cb342', '#33691e'),
  'taro-bun': bun('#b39ddb', '#6a4fa3'),

  'hotdog-bun':
    shadow + plate +
    `<path d="M22 102 C22 76 178 76 178 102 C178 122 22 122 22 102 Z" fill="#d68a3c"/>` +
    `<rect x="16" y="80" width="168" height="22" rx="11" fill="#a8432c"/>` +
    `<path d="M24 86 L176 86" stroke="#c96248" stroke-width="4" stroke-linecap="round"/>` +
    `<path d="M30 92 q8 -10 16 0 t16 0 t16 0 t16 0 t16 0 t16 0 t16 0 t16 0 t16 0" stroke="#fdd835" stroke-width="4" fill="none" stroke-linecap="round"/>` +
    `<path d="M26 74 C40 62 160 62 174 74 C150 84 50 84 26 74 Z" fill="#e7a352"/>`,

  'mini-pizza':
    shadow + plate +
    `<ellipse cx="100" cy="92" rx="72" ry="34" fill="#e0a250"/>` +
    `<ellipse cx="100" cy="90" rx="62" ry="27" fill="#d84315"/>` +
    `<path d="M50 88 C60 72 80 84 96 74 C112 66 130 80 148 82 C152 96 132 106 110 108 C88 112 58 104 50 88 Z" fill="#ffe082"/>` +
    [[72, 86], [104, 80], [128, 94], [94, 100]].map(([x, y]) => `<ellipse cx="${x}" cy="${y}" rx="9" ry="5" fill="#b71c1c"/>`).join('') +
    [[84, 76], [118, 104], [140, 84], [64, 96]].map(([x, y]) => `<rect x="${x}" y="${y}" width="7" height="3" rx="1.5" fill="#388e3c"/>`).join(''),

  brownie:
    shadow + plate +
    `<path d="M46 76 L120 60 L158 78 L84 96 Z" fill="#5d3420"/>` +
    `<path d="M46 76 L84 96 L84 124 L46 104 Z" fill="#3b1f12"/>` +
    `<path d="M84 96 L158 78 L158 106 L84 124 Z" fill="#4a2817"/>` +
    `<path d="M66 76 l14 -2 M92 70 l16 4 M104 82 l18 -4 M80 86 l8 3" stroke="#7b4a30" stroke-width="3" stroke-linecap="round"/>` +
    `<ellipse cx="112" cy="70" rx="7" ry="4" fill="#d7a96b"/><ellipse cx="78" cy="80" rx="6" ry="3.5" fill="#d7a96b"/>` +
    [[60, 90], [72, 104], [100, 108], [130, 100], [146, 92]].map(([x, y]) => `<circle cx="${x}" cy="${y}" r="2.4" fill="#2b140a"/>`).join(''),

  brioche:
    shadow + plate +
    [[50, 98, 26], [82, 88, 30], [118, 88, 30], [150, 98, 26]].map(([x, y, r]) => `<ellipse cx="${x}" cy="${y}" rx="${r}" ry="${r * 0.8}" fill="#b8661f"/>`).join('') +
    [[50, 98, 26], [82, 88, 30], [118, 88, 30], [150, 98, 26]].map(([x, y, r]) => `<ellipse cx="${x - 4}" cy="${y - 4}" rx="${r - 6}" ry="${r * 0.8 - 6}" fill="#d9883a"/><ellipse cx="${x - 8}" cy="${y - 12}" rx="${r / 3}" ry="${r / 6}" fill="#f6c27c" opacity="0.8"/>`).join(''),
};

export function bakeryArt(kind: string, label = '') {
  const body = art[kind];
  if (!body) return '';
  return `<svg viewBox="0 0 200 150" role="img" aria-label="${label || kind}" xmlns="http://www.w3.org/2000/svg">${body}</svg>`;
}
