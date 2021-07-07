// import React, { useState } from "react";
// import "./Accordine.css";

// const Form = () => {
//   const [name, setName] = useState("");
//   const [lastName, setLastName] = useState("");
//   const [fullName, setFullName] = useState();
//   const [lastNameNew, setLastNameNew] = useState("");
//   const onSubmit = (e) => {
//     e.preventDefault();
//     setFullName(name);
//     setLastNameNew(lastName);
//   };
//   const inputEvent = (e) => {
//     setName(e.target.value);
//   };
//   const inputEventTwo = (e) => {
//     setLastName(e.target.value);
//   };
//   return (
//     <>
//       <form onSubmit={onSubmit}>
//         <div className="div">
//           <h1>
//             Hello {fullName} {lastNameNew}
//           </h1>
//           <input
//             type="text"
//             id="form"
//             placeholder="Enter fist Name"
//             onChange={inputEvent}
//           />
//           <input
//             type="text"
//             id="form"
//             placeholder="Enter last Name"
//             onChange={inputEventTwo}
//           />

//           <br />
//           <button type="submit">Click Me😎</button>
//         </div>
//       </form>
//     </>
//   );
// };

// export default Form;

// more shorcut and simple approach
import React, { useState } from "react";
import "./Accordine.css";

const Form = () => {
  const [fullName, setFullName] = useState({
    fName: "",
    lName: "",
    email: "",
    mobilePhone: "",
  });

  const onSubmit = (e) => {
    e.preventDefault();
    alert("your form has been submitted successfully");
  };
  const inputEvent = (e) => {
    // let value = e.target.value;
    // let name = e.target.name;
    const { name, value } = e.target;

    setFullName((prevVal) => {
      // simple form
      return {
        ...prevVal,
        [name]: value,
      };
      //   if (name === "fName") {
      //     return {
      //       fName: value,
      //       lName: prevVal.lName,
      //       email: prevVal.email,
      //     };
      //   } else if (name === "lName") {
      //     return {
      //       fName: prevVal.fName,
      //       lName: value,
      //       email: prevVal.email,
      //     };
      //   } else if (name === "email") {
      //     return {
      //       fName: prevVal.fName,
      //       lName: prevVal.lName,
      //       email: value,
      //     };
      //   } else if (name === "email") {
      //     return {
      //       fName: prevVal.fName,
      //       lName: prevVal.lName,
      //       email: prevVal.email,
      //     };
      //   }
    });
  };

  return (
    <>
      <form onSubmit={onSubmit}>
        <div className="div">
          <h1>
            Hello {fullName.fName} {fullName.lName}
          </h1>
          <p>
            {fullName.email}
            <br />
            {fullName.mobilePhone}
          </p>
          <input
            name="fName"
            type="text"
            placeholder="Enter fist Name"
            onChange={inputEvent}
          />
          <input
            name="lName"
            type="text"
            placeholder="Enter last Name"
            onChange={inputEvent}
          />
          <input
            name="mobilePhone"
            type="text"
            placeholder="Enter your mobilePhone"
            onChange={inputEvent}
          />

          <input
            name="email"
            type="text"
            placeholder="Enter your Email"
            onChange={inputEvent}
          />

          <br />
          <button type="submit">Click Me😎</button>
        </div>
      </form>
    </>
  );
};

export default Form;
