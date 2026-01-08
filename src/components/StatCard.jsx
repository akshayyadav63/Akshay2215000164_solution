import React from 'react';
import { ArrowUpRight, ArrowDownRight, Minus } from 'lucide-react';

const StatCard = ({ title, value, trend, trendValue, icon: Icon, color = 'primary' }) => {
  const isPositive = trend === 'up';
  const isNeutral = trend === 'neutral';
  
  return (
    <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-slate-500 text-sm font-medium uppercase tracking-wide">{title}</h3>
        {Icon && <Icon className={`w-5 h-5 text-${color}`} />}
      </div>
      
      <div className="flex items-baseline gap-2 mb-2">
        <span className="text-2xl font-bold text-slate-800">{value}</span>
      </div>
      
      <div className="flex items-center gap-1.5 text-sm">
        {isPositive ? (
          <ArrowUpRight className="w-4 h-4 text-green-500" />
        ) : isNeutral ? (
          <Minus className="w-4 h-4 text-slate-400" />
        ) : (
          <ArrowDownRight className="w-4 h-4 text-red-500" />
        )}
        
        <span className={`font-medium ${
          isPositive ? 'text-green-500' : isNeutral ? 'text-slate-500' : 'text-red-500'
        }`}>
          {trendValue}
        </span>
        <span className="text-slate-400">vs last month</span>
      </div>
    </div>
  );
};

export default StatCard;
