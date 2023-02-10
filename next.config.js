/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  image: {
    domains: ['https://firebasestorage.googleapis.com/v0/b/tepo-bb307.appspot.com'],
  },
    webpack(config) {
      config.module.rules.push({
        test: /\.svg$/,
        use: ["@svgr/webpack"]
      });

      return config;
    }
}

module.exports = nextConfig
