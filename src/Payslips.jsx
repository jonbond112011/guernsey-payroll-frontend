import React, { useEffect, useState } from 'react';
function Payslips() {
  const [payrolls, setPayrolls] = useState([]);
  useEffect(() => {
    fetch('/api/payrolls/1')
      .then(res => res.json())
      .then(data => setPayrolls(data));
  }, []);
  return (
    <div className="p-8">
      <h2 className="text-xl font-semibold mb-4">Payslips</h2>
      <ul className="space-y-2">
        {payrolls.map(p => (
          <li key={p.id} className="border p-2 rounded">
            {p.month}/{p.year}: £{p.net} net
          </li>
        ))}
      </ul>
    </div>
  );
}
export default Payslips;
