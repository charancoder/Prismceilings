import { useState } from 'react';
import { motion } from 'framer-motion';
import SectionScene from './SectionScene';

const ceilingTypes = [
  {
    id: 'gypsum',
    name: 'Gypsum Ceiling',
    description: 'Versatile and elegant with seamless finish. Great for custom designs and lighting integration.',
    tiers: [
      { id: 'basic', name: 'Basic', priceRange: '₹46', description: 'Low quality materials, suitable for budget projects.' },
      { id: 'standard', name: 'Standard', priceRange: '₹57', description: 'Medium quality and best value for most homes.' },
      { id: 'premium', name: 'Premium', priceRange: '₹77', description: 'Saint-Gobain materials with ISI-marked products.' }
    ]
  },
  {
    id: 'pvc',
    name: 'PVC Ceiling',
    description: 'Water-resistant and low maintenance. Ideal for kitchens, bathrooms and humid environments.',
    tiers: [
      { id: 'basic', name: 'Basic', priceRange: '₹96', description: 'Standard PVC panels for functional applications.' },
      { id: 'standard', name: 'Standard', priceRange: '₹140', description: 'Better quality PVC with improved aesthetics.' },
      { id: 'premium', name: 'Premium', priceRange: '₹160', description: 'Premium finish with designer patterns and textures.' }
    ]
  },
  {
    id: 'grid',
    name: 'Aluminium 2×2 Grid',
    description: 'Commercial-grade ceiling system with excellent acoustics. Primarily used in offices and commercial spaces.',
    tiers: [
      { id: 'basic', name: 'Basic', priceRange: '₹140', description: 'Standard grid system for functional commercial spaces.' },
      { id: 'standard', name: 'Standard', priceRange: '₹155', description: 'Enhanced durability with better finishing.' },
      { id: 'premium', name: 'Premium', priceRange: '₹170', description: 'Premium grade materials with superior acoustic properties.' }
    ]
  }
];

