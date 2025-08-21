const fs = require('fs');
const path = require('path');

// 要更新的文件列表
const files = [
  'app/pages/index.vue',
  'app/pages/about.vue',
  'app/pages/publications.vue',
  'app/pages/awards.vue',
  'app/pages/hobbies.vue'
];

files.forEach(file => {
  if (fs.existsSync(file)) {
    let content = fs.readFileSync(file, 'utf8');
    
    // 替換 $t 為 t
    content = content.replace(/\$t\(/g, 't(');
    
    // 替換 $currentLanguage 為 currentLanguage
    content = content.replace(/\$currentLanguage/g, 'currentLanguage');
    
    // 更新 script setup 部分
    content = content.replace(
      /const \{ \$t, \$setLanguage, \$currentLanguage \} = useNuxtApp\(\)\s*\n\s*const toggleLanguage = \(\) => \{\s*const newLang = \$currentLanguage\.value === 'en' \? 'zh' : 'en'\s*\$setLanguage\(newLang\)\s*\}/g,
      'const { t, toggleLanguage, currentLanguage } = useLanguage()'
    );
    
    fs.writeFileSync(file, content);
    console.log(`Updated ${file}`);
  }
});

console.log('All files updated successfully!');
