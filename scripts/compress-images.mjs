// scripts/compress-images.mjs
// Converts all large hero PNG images to WebP for production performance.
// Run: node scripts/compress-images.mjs

import sharp from 'sharp';
import { statSync } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const publicDir = path.join(__dirname, '../public');

// Hero/content images to convert (logos excluded — keep PNG for favicon quality)
const targets = [
  'hero-bg.png',
  'hero-kerala.png',
  'academy-hero.png',
  'scripts-hero.png',
  'mission-kathakali.png',
  'hero-stage.png',
  'kathasang-hero.png',
  'contact-hero.png',
  'school-hero.png',
  'teacher-hero.png',
];

let totalSavedBytes = 0;

for (const filename of targets) {
  const inputPath = path.join(publicDir, filename);
  const outputName = filename.replace('.png', '.webp');
  const outputPath = path.join(publicDir, outputName);

  try {
    const inputSize = statSync(inputPath).size;
    await sharp(inputPath)
      .webp({ quality: 82, effort: 5 })
      .toFile(outputPath);
    const outputSize = statSync(outputPath).size;
    const saved = inputSize - outputSize;
    totalSavedBytes += saved;
    console.log(
      `✓ ${filename} → ${outputName}  ` +
      `${(inputSize/1024).toFixed(0)}KB → ${(outputSize/1024).toFixed(0)}KB  ` +
      `(saved ${(saved/1024).toFixed(0)}KB)`
    );
  } catch (err) {
    console.error(`✗ ${filename}: ${err.message}`);
  }
}

console.log(`\nTotal saved: ${(totalSavedBytes / 1024 / 1024).toFixed(2)} MB`);
