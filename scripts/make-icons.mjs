// Generates favicon and app icons from the theme colors in site.config.ts (same mark as the Logo component).
// Run: npm run icons
import sharp from 'sharp';
import { readFileSync, writeFileSync } from 'node:fs';

const cfg = readFileSync(new URL('../src/config/site.config.ts', import.meta.url), 'utf8');
const pick = (key) => cfg.match(new RegExp('[^A-Za-z]' + key + ": *'(#[0-9A-Fa-f]{6})'"))[1];
const grape = pick('grape');
const tendril = pick('tendril');
const name = cfg.match(/name:\s*'([^']+)'/)[1];
const shortName = cfg.match(/shortName:\s*'([^']+)'/)[1];

// pad shrinks the mark for maskable/app icons that need a safe zone
const svg = (pad = 0) => {
  const s = (48 - pad * 2) / 48;
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
  <rect width="48" height="48" rx="${pad ? 0 : 11}" fill="${grape}"/>
  <g transform="translate(${pad} ${pad}) scale(${s})">
    <path d="M24 44V26c0-7 4-12 11-13" fill="none" stroke="#fff" stroke-width="3" stroke-linecap="round"/>
    <path d="M35 13c4-1 6 2 5 5s-5 3-6 0 2-4 3-2" fill="none" stroke="${tendril}" stroke-width="3" stroke-linecap="round"/>
    <path d="M24 30c-6 0-11-4-12-11 6 0 11 4 12 11z" fill="#fff"/>
  </g>
</svg>`;
};

writeFileSync('public/favicon.svg', svg());
const out = [
  ['public/favicon-32.png', 32, 0],
  ['public/apple-touch-icon.png', 180, 6],
  ['public/icon-192.png', 192, 6],
  ['public/icon-512.png', 512, 6],
];
for (const [file, size, pad] of out) {
  await sharp(Buffer.from(svg(pad))).resize(size, size).png().toFile(file);
}
writeFileSync('public/site.webmanifest', JSON.stringify({
  name, short_name: shortName, lang: 'he', dir: 'rtl', start_url: '/', display: 'standalone',
  background_color: grape, theme_color: grape,
  icons: [
    { src: '/icon-192.png', sizes: '192x192', type: 'image/png' },
    { src: '/icon-512.png', sizes: '512x512', type: 'image/png', purpose: 'any maskable' },
  ],
}, null, 2));
console.log('icons written');
