import { supabase } from './client';
import { navLinks, footerLinks, ctaButton, siteBrand } from '@/lib/data/navigation';
import { socialLinks } from '@/lib/data/socials';
import { Database } from './types';

// Type aliases for easier use
type ProjectRow = Database['public']['Tables']['projects']['Row'];
type ServiceRow = Database['public']['Tables']['services']['Row'];
type ExperienceRow = Database['public']['Tables']['experience_items']['Row'];
type TestimonialRow = Database['public']['Tables']['testimonials']['Row'];
type SkillRow = Database['public']['Tables']['skills']['Row'];
type BlogRow = Database['public']['Tables']['blogs']['Row'];
type PageContentRow = Database['public']['Tables']['page_content']['Row'];
type NavigationRow = Database['public']['Tables']['navigation']['Row'];
type SiteSettingsRow = Database['public']['Tables']['site_settings']['Row'];

export async function getNavigation() {
  const { data, error } = await supabase
    .from('navigation')
    .select('*')
    .order('display_order', { ascending: true });

  if (error || !data || data.length === 0) {
    return [...navLinks]; // fallback
  }

  return (data as NavigationRow[]).map(item => ({
    name: item.label,
    href: item.href,
  }));
}

export async function getSiteSettings(): Promise<SiteSettingsRow | null> {
  const { data, error } = await supabase.from('site_settings').select('*').single();
  if (error || !data) return null;
  return data as SiteSettingsRow;
}

export async function getSocialLinks() {
  return socialLinks; 
}

export async function getFooterLinks() {
  return footerLinks;
}

export async function getSiteBrand() {
  return siteBrand;
}

export async function getCtaButton() {
  return ctaButton;
}

export async function getPublishedProjects(): Promise<ProjectRow[]> {
  const { data, error } = await supabase
    .from('projects')
    .select('*')
    .eq('published', true)
    .order('created_at', { ascending: false });
  if (error) return [];
  return data as ProjectRow[];
}

export async function getFeaturedProjects(): Promise<ProjectRow[]> {
  const { data, error } = await supabase
    .from('projects')
    .select('*')
    .eq('published', true)
    .eq('featured', true)
    .order('created_at', { ascending: false })
    .limit(3);
  if (error) return [];
  return data as ProjectRow[];
}

export async function getPublishedServices(): Promise<ServiceRow[]> {
  const { data, error } = await supabase
    .from('services')
    .select('*')
    .eq('published', true);
  if (error) return [];
  return data as ServiceRow[];
}

export async function getExperienceItems(): Promise<ExperienceRow[]> {
  const { data, error } = await supabase
    .from('experience_items')
    .select('*')
    .order('start_date', { ascending: false });
  if (error) return [];
  return data as ExperienceRow[];
}

export async function getTestimonials(): Promise<TestimonialRow[]> {
  const { data, error } = await supabase
    .from('testimonials')
    .select('*')
    .order('display_order', { ascending: true });
  if (error) return [];
  return data as TestimonialRow[];
}

export async function getSkills(): Promise<SkillRow[]> {
  const { data, error } = await supabase
    .from('skills')
    .select('*');
  if (error) return [];
  return data as SkillRow[];
}

export async function getPublishedBlogs(): Promise<BlogRow[]> {
  const { data, error } = await supabase
    .from('blogs')
    .select('*')
    .eq('published', true)
    .order('created_at', { ascending: false });
  if (error) return [];
  return data as BlogRow[];
}

export async function getProjectBySlug(slug: string): Promise<ProjectRow | null> {
  const { data, error } = await supabase
    .from('projects')
    .select('*')
    .eq('slug', slug)
    .single();
  if (error || !data) return null;
  return data as ProjectRow;
}

export async function getAllProjectSlugs(): Promise<{ slug: string | null }[]> {
  const { data, error } = await supabase
    .from('projects')
    .select('slug')
    .eq('published', true);
  if (error) return [];
  return data;
}

export async function getBlogBySlug(slug: string): Promise<BlogRow | null> {
  const { data, error } = await supabase
    .from('blogs')
    .select('*')
    .eq('slug', slug)
    .single();
  if (error || !data) return null;
  return data as BlogRow;
}

export async function getAllBlogSlugs(): Promise<{ slug: string | null }[]> {
  const { data, error } = await supabase
    .from('blogs')
    .select('slug')
    .eq('published', true);
  if (error) return [];
  return data;
}

export async function getAdjacentProjects(currentCreatedAt: string) {
  const { data: prev } = await supabase
    .from('projects')
    .select('title, slug, category, created_at')
    .eq('published', true)
    .lt('created_at', currentCreatedAt)
    .order('created_at', { ascending: false })
    .limit(1)
    .single();

  const { data: next } = await supabase
    .from('projects')
    .select('title, slug, category, created_at')
    .eq('published', true)
    .gt('created_at', currentCreatedAt)
    .order('created_at', { ascending: true })
    .limit(1)
    .single();

  return {
    prevProject: (prev as ProjectRow | null),
    nextProject: (next as ProjectRow | null),
  };
}

export async function getAdjacentBlogs(currentCreatedAt: string) {
  const { data: prev } = await supabase
    .from('blogs')
    .select('title, slug, category, excerpt, created_at')
    .eq('published', true)
    .lt('created_at', currentCreatedAt)
    .order('created_at', { ascending: false })
    .limit(1)
    .single();

  const { data: next } = await supabase
    .from('blogs')
    .select('title, slug, category, excerpt, created_at')
    .eq('published', true)
    .gt('created_at', currentCreatedAt)
    .order('created_at', { ascending: true })
    .limit(1)
    .single();

  return {
    prevBlog: (prev as BlogRow | null),
    nextBlog: (next as BlogRow | null),
  };
}

export async function getRelatedBlogs(category: string, excludeSlug: string): Promise<BlogRow[]> {
  const { data, error } = await supabase
    .from('blogs')
    .select('title, slug, excerpt, created_at, category')
    .eq('published', true)
    .eq('category', category)
    .neq('slug', excludeSlug)
    .limit(2);
  if (error) return [];
  return data as BlogRow[];
}

export async function getPageContent(slug: string): Promise<PageContentRow | null> {
  const { data, error } = await supabase
    .from('page_content')
    .select('*')
    .eq('slug', slug)
    .single();
  
  if (error || !data) return null;
  return data as PageContentRow;
}
