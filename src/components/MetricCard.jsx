import React from 'react'
import { ArrowUpRight, ArrowDownRight } from 'lucide-react'
import { Card } from './ui'
export default function MetricCard({ label, value, change, positive=true, icon:Icon, tint='indigo', note }) {
 const tints={indigo:'bg-indigo-50 text-indigo-600',teal:'bg-teal-50 text-teal-600',amber:'bg-amber-50 text-amber-600',rose:'bg-rose-50 text-rose-600'}
 return <Card className="p-5"><div className="flex items-start justify-between"><div><p className="text-sm font-semibold text-muted">{label}</p><p className="mt-3 font-display text-[27px] font-extrabold tracking-tight text-ink">{value}</p></div><span className={`grid h-10 w-10 place-items-center rounded-xl ${tints[tint]}`}><Icon size={19}/></span></div><div className="mt-3 flex items-center gap-1.5 text-xs"><span className={`inline-flex items-center gap-0.5 font-bold ${positive?'text-emerald-600':'text-rose-600'}`}>{positive?<ArrowUpRight size={14}/>:<ArrowDownRight size={14}/>} {change}</span><span className="text-muted">{note}</span></div></Card>
}