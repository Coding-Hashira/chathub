/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    swcPlugins: [],
  },
  images: {
    domains: [
      "res.cloudinary.com",
      "avatars.githubusercontent.com",
      "lh3.googleusercontent.com",
      "akm-img-a-in.tosshub.com",
      "i.pinimg.com",
    ],
  },
};

module.exports = nextConfig;
