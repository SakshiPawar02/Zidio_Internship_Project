import React, { useState } from 'react';
import { Play, Save, Share2 } from 'lucide-react';

const Playground = () => {
  const [code, setCode] = useState(`// Welcome to Zidio Playground!
// Start coding here...

function example() {
  console.log("Hello, World!");
}
`);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Interactive Playground</h1>
        <div className="flex gap-3">
          <button className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700">
            <Play className="h-4 w-4" />
            <span>Run</span>
          </button>
          <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
            <Save className="h-4 w-4" />
            <span>Save</span>
          </button>
          <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
            <Share2 className="h-4 w-4" />
            <span>Share</span>
          </button>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Code Editor */}
        <div className="bg-gray-900 rounded-lg p-4">
          <textarea
            value={code}
            onChange={(e) => setCode(e.target.value)}
            className="w-full h-[500px] bg-transparent text-gray-100 font-mono focus:outline-none resize-none"
            spellCheck="false"
          />
        </div>

        {/* Output Panel */}
        <div className="bg-white rounded-lg p-4 shadow-md">
          <div className="border-b pb-2 mb-4">
            <h3 className="font-semibold">Output</h3>
          </div>
          <div className="font-mono text-sm text-gray-700 h-[460px] overflow-auto">
            {/* Output content would go here */}
            <p>Ready to run your code...</p>
          </div>
        </div>
      </div>

      {/* Features Panel */}
      <div className="grid md:grid-cols-3 gap-6">
        <FeatureCard
          title="Real-time Compilation"
          description="See your code results instantly as you type"
        />
        <FeatureCard
          title="Multiple Languages"
          description="Support for JavaScript, Python, and more"
        />
        <FeatureCard
          title="Share Your Code"
          description="Collaborate with others by sharing your workspace"
        />
      </div>
    </div>
  );
};

const FeatureCard = ({ title, description }: { title: string; description: string }) => (
  <div className="bg-white p-4 rounded-lg shadow-md">
    <h3 className="font-semibold mb-2">{title}</h3>
    <p className="text-sm text-gray-600">{description}</p>
  </div>
);

export default Playground;