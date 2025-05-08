import type { BlogPost, BlogCategory, BlogSearchParams } from '../types';

// Mock data - replace with actual API calls
const mockPosts: BlogPost[] = [
  {
    id: '1',
    title: 'The Future of AI in Healthcare',
    slug: 'future-of-ai-in-healthcare',
    excerpt: 'Exploring how artificial intelligence is revolutionizing healthcare delivery and patient care.',
    content: `
      <p>Artificial Intelligence is transforming healthcare in unprecedented ways. From diagnostic tools to treatment planning, AI is becoming an integral part of modern medical practice.</p>
      
      <h2>Key Applications</h2>
      <p>Some of the most promising applications of AI in healthcare include:</p>
      <ul>
        <li>Medical imaging analysis</li>
        <li>Predictive analytics for patient outcomes</li>
        <li>Drug discovery and development</li>
        <li>Personalized treatment plans</li>
      </ul>

      <h2>Challenges and Opportunities</h2>
      <p>While AI offers tremendous potential, healthcare providers must navigate challenges such as:</p>
      <ul>
        <li>Data privacy and security</li>
        <li>Integration with existing systems</li>
        <li>Staff training and adoption</li>
        <li>Regulatory compliance</li>
      </ul>
    `,
    author: {
      name: 'Dr. Sarah Chen',
      role: 'AI Research Lead',
      avatar: '/images/blog/authors/sarah-chen.jpg'
    },
    category: 'Healthcare',
    tags: ['AI', 'Healthcare', 'Machine Learning'],
    publishedAt: '2024-03-15',
    readingTime: '5 min read',
    featuredImage: '/images/blog/featured/dev-craft-healthcare.png'
  },
  {
    id: '2',
    title: 'AI in Financial Services: Beyond Automation',
    slug: 'ai-in-financial-services',
    excerpt: 'Discover how AI is reshaping financial services beyond simple automation.',
    content: `
      <p>The financial services industry is undergoing a significant transformation through AI adoption.</p>
      
      <h2>Current Applications</h2>
      <p>Financial institutions are leveraging AI for:</p>
      <ul>
        <li>Fraud detection and prevention</li>
        <li>Algorithmic trading</li>
        <li>Customer service automation</li>
        <li>Risk assessment</li>
      </ul>

      <h2>Future Trends</h2>
      <p>Emerging trends in financial AI include:</p>
      <ul>
        <li>Predictive analytics for market trends</li>
        <li>Personalized financial advice</li>
        <li>Automated compliance monitoring</li>
        <li>Enhanced security measures</li>
      </ul>
    `,
    author: {
      name: 'Michael Rodriguez',
      role: 'Financial Technology Expert',
      avatar: '/images/blog/authors/michael-rodriguez.jpg'
    },
    category: 'Finance',
    tags: ['AI', 'Finance', 'Technology'],
    publishedAt: '2024-03-10',
    readingTime: '4 min read',
    featuredImage: '/images/blog/featured/dev-craft-finance.png'
  }
];

const mockCategories: BlogCategory[] = [
  {
    id: '1',
    name: 'Healthcare',
    slug: 'healthcare',
    description: 'AI applications in healthcare and medical research'
  },
  {
    id: '2',
    name: 'Finance',
    slug: 'finance',
    description: 'AI solutions for financial services and banking'
  }
];

export async function getBlogPosts(params?: BlogSearchParams): Promise<BlogPost[]> {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 500));

  let filteredPosts = [...mockPosts];

  if (params?.query) {
    const query = params.query.toLowerCase();
    filteredPosts = filteredPosts.filter(post => 
      post.title.toLowerCase().includes(query) ||
      post.excerpt.toLowerCase().includes(query)
    );
  }

  if (params?.category) {
    filteredPosts = filteredPosts.filter(post => 
      post.category.toLowerCase() === params.category?.toLowerCase()
    );
  }

  if (params?.tag) {
    filteredPosts = filteredPosts.filter(post => 
      post.tags.some(tag => tag.toLowerCase() === params.tag?.toLowerCase())
    );
  }

  return filteredPosts;
}

export async function getBlogPost(slug: string): Promise<BlogPost | null> {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 500));

  const post = mockPosts.find(post => post.slug === slug);
  return post || null;
}

export async function getRelatedPosts(post: BlogPost, limit: number = 2): Promise<BlogPost[]> {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 500));

  return mockPosts
    .filter(p => p.id !== post.id && p.category === post.category)
    .slice(0, limit);
}

export async function getBlogCategories(): Promise<BlogCategory[]> {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 500));

  return mockCategories;
} 