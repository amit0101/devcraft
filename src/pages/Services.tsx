import { motion } from 'framer-motion';
import { DevicePhoneMobileIcon } from '@heroicons/react/24/outline';
import type { ServiceProps } from '../types';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

const services: ServiceProps[] = [
  {
    title: 'Custom AI-Powered Mobile Applications',
    description: 'Transform your business with intelligent mobile solutions that leverage cutting-edge AI capabilities.',
    features: [
      'Native iOS/Android development',
      'Cross-platform solutions',
      'Voice-enabled interfaces',
      'AI feature integration capabilities'
    ]
  },
  {
    title: 'Enterprise AI Solutions',
    description: 'Streamline operations and enhance decision-making with enterprise-grade AI solutions.',
    features: [
      'Business process automation',
      'Predictive analytics dashboards',
      'Knowledge management systems',
      'Legacy system AI integration'
    ]
  },
  {
    title: 'Industry-Specific AI Applications',
    description: 'Specialized AI solutions tailored to your industry\'s unique challenges and requirements.',
    features: [
      'Healthcare solutions',
      'Finance applications',
      'Retail optimization',
      'Manufacturing intelligence'
    ]
  }
];

export default function Services() {
  return (
    <div className="bg-gray-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <motion.h2 
            className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
            {...fadeIn}
          >
            AI-Powered Solutions for Every Need
          </motion.h2>
          <motion.p 
            className="mt-6 text-lg leading-8 text-gray-600"
            {...fadeIn}
          >
            From mobile apps to enterprise solutions, we deliver cutting-edge AI technology that drives business growth and innovation.
          </motion.p>
        </div>
        
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {services.map((service, index) => (
              <motion.div 
                key={service.title}
                className="flex flex-col"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                  <DevicePhoneMobileIcon className="h-5 w-5 flex-none text-primary" aria-hidden="true" />
                  {service.title}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">{service.description}</p>
                  <ul className="mt-6 space-y-3">
                    {service.features.map((feature) => (
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