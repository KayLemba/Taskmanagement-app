'use client';
export default function Header({ title = 'FieldOps', user, onSignOut, onMenu }) {
  return <header className="topbar"><button className="nav-collapse" onClick={onMenu} aria-label="Toggle navigation">☰</button><div><small>TACTIVO TECHNOLOGIES</small><h1>{title}</h1></div><div className="operator"><strong>{user?.name || 'Guest'}</strong><button className="signout" onClick={onSignOut}>Sign out</button></div></header>;
}
