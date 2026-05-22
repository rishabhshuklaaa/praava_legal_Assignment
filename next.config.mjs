/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // <-- Yeh line add karni hai
  images: {
    unoptimized: true, // Static export ke liye image optimization off karna padta hai
  },
};

export default nextConfig;