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
    slug: `/project/${slug}`,
    lastModified,
  }))
  const clientProjectSlugs = clientProjects.map(({ slug, lastModified }) => ({
    slug: `/side-projects/${slug}`,
    lastModified,
  }))

  const slugs = [...postSlugs, ...sideProjectSlugs, ...clientProjectSlugs]

  return slugs.map(({ slug, lastModified }) => ({
    url: `https://iliashaddad.com${slug}`,
    lastModified,
    changeFrequency: 'weekly',
    priority: 1,
  }))
}
