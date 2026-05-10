export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      projects: {
        Row: {
          id: string
          title: string | null
          slug: string | null
          short_description: string | null
          full_description: string | null
          challenge: string | null
          solution: string | null
          category: string | null
          tech_stack: Json | null
          live_url: string | null
          github_url: string | null
          cover_image: string | null
          gallery_images: Json | null
          featured: boolean | null
          published: boolean | null
          seo_title: string | null
          seo_description: string | null
          created_at: string | null
          updated_at: string | null
        }
      }
      blogs: {
        Row: {
          id: string
          title: string | null
          slug: string | null
          excerpt: string | null
          content: string | null
          cover_image: string | null
          tags: Json | null
          category: string | null
          published: boolean | null
          featured: boolean | null
          seo_title: string | null
          seo_description: string | null
          published_at: string | null
          read_time: string | null
          created_at: string | null
          updated_at: string | null
        }
      }
      skills: {
        Row: {
          id: string
          name: string | null
          category: string | null
          icon: string | null
        }
      }
      testimonials: {
        Row: {
          id: string
          name: string
          role: string | null
          company: string | null
          quote: string
          avatar_url: string | null
          rating: number | null
          is_featured: boolean | null
          display_order: number | null
          created_at: string | null
        }
      }
      site_settings: {
        Row: {
          id: string
          primary_color: string | null
          secondary_color: string | null
          accent_color: string | null
          background_color: string | null
          text_color: string | null
          heading_font: string | null
          body_font: string | null
          radius: string | null
          light_mode: Json | null
          dark_mode: Json | null
        }
      }
      experience_items: {
        Row: {
          id: string
          company: string | null
          role: string | null
          start_date: string | null
          end_date: string | null
          description: string | null
          technologies: Json | null
          location: string | null
          current: boolean | null
          type: string | null
          created_at: string | null
          updated_at: string | null
        }
      }
      navigation: {
        Row: {
          id: string
          label: string
          href: string
          is_external: boolean | null
          display_order: number | null
          created_at: string | null
        }
      }
      services: {
        Row: {
          id: string
          title: string | null
          slug: string | null
          description: string | null
          icon: string | null
          features: Json | null
          published: boolean | null
        }
      }
      page_content: {
        Row: {
          id: string
          slug: string
          title: string | null
          description: string | null
          content: string | null
          updated_at: string | null
        }
      }
    }
  }
}
