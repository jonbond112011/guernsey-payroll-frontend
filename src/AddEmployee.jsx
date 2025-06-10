import React, { useState } from 'react';
function AddEmployee() {
  const [form, setForm] = useState({ name: '', nin: '', gross_salary: '', start_date: '' });
  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = e => {
    e.preventDefault();
    fetch('/api/employers/1/employees', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form)
    }).then(res => res.ok && alert('Employee added!'));
  };
  return (
    <div className="p-8">
      <h2 className="text-xl font-semibold mb-4">Add Employee</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input name="name" placeholder="Name" onChange={handleChange} className="border p-2 w-full" required />
        <input name="nin" placeholder="NIN" onChange={handleChange} className="border p-2 w-full" required />
        <input name="gross_salary" placeholder="Gross Salary" onChange={handleChange} className="border p-2 w-full" required />
        <input name="start_date" type="date" onChange={handleChange} className="border p-2 w-full" required />
        <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded">Add Employee</button>
      </form>
    </div>
  );
}
export default AddEmployee;
