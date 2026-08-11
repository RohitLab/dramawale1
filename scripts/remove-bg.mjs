// scripts/remove-bg.mjs
// Removes near-black pixels from logo-mask.png and saves a transparent PNG

import sharp from 'sharp';
import { readFileSync, writeFileSync } from 'fs';
import { fileURLToPath } from 'url';
import path from 'path';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const inputPath  = path.join(__dirname, '../public/logo-mask.png');
const outputPath = path.join(__dirname, '../public/logo-mask.png');

const image = sharp(readFileSync(inputPath));
const { data, info } = await image
  .ensureAlpha()
  .raw()
  .toBuffer({ resolveWithObject: true });

const { width, height, channels } = info;   // channels === 4 (RGBA)
const buf = Buffer.from(data);

// Threshold: pixels where R<40, G<40, B<40 → alpha = 0
// Near-black anti-alias pixels get partial transparency
for (let i = 0; i < buf.length; i += 4) {
  const r = buf[i], g = buf[i+1], b = buf[i+2];
  const darkness = Math.max(r, g, b);         // how bright is the darkest channel?
  if (darkness < 40) {
    buf[i+3] = 0;                             // fully transparent
  } else if (darkness < 80) {
    // Soft edge: scale alpha proportionally for smooth anti-alias
    buf[i+3] = Math.round((darkness - 40) / 40 * 255);
  }
  // else: keep original alpha
}

// Find tight bounding box of non-transparent pixels
let minX = width, maxX = 0, minY = height, maxY = 0;
for (let y = 0; y < height; y++) {
  for (let x = 0; x < width; x++) {
    const alpha = buf[(y * width + x) * 4 + 3];
    if (alpha > 10) {
      if (x < minX) minX = x;
      if (x > maxX) maxX = x;
      if (y < minY) minY = y;
      if (y > maxY) maxY = y;
    }
  }
}

console.log(`Icon bounding box: (${minX},${minY}) → (${maxX},${maxY})`);
const pad = 16;
const left   = Math.max(0, minX - pad);
const top    = Math.max(0, minY - pad);
const right  = Math.min(width,  maxX + pad);
const bottom = Math.min(height, maxY + pad);
const cropW  = right - left;
const cropH  = bottom - top;

// Crop the buffer
const croppedBuf = Buffer.alloc(cropW * cropH * 4);
for (let y = 0; y < cropH; y++) {
  const srcRow = (y + top) * width + left;
  const dstRow = y * cropW;
  buf.copy(croppedBuf, dstRow * 4, srcRow * 4, (srcRow + cropW) * 4);
}

// Save as PNG
await sharp(croppedBuf, { raw: { width: cropW, height: cropH, channels: 4 } })
  .png()
  .toFile(outputPath);

console.log(`Saved transparent logo: ${cropW}×${cropH}px → ${outputPath}`);
