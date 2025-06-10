import React, { useEffect, useState } from 'react';
function Employees() {
  const [employees, setEmployees] = useState([]);
  useEffect(() => {
    fetch('/api/employers/1/employees')
      .then(res => res.json())
      .then(data => setEmployees(data));
  }, []);
  return (
    <div className="p-8">
      <h2 className="text-xl font-semibold mb-4">Employees</h2>
      <ul className="space-y-1">
        {employees.map(e => (
          <li key={e.id} className="border p-2 rounded">
            {e.name} ({e.nin}) - £{e.gross_salary}
          </li>
        ))}
      </ul>
    </div>
  );
}
export default Employees;
