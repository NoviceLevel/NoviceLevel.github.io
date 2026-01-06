const fs = require('fs');
const path = require('path');

const categories = ['技术', '生活', '动漫', '游戏', '音乐', '电影', '读书', '旅行'];
const tags = ['JavaScript', 'React', 'Node.js', 'Python', 'CSS', 'HTML', '前端', '后端', 
              '惠惠', '阿库娅', '达克妮丝', '和真', '爆裂魔法', '异世界', 
              '日常', '随笔', '教程', '分享', '心得', '总结'];

const titles = [
  '探索React Hooks的奥秘', '我的异世界冒险日记', '爆裂魔法入门指南',
  'JavaScript异步编程详解', '惠惠的魔法修炼心得', 'CSS Grid布局实战',
  '阿库娅的净化术教程', 'Node.js性能优化技巧', '达克妮丝的骑士道精神',
  'TypeScript类型体操', '和真的生存智慧', 'Vue3组合式API解析',
  '红魔族的魔法传承', 'Webpack配置最佳实践', '异世界美食探索',
  'Git工作流程指南', '冒险者公会任务攻略', 'Docker容器化部署',
  '魔法道具收集手册', 'MongoDB数据库设计', '异世界货币经济学',
  'GraphQL API设计', '骑士团训练日志', 'Redis缓存策略',
  '魔物图鉴整理', 'Nginx配置详解', '异世界地图绘制',
  'Linux命令速查', '魔法阵绘制技巧', 'AWS云服务入门',
  '冒险装备选购指南', 'Kubernetes入门', '异世界语言学习',
  'CI/CD流水线搭建', '魔法药水调配', 'PostgreSQL优化',
  '异世界植物图鉴', 'Rust语言初探', '公会等级提升攻略',
  'WebSocket实时通信', '魔法书籍推荐', 'Electron桌面应用',
  '异世界天气预报', 'Next.js服务端渲染', '冒险者保险指南',
  'Tailwind CSS实践', '魔法学院入学考试', 'Prisma ORM使用',
  '异世界交通工具', 'Vite构建工具', '红魔族村庄游记'
];

const contents = [
  '今天学习了很多新知识，感觉收获满满。在这个美好的世界里，每一天都充满了惊喜和挑战。',
  '爆裂魔法是最强的魔法！虽然一天只能用一次，但那种释放的快感无与伦比。',
  '作为一名冒险者，我们需要不断提升自己的技能。无论是战斗还是生活，都要保持学习的心态。',
  '异世界的生活比想象中更加精彩。这里有魔法、有冒险、有伙伴，还有无尽的可能性。',
  '技术的世界和魔法的世界有很多相似之处。都需要不断练习，才能掌握其中的奥秘。',
  '今天的任务完成得很顺利。虽然过程中遇到了一些困难，但最终还是成功了。',
  '分享一些最近的心得体会。希望能对大家有所帮助，也欢迎交流讨论。',
  '这是一篇关于学习和成长的文章。在不断探索中，我们会发现更好的自己。'
];

const postsDir = path.join(__dirname, '../source/_posts');

for (let i = 1; i <= 50; i++) {
  const title = titles[Math.floor(Math.random() * titles.length)] + ` - 第${i}篇`;
  const category = categories[Math.floor(Math.random() * categories.length)];
  const postTags = [];
  const tagCount = Math.floor(Math.random() * 3) + 1;
  for (let j = 0; j < tagCount; j++) {
    const tag = tags[Math.floor(Math.random() * tags.length)];
    if (!postTags.includes(tag)) postTags.push(tag);
  }
  
  const year = 2025;
  const month = Math.floor(Math.random() * 12) + 1;
  const day = Math.floor(Math.random() * 28) + 1;
  const date = `${year}-${String(month).padStart(2, '0')}-${String(day).padStart(2, '0')} ${String(Math.floor(Math.random() * 24)).padStart(2, '0')}:${String(Math.floor(Math.random() * 60)).padStart(2, '0')}:00`;
  
  const content = contents[Math.floor(Math.random() * contents.length)];
  const extraParagraphs = Math.floor(Math.random() * 3) + 1;
  let fullContent = content;
  for (let k = 0; k < extraParagraphs; k++) {
    fullContent += '\n\n' + contents[Math.floor(Math.random() * contents.length)];
  }

  const post = `---
title: ${title}
date: ${date}
categories:
  - ${category}
tags:
${postTags.map(t => `  - ${t}`).join('\n')}
---

${fullContent}

<!-- more -->

## 详细内容

${contents[Math.floor(Math.random() * contents.length)]}

### 小结

${contents[Math.floor(Math.random() * contents.length)]}

感谢阅读！
`;

  const filename = `test-post-${String(i).padStart(2, '0')}.md`;
  fs.writeFileSync(path.join(postsDir, filename), post);
  console.log(`Created: ${filename}`);
}

console.log('Done! Created 50 test posts.');
