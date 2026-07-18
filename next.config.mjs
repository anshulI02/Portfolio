/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Hide the on-screen Next.js dev indicator (the small badge in the corner).
  // It only ever shows in `next dev`; production/Vercel never renders it.
  devIndicators: false,
  // Static export is intentionally NOT enabled so the embedded PDF viewer,
  // metadata routes (sitemap/robots/OG image) and future API routes all work
  // out of the box on Vercel.
};

export default nextConfig;
