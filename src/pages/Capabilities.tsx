import { motion } from 'framer-motion';
import { CpuChipIcon } from '@heroicons/react/24/outline';
import type { CapabilityProps } from '../types';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

const capabilities: CapabilityProps[] = [
  {
    title: 'AI Model Integration',
    description: 'Seamlessly integrate state-of-the-art AI models into your applications.',
    features: [
      'Computer vision implementation',
      'Natural language processing',
      'Generative AI applications',
      'Machine learning model deployment'
    ]
  },
  {
    title: 'Cloud & Edge AI Solutions',
    description: 'Flexible deployment options for your AI applications, from cloud to edge.',
    features: [
      'Cloud architecture for AI applications',
      'Edge computing implementations',
      'Hybrid approaches',
      'Scalability solutions'
    ]
  },
  {
    title: 'Data Pipeline Development',
    description: 'Build robust data pipelines to power your AI applications.',
    features: [
      'Data collection systems',
      'Preprocessing methodologies',
      'Analytics capabilities',
      'Privacy-preserving techniques'
    ]
  }
];

export default function Capabilities() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <motion.h2 
            className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
            {...fadeIn}
          >
            Technical Capabilities
          </motion.h2>
          <motion.p 
            className="mt-6 text-lg leading-8 text-gray-600"
            {...fadeIn}
          >
            Our comprehensive technical expertise enables us to deliver cutting-edge AI solutions across various domains.
          </motion.p>
        </div>

        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {capabilities.map((capability, index) => (
              <motion.div 
                key={capability.title}
                className="flex flex-col"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                  <CpuChipIcon className="h-5 w-5 flex-none text-primary" aria-hidden="true" />
                  {capability.title}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">{capability.description}</p>
                  <ul className="mt-6 space-y-3">
                    {capability.features.map((feature) => (
                      <li key={feature} className="flex gap-x-3">
                        <svg className="h-6 w-5 flex-none text-primary" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                          <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </dd>
              </motion.div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
} 