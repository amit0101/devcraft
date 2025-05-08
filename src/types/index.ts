import type { ReactNode } from 'react';

export interface PageProps {
  children?: ReactNode;
}

export interface ServiceProps extends PageProps {
  title: string;
  description: string;
  features: string[];
}

export interface CapabilityProps extends PageProps {
  title: string;
  description: string;
  features: string[];
}

export interface CaseStudyProps extends PageProps {
  title: string;
  client: string;
  industry: string;
  challenge: string;
  solution: string;
  outcomes: string[];
  testimonial: {
    quote: string;
    author: string;
    role: string;
  };
}

export interface ContactProps extends PageProps {
  onSubmit?: (data: ContactFormData) => void;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  message: string;
  industry: string;
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  category: string;
  tags: string[];
  publishedAt: string;
  readingTime: string;
  featuredImage: string;
}

export interface BlogCategory {
  id: string;
  name: string;
  slug: string;
  description: string;
}

export interface BlogSearchParams {
  query?: string;
  category?: string;
  tag?: string;
  page?: number;
  limit?: number;
}

export interface BlogProps extends PageProps {
  posts: BlogPost[];
  categories: BlogCategory[];
  searchParams?: BlogSearchParams;
}

export interface BlogPostProps extends PageProps {
  post: BlogPost;
  relatedPosts: BlogPost[];
} 