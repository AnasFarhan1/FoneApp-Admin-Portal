import React, { useState } from 'react';
import {
  TrendingUp,
  Users,
  DollarSign,
  Activity,
  MoreHorizontal,
  Repeat,

} from 'lucide-react';

import Sidebar from '../component/layouts/sidebar';

// ─── Data ────────────────────────────────────────────────────────────────────
const campaigns = [
  { id: 1, title: 'Ceria Rayakan',              ctr: '56.78%', order: 'Avg. Order', amount: 'RM12,889.21', color: 'from-blue-800 to-blue-950' },
  { id: 2, title: 'Akhir Tahun Banjir Diskon', ctr: '56.78%', order: 'Avg. Order', amount: 'RM12,889.21', color: 'from-yellow-300 to-yellow-100' },
  { id: 3, title: 'Limited-Time Promo',        ctr: '56.78%', order: 'Avg. Order', amount: 'RM12,889.21', color: 'from-red-600 to-red-400' },
  { id: 4, title: 'Grab 10versary',            ctr: '56.78%', order: 'Avg. Order', amount: 'RM12,889.21', color: 'from-green-600 to-green-400' },
];

const banners = [
  { id: 1, label: 'Sweet pleasure',  bg: 'from-yellow-200 via-pink-200 to-pink-300', headline: 'Sweet\npleasure', textDark: false },
  { id: 2, label: 'Lunch Times',     bg: 'from-blue-700 to-blue-900',               headline: 'LUNCH\nTIMES',     sub: 'Fast, Fresh &\nDelicious', extra: 'Grab your favourites at 40%\ndiscount today', textDark: false },
  { id: 3, label: 'Dinner Deals',    bg: 'from-orange-100 to-yellow-100',           headline: '',               textDark: true },
  { id: 4, label: 'Wondr campaign',  bg: 'from-purple-100 to-pink-100',            headline: 'Waktunya beli SR022\nkewat wondr', textDark: true },
];

const months = ['Jan, 2025','Feb, 2025','Mar, 2025','Apr, 2025','May, 2025','Jun, 2025','Jul, 2025','Aug, 2025'];

// ─── MonthDropdown ───────────────────────────────────────────────────────────
const MonthDropdown = ({ value, onChange }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="relative">
      <button onClick={() => setOpen(!open)} className="flex items-center gap-1 text-xs text-gray-500 border border-gray-200 rounded-md px-2 py-0.5 hover:bg-gray-50">
        {value}
        <svg width="9" height="9" viewBox="0 0 10 10" fill="none"><path d="M2 3.5L5 6.5L8 3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
      </button>
      {open && (
        <div className="absolute right-0 top-full mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-20 min-w-[110px]">
          {months.map(m => (
            <button key={m} onClick={() => { onChange(m); setOpen(false); }} className={`w-full text-left px-3 py-1.5 text-xs hover:bg-gray-100 ${value === m ? 'bg-gray-50 font-semibold text-gray-800' : 'text-gray-600'}`}>{m}</button>
          ))}
        </div>
      )}
    </div>
  );
};

// ─── SmallStatCard ───────────────────────────────────────────────────────────
const SmallStatCard = ({ label, value, sub, subGreen = false }) => (
  <div className="border border-gray-100 rounded-lg p-3">
    <div className="flex items-center justify-between mb-1">
      <span className="text-xs text-gray-400">{label}</span>
      <MoreHorizontal className="w-3.5 h-3.5 text-gray-200" />
    </div>
    <div className="text-xl font-bold text-gray-900">{value}</div>
    {sub && <div className={`text-xs mt-0.5 ${subGreen ? 'text-green-500 font-medium' : 'text-gray-400'}`}>{sub}</div>}
  </div>
);

