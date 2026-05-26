/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static export for GitHub Pages
  output: 'export',
  
  // GitHub Pages deploys to https://kodtodya.github.io (apex domain, no basePath needed)
  // If ever moved to subpath repo, add: basePath: '/repo-name'
  
  // Required for static export: disable image optimization
  images: {
    unoptimized: true,
  },

  // Trailing slash for gh-pages compatibility
  trailingSlash: true,
};

export default nextConfig;
