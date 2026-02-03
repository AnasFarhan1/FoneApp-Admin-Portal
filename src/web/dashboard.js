import React, { useState } from 'react';
import { 
  TrendingUp, 
  Users, 
  DollarSign, 
  Activity,
  ChevronRight,
  ChevronLeft,
  MoreHorizontal,
  Search,
  Inbox,
  Store,
  Package,
  Megaphone,
  Settings,
  HelpCircle,
  Home,
  BarChart3,
  Repeat,
  Wallet
} from 'lucide-react';

const Dashboard = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const campaigns = [
    {
      id: 1,
      title: 'Ceria Rayakan',
      subtitle: 'Click through rate (CTR)',
      ctr: '56.78%',
      order: 'Aug, Order',
      amount: 'RM12,889.21',
      image: '/api/placeholder/400/200',
      color: 'from-blue-900 to-blue-800'
    },
    {
      id: 2,
      title: 'Akhir Tahun Banjir Diskon',
      subtitle: 'Click through rate (CTR)',
      ctr: '56.78%',
      order: 'Aug, Order',
      amount: 'RM12,889.21',
      image: '/api/placeholder/400/200',
      color: 'from-purple-600 to-purple-500'
    },
    {
      id: 3,
      title: 'Limited-Time Promo',
      subtitle: 'Click through rate (CTR)',
      ctr: '56.78%',
      order: 'Aug, Order',
      amount: 'RM12,889.21',
      image: '/api/placeholder/400/200',
      color: 'from-orange-100 to-orange-50'
    },
    {
      id: 4,
      title: 'Grab 10versary',
      subtitle: 'Click through rate (CTR)',
      ctr: '56.78%',
      order: 'Aug, Order',
      amount: 'RM12,889.21',
      image: '/api/placeholder/400/200',
      color: 'from-green-600 to-green-500'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Sidebar */}
      <div 
        className={`fixed left-0 top-0 h-full bg-white border-r border-gray-200 transition-all duration-300 z-50 ${
          isCollapsed ? 'w-16' : 'w-64'
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Logo and Toggle */}
          <div className="p-4 relative border-b border-gray-100">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center text-white text-sm font-bold flex-shrink-0">
                F
              </div>
              {!isCollapsed && (
                <div>
                  <div className="font-semibold text-sm">Good morning,</div>
                  <div className="text-xs text-gray-600">Zus Coffee</div>
                </div>
              )}
            </div>
            
            {/* Toggle Button */}
            <button
              onClick={() => setIsCollapsed(!isCollapsed)}
              className="absolute -right-3 top-6 w-6 h-6 bg-white border border-gray-200 rounded-full flex items-center justify-center hover:bg-gray-50 transition-colors shadow-sm"
            >
              {isCollapsed ? (
                <ChevronRight className="w-3 h-3 text-gray-600" />
              ) : (
                <ChevronLeft className="w-3 h-3 text-gray-600" />
              )}
            </button>
          </div>

          {/* Navigation */}
          <div className="flex-1 overflow-y-auto py-4 px-3">
            {/* Search and Inbox */}
            <div className="space-y-1 mb-4">
              <button className={`w-full flex items-center gap-3 px-3 py-2.5 text-gray-600 hover:bg-gray-50 rounded-lg transition-colors ${isCollapsed ? 'justify-center' : ''}`}>
                <Search className="w-4 h-4 flex-shrink-0" />
                {!isCollapsed && <span className="text-sm">Search</span>}
              </button>
              <button className={`w-full flex items-center gap-3 px-3 py-2.5 text-gray-600 hover:bg-gray-50 rounded-lg transition-colors ${isCollapsed ? 'justify-center' : ''}`}>
                <Inbox className="w-4 h-4 flex-shrink-0" />
                {!isCollapsed && <span className="text-sm">Inbox</span>}
              </button>
            </div>

            {/* Platform Section */}
            <nav className="space-y-1">
              <a href="#" className={`flex items-center gap-3 px-3 py-2.5 bg-gray-900 text-white rounded-lg text-sm font-medium ${isCollapsed ? 'justify-center' : ''}`}>
                <Home className="w-4 h-4 flex-shrink-0" />
                {!isCollapsed && <span>Dashboard</span>}
              </a>
              <a href="#" className={`flex items-center gap-3 px-3 py-2.5 text-gray-600 hover:bg-gray-50 rounded-lg text-sm ${isCollapsed ? 'justify-center' : ''}`}>
                <BarChart3 className="w-4 h-4 flex-shrink-0" />
                {!isCollapsed && <span>Monitoring</span>}
              </a>
              <a href="#" className={`flex items-center gap-3 px-3 py-2.5 text-gray-600 hover:bg-gray-50 rounded-lg text-sm ${isCollapsed ? 'justify-center' : ''}`}>
                <Repeat className="w-4 h-4 flex-shrink-0" />
                {!isCollapsed && <span>Transactions</span>}
              </a>
              <a href="#" className={`flex items-center gap-3 px-3 py-2.5 text-gray-600 hover:bg-gray-50 rounded-lg text-sm ${isCollapsed ? 'justify-center' : ''}`}>
                <Wallet className="w-4 h-4 flex-shrink-0" />
                {!isCollapsed && <span>M2O</span>}
              </a>

              {isCollapsed && <div className="h-px bg-gray-200 my-2"></div>}
              
              <a href="#" className={`flex items-center gap-3 px-3 py-2.5 text-gray-600 hover:bg-gray-50 rounded-lg text-sm ${isCollapsed ? 'justify-center' : ''}`}>
                <Store className="w-4 h-4 flex-shrink-0" />
                {!isCollapsed && <span>Merchants</span>}
              </a>
              <a href="#" className={`flex items-center gap-3 px-3 py-2.5 text-gray-600 hover:bg-gray-50 rounded-lg text-sm ${isCollapsed ? 'justify-center' : ''}`}>
                <Package className="w-4 h-4 flex-shrink-0" />
                {!isCollapsed && <span>Products</span>}
              </a>
              <a href="#" className={`flex items-center gap-3 px-3 py-2.5 text-gray-600 hover:bg-gray-50 rounded-lg text-sm ${isCollapsed ? 'justify-center' : ''}`}>
                <Megaphone className="w-4 h-4 flex-shrink-0" />
                {!isCollapsed && <span>Marketing</span>}
              </a>

              {isCollapsed && <div className="h-px bg-gray-200 my-2"></div>}
              
              <a href="#" className={`flex items-center gap-3 px-3 py-2.5 text-gray-600 hover:bg-gray-50 rounded-lg text-sm ${isCollapsed ? 'justify-center' : ''}`}>
                <Settings className="w-4 h-4 flex-shrink-0" />
                {!isCollapsed && <span>Mass Configuration</span>}
              </a>
              <a href="#" className={`flex items-center gap-3 px-3 py-2.5 text-gray-600 hover:bg-gray-50 rounded-lg text-sm ${isCollapsed ? 'justify-center' : ''}`}>
                <HelpCircle className="w-4 h-4 flex-shrink-0" />
                {!isCollapsed && <span>Help</span>}
              </a>
            </nav>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div 
        className={`transition-all duration-300 ${
          isCollapsed ? 'ml-16' : 'ml-64'
        }`}
      >
        {/* Overview Section */}
        <div className="p-6 bg-white border-b border-gray-200">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-base font-semibold text-gray-900">Overview</h2>
            <button className="text-sm text-blue-600 hover:text-blue-700 font-medium">See more</button>
          </div>

          <div className="grid grid-cols-4 gap-4">
            {/* Community Card */}
            <div className="bg-white rounded-xl p-5 border border-gray-200 hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4 text-gray-400" />
                  <span className="text-sm text-gray-600">Community</span>
                </div>
                <button className="text-gray-300 hover:text-gray-500">
                  <MoreHorizontal className="w-4 h-4" />
                </button>
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-1">40,689</div>
              <div className="flex items-center gap-1 text-xs text-green-600">
                <TrendingUp className="w-3 h-3" />
                <span>+12% vs last week</span>
              </div>
            </div>

            {/* Total Transaction Card */}
            <div className="bg-white rounded-xl p-5 border border-gray-200 hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-2">
                  <Repeat className="w-4 h-4 text-gray-400" />
                  <span className="text-sm text-gray-600">Total transaction</span>
                </div>
                <button className="text-gray-300 hover:text-gray-500">
                  <MoreHorizontal className="w-4 h-4" />
                </button>
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-1">40,689</div>
              <div className="flex items-center gap-1 text-xs text-green-600">
                <TrendingUp className="w-3 h-3" />
                <span>+12% vs last week</span>
              </div>
            </div>

            {/* Revenue Card */}
            <div className="bg-white rounded-xl p-5 border border-gray-200 hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-2">
                  <DollarSign className="w-4 h-4 text-gray-400" />
                  <span className="text-sm text-gray-600">Revenue</span>
                </div>
                <button className="text-gray-300 hover:text-gray-500">
                  <MoreHorizontal className="w-4 h-4" />
                </button>
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-1">RM2.5M</div>
              <div className="flex items-center gap-1 text-xs text-green-600">
                <TrendingUp className="w-3 h-3" />
                <span>+12% vs last week</span>
              </div>
            </div>

            {/* Pending Actions Card */}
            <div className="bg-white rounded-xl p-5 border border-gray-200 hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-2">
                  <Activity className="w-4 h-4 text-gray-400" />
                  <span className="text-sm text-gray-600">Pending actions</span>
                </div>
                <button className="text-gray-300 hover:text-gray-500">
                  <MoreHorizontal className="w-4 h-4" />
                </button>
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-1">99.98%</div>
              <div className="flex items-center gap-1 text-xs text-green-600">
                <TrendingUp className="w-3 h-3" />
                <span>+12% vs last week</span>
              </div>
            </div>
          </div>
        </div>

        {/* User Growth Chart */}
        <div className="p-6">
          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <div className="flex justify-between items-start mb-6">
              <div>
                <h3 className="text-base font-semibold text-gray-900 mb-2">User growth</h3>
                <div className="text-3xl font-bold text-gray-900">40,689</div>
                <div className="flex items-center gap-1 text-xs text-green-600 mt-1">
                  <TrendingUp className="w-3 h-3" />
                  <span>+12% vs last week</span>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <select className="px-3 py-1.5 border border-gray-200 rounded-lg text-sm bg-white">
                  <option>Type</option>
                </select>
                <select className="px-3 py-1.5 border border-gray-200 rounded-lg text-sm bg-white">
                  <option>2025</option>
                </select>
              </div>
            </div>
            
            <div className="relative h-64">
              {/* Chart Legend */}
              <div className="absolute top-0 right-0 flex items-center gap-4 text-xs">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-orange-400"></div>
                  <span className="text-gray-600">Organic</span>
                  <span className="font-medium">388</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-red-400"></div>
                  <span className="text-gray-600">Paid Ads</span>
                  <span className="font-medium">429</span>
                </div>
              </div>
              
              {/* Chart Area */}
              <div className="mt-8 h-48 relative">
                <div className="absolute inset-0 bg-gradient-to-b from-orange-50 via-orange-50/30 to-transparent rounded-lg"></div>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-red-50/30 to-red-50 rounded-lg"></div>
                
                {/* Date marker */}
                <div className="absolute bottom-2 left-1/2 -translate-x-1/2">
                  <div className="flex flex-col items-center">
                    <div className="w-px h-8 bg-orange-300"></div>
                    <div className="text-xs text-gray-500 mt-1">10 Jan, 2025</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Campaign Performance */}
        <div className="px-6 pb-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-base font-semibold text-gray-900">Campaign performance</h2>
            <button className="text-sm text-blue-600 hover:text-blue-700 font-medium">See more</button>
          </div>

          <div className="grid grid-cols-4 gap-4">
            {campaigns.map((campaign) => (
              <div key={campaign.id} className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow">
                <div className={`h-40 bg-gradient-to-br ${campaign.color} p-4 relative`}>
                  <div className="text-white font-bold text-lg">{campaign.title}</div>
                  {/* Add campaign images here */}
                </div>
                <div className="p-4">
                  <div className="text-xs text-gray-500 mb-2">{campaign.subtitle}</div>
                  <div className="text-xl font-bold text-gray-900 mb-3">{campaign.ctr}</div>
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-gray-500">{campaign.order}</span>
                    <span className="font-semibold text-gray-900">{campaign.amount}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;