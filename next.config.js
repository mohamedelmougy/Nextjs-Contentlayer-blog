/** @type {import('next').NextConfig} */
const { withContentlayer } = require("next-contentlayer");

const nextConfig = {
  compiler: { removeConsole: false },
};

module.exports = withContentlayer({ ...nextConfig });
