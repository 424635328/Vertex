// next.config.mjs

/** @type {import('next').NextConfig} */
const nextConfig = {
  // --- 减弱 TypeScript 错误检测 ---
  // 如果设置为 true，即使你的项目存在 TypeScript 类型错误，
  // `next build` 也能成功构建出生产版本。
  // 注意：这不会影响在 `next dev` 模式下 VS Code 和终端里显示的错误提示。
  typescript: {
    ignoreBuildErrors: true,
  },

  // --- 减弱 ESLint 错误检测 ---
  // 如果设置为 true，即使你的项目存在 ESLint 格式或规则错误，
  // `next build` 也能成功构建。
  // 注意：这同样不会影响开发模式下的错误提示。
  eslint: {
    ignoreDuringBuilds: true,
  },

  // --- 关闭 React 严格模式 ---
  // React 严格模式会在开发环境下故意多次调用某些函数（如 useEffect），
  // 以帮助你发现潜在的副作用问题。关闭它可以避免这种行为。
  // reactStrictMode: false, // 如果需要，取消此行的注释
};

export default nextConfig;