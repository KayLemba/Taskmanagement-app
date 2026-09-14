'use client';
import { NAV_ITEMS } from '../shared/fieldops';
export default function Sidebar({ view, onNavigate, collapsed = false }) {
  return <aside className={`sidepanel ${collapsed ? 'collapsed' : ''}`} aria-label="Primary navigation"><div className="nav-brand">Tactivo <span>FieldOps</span></div><nav>{NAV_ITEMS.map(([id, label]) => <button key={id} className={view === id ? 'active' : ''} onClick={() => onNavigate(id)}>{label}</button>)}</nav></aside>;
}
