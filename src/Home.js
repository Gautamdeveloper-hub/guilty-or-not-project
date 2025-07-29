// import React, { useState } from "react";
// import { motion } from "framer-motion";
// import "./App.css";

// function CommentCard({ user, submittedValue, time, comment }) {
//   const isDefense = submittedValue === 'defense';

//   return (
//     <motion.div
//       className="comment-card"
//       initial={{ opacity: 0, y: 20 }}
//       animate={{ opacity: 1, y: 0 }}
//     >
//       <div className="comment-header">
//         <span>{user}</span>
//         <span className="comment-time">{time}</span>
//       </div>
//       <div className={`stance-tag ${isDefense ? 'defense' : 'offense'}`}>
//         {isDefense ? 'DEFENSE' : 'OFFENSE'}
//       </div>
//       <p>{comment}</p>
//     </motion.div>
//   );
// }

// function App() {
//   const [value, setValue] = useState("");
//   const [submittedValue, setSubmittedValue] = useState("");
//   const [stance, setStance] = useState("defense");

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setSubmittedValue(value);
//   };

//   return (
//     <div className="container">
//       <a href="/" className="back-button">← Back to Home</a>

//       <div className="explanation-box">
//         <h4>Is Group Work Just Free Labor?</h4>
//         <p>Group projects are exhausting, and most of the time, one person does all the work while everyone else slacks.</p>

//         <form onSubmit={handleSubmit}>
//           <label htmlFor="stance">Your Argument:</label>
//           <textarea
//             id="stance"
//             placeholder="Type your argument here..."
//             value={value}
//             onChange={(e) => setValue(e.target.value)}
//             className="styled-input"
//           />

//           <div className="radio-section">
//             <label>
//               <input
//                 type="radio"
//                 name="stance"
//                 value="defense"
//                 checked={stance === "defense"}
//                 onChange={() => setStance("defense")}
//               /> Defender
//             </label>

//             <label>
//               <input
//                 type="radio"
//                 name="stance"
//                 value="offense"
//                 checked={stance === "offense"}
//                 onChange={() => setStance("offense")}
//               /> Offense
//             </label>
//           </div>

//           <button className="button" type="submit">
//             Post Argument
//           </button>
//         </form>
//       </div>

//       <div className="demo-section">
//         {submittedValue && (
//           <CommentCard
//             user="Anonymous"
//             time="Just Now"
//             submittedValue={stance}
//             comment={submittedValue}
//           />
//         )}
//       </div>
//     </div>
//   );
// }

// export default App;
