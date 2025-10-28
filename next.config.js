/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'utfs.io',
        port: '',
        pathname: '/f/**', // This allows all images from the '/f/' path on that domain
      },
    ],
  },
}

module.exports = nextConfig