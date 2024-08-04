
/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'mdx'],
  images: {
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    domains: ['s3.us-west-2.amazonaws.com', 'iliashaddad.nyc3.digitaloceanspaces.com', 'iliashaddad.com', 'uc4a401a2eb5216fa6fb0e3bcab9.previews.dropboxusercontent.com', 'ucd0eed9a2ee1c5269cbb8c78206.previews.dropboxusercontent.com'],
  },
  experimental: {
    serverMinification: false,
  },
  trailingSlash: false,
  async redirects() {
    return [
      {
        source: '/project/product-hunt-launch-video-gallery/?type=sideProject',
        destination: '/side-projects/product-hunt-launch-video-gallery',
        permanent: true,
      },
      {
        source: "/side-projects/kandle-ch/",
        destination: "/projects/kandle-ch",
        permanent: true,
      },
      {
        source: "/projects/eprogram-travel-platform/",
        destination: "/projects/eprogram-travel-platform",
        permanent: true,
      },
      {
        source: "/projects/product-hunt-launch-video-gallery/",
        destination: '/side-projects/product-hunt-launch-video-gallery',
        permanent: true,
      },
      {
        source: "/side-projects/eprogram-travel-platform",
        destination: "/projects/eprogram-travel-platform",
        permanent: true,
      },
      {
        source: "/projects/yalla-lets-code-podcast/",
        destination: "/side-projects/yalla-lets-code-podcast",
        permanent: true,
      },
      {
        source: "/projects/headless-ecommerce-shopify-nextjs-with-ilias-haddad-blablaconf-2021/",
        destination: '/',
        permanent: true,
      },
      {
        source: "/projects/how-to-create-your-first-shopify-app-with-nodejs-by-ilias-haddad/",
        destination: '/',
        permanent: true,
      },
      {
        source: "/project/kandle-ch",
        destination: "/projects/kandle-ch",
        permanent: true,
      },
      {
        source: "/project/shopify-store-built-with-gatsby-js?type=sideProject",
        destination: "/side-projects/shopify-store-built-with-gatsby-js",
        permanent: true,
      },
      {
        source: "/tag/shopify-dev",
        destination: "/blog",
        permanent: true,
      }
    ]
  },
}


export default async function config() {
  return nextConfig
}
