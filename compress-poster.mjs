import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const inputPath = path.join(__dirname, 'public/assets/birthday-share-poster.png');
const outputPath = path.join(__dirname, 'public/assets/birthday-share-poster-optimized.jpg');

async function compress() {
  try {
    await sharp(inputPath)
      .resize(1200, 630, { fit: 'cover' }) // Force the recommended WhatsApp dimension
      .jpeg({ quality: 80 })
      .toFile(outputPath);
      
    const stats = fs.statSync(outputPath);
    console.log(`Successfully compressed to ${stats.size / 1024} KB`);
  } catch (err) {
    console.error('Error compressing image:', err);
  }
}

compress();
