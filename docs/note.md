# 项目学习笔记

## 技术工具学习

1. next.js 文档查阅
2. shadcn 文档查阅
3. tailwind 文档查阅

## 项目架构

理解`global.css`文件内容

## 疑惑

next.js能否使用auto import系列工具？

## 问题

### pnpm无法跟shadcn-ui很好协同工作

以下命令的预期结果是会生成`@/components/ui/input.tsx`文件；
但实际只报了错，目前绕过了这个问题，在官网文档，提供了CLI/手动复制代码的方式；
目前都是用手动复制代码。

```
pnpm dlx shadcn-ui@latest add input

Packages: +159
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
Progress: resolved 159, reused 159, downloaded 0, added 159, done
 WARN  Failed to create bin at /Users/wu/.pnpm-state/v3/tmp/dlx-73188/node_modules/.pnpm/shadcn-ui@0.9.4/node_modules/shadcn-ui/node_modules/.bin/shadcn-ui. ENOENT: no such file or directory, open '/Users/wu/.pnpm-state/v3/tmp/dlx-73188/node_modules/.pnpm/shadcn-ui@0.9.4/node_modules/shadcn-ui/dist/index.js'
 WARN  Failed to create bin at /Users/wu/.pnpm-state/v3/tmp/dlx-73188/node_modules/.bin/shadcn-ui. ENOENT: no such file or directory, open '/Users/wu/.pnpm-state/v3/tmp/dlx-73188/node_modules/shadcn-ui/dist/index.js'
 ENOENT  Command failed with ENOENT: shadcn-ui add input
spawn shadcn-ui ENOENT

pnpm: Command failed with ENOENT: shadcn-ui add input
spawn shadcn-ui ENOENT
    at ChildProcess._handle.onexit (node:internal/child_process:285:19)
    at onErrorNT (node:internal/child_process:483:16)
    at process.processTicksAndRejections (node:internal/process/task_queues:82:21)
```
