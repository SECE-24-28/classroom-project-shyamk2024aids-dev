import React from "react";
import { Bell, ChevronDown, Search, Wallet } from "lucide-react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-20 flex items-center gap-4 border-b border-slate-200 bg-white/90 px-6 py-4 backdrop-blur">
      <div>
        <p className="text-xs uppercase tracking-[0.2em] text-slate-400">App</p>
        <h1 className="text-xl font-semibold text-slate-900">RechargeMax</h1>
      </div>

      <div className="relative ml-auto flex-1 max-w-xl">
        <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
        <input
          type="search"
          placeholder="Search services, operators, plans"
          className="w-full rounded-xl border border-slate-200 bg-slate-50 py-2.5 pl-10 pr-3 text-sm text-slate-800 placeholder:text-slate-400 shadow-inner shadow-slate-100 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-100"
        />
      </div>

      <div className="flex items-center gap-3">
        <button className="relative flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-600 shadow-sm hover:border-blue-200 hover:text-blue-600">
          <Bell size={18} />
          <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-blue-600 text-[10px] font-semibold text-white">
            3
          </span>
        </button>

        <div className="flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm font-semibold text-slate-700 shadow-sm">
          <Wallet size={16} className="text-blue-600" />
          <span>₹1,240.50</span>
        </div>

        <button className="flex items-center gap-2 rounded-full border border-slate-200 bg-white px-2 py-1 pr-3 shadow-sm hover:border-blue-200">
          <img
            src="https://i.pravatar.cc/40?img=13"
            alt="avatar"
            className="h-9 w-9 rounded-full object-cover"
          />
          <ChevronDown size={16} className="text-slate-500" />
        </button>
      </div>
    </header>
  );
}
