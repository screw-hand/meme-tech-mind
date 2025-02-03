# next-template

A Next.js 13 template for building apps with Radix UI and Tailwind CSS.

## 开发环境 HTTPS 配置

为了在开发环境中启用 HTTPS，请按照以下步骤操作：

1. 安装 `mkcert` 工具：
   ```bash
   brew install mkcert  # macOS
   choco install mkcert  # Windows
   ```

2. 安装本地 CA 到系统信任存储：
   ```bash
   mkcert -install
   ```

3. 在项目根目录下创建 `certificates` 文件夹，并生成证书：
   ```bash
   mkdir -p certificates
   mkcert -key-file ./certificates/localhost-key.pem -cert-file ./certificates/localhost.pem localhost
   ```

4. 启动开发服务器：
   ```bash
   npm run dev
   ```

开发服务器将在 `https://localhost:3000` 上运行。

## Usage

```bash
npx create-next-app -e https://github.com/shadcn/next-template
```

## Features

- Next.js 13 App Directory
- Radix UI Primitives
- Tailwind CSS
- Icons from [Lucide](https://lucide.dev)
- Dark mode with `next-themes`
- Tailwind CSS class sorting, merging and linting.

## License

Licensed under the [MIT license](https://github.com/shadcn/ui/blob/main/LICENSE.md).
