import React from "react";
import {
  ArrowRight,
  Smartphone,
  Tv,
  Zap,
  Car,
  Wifi,
  Gift,
  Droplets,
  Flame,
  Gauge,
  CheckCircle2,
  AlertTriangle,
  Clock4,
  BadgeCheck,
  Building2,
  MonitorSmartphone,
  CreditCard,
  Landmark,
  Wallet2,
  HelpCircle,
} from "lucide-react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import PlanCard from "./components/PlanCard";

const quickActions = [
  {
    title: "Mobile Recharge",
    desc: "Prepaid & postpaid",
    icon: Smartphone,
    color: "from-blue-500/15 to-purple-500/10 text-blue-700",
  },
  { title: "DTH Recharge", desc: "Tata Play, Airtel", icon: Tv, color: "from-amber-400/20 to-orange-400/10 text-amber-600" },
  { title: "Electricity Bill", desc: "Pay safely", icon: Zap, color: "from-emerald-400/20 to-green-400/10 text-emerald-700" },
  { title: "FASTag", desc: "Tag top-ups", icon: Car, color: "from-pink-400/20 to-rose-400/10 text-pink-700" },
];

const services = [
  { title: "Prepaid", icon: Smartphone },
  { title: "Postpaid", icon: MonitorSmartphone },
  { title: "DTH", icon: Tv },
  { title: "Electricity", icon: Zap },
  { title: "Gas", icon: Flame },
  { title: "Water", icon: Droplets },
  { title: "Broadband", icon: Wifi },
  { title: "Metro", icon: Gauge },
  { title: "DataCard", icon: Building2 },
  { title: "Landline", icon: Landmark },
];

const operators = ["Jio", "Airtel", "VI", "BSNL"];

const offers = [
  {
    title: "Weekend boost: +5GB on ₹299+",
    desc: "Recharge before Sunday and unlock extra data for binge nights.",
    cta: "View Offer",
    img: "https://illustrations.popsy.co/gray/online-shopping.svg",
  },
  {
    title: "UPI saver",
    desc: "Get flat ₹20 back on your first UPI recharge this week.",
    cta: "View Offer",
    img: "https://illustrations.popsy.co/gray/credit-card.svg",
  },
  {
    title: "OTT combo",
    desc: "Plans with Disney+ Hotstar and Prime Lite bundled.",
    cta: "View Offer",
    img: "https://illustrations.popsy.co/gray/video-streaming.svg",
  },
];

const transactions = [
  { title: "Recharge ₹299 to 9876543210", status: "Success", time: "Today • 10:24 AM" },
  { title: "Electricity bill ₹1,120", status: "Pending", time: "Yesterday • 07:10 PM" },
  { title: "FASTag top-up ₹600", status: "Success", time: "Yesterday • 11:18 AM" },
  { title: "Broadband bill ₹899", status: "Failed", time: "Mon • 09:44 AM" },
];

const planTabs = ["Popular", "Unlimited", "Data", "Talktime", "Combo", "Validity"];

const plans = [
  {
    price: 299,
    data: "2GB/day",
    validity: "28 days",
    description: "Unlimited calls + 100 SMS/day + weekend rollover",
    bestFor: "daily streamers",
    extras: ["JioTV", "Prime Lite"],
    popular: true,
  },
  {
    price: 499,
    data: "3GB/day",
    validity: "56 days",
    description: "Hotstar Mobile + caller tunes + binge data 20GB",
    bestFor: "binge watchers",
    extras: ["Disney+ Hotstar", "HelloTunes"],
  },
  {
    price: 199,
    data: "1.5GB/day",
    validity: "28 days",
    description: "Unlimited calls with night data rollover",
    bestFor: "lite users",
    extras: ["Data rollover"],
  },
  {
    price: 719,
    data: "2GB/day",
    validity: "84 days",
    description: "Priority support + cloud 200GB",
    bestFor: "power users",
    extras: ["Cloud 200GB", "Priority care"],
  },
];

