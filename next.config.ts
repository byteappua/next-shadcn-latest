import type { NextConfig } from "next";
import createMDX from "@next/mdx";
const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: false,
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
  // async headers() {
  //   return [
  //     {
  //       source: "/(.*).(jpg|jpeg|png|gif|ico|svg|webp|css|js|woff)", // 匹配静态文件路径
  //       headers: [
  //         {
  //           key: "Cache-Control",
  //           value: "public, max-age=31536000, immutable", // 缓存 1 年，并标记为不可变
  //         },
  //       ],
  //     },
  //   ];
  // },
};

const withMDX = createMDX({
  // Add markdown plugins here, as desired
});

// Merge MDX config with Next.js config
export default withMDX(nextConfig);
