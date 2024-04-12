import { MetadataRoute } from 'next'
import {
  getAllSideProjects,
  getAllClientsProjects,
  getAllPublished,
} from '../../lib/notion'

export default async function sitemap() {
  const posts = await getAllPublished()
  const sideProjects = await getAllSideProjects()
  const clientProjects = await getAllClientsProjects()
  const postSlugs = posts.map(({ slug, lastModified }) => ({
    slug: `/blog/${slug}`,
    lastModified,
  }))
  const sideProjectSlugs = sideProjects.map(({ slug, lastModified }) => ({
    slug: `/side-projects/${slug}`,
    lastModified,
  }))
  const clientProjectSlugs = clientProjects.map(({ slug, lastModified }) => ({
    slug: `/projects/${slug}`,
    lastModified,
  }))

  const otherSlugs = [
    { slug: '/about', lastModified: new Date().toISOString() },
    { slug: '/contact', lastModified: new Date().toISOString() },
    { slug: '/blog', lastModified: new Date().toISOString() },
    {
      slug: '/projects',
      lastModified: new Date().toISOString(),
    },
    {
      slug: '/side-projects',
      lastModified: new Date().toISOString(),
    },
    {
      slug: '',
      lastModified: new Date().toISOString(),
    },
  ]
  const slugs = [...postSlugs, ...sideProjectSlugs, ...clientProjectSlugs, ...otherSlugs]

  return slugs.map(({ slug, lastModified }) => ({
    url: `https://iliashaddad.com${slug}`,
    lastModified,
    changeFrequency: 'weekly',
    priority: 1,
  }))
}
