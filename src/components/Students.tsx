// build in types -> string | number | boolean | null | undefined | symbol
// user defined types -> object | array | function | class | interface | type alias | enum | tuple | any | custom types

// method 01
// array string
// type StudentProps = {
//   name: string;
//   age: number;
//   passed: boolean;
//   subjects: string[];
// };
// export default function Students({
//   name,
//   age,
//   passed,
//   subjects,
// }: StudentProps) {
//   return (
//     <div>
//       <h1>
//         Hello, {name}, you are {age} years old. You{" "}
//         {passed ? (
//           <span style={{ color: "green" }}>have passed</span>
//         ) : (
//           <span style={{ color: "red" }}>are failed</span>
//         )}{" "}
//         the exam and your subjects are :
//       </h1>

//       <ul>
//         {subjects.map((subject) => (
//           <li key={subject} style={{ fontSize: "30px" }}>
//             {subject}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// method 02
// array object
// type StudentProps = {
//   name: string;
//   age: number;
//   passed: boolean;
//   subjects: {
//     name: string;
//     marks: number;
//   }[];
// };

// export default function Students({
//   name,
//   age,
//   passed,
//   subjects,
// }: StudentProps) {
//   return (
//     <div>
//       <h1>
//         Hello, {name}, you are {age} years old. You{" "}
//         {passed ? (
//           <span style={{ color: passed ? "green" : "red" }}>have passed</span>
//         ) : (
//           <span style={{ color: passed ? "green" : "red" }}>are failed</span>
//         )}{" "}
//         the exam and your subjects are :
//       </h1>

//       <ul>
//         {subjects.map((subject, index) => (
//           <li key={index} style={{ fontSize: "30px" }}>
//             {subject.name} - {subject.marks}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// method 03
// object in side array
// type StudentProps = {
//   user: {
//     name: string;
//     age: number;
//     passed: boolean;
//     subjects: string[];
//     // subjects: {
//     //   name: string;
//     //   marks: number;
//     // }[];
//   };
// };

// export default function Students({
//   user: { name, age, passed, subjects },
// }: StudentProps) {
//   return (
//     <div>
//       <h1>
//         Hello, {name}, you are {age} years old. You{" "}
//         {passed ? (
//           <span style={{ color: "green" }}>have passed</span>
//         ) : (
//           <span style={{ color: "red" }}>are failed</span>
//         )}{" "}
//         the exam and your subjects are :
//       </h1>

//       <ul>
//         {subjects.map((subject, index) => (
//           <li key={index} style={{ fontSize: "30px" }}>
//             {subject}
//             {/* {subject.name} - {subject.marks} */}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// method 04
// object array
type StudentProps = {
  students: {
    name: string;
    age: number;
    passed: boolean;
    subjects: string[];
  }[];
};

export default function Students({ students }: StudentProps) {
  //   console.log(students);
//   students.map((student) => console.log(student));

  return (
    <div>
      {students.map((student, index) => (
        <div key={index}>
          <h1>
            Hello, {student.name}, you are {student.age} years old. You{" "}
            {student.passed ? (
              <span style={{ color: "green" }}>have passed</span>
            ) : (
              <span style={{ color: "red" }}>are failed</span>
            )}{" "}
            the exam and your subjects are :
          </h1>

          <ul>
            {student.subjects.map((subject, index) => (
              <li key={index} style={{ fontSize: "30px" }}>
                {subject}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
