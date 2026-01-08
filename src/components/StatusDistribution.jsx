import React from 'react';

const StatusDistribution = ({ title, items }) => {
  return (
    <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm h-full">
      <h3 className="text-lg font-bold text-slate-800 mb-6">{title}</h3>
      
      <div className="space-y-6">
        {items.map((item, index) => (
          <div key={index}>
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-medium text-slate-600">{item.label}</span>
              <span className="text-sm font-bold text-slate-800">{item.value}</span>
            </div>
            
            <div className="w-full bg-slate-100 rounded-full h-2 overflow-hidden">
              <div 
                className={`h-full rounded-full ${item.color || 'bg-primary'}`} 
                style={{ width: `${item.percentage}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StatusDistribution;
