import React from "react";
import {
  Home,
  Smartphone,
  Tv,
  Zap,
  Droplets,
  Flame,
  Wifi,
  Car,
  Gift,
  Wallet,
  User,
  HelpCircle,
} from "lucide-react";

const navItems = [
  { label: "Dashboard", icon: Home },
  { label: "Mobile Recharge", icon: Smartphone },
  { label: "DTH Recharge", icon: Tv },
  { label: "Electricity Bill", icon: Zap },
  { label: "Water Bill", icon: Droplets },
  { label: "Gas Bill", icon: Flame },
  { label: "Broadband", icon: Wifi },
  { label: "FASTag", icon: Car },
  { label: "Offers", icon: Gift },
  { label: "Wallet", icon: Wallet },
  { label: "Profile", icon: User },
  { label: "Support", icon: HelpCircle },
];

export default function Sidebar() {
  return (
    <aside className="hidden md:flex h-screen w-64 flex-col border-r border-slate-200 bg-white/95 px-4 py-6 shadow-sm sticky top-0">
      <div className="mb-6 flex items-center gap-3 px-3">
        <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-blue-500 to-purple-500 text-white font-semibold flex items-center justify-center shadow-glow">
          RM
        </div>
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Recharge</p>
          <h2 className="text-lg font-semibold text-slate-900">RechargeMax</h2>
        </div>
      </div>

      <nav className="space-y-1">
        {navItems.map(({ label, icon: Icon }) => (
          <button
            key={label}
            className="group flex w-full items-center gap-3 rounded-xl px-3 py-3 text-sm font-medium text-slate-600 transition hover:bg-blue-50 hover:text-blue-600"
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-slate-100 text-slate-500 transition group-hover:bg-blue-100 group-hover:text-blue-600">
              <Icon size={18} />
            </span>
            {label}
          </button>
        ))}
      </nav>
    </aside>
  );
}
