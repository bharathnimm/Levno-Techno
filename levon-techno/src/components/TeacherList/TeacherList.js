import React from 'react';

function TeacherList() {
  // Example static data; replace with actual data fetching logic
  const teachers = [
    { id: 1, name: 'Mr. Johnson' },
    { id: 2, name: 'Ms. Lee' }
  ];

  return (
    <div className="teacher-list-container">
      <h2>Teacher List</h2>
      <ul>
        {teachers.map(teacher => (
          <li key={teacher.id}>{teacher.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default TeacherList;
