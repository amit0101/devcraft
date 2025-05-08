import { useState } from 'react';
import { motion } from 'framer-motion';
import { PlayIcon } from '@heroicons/react/24/outline';

interface DemoProps {
  title: string;
  description: string;
  demoUrl: string;
  features: string[];
}

export function Demo({ title, description, demoUrl, features }: DemoProps) {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="relative overflow-hidden rounded-2xl bg-white shadow-xl">
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
        <p className="mt-2 text-gray-600">{description}</p>
        
        {/* Demo Video/Animation */}
        <div className="relative mt-6 aspect-video w-full overflow-hidden rounded-lg bg-gray-100">
          {isPlaying ? (
            <iframe
              src={demoUrl}
              className="absolute inset-0 h-full w-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          ) : (
            <div className="flex h-full items-center justify-center">
              <button
                onClick={() => setIsPlaying(true)}
                className="flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-white hover:bg-primary-dark"
              >
                <PlayIcon className="h-5 w-5" />
                <span>Play Demo</span>
              </button>
            </div>
          )}
        </div>

        {/* Features List */}
        <div className="mt-6">
          <h4 className="text-sm font-semibold text-gray-900">Key Features</h4>
          <ul className="mt-2 space-y-2">
            {features.map((feature, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="flex items-center gap-2 text-sm text-gray-600"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                {feature}
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
} 