/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['localhost', 'quiet-cloud-5669.fly.dev'],
  },
}

module.exports = nextConfig