// ─── Dashboard ───────────────────────────────────────────────────────────────
const Dashboard = () => {
  const [isCollapsed, setIsCollapsed]       = useState(true);
  const [activeDot, setActiveDot]           = useState(0);
  const [merchantMonth, setMerchantMonth]   = useState('Aug, 2025');
  const [communityMonth, setCommunityMonth] = useState('Aug, 2025');
  const [qualMonth, setQualMonth]           = useState('Aug, 2025');

  return (
    <div className="min-h-screen bg-gray-100 flex" style={{ fontFamily: "'Segoe UI', sans-serif" }}>

      {/* ════════════ SIDEBAR ════════════ */}
      <Sidebar isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed} activePage="Dashboard"/>

      {/* ════════════ MAIN CONTENT ════════════ */}
      <div className={`transition-all duration-300 flex-1 min-w-0 ${isCollapsed ? 'ml-14' : 'ml-60'}`}>

        {/* Header */}
        <div className="bg-white border-b border-gray-200 px-6 py-2.5">
          <span className="text-sm font-semibold text-gray-800">Dashboard</span>
          <span className="text-gray-300 mx-1.5">|</span>
        </div>

        <div className="p-5 space-y-4">

          {/* ──── ROW 1: Overview 2×2 (left) + User Growth chart (right) ──── */}
          <div className="grid grid-cols-5 gap-4">

            {/* Overview 2×2 */}
            <div className="col-span-2 bg-white rounded-xl border border-gray-200 p-4">
              <div className="flex items-center justify-between mb-3">
                <h2 className="text-xs font-semibold text-gray-700">Overview</h2>
                <button className="text-xs text-blue-500 hover:underline">See more</button>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { icon: Users,      label: 'Community',         value: '40,689' },
                  { icon: Repeat,     label: 'Total transaction', value: '40,689' },
                  { icon: DollarSign, label: 'Revenue',           value: 'RM2.5M' },
                  { icon: Activity,   label: 'Pending actions',   value: '99.98%' },
                ].map((c, i) => (
                  <div key={i} className="border border-gray-100 rounded-lg p-3 hover:shadow-sm transition-shadow">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-1.5">
                        <c.icon className="w-3.5 h-3.5 text-gray-400" />
                        <span className="text-xs text-gray-500">{c.label}</span>
                      </div>
                      <MoreHorizontal className="w-3.5 h-3.5 text-gray-300" />
                    </div>
                    <div className="text-xl font-bold text-gray-900">{c.value}</div>
                    <div className="flex items-center gap-1 mt-1 text-xs text-green-600">
                      <TrendingUp className="w-3 h-3" /><span>+12% vs last week</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* User Growth Chart */}
            <div className="col-span-3 bg-white rounded-xl border border-gray-200 p-4">
              <div className="flex items-start justify-between">
                <h2 className="text-xs font-semibold text-gray-700">User growth</h2>
                <div className="flex items-center gap-2">
                  <select className="px-2 py-0.5 border border-gray-200 rounded text-xs bg-white"><option>Type</option></select>
                  <select className="px-2 py-0.5 border border-gray-200 rounded text-xs bg-white"><option>2025</option></select>
                </div>
              </div>

              <div className="flex items-end justify-between mt-2 mb-3">
                <div>
                  <div className="text-2xl font-bold text-gray-900">40,689</div>
                  <div className="flex items-center gap-1 text-xs text-green-600 mt-0.5">
                    <TrendingUp className="w-3 h-3" /><span>+12% vs last week</span>
                  </div>
                </div>
                <div className="flex items-center gap-4 text-xs">
                  <div className="flex items-center gap-1.5"><div className="w-2.5 h-2.5 rounded-full bg-orange-400"/><span className="text-gray-500">Organic</span><span className="font-semibold">388</span></div>
                  <div className="flex items-center gap-1.5"><div className="w-2.5 h-2.5 rounded-full bg-red-400"/><span className="text-gray-500">Paid Ads</span><span className="font-semibold">429</span></div>
                </div>
              </div>

              {/* SVG area chart */}
              <svg viewBox="0 0 600 150" className="w-full" style={{ height: '150px' }} preserveAspectRatio="none">
                <defs>
                  <linearGradient id="orgG" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#fb923c" stopOpacity="0.3"/>
                    <stop offset="100%" stopColor="#fb923c" stopOpacity="0.03"/>
                  </linearGradient>
                  <linearGradient id="paidG" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#f87171" stopOpacity="0.2"/>
                    <stop offset="100%" stopColor="#f87171" stopOpacity="0.03"/>
                  </linearGradient>
                </defs>
                {/* subtle grid */}
                {[30,60,90,120].map(y => <line key={y} x1="0" y1={y} x2="600" y2={y} stroke="#f3f4f6" strokeWidth="1"/>)}

                {/* Paid Ads */}
                <path d="M0,125 C50,122 100,118 150,112 S250,98 330,90 S420,80 510,72 L600,65 L600,150 L0,150 Z" fill="url(#paidG)"/>
                <path d="M0,125 C50,122 100,118 150,112 S250,98 330,90 S420,80 510,72 L600,65" fill="none" stroke="#f87171" strokeWidth="1.8" strokeDasharray="5,4"/>

                {/* Organic */}
                <path d="M0,135 C50,130 100,118 150,105 S250,80 330,70 S420,55 510,48 L600,40 L600,150 L0,150 Z" fill="url(#orgG)"/>
                <path d="M0,135 C50,130 100,118 150,105 S250,80 330,70 S420,55 510,48 L600,40" fill="none" stroke="#fb923c" strokeWidth="2.2"/>

                {/* 16 Jan marker */}
                <line x1="140" y1="0" x2="140" y2="150" stroke="#fb923c" strokeWidth="1" strokeDasharray="4,3" opacity="0.5"/>
                <circle cx="140" cy="105" r="4" fill="#fb923c" stroke="#fff" strokeWidth="1.5"/>
                <text x="112" y="148" fontSize="9" fill="#9ca3af">16 Jan, 2025</text>
              </svg>
            </div>
          </div>

          {/* ──── ROW 2: Campaign Performance ──── */}
          <div className="bg-white rounded-xl border border-gray-200 p-4">
            <div className="flex items-center justify-between mb-3">
              <h2 className="text-xs font-semibold text-gray-700">Campaign performance</h2>
              <button className="text-xs text-blue-500 hover:underline">See more</button>
            </div>
            <div className="grid grid-cols-4 gap-3">
              {campaigns.map(c => {
                const isLight = c.color.includes('100') || c.color.includes('200') || c.color.includes('300');
                return (
                  <div key={c.id} className="border border-gray-100 rounded-xl overflow-hidden hover:shadow-md transition-shadow">
                    <div className={`h-36 bg-gradient-to-br ${c.color} flex items-end p-3`}>
                      <span className={`text-sm font-bold drop-shadow ${isLight ? 'text-gray-800' : 'text-white'}`}>{c.title}</span>
                    </div>
                    <div className="p-3 bg-white">
                      <div className="text-xs text-gray-400">Click through rate (CTR)</div>
                      <div className="text-lg font-bold text-gray-900 mt-0.5">{c.ctr}</div>
                      <div className="flex justify-between items-center mt-2 text-xs">
                        <span className="text-gray-400">{c.order}</span>
                        <span className="font-semibold text-gray-800">{c.amount}</span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* ──── ROW 3: Marketing Banner ──── */}
          <div className="bg-white rounded-xl border border-gray-200 p-4">
            <div className="flex items-center justify-between mb-3">
              <h2 className="text-xs font-semibold text-gray-700">Marketing banner</h2>
              <button className="text-xs text-blue-500 hover:underline">See more</button>
            </div>
            <div className="grid grid-cols-4 gap-3">
              {banners.map((b, i) => (
                <div key={b.id}>
                  <div
                    onClick={() => setActiveDot(i)}
                    className={`rounded-xl overflow-hidden bg-gradient-to-br ${b.bg} aspect-[4/3] p-3 cursor-pointer hover:scale-[1.02] transition-transform flex flex-col justify-between`}
                  >
                    <div className={b.textDark ? 'text-gray-800' : 'text-white'}>
                      {b.headline && <h3 className="text-sm font-extrabold leading-tight whitespace-pre-line drop-shadow">{b.headline}</h3>}
                      {b.sub      && <p className="text-xs italic mt-0.5 opacity-80 whitespace-pre-line">{b.sub}</p>}
                      {b.extra    && <p className="text-xs mt-0.5 opacity-70 whitespace-pre-line">{b.extra}</p>}
                    </div>
                  </div>
                  <p className="text-xs text-gray-500 mt-1.5 text-center font-medium">{b.label}</p>
                </div>
              ))}
            </div>
            <div className="flex justify-center gap-1.5 mt-2">
              {banners.map((_, i) => (
                <div key={i} onClick={() => setActiveDot(i)} className={`w-1.5 h-1.5 rounded-full cursor-pointer transition-colors ${activeDot === i ? 'bg-gray-700' : 'bg-gray-300'}`}/>
              ))}
            </div>
          </div>

          {/* ──── ROW 4: Merchant Revenue (left) | M2O + Qualification (right) ──── */}
          <div className="grid grid-cols-2 gap-4">

            {/* Merchant Revenue Insight */}
            <div className="bg-white rounded-xl border border-gray-200 p-4">
              <div className="flex items-center justify-between mb-3">
                <h2 className="text-xs font-semibold text-gray-700">Merchant revenue insight</h2>
                <MonthDropdown value={merchantMonth} onChange={setMerchantMonth}/>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <SmallStatCard label="Check-in Rate"        value="89%"  sub="Today"/>
                <SmallStatCard label="Campaign Performance" value="567" sub="Today"/>
              </div>
              <div className="mt-3">
                <SmallStatCard label="Redemption rate" value="576" sub="Today"/>
              </div>
            </div>

            {/* M2O + Users Qualification stacked */}
            <div className="flex flex-col gap-4">
              <div className="bg-white rounded-xl border border-gray-200 p-4 flex-1">
                <div className="flex items-center justify-between mb-3">
                  <h2 className="text-xs font-semibold text-gray-700">M2O Community Overview</h2>
                  <MonthDropdown value={communityMonth} onChange={setCommunityMonth}/>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <SmallStatCard label="Total Members"   value="376"      sub="+12 this month" subGreen/>
                  <SmallStatCard label="Total M2O Payout" value="RM456.20" sub="This month"/>
                </div>
              </div>

              <div className="bg-white rounded-xl border border-gray-200 p-4 flex-1">
                <div className="flex items-center justify-between mb-3">
                  <h2 className="text-xs font-semibold text-gray-700">Users qualitification</h2>
                  <MonthDropdown value={qualMonth} onChange={setQualMonth}/>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <SmallStatCard label="Qualified"     value="16433" sub="+12 this month" subGreen/>
                  <SmallStatCard label="Not Qualified" value="591"   sub="This month"/>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Dashboard;