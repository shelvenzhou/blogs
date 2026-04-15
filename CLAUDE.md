# Blog Writing Agent 指南

## 项目概览

Astro 博客（Typography 主题），中文技术博客。

- 文章产出目录：`src/content/posts/`，格式为 Markdown
- 本地图片目录：`src/content/posts/images/<post-slug>/`，文章内用相对路径引用（如 `![alt](images/<post-slug>/xxx.png)`）
- 写作工作区：`.writing/`（gitignored），包含看板、大纲、模板
- 素材引用：`references/`（gitignored），通过 symlink 指向外部项目代码

## 写作规范

见 `.writing/STANDARDS.md`（写作规范、frontmatter 格式、图片规则）。开始写作前必须先读取该文件。

## 工作流

### 1. 开始写新文章

1. 读取 `.writing/KANBAN.md` 了解当前计划和进度
2. 读取对应的大纲文件 `.writing/outlines/<post-slug>.md`
3. 读取 `references/` 下的相关素材
4. 在 `src/content/posts/<post-slug>.md` 创建文章，frontmatter 中 `draft: true`

### 2. 写作与迭代

1. 按大纲结构写作，遵循写作规范
2. 需要看代码时直接读取 `references/` 下的 symlinked 项目
3. 图片放到 `images/<post-slug>/` 并用相对路径引用

### 3. 收尾

1. 检查 categories 是否与已有文章保持一致（避免同义不同名）
2. 更新 `.writing/KANBAN.md` 中该文章的状态
3. 将 `draft: true` 改为 `draft: false`

### 4. 发布

1. 用户确认后 commit 并 push

## 环境

- Node 环境使用 nvm：命令前加 `source ~/.nvm/nvm.sh && nvm use node`
- 包管理器：pnpm
- 构建命令：`pnpm build`
- 开发预览：`pnpm dev`
