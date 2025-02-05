import React, { useState } from 'react';
import { X } from 'lucide-react';
import { glossaryData } from '../data/glossary';
import { MainContent } from '../data/content';

const DocViewer = () => {
  const [selectedTerm, setSelectedTerm] = useState(null);
  
  const handleTermClick = (term) => {
    setSelectedTerm(glossaryData[term]);
  };

  const formatDefinition = (definition) => {
    const [simple, technical] = definition.split('\n\nTechnical definition:');
    const [simpleLabel, simpleText] = simple.split('In simple terms:');
    
    return (
      <div className="space-y-6">
        <div>
          <h4 className="font-semibold text-gray-900 mb-2">In simple terms:</h4>
          <p className="text-gray-700">{simpleText.trim()}</p>
        </div>
        <div>
          <h4 className="font-semibold text-gray-900 mb-2">Technical definition:</h4>
          <p className="text-gray-700">{technical.trim()}</p>
        </div>
      </div>
    );
  };

  return (
    <div className="fixed inset-0 flex overflow-hidden">
      {/* Main content area with dynamic width */}
      <div className={`flex-1 p-8 overflow-y-auto transition-all duration-300 ${
        selectedTerm ? 'mr-96' : 'mr-0'
      }`}>
        <div className="max-w-5xl mx-auto">
          <MainContent onTermClick={handleTermClick} />
        </div>
      </div>
      
      {/* Fixed-position sidebar */}
      <div className={`fixed top-0 right-0 w-96 h-full bg-gray-50 border-l transform transition-transform duration-300 ease-in-out ${
        selectedTerm ? 'translate-x-0' : 'translate-x-full'
      }`}>
        <div className="h-full overflow-y-auto p-6">
          {selectedTerm && (
            <div>
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-bold">{selectedTerm.title}</h3>
                <button 
                  onClick={() => setSelectedTerm(null)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <X size={20} />
                </button>
              </div>
              {formatDefinition(selectedTerm.definition)}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DocViewer;