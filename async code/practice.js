async function welcome() {
  console.log("Welcome!");

  await new Promise((resolve) => setTimeout(resolve, 3000));

  console.log("Welcome to SmartAttend!");
}

welcome();

async function getStudent() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users/1");

  const data = await response.json();

  console.log(data.name);
}

getStudent();

async function checkStudent() {
  try {
    const response = await fetch("https://invalid.example.com/student");

    if (!response.ok) {
      throw new Error("Student not found");
    }

    const data = await response.json();

    console.log(data);
  } catch (error) {
    console.log("Error:", error.message);
  }
}

checkStudent();

async function registerStudent(name, rollNo) {
  console.log("Registering student...");

  await new Promise((resolve) => setTimeout(resolve, 2000));

  console.log("Student Registered Successfully!");

  console.log("Name:", name);
  console.log("Roll No:", rollNo);
}

registerStudent("Rahul Patel", 101);

async function markAttendance(name, status) {
  console.log("Updating attendance...");

  await new Promise((resolve) => setTimeout(resolve, 1500));

  console.log("Student:", name);
  console.log("Status:", status);

  console.log("Attendance Updated!");
}

markAttendance("Priya Shah", "Present");

async function loadStudents() {
  const students = ["Rahul", "Priya", "Amit", "Neha"];

  const results = await Promise.all(
    students.map(async (name) => {
      await new Promise((resolve) => setTimeout(resolve, 1000));

      return name;
    }),
  );

  console.log(results);
}

loadStudents();

async function scanQR() {
  console.log("Scanning QR Code...");

  await new Promise((resolve) => setTimeout(resolve, 2000));

  const student = {
    id: 101,
    name: "Rahul Patel",
    class: "10th",
  };

  console.log("Student Found!");
  console.log(student);
}

scanQR();

async function sendNotification(parentNumber) {
  console.log("Sending notification...");

  await new Promise((resolve) => setTimeout(resolve, 2000));

  console.log("Notification request completed for:", parentNumber);
}

sendNotification("9876543210");
