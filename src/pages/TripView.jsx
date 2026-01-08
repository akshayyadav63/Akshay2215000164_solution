import React from 'react';
import { ShieldCheck, Clock, Map, AlertOctagon } from 'lucide-react';
import StatCard from '../components/StatCard';

// Reusing the Clone Table logic directly in the page for simplicity of the task "make cexact clone"
// In a real app this would be a shared component, but copying here to ensure isolation and fidelity to the screenshot for this specific view
const TripTableClone = () => {
     const headers = ["#", "Trip Id", "Created By / On", "Vendor name", "Route", "Device Id / Status", "Trip Status", "Driver/Vehicle No", "Additional Details", "Actions"];
     
     const rows = [
        { id: '1', tripId: 'COHGS22', created: '09/10/2025 05:53:25 PM \nby Lalit Kumar', vendor: '-', route: 'SHEJO -> MUNDRA \n(SHEJO - MUNDRA)', deviceId: 'CHALS12217', deviceStatus: 'Device not linked', tripStatus: 'Moving', driver: '-', additional: 'i', actions: 'Completed' },
        { id: '2', tripId: 'CHH7665', created: '13/10/2024 10:30:00 PM \nby Nitin Dohan', vendor: 'Shahi Exports', route: 'SAH -> CUSTOM -> ...', deviceId: 'Lock Open', deviceStatus: 'Battery: 85%', tripStatus: 'Unauthorized \nSTOPPED', driver: 'YP12J88', additional: 'i', actions: 'Completed' },
        { id: '3', tripId: 'TR71212', created: '12/10/2024 12:17:25 PM \nby API Integration', vendor: 'BlueDart', route: 'GURGAON -> DELHI', deviceId: 'Moving', deviceStatus: 'Battery: 12%', tripStatus: 'Tampered \nTrip forcefully closed', driver: 'WB02D6303', additional: 'i', actions: 'Completed' },
     ];

     return (
        <div className="bg-white border border-slate-200 rounded-lg overflow-x-auto shadow-sm">
            <table className="w-full text-left text-xs text-slate-600">
                <thead className="bg-slate-50 border-b border-slate-200">
                    <tr>
                        {headers.map(h => <th key={h} className="px-4 py-3 font-semibold uppercase text-slate-500 whitespace-nowrap">{h}</th>)}
                    </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                    {rows.map((row, i) => (
                        <tr key={i} className="hover:bg-slate-50 transition-colors">
                            <td className="px-4 py-3 align-top">{row.id}</td>
                             <td className="px-4 py-3 align-top">
                                <span className="font-bold bg-slate-100 border border-slate-200 px-2 py-0.5 rounded text-[10px] text-slate-700">{row.tripId}</span>
                             </td>
                             <td className="px-4 py-3 text-[10px] whitespace-pre-wrap align-top text-slate-500">{row.created}</td>
                             <td className="px-4 py-3 text-orange-500 font-medium align-top">{row.vendor}</td>
                              <td className="px-4 py-3 font-medium align-top max-w-[150px]">{row.route}</td>
                              <td className="px-4 py-3 align-top">
                                  <div className="flex flex-col gap-1">
                                      <span className="bg-green-100 text-green-700 px-2 py-1 rounded-sm text-[10px] font-bold w-max">{row.deviceId}</span>
                                      <span className="text-[9px] text-slate-400">{row.deviceStatus}</span>
                                  </div>
                              </td>
                               <td className="px-4 py-3 align-top">
                                   <div className={`font-bold uppercase text-[10px] ${row.tripStatus.includes('Tampered') || row.tripStatus.includes('Unauthorized') ? 'text-red-500' : 'text-slate-700'}`}>
                                       {row.tripStatus}
                                   </div>
                               </td>
                                <td className="px-4 py-3 align-top font-mono">{row.driver}</td>
                                <td className="px-4 py-3 align-top text-center">
                                    <button className="w-5 h-5 rounded-full border border-orange-500 text-orange-500 flex items-center justify-center text-[10px] hover:bg-orange-50">
                                        {row.additional}
                                    </button>
                                </td>
                                <td className="px-4 py-3 text-green-600 font-bold align-top">{row.actions}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
     )
}

const TripView = () => {
  return (
    <div className="p-6 md:p-8 bg-slate-50 min-h-screen">
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
        <div>
           <h1 className="text-xl font-bold text-slate-900">Trip Monitoring</h1>
           <p className="text-slate-500 text-sm">Real-time status of all active and completed trips</p>
        </div>
        
        <div className="flex gap-3">
            <input type="text" placeholder="Search Trip ID..." className="px-4 py-2 border border-slate-200 rounded-md text-sm outline-none focus:border-orange-500 w-full md:w-64" />
            <button className="px-4 py-2 bg-orange-500 text-white rounded-md text-sm font-bold hover:bg-orange-600 whitespace-nowrap shadow-sm">
                + Create Trip
            </button>
        </div>
      </div>

      {/* Summary Cards aligned with cloned style */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
        <StatCard title="Active Trips" value="48" trend="up" trendValue="2" icon={Map} />
        <StatCard title="Delayed" value="3" trend="down" trendValue="1" icon={AlertOctagon} color="red-500" />
        <StatCard title="On Time" value="45" trend="neutral" trendValue="0" icon={Clock} color="green-500" />
        <StatCard title="Security Alerts" value="0" trend="neutral" trendValue="None" icon={ShieldCheck} color="blue-500" />
      </div>

       <div className="mb-6">
        <div className="flex items-center gap-2 mb-4">
             {/* Filter Tabs matching typical generic table filters */}
            <button className="px-4 py-1.5 rounded-md bg-orange-50 border border-orange-200 text-orange-700 text-xs font-bold uppercase">All Trips</button>
            <button className="px-4 py-1.5 rounded-md bg-white border border-slate-200 text-slate-500 text-xs font-bold uppercase hover:bg-slate-50">In Transit</button>
            <button className="px-4 py-1.5 rounded-md bg-white border border-slate-200 text-slate-500 text-xs font-bold uppercase hover:bg-slate-50">Delayed</button>
            <button className="px-4 py-1.5 rounded-md bg-white border border-slate-200 text-slate-500 text-xs font-bold uppercase hover:bg-slate-50">Completed</button>
        </div>
        <TripTableClone />
      </div>

    </div>
  );
};

export default TripView;
