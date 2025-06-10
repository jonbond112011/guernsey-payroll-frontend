import React from 'react';
import { Link } from 'react-router-dom';
function Dashboard() {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
      <ul className="space-y-2">
        <li><Link to="/employees" className="text-blue-600 underline">Manage Employees</Link></li>
        <li><Link to="/add-employee" className="text-blue-600 underline">Add Employee</Link></li>
        <li><Link to="/payroll" className="text-blue-600 underline">Run Payroll</Link></li>
        <li><Link to="/payslips" className="text-blue-600 underline">View Payslips</Link></li>
        <li><Link to="/submissions" className="text-blue-600 underline">Submit Return</Link></li>
      </ul>
    </div>
  );
}
export default Dashboard;
