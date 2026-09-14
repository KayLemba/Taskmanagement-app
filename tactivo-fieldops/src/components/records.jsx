'use client';
export function Empty({ text }) { return <div className="empty-state">{text}</div>; }
export function List({ headers, children }) { return <div className="record-list"><div className="list-head">{headers.map((header) => <span key={header}>{header}</span>)}</div>{children}</div>; }
export function Actions({ editable, edit, remove, extra }) { return <div className="actions">{extra}{editable && <button onClick={edit}>Edit</button>}{editable && <button className="delete" onClick={remove}>Delete</button>}</div>; }
export function Input({ label, value = '', set, name, type = 'text', required, wide }) { return <label className={wide ? 'wide' : ''}>{label}<input type={type} value={value} onChange={(event) => set(name, event.target.value)} required={required} /></label>; }
export function TextArea({ label, value = '', set, name, wide }) { return <label className={wide ? 'wide' : ''}>{label}<textarea value={value} onChange={(event) => set(name, event.target.value)} rows="5" /></label>; }
export function Select({ label, value, set, name, children }) { return <label>{label}<select value={value} onChange={(event) => set(name, event.target.value)}>{children}</select></label>; }
