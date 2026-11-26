import React from 'react'
import { LayoutDashboard, CreditCard, Users, ChartNoAxesCombined, Settings, CircleHelp, Wallet, X } from 'lucide-react'
const links = [
  { label:'Overview', icon:LayoutDashboard, key:'Dashboard' },
  { label:'Subscriptions', icon:CreditCard, key:'Subscriptions', count:'5' },
  { label:'Shared expenses', icon:Users, key:'Shared expenses' },
  { label:'Reports', icon:ChartNoAxesCombined, key:'Reports' },
]
export default function Sidebar({ page, setPage, open, setOpen }) {
  return <><div className={`${open?'fixed inset-0 z-30 bg-slate-950/30':'hidden'} lg:hidden`} onClick={()=>setOpen(false)} />
    <aside className={`${open?'fixed z-40':'hidden'} inset-y-0 left-0 flex w-64 flex-col border-r border-line bg-white px-5 py-6 lg:static lg:flex`}>
      <div className="mb-10 flex items-center justify-between px-1"><div className="flex items-center gap-2.5"><span className="grid h-9 w-9 place-items-center rounded-xl bg-brand text-white"><Wallet size={19}/></span><span className="font-display text-xl font-extrabold tracking-tight text-ink">subtrack<span className="text-brand">.</span></span></div><button className="lg:hidden" onClick={()=>setOpen(false)}><X size={18}/></button></div>
      <p className="mb-3 px-3 text-[10px] font-extrabold uppercase tracking-[.16em] text-slate-400">Workspace</p>
      <nav className="space-y-1">{links.map(({label,icon:Icon,key,count})=><button key={key} onClick={()=>{setPage(key);setOpen(false)}} className={`flex w-full items-center gap-3 rounded-xl px-3 py-3 text-left text-sm font-semibold transition ${page===key?'bg-indigo-50 text-brand':'text-slate-500 hover:bg-slate-50 hover:text-ink'}`}><Icon size={18}/><span className="flex-1">{label}</span>{count&&<span className="rounded-md bg-white px-2 py-0.5 text-[10px] text-slate-500">{count}</span>}</button>)}</nav>
      <div className="mt-9"><p className="mb-3 px-3 text-[10px] font-extrabold uppercase tracking-[.16em] text-slate-400">Preferences</p><button onClick={()=>setPage('Settings')} className={`flex w-full items-center gap-3 rounded-xl px-3 py-3 text-sm font-semibold ${page==='Settings'?'bg-indigo-50 text-brand':'text-slate-500 hover:bg-slate-50'}`}><Settings size={18}/>Settings</button></div>
      <div className="mt-auto rounded-2xl bg-[#f5f6ff] p-4"><div className="mb-2 flex h-8 w-8 items-center justify-center rounded-lg bg-white text-brand"><CircleHelp size={17}/></div><p className="text-sm font-bold text-ink">Need a hand?</p><p className="mt-1 text-xs leading-5 text-muted">Keep your spending organized with SubTrack.</p><button className="mt-3 text-xs font-bold text-brand">Explore tips ↗</button></div>
      <div className="mt-5 flex items-center gap-3 border-t border-line pt-5"><div className="grid h-9 w-9 place-items-center rounded-full bg-[#e8eaff] text-xs font-bold text-brand">DR</div><div className="min-w-0 flex-1"><p className="truncate text-sm font-bold text-ink">Dharshini R S</p><p className="text-xs text-muted">Personal workspace</p></div><span className="h-2 w-2 rounded-full bg-emerald-400"/></div>
    </aside></>
}