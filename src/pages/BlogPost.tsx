import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CalendarIcon, ClockIcon, TagIcon } from '@heroicons/react/24/outline';
import type { BlogPost } from '../types';
import { getBlogPost, getRelatedPosts } from '../utils/blog';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [relatedPosts, setRelatedPosts] = useState<BlogPost[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      if (!slug) {
        navigate('/blog');
        return;
      }

      setIsLoading(true);
      try {
        const fetchedPost = await getBlogPost(slug);
        if (!fetchedPost) {
          navigate('/blog');
          return;
        }

        const fetchedRelatedPosts = await getRelatedPosts(fetchedPost);
        setPost(fetchedPost);
        setRelatedPosts(fetchedRelatedPosts);
      } catch (error) {
        console.error('Error fetching blog post:', error);
        navigate('/blog');
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [slug, navigate]);

  if (isLoading || !post) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="h-32 w-32 animate-spin rounded-full border-b-2 border-primary"></div>
      </div>
    );
  }

  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <article className="mx-auto max-w-3xl">
          {/* Header */}
          <motion.header className="text-center" {...fadeIn}>
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              {post.title}
            </h1>
            <div className="mt-6 flex items-center justify-center gap-x-4 text-sm text-gray-500">
              <div className="flex items-center gap-x-2">
                <CalendarIcon className="h-5 w-5" />
                <time dateTime={post.publishedAt}>
                  {new Date(post.publishedAt).toLocaleDateString()}
                </time>
              </div>
              <div className="flex items-center gap-x-2">
                <ClockIcon className="h-5 w-5" />
                <span>{post.readingTime}</span>
              </div>
            </div>
            <div className="mt-4 flex items-center justify-center gap-x-4">
              <div className="text-left">
                <p className="font-semibold text-gray-900">{post.author.name}</p>
                <p className="text-sm text-gray-500">{post.author.role}</p>
              </div>
            </div>
          </motion.header>

          {/* Featured Image */}
          <motion.div 
            className="mt-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <img
              src={post.featuredImage}
              alt={post.title}
              className="w-full rounded-2xl bg-gray-100 object-contain"
            />
          </motion.div>

          {/* Content */}
          <motion.div 
            className="prose prose-lg prose-primary mt-10 max-w-none prose-headings:font-heading prose-headings:font-bold prose-a:text-primary prose-a:no-underline hover:prose-a:underline prose-img:rounded-xl prose-img:shadow-lg prose-blockquote:border-l-4 prose-blockquote:border-primary prose-blockquote:pl-4 prose-blockquote:italic prose-code:before:content-none prose-code:after:content-none prose-code:bg-gray-100 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:text-primary prose-pre:bg-primary prose-pre:text-white"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* Tags */}
          <motion.div 
            className="mt-10 flex flex-wrap gap-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            {post.tags.map(tag => (
              <span
                key={tag}
                className="inline-flex items-center rounded-full bg-gray-100 px-3 py-1 text-sm font-medium text-gray-600"
              >
                <TagIcon className="mr-1 h-4 w-4" />
                {tag}
              </span>
            ))}
          </motion.div>

          {/* Related Posts */}
          {relatedPosts.length > 0 && (
            <motion.div 
              className="mt-16 border-t border-gray-200 pt-16"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <h2 className="text-2xl font-bold tracking-tight text-gray-900">
                Related Articles
              </h2>
              <div className="mt-8 grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2">
                {relatedPosts.map(relatedPost => (
                  <article key={relatedPost.id} className="group relative">
                    <div className="relative w-full">
                      <img
                        src={relatedPost.featuredImage}
                        alt={relatedPost.title}
                        className="w-full rounded-2xl bg-gray-100 object-contain"
                      />
                      <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
                    </div>
                    <div className="mt-4">
                      <h3 className="text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                        <a href={`/blog/${relatedPost.slug}`}>
                          <span className="absolute inset-0" />
                          {relatedPost.title}
                        </a>
                      </h3>
                      <p className="mt-2 line-clamp-2 text-sm leading-6 text-gray-600">
                        {relatedPost.excerpt}
                      </p>
                    </div>
                  </article>
                ))}
              </div>
            </motion.div>
          )}
        </article>
      </div>
    </div>
  );
} 