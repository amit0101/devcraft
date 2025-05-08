import { motion } from 'framer-motion';
import { ChartBarIcon } from '@heroicons/react/24/outline';
import type { CaseStudyProps } from '../types';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

const caseStudies: CaseStudyProps[] = [
  {
    title: 'Healthcare Analytics Platform',
    client: 'MedTech Solutions',
    industry: 'Healthcare',
    challenge: 'MedTech Solutions needed a comprehensive analytics platform to process and analyze patient data while maintaining strict privacy standards.',
    solution: 'Developed an AI-powered analytics platform with advanced data anonymization and real-time processing capabilities.',
    outcomes: [
      '40% reduction in data processing time',
      '99.9% accuracy in patient data anonymization',
      '50% improvement in predictive analytics accuracy'
    ],
    testimonial: {
      quote: "AI Fusion Labs delivered a solution that transformed our data analytics capabilities while maintaining the highest standards of patient privacy.",
      author: "Dr. Sarah Chen",
      role: "CTO, MedTech Solutions"
    }
  },
  {
    title: 'AI-Powered Research Assistant',
    client: 'BioResearch Inc.',
    industry: 'Life Sciences',
    challenge: 'BioResearch needed an AI system to accelerate drug discovery by analyzing research papers and identifying potential compounds.',
    solution: 'Created a natural language processing system that analyzes scientific literature and suggests promising research directions.',
    outcomes: [
      '60% faster literature review process',
      '35% increase in compound discovery rate',
      '75% reduction in manual research time'
    ],
    testimonial: {
      quote: "The AI research assistant has revolutionized our drug discovery process, allowing our scientists to focus on innovation rather than data processing.",
      author: "Dr. Michael Rodriguez",
      role: "Head of Research, BioResearch Inc."
    }
  },
  {
    title: 'Retail Inventory Optimization',
    client: 'Global Retail Corp',
    industry: 'Retail',
    challenge: 'Global Retail Corp needed to optimize their inventory management across 500+ stores using real-time sales data.',
    solution: 'Implemented a machine learning system that predicts demand and optimizes inventory levels across all locations.',
    outcomes: [
      '30% reduction in stockouts',
      '25% decrease in excess inventory',
      '15% increase in profit margins'
    ],
    testimonial: {
      quote: "The AI-powered inventory system has transformed our supply chain, leading to significant cost savings and improved customer satisfaction.",
      author: "Lisa Thompson",
      role: "Supply Chain Director, Global Retail Corp"
    }
  }
];

export default function CaseStudies() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <motion.h2 
            className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
            {...fadeIn}
          >
            Success Stories
          </motion.h2>
          <motion.p 
            className="mt-6 text-lg leading-8 text-gray-600"
            {...fadeIn}
          >
            Discover how we've helped organizations across industries transform their operations with AI.
          </motion.p>
        </div>

        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {caseStudies.map((study, index) => (
              <motion.div 
                key={study.title}
                className="flex flex-col"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <div className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                  <ChartBarIcon className="h-5 w-5 flex-none text-primary" aria-hidden="true" />
                  <span className="text-sm font-medium text-primary">{study.industry}</span>
                </div>
                <dt className="mt-4 text-xl font-semibold leading-7 text-gray-900">
                  {study.title}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <div className="flex-auto">
                    <h4 className="font-semibold text-gray-900">Challenge</h4>
                    <p className="mt-2">{study.challenge}</p>
                    
                    <h4 className="mt-6 font-semibold text-gray-900">Solution</h4>
                    <p className="mt-2">{study.solution}</p>
                    
                    <h4 className="mt-6 font-semibold text-gray-900">Outcomes</h4>
                    <ul className="mt-2 space-y-2">
                      {study.outcomes.map((outcome) => (
                        <li key={outcome} className="flex gap-x-3">
                          <svg className="h-6 w-5 flex-none text-primary" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                          </svg>
                          {outcome}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mt-8 border-t border-gray-900/10 pt-8">
                    <blockquote className="text-sm leading-6 text-gray-600">
                      <p>"{study.testimonial.quote}"</p>
                      <footer className="mt-4">
                        <p className="font-semibold text-gray-900">{study.testimonial.author}</p>
                        <p className="text-gray-600">{study.testimonial.role}</p>
                      </footer>
                    </blockquote>
                  </div>
                </dd>
              </motion.div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
} 