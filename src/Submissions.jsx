import React from 'react';
function Submissions() {
  const submitReturn = () => {
    fetch('/api/submissions/submit', { method: 'POST' })
      .then(res => res.json())
      .then(() => alert('Return submitted'));
  };
  return (
    <div className="p-8">
      <h2 className="text-xl font-semibold mb-4">Submit Employer Return</h2>
      <button onClick={submitReturn} className="bg-blue-600 text-white px-4 py-2 rounded">Submit to Revenue Service</button>
    </div>
  );
}
export default Submissions;
