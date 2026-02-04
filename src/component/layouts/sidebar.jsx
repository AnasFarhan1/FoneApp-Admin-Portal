import React , {useState} from 'react';
// Import icon from Lucide react
import {
    ChevronRight,
    ChevronLeft,
    Search,
    Inbox,
    Home,
    BarChart3,
    Repeat,
    Wallet,
    Store,
    Package,
    Megaphone,
    Settings,
    HelpCircle
} from 'lucide-react';

const Sidebar= ({isCollapsed,setIsCollapsed,active="Dashboard"}) => {

    const NavItem = ({ icon: Icon, label, active = false }) => (
    <a href="#" className={`flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition-colors
      ${active ? 'bg-gray-900 text-white font-medium' : 'text-gray-500 hover:bg-gray-50'}
      ${isCollapsed ? 'justify-center' : ''}`}
    >
      <Icon className="w-4 h-4 flex-shrink-0" />
      {!isCollapsed && <span>{label}</span>}
    </a>
  );

    return (
        <div className={`fixed left-0 top-0 h-full bg-white border-r border-gray-200 transition-all duration-300 z-50 flex flex-col ${isCollapsed ? 'w-14' : 'w-60'}`}>
        <div className="p-3 relative border-b border-gray-100 flex-shrink-0">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 bg-gray-900 rounded-lg flex items-center justify-center text-white text-xs font-bold flex-shrink-0">F</div>
            {!isCollapsed && (
              <div>
                <div className="font-semibold text-xs text-gray-800">Good morning,</div>
                <div className="text-xs text-gray-500">Zus Coffee</div>
              </div>
            )}
          </div>
          <button onClick={() => setIsCollapsed(!isCollapsed)} className="absolute -right-3 top-5 w-5 h-5 bg-white border border-gray-200 rounded-full flex items-center justify-center hover:bg-gray-50 shadow-sm">
            {isCollapsed ? <ChevronRight className="w-3 h-3 text-gray-600" /> : <ChevronLeft className="w-3 h-3 text-gray-600" />}
          </button>
        </div>
        <nav className="flex-1 overflow-y-auto py-3 px-2 space-y-0.5">
          <NavItem icon={Search}     label="Search"             />
          <NavItem icon={Inbox}      label="Inbox"              />
          <div className="h-px bg-gray-100 my-1.5" />
          <NavItem icon={Home}       label="Dashboard"          />
          <NavItem icon={BarChart3}  label="Monitoring"         />
          <NavItem icon={Repeat}     label="Transactions"       />
          <NavItem icon={Wallet}     label="M2O"                />
          <div className="h-px bg-gray-100 my-1.5" />
          <NavItem icon={Store}      label="Merchants"          />
          <NavItem icon={Package}    label="Products"           />
          <NavItem icon={Megaphone}  label="Marketing"          />
          <div className="h-px bg-gray-100 my-1.5" />
          <NavItem icon={Settings}   label="Mass Configuration" />
          <NavItem icon={HelpCircle} label="Help"               />
        </nav>
      </div>

    );
}

export default Sidebar;