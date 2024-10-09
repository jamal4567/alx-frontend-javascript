interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
  }
  
  const student1: Student = {
    firstName: "John",
    lastName: "Doe",
    age: 20,
    location: "New York",
  };
  
  const student2: Student = {
    firstName: "Jane",
    lastName: "Smith",
    age: 22,
    location: "London",
  };
  
  const studentsList: Student[] = [student1, student2];
  

  const table = document.createElement("table");
  studentsList.forEach((student) => {
    const row = table.insertRow();
    row.insertCell(0).textContent = student.firstName;
    row.insertCell(1).textContent = student.location;
  });
  document.body.appendChild(table);
  