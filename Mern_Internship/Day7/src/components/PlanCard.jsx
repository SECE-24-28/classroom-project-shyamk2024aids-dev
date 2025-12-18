import React from "react";
import { ArrowRight, Sparkles } from "lucide-react";

export default function PlanCard({ price, data, validity, description, bestFor, popular, extras = [] }) {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white px-4 py-5 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
      {popular && (
        <span className="absolute right-3 top-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 px-3 py-1 text-xs font-semibold text-white shadow">
          Popular
        </span>
      )}

      <div className="flex items-baseline gap-2">
        <h2 className="text-3xl font-bold text-slate-900">₹{price}</h2>
        <span className="text-xs text-slate-500">inc. taxes</span>
      </div>
      <p className="mt-1 text-sm text-blue-600 font-semibold">{data}</p>
      <p className="text-xs text-slate-500">{validity}</p>
      <p className="mt-3 text-sm text-slate-700">{description}</p>

      {extras.length > 0 && (
        <div className="mt-3 flex flex-wrap gap-2">
          {extras.map((item) => (
            <span
              key={item}
              className="inline-flex items-center gap-1 rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700"
            >
              <Sparkles size={14} className="text-amber-500" />
              {item}
            </span>
          ))}
        </div>
      )}

      <div className="mt-4 flex items-center justify-between text-xs text-slate-500">
        <span className="rounded-full bg-blue-50 px-3 py-1 text-blue-700">Best for {bestFor}</span>
        <span className="text-emerald-500">Instant cashback</span>
      </div>

      <button className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 px-4 py-2.5 text-sm font-semibold text-white shadow-md transition hover:shadow-lg">
        Recharge Now
        <ArrowRight size={16} />
      </button>
    </div>
  );
}
