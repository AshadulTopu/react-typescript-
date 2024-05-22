// import User from "./components/User";
// import Button from "./components/Button";
// import Students from "./components/Students";
// import Style from "./components/Style";
// import StateHook from "./components/StateHook";
import Event from "./components/Event";

// const user = {
//   name: "Ashadul",
//   age: 25,
//   passed: true,
//   subjects: ["Maths", "Science", "English"],
//   // subjects: [
//   //   { name: "Maths", marks: 80 },
//   //   { name: "Science", marks: 70 },
//   //   { name: "English", marks: 90 },
//   // ],
// };

// const studentList = [
//   {
//     name: "Ashadul",
//     age: 25,
//     passed: true,
//     subjects: ["Maths", "Science", "English"],
//   },
//   {
//     name: "Tammi",
//     age: 25,
//     passed: true,
//     subjects: ["Maths", "Science", "English"],
//   },
// ];

export default function App() {
  return (
    <div>
      <h1>Learning Typescript with React</h1>

      {/* build in types  */}
      {/* <User name="Ashadul" age={25} /> */}

      {/* user defined types */}
      {/* <Students
        name="Ashadul"
        age={25}
        passed={true}
        subjects={["Maths", "Science", "English"]}
      /> */}
      {/* <Students
        name="Ashadul"
        age={25}
        passed={true}
        subjects={[
          { name: "Maths", marks: 80 },
          { name: "Science", marks: 70 },
          { name: "English", marks: 90 },
        ]}
      /> */}

      {/* <Students user={user} /> */}
      {/* <Students students={studentList} /> */}

      {/* children component */}
      {/* <Button>
        <span>Click me</span>
      </Button> */}

      {/* style props  */}
      {/* <Style
        h1Style={{ color: "red", textDecoration: "underline" }}
        pStyle={{
          color: "green",
          fontSize: "30px",
        }}
        pStyle2={{ color: "blue", fontWeight: "bold" }}
      /> */}

      {/* hook typescript  */}
      {/* <StateHook /> */}

      {/* Typing Event */}
      <Event />
    </div>
  );
}