export default function CostCalculator() {
  const [length, setLength] = useState('');
  const [width, setWidth] = useState('');
  const [ceilingType, setCeilingType] = useState('gypsum');
  const [tier, setTier] = useState('standard');
  const [designComplexity, setDesignComplexity] = useState('simple');
  const [estimate, setEstimate] = useState<number | null>(null);
  
  const getSelectedCeilingType = () => ceilingTypes.find(type => type.id === ceilingType);
  const getSelectedTier = () => getSelectedCeilingType()?.tiers.find(t => t.id === tier);
  
  const calculateCost = () => {
    if (!length || !width) return;
    
    const area = parseFloat(length) * parseFloat(width);
    const selectedTier = getSelectedTier();
    
    if (!selectedTier) return;
    
    // Extract the average price from the range
    const priceRange = selectedTier.priceRange.replace('₹', '').split(' - ');
    let price = 0;
    
    if (priceRange.length > 1) {
      // If there's a range, take the average
      price = (parseFloat(priceRange[0]) + parseFloat(priceRange[1])) / 2;
    } else {
      // If there's a single price
      price = parseFloat(priceRange[0]);
    }
    
    // Apply design complexity multiplier
    let baseEstimate = area * price;
    let finalEstimate = baseEstimate;
    
    // Apply design complexity percentage increase
    switch (designComplexity) {
      case 'medium':
        finalEstimate = baseEstimate * 1.2; // 20% increase
        break;
      case 'complex':
        finalEstimate = baseEstimate * 1.5; // 50% increase
        break;
      case 'premium':
        finalEstimate = baseEstimate * 2; // 100% increase
        break;
      default: // 'simple'
        // No increase
        break;
    }
    
    setEstimate(finalEstimate);
  };
  
  return (
    <div className="glass-card p-8 md:p-10 w-full max-w-2xl mx-auto">
      <h3 className="text-2xl font-light mb-6">Cost Estimator</h3>
      <p className="text-gray-400 mb-8">Enter room dimensions and ceiling preferences to calculate the estimated cost for your installation.</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div>
          <label className="block text-sm text-gray-400 mb-2">Length (feet)</label>
          <input
            type="number"
            className="input-field w-full"
            value={length}
            onChange={(e) => setLength(e.target.value)}
            placeholder="e.g., 10"
          />
        </div>
        <div>
          <label className="block text-sm text-gray-400 mb-2">Width (feet)</label>
          <input
            type="number"
            className="input-field w-full"
            value={width}
            onChange={(e) => setWidth(e.target.value)}
            placeholder="e.g., 12"
          />
        </div>
      </div>
      
      <div className="mb-8">
        <label className="block text-sm text-gray-400 mb-2">Ceiling Type</label>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          {ceilingTypes.map(type => (
            <button 
              key={type.id}
              className={`btn text-left h-auto py-4 ${ceilingType === type.id ? 'border-white bg-opacity-20' : ''}`}
              onClick={() => setCeilingType(type.id)}
            >
              <span className="block font-medium">{type.name}</span>
              <span className="block text-xs text-gray-400 mt-1">{type.description}</span>
            </button>
          ))}
        </div>
        
        <div className="mt-6 mb-4">
          <SectionScene type={ceilingType as any} className="mb-4" />
        </div>
      </div>
      
      <div className="mb-8">
        <label className="block text-sm text-gray-400 mb-2">Quality Tier</label>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {getSelectedCeilingType()?.tiers.map(tierOption => (
            <button 
              key={tierOption.id}
              className={`btn text-left ${tier === tierOption.id ? 'border-white bg-opacity-20' : ''}`}
              onClick={() => setTier(tierOption.id)}
            >
              <span className="block font-medium">{tierOption.name}</span>
              <span className="block text-xs text-gray-400 mt-1">{tierOption.priceRange} per sq.ft</span>
            </button>
          ))}
        </div>
        <p className="text-sm text-gray-500 mt-3">{getSelectedTier()?.description}</p>
      </div>
      
      <div className="mb-8">
        <label className="block text-sm text-gray-400 mb-2">Design Complexity</label>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <button 
            className={`btn text-left ${designComplexity === 'simple' ? 'border-white bg-opacity-20' : ''}`}
            onClick={() => setDesignComplexity('simple')}
          >
            <span className="block font-medium">Simple</span>
            <span className="block text-xs text-gray-400 mt-1">No additional cost</span>
          </button>
          <button 
            className={`btn text-left ${designComplexity === 'medium' ? 'border-white bg-opacity-20' : ''}`}
            onClick={() => setDesignComplexity('medium')}
          >
            <span className="block font-medium">Medium</span>
            <span className="block text-xs text-gray-400 mt-1">+20% cost</span>
          </button>
          <button 
            className={`btn text-left ${designComplexity === 'complex' ? 'border-white bg-opacity-20' : ''}`}
            onClick={() => setDesignComplexity('complex')}
          >
            <span className="block font-medium">Complex</span>
            <span className="block text-xs text-gray-400 mt-1">+50% cost</span>
          </button>
          <button 
            className={`btn text-left ${designComplexity === 'premium' ? 'border-white bg-opacity-20' : ''}`}
            onClick={() => setDesignComplexity('premium')}
          >
            <span className="block font-medium">Premium</span>
            <span className="block text-xs text-gray-400 mt-1">+100% cost</span>
          </button>
        </div>
        <p className="text-sm text-gray-500 mt-3">
          Select the complexity level of your desired ceiling design. More complex designs require additional labor and materials.
        </p>
      </div>
      
      <button 
        className="btn btn-primary w-full"
        onClick={calculateCost}
      >
        Calculate Estimate
      </button>
      
      {estimate !== null && (
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-8 p-6 glass-card"
        >
          <h4 className="text-xl mb-2">Your Estimate</h4>
          <div className="flex justify-between items-baseline">
            <span className="text-gray-400">Total Area:</span>
            <span className="text-xl">{parseFloat(length) * parseFloat(width)} sq.ft</span>
          </div>
          <div className="flex justify-between items-baseline mt-2">
            <span className="text-gray-400">Ceiling Type:</span>
            <span className="text-xl">{getSelectedCeilingType()?.name}</span>
          </div>
          <div className="flex justify-between items-baseline mt-2">
            <span className="text-gray-400">Quality Tier:</span>
            <span className="text-xl">{getSelectedTier()?.name}</span>
          </div>
          <div className="flex justify-between items-baseline mt-2">
            <span className="text-gray-400">Design Complexity:</span>
            <span className="text-xl capitalize">{designComplexity}</span>
          </div>
          <div className="flex justify-between items-baseline mt-2">
            <span className="text-gray-400">Estimated Cost:</span>
            <span className="text-3xl font-light">₹{estimate.toLocaleString()}</span>
          </div>
          <p className="text-xs text-gray-500 mt-4">
            *This estimate includes branded sheets, channels, labor charges, and selected ceiling design. 
            Final price may vary based on site conditions and specific requirements. Electric works and painting are excluded.
          </p>
        </motion.div>
      )}
    </div>
  );
}
