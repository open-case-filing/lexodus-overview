import React, { useState } from 'react';
import { X } from 'lucide-react';
import { glossaryData } from '../data/glossary';
import { MainContent } from '../data/content';

const DocViewer = () => {
  const [selectedTerm, setSelectedTerm] = useState(null);
  
  const handleTermClick = (term) => {
    setSelectedTerm(glossaryData[term]);
  };

  return (
    <div className="flex h-screen">
      {/* Main content area */}
      <div className="flex-1 p-8 overflow-y-auto">
        <MainContent onTermClick={handleTermClick} />
      </div>
      
      {/* Definition sidebar */}
      <div className={`w-96 bg-gray-50 p-6 border-l transition-all duration-300 ${selectedTerm ? 'translate-x-0' : 'translate-x-full'}`}>
        {selectedTerm && (
          <div>
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-bold">{selectedTerm.title}</h3>
              <button 
                onClick={() => setSelectedTerm(null)}
                className="text-gray-500 hover:text-gray-700"
              >
                <X size={20} />
              </button>
            </div>
            <p className="text-gray-700">{selectedTerm.definition}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default DocViewer;