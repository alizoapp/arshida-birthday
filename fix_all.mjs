import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const dirs = [
  'public/assets',
  'public/assets/images',
  'public/assets/funny memory' // We'll process contents, but won't rename the folder for simplicity
];

function cleanName(name) {
  const ext = path.extname(name);
  const base = path.basename(name, ext);
  const cleanedBase = base.toLowerCase()
    .replace(/ — /g, '-')
    .replace(/[^a-z0-9]/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '');
  return cleanedBase + ext;
}

const renames = [];

for (const dir of dirs) {
  const fullDir = path.join(__dirname, dir);
  if (!fs.existsSync(fullDir)) continue;
  const files = fs.readdirSync(fullDir);
  for (const file of files) {
    if (file === '.DS_Store') continue;
    const stats = fs.statSync(path.join(fullDir, file));
    if (stats.isDirectory()) continue;
    
    const newName = cleanName(file);
    if (newName !== file && newName !== extnameOnly(file)) {
      renames.push({
        oldName: file,
        newName: newName,
        oldPath: path.posix.join(dir, file),
        newPath: path.posix.join(dir, newName)
      });
    }
  }
}

function extnameOnly(file) {
  return file.startsWith('.') ? file : ''; // ignore hidden files
}

console.log(`Found ${renames.length} files to rename.`);

for (const r of renames) {
  try {
    execSync(`git mv "${r.oldPath}" "${r.newPath}"`, { cwd: __dirname });
    console.log(`Renamed ${r.oldName} -> ${r.newName}`);
  } catch (e) {
    console.error(`Failed to rename ${r.oldPath}`);
  }
}

const srcDir = path.join(__dirname, 'src');

function updateFiles(dir) {
  const items = fs.readdirSync(dir);
  for (const item of items) {
    const fullPath = path.join(dir, item);
    if (fs.statSync(fullPath).isDirectory()) {
      updateFiles(fullPath);
    } else if (fullPath.endsWith('.jsx') || fullPath.endsWith('.css')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      let changed = false;
      
      // Update asset paths
      for (const r of renames) {
        let oldAssetPath = '/' + r.oldPath.replace('public/', '');
        let newAssetPath = '/' + r.newPath.replace('public/', '');
        
        if (content.includes(oldAssetPath)) {
          content = content.split(oldAssetPath).join(newAssetPath);
          changed = true;
        }
      }
      
      // Add loading="lazy" (skip Page01)
      if (!fullPath.includes('Page01Opening.jsx')) {
        const imgRegex = /<img(?![^>]*loading="lazy")/g;
        if (imgRegex.test(content)) {
          content = content.replace(imgRegex, '<img loading="lazy"');
          changed = true;
        }
        const motionRegex = /<motion\.img(?![^>]*loading="lazy")/g;
        if (motionRegex.test(content)) {
          content = content.replace(motionRegex, '<motion.img loading="lazy"');
          changed = true;
        }
      }
      
      if (changed) {
        fs.writeFileSync(fullPath, content);
        console.log(`Updated ${item}`);
      }
    }
  }
}

updateFiles(srcDir);
console.log('All done!');
