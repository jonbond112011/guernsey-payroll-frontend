import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from './Dashboard';
import Employees from './Employees';
import AddEmployee from './AddEmployee';
import PayrollRun from './PayrollRun';
import Payslips from './Payslips';
import Submissions from './Submissions';

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/employees" element={<Employees />} />
      <Route path="/add-employee" element={<AddEmployee />} />
      <Route path="/payroll" element={<PayrollRun />} />
      <Route path="/payslips" element={<Payslips />} />
      <Route path="/submissions" element={<Submissions />} />
    </Routes>
  </BrowserRouter>
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
