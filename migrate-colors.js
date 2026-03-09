const fs = require('fs');
const path = require('path');

const filesToMigrate = [
  'app/emergency-app/page.tsx',
  'app/udyoga-pramoda/page.tsx',
  'app/rupeerise/page.tsx',
  'components/templates/CaseStudyTemplate.tsx',
  'components/sections/AboutPreviewSection.tsx',
  'components/ui/Testimonials.tsx'
];

const basePath = 'e:/supragnya-portfolio';

filesToMigrate.forEach(file => {
  const filePath = path.join(basePath, file);
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf8');

    // Replace dark brown with text-primary / bg-sage depending on context
    // Actually, it's safer to just replace specific Tailwind classes

    // Backgrounds
    content = content.replace(/bg-\[#F9F9F9\]/g, 'bg-[var(--bg-surface)]');
    content = content.replace(/bg-\[#F5F5F5\]/g, 'bg-[var(--bg-surface)]');
    content = content.replace(/bg-\[#FFF8F5\]/g, 'bg-[var(--bg-surface)]');
    content = content.replace(/bg-white/g, 'bg-[var(--bg-sage)]');
    content = content.replace(/bg-\[var\(--bg-white\)\]/g, 'bg-[var(--bg-sage)]');
    content = content.replace(/bg-\[var\(--bg-base\)\]/g, 'bg-[var(--bg-sage)]');
    content = content.replace(/bg-\[var\(--accent-brown\)\]/g, 'bg-[var(--bg-surface)]');

    // Text & Borders
    content = content.replace(/text-\[#2D1B0D\]/g, 'text-[var(--text-primary)]');
    content = content.replace(/border-\[#2D1B0D\]\/[0-9]+/g, 'border-[var(--surface-border)]');
    content = content.replace(/border-\[#2D1B0D\]/g, 'border-[var(--surface-border)]');

    // Accent Gold
    content = content.replace(/text-\[#8B5E3C\]/g, 'text-[var(--accent-gold)]');
    content = content.replace(/bg-\[#8B5E3C\]/g, 'bg-[var(--accent-gold)]');
    content = content.replace(/border-\[#8B5E3C\]\/[0-9]+/g, 'border-[var(--accent-gold)]');
    content = content.replace(/border-\[#8B5E3C\]/g, 'border-[var(--accent-gold)]');
    content = content.replace(/text-\[var\(--accent\)\]/g, 'text-[var(--accent-gold)]');
    content = content.replace(/bg-\[var\(--accent\)\]\/[0-9]+/g, 'bg-[var(--accent-gold)]/20');
    content = content.replace(/text-\[var\(--accent-contrast\)\]/g, 'text-[var(--text-primary)]');

    // Misc
    content = content.replace(/text-black/g, 'text-[var(--text-primary)]');

    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Migrated ${file}`);
  } else {
    console.log(`File not found: ${file}`);
  }
});
