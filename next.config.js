/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Configure for GitHub Pages
  basePath: process.env.NODE_ENV === 'production' ? '/split' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/split/' : '',
  images: {
    unoptimized: true,
  },
  // This setting helps with GitHub Pages
  trailingSlash: true,
  // Required for static export
  output: 'export',
  // Disable server components for static export
  experimental: {
    appDir: false,
  },
}

module.exports = nextConfig
