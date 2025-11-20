/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',

  async redirects() {
    return [
      {
        source: "/anbieter-suchen/",
        destination: "https://cliniclocator.allerganaesthetics.de/anbieter-suchen/",
        permanent: true,
      },
    ];
  },

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "via.placeholder.com",
      },
    ],
    deviceSizes: [576, 768, 1024, 1440, 1920].flatMap((size) => [size, size * 2]),
    formats: ["image/webp"],
  },

  trailingSlash: true,
};

module.exports = nextConfig;
