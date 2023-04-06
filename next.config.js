/** @type {import('next').NextConfig} */


module.exports = {
  nextConfig: {
    reactStrictMode: true,
  },

  module: {
    rules: [
      {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
      },
    ],
  },
}
