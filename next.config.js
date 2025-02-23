/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n: {
    locales: ["en", "es", "fr", "de", "it", "pt", "ja", "zh"],
    defaultLocale: "en",
    localeDetection: true,
  },
  experimental: {
    appDir: true,
  },
};

module.exports = nextConfig;
