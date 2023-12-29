// import React, { useEffect, useState } from "react";

// function Login() {

//   const [form, setForm] = useState({});


//   const handleForm =(e) =>{
//     setForm({
//       ...form,
//       [e.target.name] : e.target.value, 
//     })
//   }

//   const handleSubmit = async(e) =>{
//     e.preventDefault();
//     const response = await fetch('http://localhost:8080/demoA',{
//       method:'POST',
//       body:JSON.stringify(form),
//       headers: {
//         accept: 'application/json',
//       },
//     })
//     const data = await response.json();
//     console.log(data);

//   }

//   const getUsers = async ()=>{
//     const response = await fetch('http://localhost:8080/demoA',{
//       method:'GET',
//     })
//     const data = await response.json();
//     console.log(data);
//   }

//   useEffect(()=>{
//     getUsers(); 
//   },[])

//   return (
//     <>
//       <div>
//         <form onSubmit={handleSubmit }>
//           <div className="Inp">
//             <label>First name</label>
//             <input
//               type="text"
//               className="form-cont"
//               name="fname"
//               placeholder="First name"
//               onChange={handleForm}
//             />
//           </div>
//           <div className="Inp">
//             <label>Last name</label>
//             <input
//               type="text"
//               className="form-cont"
//               name="lname"
//               placeholder="Last name"
//               onChange={handleForm}
//             />
//           </div>
//           <div className="Inp">
//             <label>Email</label>
//             <input
//               type="email"
//               className="form-cont"
//               name="email"
//               placeholder="Enter email"
//               onChange={handleForm}
//             />
//           </div>
//           <div className="Inp">
//             <label>Password</label>
//             <input
//               type="password"
//               className="form-cont"
//               name="password"
//               placeholder="Enter password"
//               onChange={handleForm}
//             />
//           </div>
//           <input type="submit"></input>
//         </form>
//       </div>
//     </>
//   );
// }

// export default Login;
