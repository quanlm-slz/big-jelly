/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [{
      hostname: "www.svgrepo.com"
    }],
  },
};

export default nextConfig;
