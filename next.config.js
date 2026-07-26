/** @type {import('next').NextConfig} */

// Served from https://prnvprthp.github.io/potato-projects/ on GitHub Pages,
// so production needs a basePath. Local dev stays at the root for convenience.
const basePath = process.env.NODE_ENV === "production" ? "/potato-projects" : "";

const nextConfig = {
  output: "export",
  basePath,
  images: {
    unoptimized: true,
  },
  // Expose the basePath to client code so plain <img> asset paths can prefix it.
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

module.exports = nextConfig;
