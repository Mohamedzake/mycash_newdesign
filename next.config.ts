import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // trailingSlash: true,
  /* config options here */
  images: {
    domains: ['https://mycashsite.mycashtest.com/'],
    unoptimized: true,  // Disable image optimization for static export
  },
    output: 'export',  // This tells Next.js to export the app as static files
   distDir:"build",
  
 };

export default nextConfig;



