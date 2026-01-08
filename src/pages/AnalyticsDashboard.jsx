import React from 'react';
import { PieChart, Pie, Cell, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

// --- Components for specific chart types found in screenshots ---

const MetricCard = ({ title, children, className="" }) => (
    <div className={`bg-white rounded-lg shadow-sm border border-slate-200 p-4 ${className}`}>
        <h3 className="text-sm font-semibold text-slate-700 mb-4">{title}</h3>
        {children}
    </div>
);

const LineChartClone = ({ data, color="#F97316" }) => (
    <div className="h-48 w-full">
        <ResponsiveContainer>
            <AreaChart data={data}>
                <defs>
                    <linearGradient id={`grad${color}`} x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor={color} stopOpacity={0.2}/>
                        <stop offset="95%" stopColor={color} stopOpacity={0}/>
                    </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
                <XAxis dataKey="name" hide />
                <YAxis hide />
                <Tooltip />
                <Area type="monotone" dataKey="value" stroke={color} fill={`url(#grad${color})`} strokeWidth={2} />
            </AreaChart>
        </ResponsiveContainer>
    </div>
);

const DonutChart = ({ data, title }) => {
    const COLORS = ['#F97316', '#10B981', '#EF4444', '#94A3B8'];
    return (
        <div className="flex flex-col items-center justify-center p-4 bg-white rounded-lg border border-slate-200 shadow-sm">
            <div className="h-32 w-32 relative">
                <ResponsiveContainer>
                    <PieChart>
                        <Pie
                            data={data}
                            innerRadius={40}
                            outerRadius={55}
                            paddingAngle={5}
                            dataKey="value"
                        >
                            {data.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                        </Pie>
                    </PieChart>
                </ResponsiveContainer>
                <div className="absolute inset-0 flex items-center justify-center text-xs font-bold text-slate-600">
                    {title}
                </div>
            </div>
            {/* Legend */}
            <div className="flex flex-wrap gap-2 justify-center mt-4 px-2">
                {data.map((entry, index) => (
                    <div key={index} className="flex items-center gap-1 text-[10px] text-slate-500 text-nowrap">
                        <span className="w-2 h-2 rounded-sm" style={{ backgroundColor: COLORS[index % COLORS.length] }}></span>
                        {entry.name} ({entry.value})
                    </div>
                ))}
            </div>
        </div>
    );
};

// --- Main Page Component ---

const AnalyticsDashboard = () => {
    // Mock Data mimicking the screenshot
    const distData = [
        { name: '01', value: 4000 }, { name: '02', value: 3000 }, { name: '03', value: 5000 },
        { name: '04', value: 2780 }, { name: '05', value: 6890 }, { name: '06', value: 2390 },
        { name: '07', value: 3490 }
    ];

    const tripStatusData = [
        { name: 'Created', value: 5 },
        { name: 'Mapped', value: 3 },
        { name: 'In Transit', value: 12 },
        { name: 'Reached', value: 4 }
    ];

    const lockStatusData = [
         { name: 'Locked', value: 18 },
         { name: 'Unlocked', value: 2 },
         { name: 'Tampered', value: 1 }
    ];

    const deviceStatusData = [
         { name: 'Moving', value: 15 },
         { name: 'Idle', value: 5 },
         { name: 'Offline', value: 2 }
    ];

    return (
        <div className="min-h-screen bg-slate-50 p-4 md:p-8 font-sans">
            <h1 className="text-xl font-bold text-slate-800 mb-6">Analytics</h1>
            
            {/* Top Row: Line Charts */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <MetricCard title="Total KM Travelled (With trip vs Without trip)">
                     <div className="flex items-baseline gap-2 mb-2">
                        <span className="text-2xl font-bold text-orange-500">6,520,071 KM</span>
                        <span className="text-sm text-slate-400">931,439 KM</span>
                     </div>
                     <LineChartClone data={distData} color="#F97316" />
                </MetricCard>

                <MetricCard title="Total Trips/Day">
                     <div className="flex items-baseline gap-2 mb-2">
                        <span className="text-2xl font-bold text-orange-500">1,284</span>
                     </div>
                     <LineChartClone data={distData} color="#F59E0B" />
                </MetricCard>
            </div>

            {/* Middle Row: Device Status Bars */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
                <MetricCard title="Lock Status">
                    <div className="space-y-4">
                        <div className="flex justify-between text-xs text-slate-600">
                             <span>Locked (85%)</span>
                             <span>Unlocked (10%)</span>
                             <span>Tampered (5%)</span>
                        </div>
                        <div className="w-full h-3 bg-slate-100 rounded-full flex overflow-hidden">
                            <div className="bg-green-500 w-[85%]"></div>
                            <div className="bg-yellow-500 w-[10%]"></div>
                            <div className="bg-red-500 w-[5%]"></div>
                        </div>
                    </div>
                </MetricCard>

                 <MetricCard title="Device (Online vs Offline)">
                     <div className="flex justify-between items-center py-2 px-4">
                        <div className="text-center">
                            <div className="text-2xl font-bold text-slate-700">11,111</div>
                            <div className="text-xs text-slate-500">Total Devices</div>
                        </div>
                         <div className="h-8 w-[1px] bg-slate-200"></div>
                         <div className="text-center">
                            <div className="text-2xl font-bold text-green-500">9,500</div>
                            <div className="text-xs text-slate-500">Online</div>
                        </div>
                        <div className="h-8 w-[1px] bg-slate-200"></div>
                         <div className="text-center">
                            <div className="text-2xl font-bold text-red-500">1,611</div>
                            <div className="text-xs text-slate-500">Offline</div>
                        </div>
                     </div>
                </MetricCard>
            </div>

            {/* Bottom Row: Donuts */}
            <h3 className="text-lg font-bold text-slate-700 mb-4">Trips</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <DonutChart data={tripStatusData} title="Trip Status" />
                <DonutChart data={lockStatusData} title="Lock Status" />
                <DonutChart data={deviceStatusData} title="Device Status" />
            </div>

            {/* Trip Table - Reusing/Embedding existing table structure but tweaking to match screenshot */}
            <TripTableClone />
        </div>
    );
};

const TripTableClone = () => {
     // Headers from screenshot: #, Trip Id, Created By / On, Vendor name, Route, Device Id / Status, Trip Status, Driver/Vehicle No, Additional Details, Actions
     const headers = ["#", "Trip Id", "Created By / On", "Vendor name", "Route", "Device Id", "Trip Status", "Driver/Vehicle", "Actions"];
     
     const rows = [
        { id: '1', tripId: 'COHGS22', created: '09/10/2025 05:53:25 PM', vendor: '-', route: 'SHEJO -> MUNDRA', device: 'CHALS12217', status: 'Device not linked', driver: '-', actions: 'Completed' },
        { id: '2', tripId: 'CHH7665', created: '13/10/2024 10:30:00 PM', vendor: 'Shahi Exports', route: 'SAH -> CUSTOM -> ...', device: 'Lock Open', status: 'Unauthorized', driver: 'YP12J88', actions: 'Completed' },
         { id: '3', tripId: 'TR71212', created: '12/10/2024 12:17:25 PM', vendor: 'BlueDart', route: 'GURGAON -> DELHI', device: 'Moving', status: 'Tampered', driver: 'WB02D6303', actions: 'Completed' },
     ];

     return (
        <div className="bg-white border border-slate-200 rounded-lg overflow-x-auto">
            <table className="w-full text-left text-xs text-slate-600">
                <thead className="bg-slate-50 border-b border-slate-200">
                    <tr>
                        {headers.map(h => <th key={h} className="px-4 py-3 font-semibold uppercase">{h}</th>)}
                    </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                    {rows.map((row, i) => (
                        <tr key={i} className="hover:bg-slate-50">
                            <td className="px-4 py-3">{row.id}</td>
                             <td className="px-4 py-3">
                                <span className="font-bold bg-slate-200 px-2 py-0.5 rounded text-[10px]">{row.tripId}</span>
                             </td>
                             <td className="px-4 py-3 text-[10px] whitespace-pre-wrap">{row.created}</td>
                             <td className="px-4 py-3 text-orange-500 font-medium">{row.vendor}</td>
                              <td className="px-4 py-3 font-medium">{row.route}</td>
                              <td className="px-4 py-3">
                                  <span className="bg-green-100 text-green-700 px-2 py-1 rounded-sm text-[10px] font-bold">{row.device}</span>
                              </td>
                               <td className="px-4 py-3">
                                   <div className="text-red-500 font-medium">{row.status}</div>
                                   <div className="text-[9px] text-slate-400">View Details</div>
                               </td>
                                <td className="px-4 py-3">{row.driver}</td>
                                <td className="px-4 py-3 text-green-600 font-bold">{row.actions}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
     )
}

export default AnalyticsDashboard;
