import { useState } from 'react';
import { motion } from 'framer-motion';
import { CalculatorIcon, ChartBarIcon, CurrencyDollarIcon } from '@heroicons/react/24/outline';

interface CalculatorInput {
  industry: string;
  dataVolume: number;
  complexity: 'low' | 'medium' | 'high';
  features: string[];
}

interface CalculatorResult {
  estimatedCost: number;
  implementationTime: string;
  recommendedFeatures: string[];
}

export function SolutionCalculator() {
  const [inputs, setInputs] = useState<CalculatorInput>({
    industry: '',
    dataVolume: 1000,
    complexity: 'medium',
    features: []
  });

  const [result, setResult] = useState<CalculatorResult | null>(null);

  const industries = [
    'Healthcare',
    'Finance',
    'Retail',
    'Manufacturing',
    'Education',
    'Other'
  ];

  const availableFeatures = [
    'Real-time Analytics',
    'Predictive Modeling',
    'Natural Language Processing',
    'Computer Vision',
    'Recommendation Engine',
    'Fraud Detection',
    'Process Automation',
    'Customer Segmentation'
  ];

  const calculateSolution = () => {
    // Base cost calculation
    let baseCost = 50000; // Base implementation cost

    // Adjust for data volume
    baseCost += inputs.dataVolume * 0.1;

    // Adjust for complexity
    const complexityMultiplier = {
      low: 1,
      medium: 1.5,
      high: 2
    };
    baseCost *= complexityMultiplier[inputs.complexity];

    // Adjust for features
    baseCost += inputs.features.length * 10000;

    // Calculate implementation time
    const baseTime = 3; // Base implementation time in months
    const timeMultiplier = {
      low: 1,
      medium: 1.5,
      high: 2
    };
    const months = Math.ceil(baseTime * timeMultiplier[inputs.complexity]);

    setResult({
      estimatedCost: Math.round(baseCost),
      implementationTime: `${months} months`,
      recommendedFeatures: inputs.features
    });
  };

  return (
    <div className="mx-auto max-w-3xl rounded-2xl bg-white p-8 shadow-xl">
      <div className="text-center">
        <CalculatorIcon className="mx-auto h-12 w-12 text-primary" />
        <h2 className="mt-4 text-2xl font-bold text-gray-900">AI Solution Calculator</h2>
        <p className="mt-2 text-gray-600">
          Estimate the cost and timeline for your AI solution
        </p>
      </div>

      <div className="mt-8 space-y-6">
        {/* Industry Selection */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Industry</label>
          <select
            value={inputs.industry}
            onChange={(e) => setInputs({ ...inputs, industry: e.target.value })}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
          >
            <option value="">Select an industry</option>
            {industries.map((industry) => (
              <option key={industry} value={industry}>
                {industry}
              </option>
            ))}
          </select>
        </div>

        {/* Data Volume */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Daily Data Volume (records)
          </label>
          <input
            type="number"
            value={inputs.dataVolume}
            onChange={(e) => setInputs({ ...inputs, dataVolume: Number(e.target.value) })}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
            min="100"
            step="100"
          />
        </div>

        {/* Complexity */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Solution Complexity</label>
          <div className="mt-2 space-x-4">
            {(['low', 'medium', 'high'] as const).map((level) => (
              <label key={level} className="inline-flex items-center">
                <input
                  type="radio"
                  checked={inputs.complexity === level}
                  onChange={() => setInputs({ ...inputs, complexity: level })}
                  className="h-4 w-4 border-gray-300 text-primary focus:ring-primary"
                />
                <span className="ml-2 text-sm text-gray-700 capitalize">{level}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Features */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Required Features</label>
          <div className="mt-2 grid grid-cols-2 gap-2">
            {availableFeatures.map((feature) => (
              <label key={feature} className="inline-flex items-center">
                <input
                  type="checkbox"
                  checked={inputs.features.includes(feature)}
                  onChange={(e) => {
                    const newFeatures = e.target.checked
                      ? [...inputs.features, feature]
                      : inputs.features.filter((f) => f !== feature);
                    setInputs({ ...inputs, features: newFeatures });
                  }}
                  className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                />
                <span className="ml-2 text-sm text-gray-700">{feature}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Calculate Button */}
        <div className="text-center">
          <button
            onClick={calculateSolution}
            className="inline-flex items-center rounded-md bg-primary px-4 py-2 text-white hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
          >
            <CalculatorIcon className="mr-2 h-5 w-5" />
            Calculate Solution
          </button>
        </div>

        {/* Results */}
        {result && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-8 rounded-lg bg-gray-50 p-6"
          >
            <h3 className="text-lg font-semibold text-gray-900">Estimated Solution</h3>
            <div className="mt-4 grid grid-cols-2 gap-4">
              <div className="rounded-lg bg-white p-4 shadow">
                <CurrencyDollarIcon className="h-6 w-6 text-primary" />
                <p className="mt-2 text-sm text-gray-600">Estimated Cost</p>
                <p className="text-xl font-semibold text-gray-900">
                  ${result.estimatedCost.toLocaleString()}
                </p>
              </div>
              <div className="rounded-lg bg-white p-4 shadow">
                <ChartBarIcon className="h-6 w-6 text-primary" />
                <p className="mt-2 text-sm text-gray-600">Implementation Time</p>
                <p className="text-xl font-semibold text-gray-900">{result.implementationTime}</p>
              </div>
            </div>
            <div className="mt-4">
              <p className="text-sm font-medium text-gray-700">Recommended Features</p>
              <ul className="mt-2 space-y-1">
                {result.recommendedFeatures.map((feature) => (
                  <li key={feature} className="text-sm text-gray-600">
                    • {feature}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
} 