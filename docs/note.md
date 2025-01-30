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

### 这个项目的tsx文件，无法使用选择用eslint格式化

```
扩展 'ESLint' 配置为格式化程序，但不能格式化 'TypeScript JSX'-文件
```

### navigator.clipboard:`复制失败 TypeError: Cannot read properties of undefined (reading 'write')`

navigator.clipboard.write,开发环境`http://192.168.31.51:3000/`不可以使用：`复制失败 TypeError: Cannot read properties of undefined (reading 'write')`

`navigator.clipboard.write` 在开发环境 `http://192.168.31.51:3000/` 不可用，而在线上环境 `https://HOST.com` 正常，通常是因为浏览器的安全策略限制了非安全上下文（如 HTTP）对剪贴板的访问。

````
### 原因分析
1. **安全上下文限制**：
   - `navigator.clipboard` API 要求页面在安全上下文中运行（即 HTTPS 或 `localhost`）。
   - 开发环境使用 `http://192.168.31.51:3000/`，这是一个非安全上下文，因此 `navigator.clipboard` 不可用。
   - 线上环境使用 `https://HOST.com`，这是一个安全上下文，因此 `navigator.clipboard` 可用。

2. **本地开发环境的特殊处理**：
   - 如果开发环境是 `localhost`，浏览器会将其视为安全上下文，`navigator.clipboard` 可用。
   - 但你的开发环境使用的是 IP 地址 `192.168.31.51`，浏览器不会将其视为安全上下文。

### 解决方案
1. **使用 `localhost` 代替 IP 地址**：
   - 将开发环境的 URL 改为 `http://localhost:3000/`，这样浏览器会将其视为安全上下文，`navigator.clipboard` 将可用。

2. **启用 HTTPS 开发环境**：
   - 配置开发服务器支持 HTTPS，使用自签名证书或工具（如 `mkcert`）生成本地证书。

3. **降级处理**：
   - 在非安全上下文中，使用 `document.execCommand('copy')` 作为备选方案。虽然这是一个过时的 API，但在某些场景下仍然可用：
     ```javascript
     function copyToClipboard(text) {
       const textarea = document.createElement('textarea');
       textarea.value = text;
       document.body.appendChild(textarea);
       textarea.select();
       try {
         document.execCommand('copy');
         console.log('复制成功');
       } catch (err) {
         console.error('复制失败', err);
       } finally {
         document.body.removeChild(textarea);
       }
     }
     ```

4. **检查浏览器支持**：
   - 在使用 `navigator.clipboard` 前，检查其是否可用：
     ```javascript
     if (navigator.clipboard) {
       navigator.clipboard.writeText('要复制的文本').then(() => {
         console.log('复制成功');
       }).catch((err) => {
         console.error('复制失败', err);
       });
     } else {
       console.warn('当前环境不支持 navigator.clipboard');
     }
     ```

### 总结
- 开发环境使用 `localhost` 或 HTTPS 来确保 `navigator.clipboard` 可用。
- 如果无法使用 HTTPS，可以使用 `document.execCommand('copy')` 作为备选方案。
- 始终检查 `navigator.clipboard` 的支持情况，避免在非安全上下文中直接调用。
````
## emoji url

💧 - https://www.emojiall.com/images/240/apple/1f4a7.png
