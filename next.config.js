/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'avatars.githubusercontent.com',
        port: '',
        pathname: '/u/15662268**',
      },
      {
        protocol: 'https',
        hostname: 'github.com',
        port: '',
        pathname: '/uasouz.png',
      }
      ]
  }
}

module.exports = nextConfig
