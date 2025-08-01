// eslint.config.mjs

import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";
import globals from "globals"; // 引入全局变量定义，更规范

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
  // 推荐：将解析器信息传递给 FlatCompat
  resolvePluginsRelativeTo: __dirname,
});

/** @type {import('eslint').Linter.FlatConfig[]} */
const eslintConfig = [
  // 基础配置：扩展 Next.js 的核心规则
  ...compat.extends("next/core-web-vitals"),

  // 针对 TypeScript 文件的特定配置
  {
    files: ["**/*.{ts,tsx}"], // 只对 .ts 和 .tsx 文件应用以下规则
    languageOptions: {
      parserOptions: {
        project: true, // 启用需要类型信息的规则
        tsconfigRootDir: __dirname,
      },
      globals: {
        ...globals.browser, // 添加浏览器环境的全局变量
        ...globals.node,   // 添加 Node.js 环境的全局变量
      },
    },
    
    // --- 在这里减弱或关闭规则 ---
    rules: {
      // 示例 1：将“未使用的变量”规则从错误降级为警告
      // 这将不再导致构建失败，只会在终端和编辑器里显示黄色波浪线。
      "@typescript-eslint/no-unused-vars": [
        "warn",
        {
          argsIgnorePattern: "^_",
          varsIgnorePattern: "^_",
          caughtErrorsIgnorePattern: "^_",
        },
      ],

      // 示例 2：完全关闭“any”类型的使用限制
      // 如果你暂时不想处理 any 类型，可以关闭它。
      "@typescript-eslint/no-explicit-any": "off",
      
      // 示例 3：关闭 React Hook 的依赖数组检查
      // 强烈不推荐，但如果你确实需要，可以这样做。
      "react-hooks/exhaustive-deps": "off",

      // 示例 4：允许在 JSX 中使用 `<a>` 标签而无需内容（例如，包裹图标时）
      // 这是 Next.js 规则集里一个常见的“痛点”
      "jsx-a11y/anchor-has-content": "off",

      // 你可以在这里添加任何你想覆盖的规则...
      // 规则列表: https://eslint.org/docs/latest/rules/
      // TypeScript ESLint 规则: https://typescript-eslint.io/rules/
    },
  },
  
  // --- 全局忽略配置 ---
  // 如果你想让 ESLint 完全忽略某些文件或文件夹
  {
    ignores: [
        "node_modules/",
        ".next/",
        "public/", // 通常 public 目录下的文件不需要 lint
        "*.config.js", // 忽略所有 .config.js 文件
        "*.config.mjs",
    ],
  }
];

export default eslintConfig;