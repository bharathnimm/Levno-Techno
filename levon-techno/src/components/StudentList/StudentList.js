import React from 'react';

function StudentList() {
  // Example static data; replace with actual data fetching logic
  const students = [
    { id: 1, name: 'John Doe' },
    { id: 2, name: 'Jane Smith' }
  ];

  return (
    <div className="student-list-container">
      <h2>Student List</h2>
      <ul>
        {students.map(student => (
          <li key={student.id}>{student.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default StudentList;
