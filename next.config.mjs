/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
        return [
            {
            source: "/anbieter-suchen/",
            destination: "https://cliniclocator.allerganaesthetics.de/anbieter-suchen/",
            permanent: true, // 301 redirect
            },
        ];
    },
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'via.placeholder.com',
            },
        ],
        deviceSizes: [576, 768, 1024, 1440, 1920].flatMap(size => [size, size * 2]),
        formats: ['image/webp'],
    },
    trailingSlash: true,
};

export default nextConfig;