const paymentMethods = [
  { label: "UPI", icon: Wallet2 },
  { label: "Debit Card", icon: CreditCard },
  { label: "Credit Card", icon: CreditCard },
  { label: "Net Banking", icon: Landmark },
  { label: "Wallet", icon: Wallet2 },
];

export default function App() {
  return (
    <div className="min-h-screen bg-[#F7F9FC] text-slate-900">
      <div className="relative flex">
        <Sidebar />
        <div className="flex min-h-screen flex-1 flex-col">
          <Navbar />

          <main className="mx-auto flex w-full max-w-7xl flex-col gap-8 px-4 pb-12 pt-4 lg:px-8">
            {/* DASHBOARD */}
            <section className="grid grid-cols-1 gap-6 lg:grid-cols-3">
              <div className="space-y-6 lg:col-span-2">
                {/* Quick Actions */}
                <div className="rounded-2xl bg-white p-5 shadow-sm">
                  <div className="flex items-center justify-between">
                    <h2 className="text-lg font-semibold text-slate-900">Quick Actions</h2>
                    <button className="text-sm font-medium text-blue-600 hover:text-blue-700">Manage shortcuts</button>
                  </div>
                  <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4">
                    {quickActions.map((action) => (
                      <div
                        key={action.title}
                        className={`flex flex-col gap-2 rounded-2xl bg-gradient-to-br ${action.color} p-4 shadow-sm`}
                      >
                        <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/70 text-slate-800 shadow">
                          <action.icon size={18} />
                        </span>
                        <div>
                          <p className="text-sm font-semibold text-slate-900">{action.title}</p>
                          <p className="text-xs text-slate-600">{action.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Quick Recharge Box */}
                <div className="rounded-2xl bg-white p-6 shadow-sm">
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Quick recharge</p>
                      <h3 className="text-xl font-semibold text-slate-900">Enter mobile number</h3>
                      <p className="text-sm text-slate-500">Auto detect operator & circle, finish in seconds.</p>
                    </div>
                    <span className="hidden rounded-full bg-blue-50 px-4 py-2 text-xs font-medium text-blue-700 md:inline-flex">
                      Auto-detect enabled
                    </span>
                  </div>

                  <div className="mt-4 grid gap-4 md:grid-cols-3">
                    <div className="md:col-span-2">
                      <label className="text-xs uppercase tracking-wide text-slate-500">Enter mobile number</label>
                      <div className="mt-2 flex items-center gap-3 rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 shadow-inner shadow-slate-100 focus-within:border-blue-500">
                        <span className="text-sm font-semibold text-slate-600">+91</span>
                        <input
                          type="tel"
                          placeholder="98765 43210"
                          className="w-full bg-transparent text-lg font-semibold text-slate-900 outline-none placeholder:text-slate-400"
                        />
                        <button className="text-sm font-medium text-blue-600 hover:text-blue-700">Auto detect</button>
                      </div>
                    </div>

                    <div>
                      <label className="text-xs uppercase tracking-wide text-slate-500">Operator</label>
                      <div className="mt-2 flex flex-col gap-2">
                        <select className="w-full rounded-xl border border-slate-200 bg-white px-3 py-3 text-sm font-medium text-slate-800 shadow-inner shadow-slate-50">
                          {operators.map((op) => (
                            <option key={op}>{op}</option>
                          ))}
                        </select>
                        <button className="text-sm font-semibold text-blue-600 hover:text-blue-700">Auto detect</button>
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 flex flex-wrap items-center gap-3">
                    <button className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 px-5 py-3 text-sm font-semibold text-white shadow-md hover:shadow-lg">
                      View Plans
                      <ArrowRight size={16} />
                    </button>
                    <p className="text-sm text-emerald-600">₹50 cashback on first recharge</p>
                  </div>
                </div>

                {/* Services grid */}
                <div className="rounded-2xl bg-white p-6 shadow-sm">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold text-slate-900">Services</h3>
                    <span className="text-sm text-slate-500">Everything you can recharge & pay</span>
                  </div>
                  <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
                    {services.map(({ title, icon: Icon }) => (
                      <button
                        key={title}
                        className="flex flex-col items-start gap-3 rounded-2xl border border-slate-100 bg-gradient-to-br from-white via-white to-slate-50 px-4 py-4 text-left shadow-sm transition hover:-translate-y-1 hover:border-blue-100 hover:shadow-md"
                      >
                        <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                          <Icon size={18} />
                        </span>
                        <p className="text-sm font-semibold text-slate-800">{title}</p>
                        <p className="text-xs text-slate-500">Pay quickly & securely</p>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Offers */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold text-slate-900">Offers</h3>
                    <button className="text-sm font-medium text-blue-600">View all</button>
                  </div>
                  <div className="no-scrollbar flex gap-4 overflow-x-auto pb-1">
                    {offers.map((offer) => (
                      <div
                        key={offer.title}
                        className="min-w-[260px] flex-1 rounded-2xl border border-slate-100 bg-white p-4 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
                      >
                        <div className="flex items-start gap-3">
                          <img src={offer.img} alt={offer.title} className="h-16 w-16 object-contain" />
                          <div>
                            <p className="text-sm font-semibold text-slate-900">{offer.title}</p>
                            <p className="text-xs text-slate-500">{offer.desc}</p>
                            <button className="mt-2 text-sm font-semibold text-blue-600">{offer.cta}</button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Recent transactions */}
              <div className="rounded-2xl bg-white p-6 shadow-sm">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-slate-900">Recent Transactions</h3>
                  <button className="text-sm font-medium text-blue-600">View all</button>
                </div>
                <div className="mt-4 space-y-3">
                  {transactions.map((t) => {
                    const statusColor =
                      t.status === "Success" ? "bg-emerald-50 text-emerald-700 border-emerald-100" : t.status === "Pending"
                        ? "bg-amber-50 text-amber-700 border-amber-100"
                        : "bg-rose-50 text-rose-700 border-rose-100";
                    const StatusIcon = t.status === "Success" ? CheckCircle2 : t.status === "Pending" ? Clock4 : AlertTriangle;
                    return (
                      <div
                        key={t.title}
                        className="flex items-center justify-between rounded-2xl border border-slate-100 bg-slate-50 px-4 py-3"
                      >
                        <div className="flex items-center gap-3">
                          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                            <Smartphone size={18} />
                          </span>
                          <div>
                            <p className="text-sm font-semibold text-slate-900">{t.title}</p>
                            <p className="text-xs text-slate-500">{t.time}</p>
                          </div>
                        </div>
                        <span className={`inline-flex items-center gap-1 rounded-full border px-3 py-1 text-xs font-semibold ${statusColor}`}>
                          <StatusIcon size={14} />
                          {t.status}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </section>

            {/* MOBILE RECHARGE FLOW */}
            <section className="rounded-2xl bg-white p-6 shadow-sm">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Recharge Flow</p>
                  <h3 className="text-xl font-semibold text-slate-900">Mobile recharge in three steps</h3>
                </div>
                <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700">Guided</span>
              </div>

              <div className="mt-4 grid gap-4 lg:grid-cols-3">
                {/* Page 1 */}
                <div className="rounded-2xl border border-slate-100 bg-slate-50 p-5">
                  <p className="text-xs font-semibold uppercase tracking-wide text-blue-600">Page 1</p>
                  <h4 className="text-lg font-semibold text-slate-900">Enter mobile number</h4>
                  <div className="mt-3 space-y-3">
                    <div className="rounded-xl border border-slate-200 bg-white px-4 py-3 shadow-inner shadow-slate-100">
                      <label className="text-xs uppercase tracking-wide text-slate-500">Enter mobile number</label>
                      <input
                        type="tel"
                        placeholder="98765 43210"
                        className="w-full bg-transparent text-lg font-semibold text-slate-900 outline-none placeholder:text-slate-400"
                      />
                    </div>
                    <div className="flex items-center justify-between rounded-xl border border-blue-100 bg-blue-50 px-3 py-2">
                      <div>
                        <p className="text-sm font-semibold text-slate-900">Operator detected</p>
                        <p className="text-xs text-slate-600">Jio • Karnataka</p>
                      </div>
                      <button className="text-sm font-semibold text-blue-600">Change</button>
                    </div>
                    <button className="w-full rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 px-4 py-3 text-sm font-semibold text-white">
                      Continue
                    </button>
                  </div>
                </div>

                {/* Page 2 */}
                <div className="rounded-2xl border border-slate-100 bg-white p-5">
                  <p className="text-xs font-semibold uppercase tracking-wide text-blue-600">Page 2</p>
                  <h4 className="text-lg font-semibold text-slate-900">Select operator (if detection fails)</h4>
                  <div className="mt-4 grid grid-cols-2 gap-3">
                    {operators.map((op) => (
                      <button
                        key={op}
                        className="flex items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-3 py-3 text-sm font-semibold text-slate-800 shadow-inner shadow-slate-100 transition hover:border-blue-200 hover:bg-blue-50"
                      >
                        <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white shadow-sm">
                          <Smartphone size={16} />
                        </span>
                        {op}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Page 3 */}
                <div id="plan-selection" className="rounded-2xl border border-slate-100 bg-white p-5">
                  <p className="text-xs font-semibold uppercase tracking-wide text-blue-600">Page 3</p>
                  <h4 className="text-lg font-semibold text-slate-900">Plan selection</h4>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {planTabs.map((tab, idx) => (
                      <button
                        key={tab}
                        className={`rounded-full px-3 py-1.5 text-sm font-semibold ${
                          idx === 0 ? "bg-blue-100 text-blue-700" : "bg-slate-100 text-slate-600"
                        }`}
                      >
                        {tab}
                      </button>
                    ))}
                  </div>
                  <div className="mt-4 grid gap-3">
                    {plans.slice(0, 2).map((p) => (
                      <div
                        key={p.price}
                        className="flex flex-col gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-4 shadow-inner shadow-slate-100"
                      >
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="text-2xl font-bold text-slate-900">₹{p.price}</p>
                            <p className="text-sm text-slate-500">{p.validity} • {p.data}</p>
                          </div>
                          <button className="rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-700">
                            Recharge Now
                          </button>
                        </div>
                        <p className="text-sm text-slate-700">{p.description}</p>
                        <div className="flex flex-wrap gap-2">
                          {(p.extras || []).map((extra) => (
                            <span key={extra} className="rounded-full bg-white px-3 py-1 text-xs font-semibold text-slate-600">
                              {extra}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* PLAN SELECTION PAGE */}
            <section className="rounded-2xl bg-white p-6 shadow-sm">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Plan selection</p>
                  <h3 className="text-xl font-semibold text-slate-900">Pick the right plan</h3>
                  <p className="text-sm text-slate-500">Tabs for Popular, Unlimited, Data, Talktime, Combo, Validity</p>
                </div>
                <button className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">Filter</button>
              </div>

              <div className="mt-4 flex flex-wrap gap-2">
                {planTabs.map((tab, idx) => (
                  <button
                    key={tab}
                    className={`rounded-full px-3 py-1.5 text-sm font-semibold ${
                      idx === 0 ? "bg-blue-600 text-white" : "bg-slate-100 text-slate-600"
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>

              <div className="mt-5 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                {plans.map((p) => (
                  <PlanCard key={p.price} {...p} />
                ))}
              </div>
            </section>

            {/* PAYMENT PAGE */}
            <section className="rounded-2xl bg-white p-6 shadow-sm">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Payment</p>
                  <h3 className="text-xl font-semibold text-slate-900">Pay securely</h3>
                </div>
                <BadgeCheck className="text-emerald-500" />
              </div>

              <div className="mt-4 grid gap-4 lg:grid-cols-2">
                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5 shadow-inner shadow-slate-100">
                  <h4 className="text-lg font-semibold text-slate-900">Bill Summary</h4>
                  <div className="mt-3 space-y-3 text-sm text-slate-700">
                    <div className="flex items-center justify-between">
                      <span>Number</span>
                      <span className="font-semibold">98765 43210</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Operator</span>
                      <span className="font-semibold">Jio • Karnataka</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Plan</span>
                      <span className="font-semibold">₹299 • 2GB/day • 28 days</span>
                    </div>
                    <div className="flex items-center justify-between border-t border-dashed border-slate-200 pt-3 text-base">
                      <span className="font-semibold">Total</span>
                      <span className="text-2xl font-bold text-slate-900">₹299</span>
                    </div>
                  </div>
                </div>

                <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                  <h4 className="text-lg font-semibold text-slate-900">Payment methods</h4>
                  <div className="mt-3 space-y-2">
                    {paymentMethods.map(({ label, icon: Icon }) => (
                      <button
                        key={label}
                        className="flex w-full items-center justify-between rounded-xl border border-slate-200 bg-slate-50 px-3 py-3 text-sm font-semibold text-slate-800 shadow-inner shadow-slate-100 transition hover:border-blue-200 hover:bg-blue-50"
                      >
                        <div className="flex items-center gap-3">
                          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white shadow-sm">
                            <Icon size={16} />
                          </span>
                          {label}
                        </div>
                        <ArrowRight size={16} className="text-slate-400" />
                      </button>
                    ))}
                  </div>
                  <button className="mt-4 w-full rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 px-5 py-3 text-sm font-semibold text-white shadow-md hover:shadow-lg">
                    Pay Securely ₹299
                  </button>
                </div>
              </div>
            </section>

            {/* PROFILE PAGE */}
            <section className="rounded-2xl bg-white p-6 shadow-sm">
              <div className="rounded-2xl bg-gradient-to-r from-blue-500 to-purple-500 p-5 text-white shadow-glow">
                <div className="flex items-center gap-4">
                  <img src="https://i.pravatar.cc/80?img=16" alt="profile" className="h-14 w-14 rounded-full border-2 border-white shadow" />
                  <div>
                    <p className="text-sm uppercase tracking-[0.2em] text-white/70">Profile</p>
                    <h3 className="text-2xl font-semibold">Ananya Verma</h3>
                    <p className="text-sm text-white/80">+91 • • • • • 4210</p>
                  </div>
                  <div className="ml-auto flex gap-3">
                    <div className="rounded-xl bg-white/15 px-4 py-3 text-sm">
                      <p className="text-white/70">Total recharges</p>
                      <p className="text-lg font-semibold text-white">124</p>
                    </div>
                    <div className="rounded-xl bg-white/15 px-4 py-3 text-sm">
                      <p className="text-white/70">Wallet balance</p>
                      <p className="text-lg font-semibold text-white">₹1,240.50</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-5 grid gap-3 md:grid-cols-2 lg:grid-cols-3">
                {[
                  { label: "Transaction History", icon: Clock4 },
                  { label: "Saved Cards", icon: CreditCard },
                  { label: "Offers", icon: Gift },
                  { label: "Settings", icon: Gauge },
                  { label: "Help & Support", icon: HelpCircle },
                  { label: "Logout", icon: AlertTriangle, danger: true },
                ].map(({ label, icon: Icon, danger }) => (
                  <button
                    key={label}
                    className={`flex items-center justify-between rounded-xl border px-3 py-3 text-sm font-semibold shadow-sm transition ${
                      danger
                        ? "border-rose-100 bg-rose-50 text-rose-700 hover:border-rose-200 hover:bg-rose-100"
                        : "border-slate-200 bg-slate-50 text-slate-800 hover:border-blue-100 hover:bg-blue-50"
                    }`}
                  >
                    <span className="flex items-center gap-2">
                      <span
                        className={`flex h-9 w-9 items-center justify-center rounded-full ${
                          danger ? "bg-rose-100 text-rose-700" : "bg-white text-slate-700"
                        } shadow-inner shadow-slate-100`}
                      >
                        <Icon size={16} />
                      </span>
                      {label}
                    </span>
                    <ArrowRight size={16} className="text-slate-400" />
                  </button>
            ))}
          </div>
            </section>
        </main>
        </div>
      </div>
    </div>
  );
}
