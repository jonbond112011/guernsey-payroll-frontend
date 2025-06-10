import React from 'react';
function PayrollRun() {
  const runPayroll = () => {
    fetch('/api/payrolls/run', { method: 'POST' })
      .then(res => res.json())
      .then(() => alert('Payroll run complete'));
  };
  return (
    <div className="p-8">
      <h2 className="text-xl font-semibold mb-4">Run Payroll</h2>
      <button onClick={runPayroll} className="bg-green-600 text-white px-4 py-2 rounded">Run Payroll Now</button>
    </div>
  );
}
export default PayrollRun;
