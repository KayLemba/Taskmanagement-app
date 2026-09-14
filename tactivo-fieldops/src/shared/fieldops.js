// Shared FieldOps constants and small utilities used by the shell and screens.
export const NAV_ITEMS = [
  ['dashboard', 'Dashboard'], ['tasks', 'Tasks'], ['requests', 'Requests'],
  ['work', 'Work orders'], ['sites', 'Sites'], ['assets', 'Assets'],
  ['checklists', 'Checklists'], ['profiles', 'Technician profiles'], ['team', 'Team'],
];
export const ROLE_LABELS = { admin: 'Admin', supervisor: 'Supervisor', technician: 'Field Technician', requestor: 'Requestor', viewer: 'Viewer' };
export const initials = (name = '') => name.split(' ').filter(Boolean).slice(0, 2).map((part) => part[0]).join('').toUpperCase() || 'TU';
export const statusTone = (status = '') => ({ Open: 'red', Triaged: 'amber', Assigned: 'purple', Scheduled: 'purple', 'In progress': 'blue', Completed: 'green', Active: 'green', Attention: 'amber', Offline: 'red' })[status] || 'gray';
export const now = () => new Date().toISOString();
