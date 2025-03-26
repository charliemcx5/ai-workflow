import React from 'react';

const LoadingSpinner = () => {
  return (
    <div className="min-h-screen bg-stone-50 flex items-center justify-center">
      <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-emerald-600"></div>
    </div>
  );
};

export default LoadingSpinner;