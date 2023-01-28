/** @type {import('next').NextConfig} */
const NextConfig = {
  experimental: {
    appDir: true,
  }
}

module.exports = {
  images: {
    remotePatterns: [
      { hostname: 'cdn.sanity.io' },
      { hostname: 'source.unsplash.com' },
    ],
  },
}
