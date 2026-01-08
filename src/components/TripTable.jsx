import React from 'react';
import { Eye, MapPin, AlertTriangle, MoreVertical } from 'lucide-react';

const StatusPill = ({ status }) => {
  const styles = {
    'In Transit': 'bg-green-100 text-green-700 border-green-200',
    'Delayed': 'bg-red-100 text-red-700 border-red-200',
    'Stopped': 'bg-yellow-100 text-yellow-700 border-yellow-200',
    'Scheduled': 'bg-blue-100 text-blue-700 border-blue-200',
    'Completed': 'bg-slate-100 text-slate-700 border-slate-200',
  };

  return (
    <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${styles[status] || styles['Scheduled']}`}>
      {status}
    </span>
  );
};

const TripTable = ({ trips }) => {
  return (
    <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
      <table className="w-full text-left">
        <thead className="bg-slate-50 border-b border-slate-200">
          <tr>
            <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Trip ID</th>
            <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Status</th>
            <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Route</th>
            <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Driver / Vehicle</th>
            <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">ETA</th>
            <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider text-right">Actions</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-100">
          {trips.map((trip) => (
            <tr key={trip.id} className="hover:bg-slate-50 transition-colors">
              <td className="px-6 py-4">
                <div className="font-medium text-slate-900">{trip.id}</div>
                <div className="text-xs text-slate-500">{trip.vendor}</div>
              </td>
              <td className="px-6 py-4">
                <StatusPill status={trip.status} />
              </td>
              <td className="px-6 py-4">
                <div className="flex items-center gap-2 text-sm text-slate-700">
                  <span className="w-2 h-2 rounded-full bg-slate-300"></span>
                  {trip.origin}
                </div>
                <div className="w-0.5 h-3 bg-slate-200 ml-1 my-0.5"></div>
                <div className="flex items-center gap-2 text-sm text-slate-700">
                  <span className="w-2 h-2 rounded-full bg-primary"></span>
                  {trip.destination}
                </div>
              </td>
              <td className="px-6 py-4">
                <div className="text-sm font-medium text-slate-900">{trip.vehicleNo}</div>
                <div className="text-xs text-slate-500">{trip.driver}</div>
              </td>
              <td className="px-6 py-4">
                <div className={`text-sm font-medium ${trip.isDelayed ? 'text-red-600' : 'text-slate-700'}`}>
                  {trip.eta}
                </div>
                {trip.isDelayed && (
                    <div className="text-xs text-red-500 flex items-center gap-1 mt-1">
                        <AlertTriangle className="w-3 h-3" />
                         Delayed
                    </div>
                )}
              </td>
              <td className="px-6 py-4 text-right">
                <div className="flex items-center justify-end gap-2">
                  <button className="p-2 hover:bg-slate-100 rounded-lg text-slate-500 hover:text-primary transition-colors" title="Track">
                    <MapPin className="w-4 h-4" />
                  </button>
                  <button className="p-2 hover:bg-slate-100 rounded-lg text-slate-500 hover:text-primary transition-colors" title="View Details">
                    <Eye className="w-4 h-4" />
                  </button>
                  <button className="p-2 hover:bg-slate-100 rounded-lg text-slate-500 hover:text-primary transition-colors">
                    <MoreVertical className="w-4 h-4" />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
       <div className="p-4 border-t border-slate-200 bg-slate-50 flex justify-between items-center text-sm text-slate-500">
            <span>Showing 1-10 of 24 trips</span>
            <div className="flex gap-2">
                <button className="px-3 py-1 border border-slate-200 rounded hover:bg-white disabled:opacity-50">Previous</button>
                <button className="px-3 py-1 border border-slate-200 rounded hover:bg-white">Next</button>
            </div>
      </div>
    </div>
  );
};

export default TripTable;
