/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
    },
    images:{
    domains: [ "cdn.panelinha.com.br"]},
    async rewrites() {
        return [
          {
            source: '/api/:path*',
            destination: 'https://localhost:3003/',
          },
        ]
      },
}

module.exports = nextConfig

  
  