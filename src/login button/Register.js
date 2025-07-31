import { useState } from 'react';
import './App.css';
 
function Register (){
  const [value, setValue] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChanges = (e) => {
    setValue({ ...value, [e.target.name]: e.target.value });
    localStorage.setItem("user", JSON.stringify(value))  /* JSON.stringify(value)== to convert object to string*/
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted", value);
  };

  return (
    <div className="container">
      <div className="first">
        <h1>Create An Account</h1>
        <form onSubmit={handleSubmit}>
          <div className="Name">
            <input
              name="name"
              type="text"
              placeholder="Enter your name"
              value={value.name}
              onChange={handleChanges}
            />
            <label htmlFor="name">Your Name</label>
          </div>

          <div className="mail">
            <input
              name="email"
              type="text"
              placeholder="Enter your email"
              value={value.email}
              onChange={handleChanges}
            />
            <label htmlFor="email">Your Email</label>
          </div>

          <div className="password">
            <input
              name="password"
              type="password"
              placeholder="Enter your password"
              value={value.password}
              onChange={handleChanges}
            />
            <label htmlFor="password">Password</label>
          </div>

          <button className="btn" type="submit">Register</button>

        </form>
        <p>have you alraedy an account? <a href="/">Login here</a></p>
      </div>
    </div>
  );
}

export default Register;
// //body {
//   margin: 0;
//   font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
//   background-color: #f4f4f4;
//   color: #333;
// }

// .container {
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   height: 100vh;
// }

// .first {
//   background: white;
//   padding: 2rem 3rem;
//   border-radius: 12px;
//   box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
//   width: 100%;
//   max-width: 400px;
//   box-sizing: border-box;
// }

// h1 {
//   text-align: center;
//   margin-bottom: 2rem;
//   color: #186b1b;
// }

// .Name,
// .mail,
// .password {
//   /*   yasle name haru diraction milauxa*/
//   display: flex;
//   flex-direction: column;
//   margin-bottom: 0.8rem;
// }


// label {
//   margin-top: 0.5rem;
//   font-size: 14px;
//   color: #130c0c;
// }

// input {
//   padding: 10px 12px;
//   border: 1px solid #ccc;
//   border-radius: 6px;
//   font-size: 16px;
//   transition: border-color 0.3s ease;
// }

// input:focus {
//   border-color: #4CAF50;
//   outline: none;
// }

// .btn {
//   width: 100%;
//   background-color: #4CAF50;
//   color: white;
//   padding: 12px;
//   border: none;
//   border-radius: 8px;
//   font-size: 16px;
//   cursor: pointer;
//   transition: background-color 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease;
// }

// .btn:hover {
//   background-color: #45a049;
//   transform: translateY(-2px) scale(1.03);
//   box-shadow: 0 8px 20px rgba(76, 175, 80, 0.3);
// }

// .btn:active {
//   transform: translateY(1px) scale(0.98);
//   box-shadow: none;
// }*/