'use client';
export default function Dashboard(props) {
  return props.children || <section className="page-heading"><small>FIELDOPS</small><h1>Dashboard</h1><p>FieldOps workspace.</p></section>;
}
