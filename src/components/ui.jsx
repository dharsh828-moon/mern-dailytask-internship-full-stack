import React from 'react'
import * as Dialog from '@radix-ui/react-dialog'
import { X } from 'lucide-react'
import { cn } from '../lib/utils'

export function Button({ children, variant='primary', size='md', className='', ...props }) {
  const variants = { primary:'bg-brand text-white hover:bg-indigo-700 shadow-sm', secondary:'bg-white text-ink border border-line hover:bg-slate-50', ghost:'text-muted hover:bg-slate-100 hover:text-ink', danger:'bg-rose-50 text-rose-600 hover:bg-rose-100' }
  const sizes = { sm:'h-8 px-3 text-xs', md:'h-10 px-4 text-sm', icon:'h-9 w-9' }
  return <button className={cn('inline-flex items-center justify-center gap-2 rounded-xl font-semibold transition disabled:opacity-50', variants[variant], sizes[size], className)} {...props}>{children}</button>
}
export function Card({ children, className='' }) { return <section className={cn('rounded-2xl border border-line bg-white shadow-soft', className)}>{children}</section> }
export function Badge({ children, tone='slate' }) {
  const tones = { slate:'bg-slate-100 text-slate-600', green:'bg-emerald-50 text-emerald-700', amber:'bg-amber-50 text-amber-700', blue:'bg-indigo-50 text-indigo-700', rose:'bg-rose-50 text-rose-700' }
  return <span className={cn('inline-flex items-center rounded-full px-2.5 py-1 text-[11px] font-bold', tones[tone])}>{children}</span>
}
export function Avatar({ name, color='#5967d8', small=false }) { return <span style={{background:color}} className={cn('inline-flex shrink-0 items-center justify-center rounded-full font-bold text-white', small?'h-7 w-7 text-[10px]':'h-9 w-9 text-xs')}>{name?.split(' ').map(x=>x[0]).join('').slice(0,2).toUpperCase()}</span> }
export function Modal({ open, onOpenChange, title, description, children }) {
  return <Dialog.Root open={open} onOpenChange={onOpenChange}><Dialog.Portal>
    <Dialog.Overlay className="fixed inset-0 z-40 bg-slate-950/35 backdrop-blur-[2px]" />
    <Dialog.Content className="fixed left-1/2 top-1/2 z-50 max-h-[90vh] w-[calc(100%-28px)] max-w-lg -translate-x-1/2 -translate-y-1/2 overflow-y-auto rounded-2xl border border-line bg-white p-6 shadow-2xl">
      <div className="mb-5 flex items-start justify-between gap-4"><div><Dialog.Title className="font-display text-xl font-extrabold text-ink">{title}</Dialog.Title>{description && <Dialog.Description className="mt-1 text-sm text-muted">{description}</Dialog.Description>}</div><Dialog.Close asChild><button className="rounded-lg p-1.5 text-muted hover:bg-slate-100"><X size={18}/></button></Dialog.Close></div>
      {children}
    </Dialog.Content>
  </Dialog.Portal></Dialog.Root>
}
export function Field({ label, children }) { return <label className="grid gap-1.5 text-sm font-semibold text-slate-700">{label}{children}</label> }
export const inputClass = 'h-10 w-full rounded-xl border border-line bg-white px-3 text-sm font-normal text-ink outline-none transition placeholder:text-slate-400 focus:border-brand focus:ring-4 focus:ring-indigo-50'
