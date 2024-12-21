/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: 'http',
          hostname: 'localhost',
          port: '1337', // Specify the port if your backend is running on a specific one
          pathname: '/uploads/**', // Match the image paths
        },
      ],
    },
  };
    
export default nextConfig;
