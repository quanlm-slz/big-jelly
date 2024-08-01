/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [{
      hostname: "www.svgrepo.com"
    }],
  },
  rewrites: async () => (
    [
      {
        source: '/api/:path*',
        destination: 'http://backend:3001/:path*',
        basePath: false
      }
    ]
  )
};

export default nextConfig;
