import React from 'react'
import { ArrowUpRight, CheckCircle2, Clock3, Trash2 } from 'lucide-react'
import { Avatar, Badge, Button } from './ui'
import { money } from '../lib/utils'
export default function ExpenseList({ expenses, onDelete, compact=false }) {
 const rows=compact?expenses.slice(0,3):expenses
 return <div className="divide-y divide-slate-100">{rows.map(e=>{const share=e.amount/e.people.length;return <div key={e.id} className="flex items-center gap-3 px-5 py-4"><div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-[#f1f3ff] text-brand"><ArrowUpRight size={18}/></div><div className="min-w-0 flex-1"><p className="truncate text-sm font-bold text-ink">{e.title}</p><p className="mt-1 text-xs text-muted">{e.paidBy} paid · {e.people.length} people · {new Date(e.date+'T00:00:00').toLocaleDateString('en-IN',{day:'numeric',month:'short'})}</p></div><div className="text-right"><p className="text-sm font-bold text-ink">{money(e.amount)}</p><p className="mt-1 text-[11px] text-muted">{money(share)} / person</p></div><div className="hidden sm:block">{e.settled?<Badge tone="green">Settled</Badge>:<Badge tone="amber">Pending</Badge>}</div>{!compact&&<Button variant="ghost" size="icon" onClick={()=>onDelete(e.id)}><Trash2 size={14}/></Button>}</div>})}{rows.length===0&&<p className="p-8 text-center text-sm text-muted">No shared expenses yet.</p>}</div>
}