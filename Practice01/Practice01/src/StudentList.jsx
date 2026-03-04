function StudentList({ students, onDelete }) {
  return (
    <div>
      <h3>Estudiantes Registrados:</h3>

      {students.length === 0 && <p>No hay estudiantes registrados.</p>}

      <ul>
        {students.map((student) => (
          <li key={student.code}>
            {student.name} - {student.age} years - Code: {student.code}
            <button onClick={() => onDelete(student.code)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default StudentList;