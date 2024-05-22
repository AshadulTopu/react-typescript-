// build in types -> string | number | boolean | null | undefined | symbol
// user defined types -> object | array | function | class | interface | type alias | enum | tuple | any | custom types

// // method 01
// // basic way to pass props in react typescript
// export default function User(props: { name: string; age: number }) {
//   return (
//     <div>
//       <h1>
//         Hello, {props.name}, you are {props.age} years old
//       </h1>
//     </div>
//   );
// }

// // method 02
// // passing props in react typescript using type alias
// type UserProps = {
//   name: string;
//   age: number;
// };
// export default function User(props: UserProps) {
//   return (
//     <div>
//       <h1>
//         Hello, {props.name}, you are {props.age} years old
//       </h1>
//     </div>
//   );
// }

// // method 03
// // passing props in react typescript using destructuring
// export default function User({ name, age }: { name: string; age: number }) {
//   return (
//     <div>
//       <h1>
//         Hello, {name}, you are {age} years old
//       </h1>
//     </div>
//   );
// }

// // method 04
// // passing props in react typescript using destructuring
type UserProps = {
  name: string;
  age: number;
};
export default function User({ name, age }: UserProps) {
  return (
    <div>
      <h1>
        Hello, {name}, you are {age} years old
      </h1>
    </div>
  );
}
