/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  // Export every page as folder/index.html (e.g. about/index.html) so Apache
  // serves the page at /about/ instead of listing the folder.
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
