import fs from 'fs';
import path from 'path';
import sharp from 'sharp';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const dirs = [
  path.join(__dirname, 'public/assets'),
  path.join(__dirname, 'public/assets/images'),
  path.join(__dirname, 'public/assets/funny memory')
];

async function optimize() {
  for (const dir of dirs) {
    if (!fs.existsSync(dir)) continue;
    const files = fs.readdirSync(dir);
    for (const file of files) {
      if (file.endsWith('.png') || file.endsWith('.jpg')) {
        const filePath = path.join(dir, file);
        const tempPath = filePath + '.tmp';
        
        try {
          const stats = fs.statSync(filePath);
          // Only optimize files larger than 200KB
          if (stats.size < 200000) continue;

          console.log(`Optimizing ${file} (${(stats.size / 1024 / 1024).toFixed(2)} MB)`);

          if (file.endsWith('.png')) {
            await sharp(filePath)
              .resize({ width: 1000, withoutEnlargement: true })
              .png({ quality: 60, compressionLevel: 9, effort: 8 })
              .toFile(tempPath);
          } else {
            await sharp(filePath)
              .resize({ width: 1000, withoutEnlargement: true })
              .jpeg({ quality: 60 })
              .toFile(tempPath);
          }
          
          fs.renameSync(tempPath, filePath);
        } catch (e) {
          console.error('Failed to optimize', filePath, e.message);
        }
      }
    }
  }
}

optimize().then(() => console.log('All done!')).catch(console.error);
