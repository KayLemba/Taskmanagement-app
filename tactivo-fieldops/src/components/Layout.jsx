'use client';
import Sidebar from './Sidebar';
import Header from './Header';
export default function Layout({ children, view, onNavigate, user, onSignOut, collapsed, onMenu, title }) {
  return <div className={`fieldops-shell ${collapsed ? 'nav-is-collapsed' : ''}`}><Sidebar view={view} onNavigate={onNavigate} collapsed={collapsed} /><div className="workspace"><Header title={title} user={user} onSignOut={onSignOut} onMenu={onMenu} /><main className="content">{children}</main></div></div>;
}
